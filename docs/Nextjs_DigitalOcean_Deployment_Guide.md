
# 🚀 Next.js Deployment Guide on DigitalOcean (Droplet)

This guide provides a step-by-step process for deploying a **Next.js** application on **DigitalOcean Droplets** from scratch, including setting up the server, configuring domain DNS, installing required packages, setting up **Nginx reverse proxy**, enabling **SSL (HTTPS)** with Let's Encrypt, and using **PM2** for process management.

---

## **1️⃣ Create a DigitalOcean Droplet**

1. Log in to [DigitalOcean](https://www.digitalocean.com/?refcode=525051e9e7a7&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge).
2. Click on **Create → Droplets**.
3. Choose **Ubuntu 22.04 (LTS)** or **Ubuntu 24.04 (LTS)** as the operating system.
4. Select a plan (Minimum **1vCPU & 1GB RAM**, but **2vCPU & 2GB RAM** is recommended for better performance).
5. Choose the **datacenter region** closest to your users.
6. Set up authentication:
   - **SSH Key** (Recommended for secure access)
   - **Password Authentication** (Alternative option)
7. Click **Create Droplet** and wait for provisioning.
8. Copy the **Droplet’s IP Address** for later use.

---

## **2️⃣ Configure Domain DNS Records**
> If you have a domain, you need to point it to your DigitalOcean Droplet.

1. Log in to your **Domain Provider** (e.g., Namecheap, GoDaddy, Cloudflare).
2. Go to the **DNS Settings**.
3. Add the following records:

| Type | Name   | Value (Your Droplet’s IP) |
|------|--------|--------------------------|
| A    | @      | `YOUR_DROPLET_IP`        |
| A    | www    | `YOUR_DROPLET_IP`        |

4. Save changes and wait for DNS propagation (can take a few minutes to hours).

To check if the DNS has propagated, run:

```sh
nslookup yourdomain.com
nslookup www.yourdomain.com
```

---

## **3️⃣ Connect to Your Server via SSH**

Use the following command to connect:

```sh
ssh root@yourdomain.com
```

If using an IP:

```sh
ssh root@YOUR_DROPLET_IP
```

---

## **4️⃣ Update & Install Required Packages**

Run these commands to update and install necessary packages:

```sh
sudo apt update && sudo apt upgrade -y
sudo apt install nginx curl git ufw -y
```

---

## **5️⃣ Set Up UFW Firewall**

Enable the firewall and allow necessary ports:

```sh
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
```

Check status:

```sh
sudo ufw status
```

---

## **6️⃣ Install Node.js and npm**

Install the latest **LTS version** of Node.js:

```sh
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install -y nodejs
```

Verify installation:

```sh
node -v
npm -v
```

---

## **7️⃣ Clone Your Next.js Project from GitHub**

Navigate to `/var/www/`:

```sh
cd /var/www/
```

Clone your repository:

```sh
git clone https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY.git teenytinyweb
cd teenytinyweb
```

Install dependencies:

```sh
npm install
```

Build the Next.js app:

```sh
npm run build
```

---

## **8️⃣ Set Up PM2 for Process Management**

Install PM2:

```sh
npm install -g pm2
```

Start the Next.js app:

```sh
pm2 start npm --name "teenytinyweb" -- start
```

Ensure PM2 starts on reboot:

```sh
pm2 startup
pm2 save
```

Check running processes:

```sh
pm2 list
```

---

## **9️⃣ Configure Nginx as a Reverse Proxy**

Create an Nginx configuration file:

```sh
sudo nano /etc/nginx/sites-available/teenytinyweb
```

Paste the following configuration:

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    return 301 https://www.yourdomain.com$request_uri;
}

server {
    listen 443 ssl;
    server_name www.yourdomain.com;

    ssl_certificate /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Save and exit (`CTRL + X`, then `Y`, then `Enter`).

Create a symbolic link:

```sh
sudo ln -s /etc/nginx/sites-available/teenytinyweb /etc/nginx/sites-enabled/
```

Check configuration:

```sh
sudo nginx -t
```

Restart Nginx:

```sh
sudo systemctl restart nginx
```

---

## **🔟 Secure Site with SSL (HTTPS) - Let's Encrypt**

Install **Certbot**:

```sh
sudo apt install certbot python3-certbot-nginx -y
```

Generate an SSL certificate:

```sh
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

Follow the prompts and select **redirect HTTP to HTTPS** when asked.

Verify SSL auto-renewal:

```sh
sudo certbot renew --dry-run
```

---

## **✅ Deploying Future Updates**

For future deployments:

```sh
cd /var/www/teenytinyweb
git pull origin main
npm install
npm run build
pm2 restart teenytinyweb
```

If changes affect Nginx:

```sh
sudo systemctl reload nginx
```

---

## **🎉 Your Next.js App is Live!**
Now, visit **https://www.yourdomain.com** and your website should be up and running! 🚀


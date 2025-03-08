"use client";

import { useState } from "react";

export default function IPLookup() {
    const [ip, setIp] = useState("");
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState("");

    const API_SERVICES = [
        { url: (ip: string) => `https://ipapi.co/${ip}/json/`, name: "ipapi.co" },
        { url: (ip: string) => `https://ipinfo.io/${ip}/json?token=YOUR_IPINFO_TOKEN`, name: "ipinfo.io" },
        { url: (ip: string) => `https://ipwhois.app/json/${ip}`, name: "ipwhois.io" }
    ];

    const fetchIPInfo = async () => {
        setError("");
        setData(null);

        if (!ip) {
            setError("Please enter a valid IP address.");
            return;
        }

        for (const service of API_SERVICES) {
            try {
                const response = await fetch(service.url(ip));
                if (!response.ok) {
                    throw new Error(`Failed to fetch from ${service.name}`);
                }
                const result = await response.json();
                setData({ ...result, source: service.name });
                return;
            } catch (err) {
                console.error(`Error fetching from ${service.name}:`, err);
            }
        }

        setError("All IP lookup services failed. Please try again later.");
    };

    return (
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-center">🌍 IP Lookup</h2>
            <input
                type="text"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                placeholder="Enter IP address..."
                value={ip}
                onChange={(e) => setIp(e.target.value)}
            />
            <button
                className="mt-3 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
                onClick={fetchIPInfo}
            >
                Lookup IP
            </button>

            {error && <p className="text-red-500 mt-3">{error}</p>}

            {data && (
                <div className="mt-4 bg-gray-100 p-4 rounded-md text-sm">
                    <p><strong>IP Address:</strong> {data.ip || data.query}</p>
                    <p><strong>City:</strong> {data.city || data.regionName}</p>
                    <p><strong>Region:</strong> {data.region || data.regionName}</p>
                    <p><strong>Country:</strong> {data.country_name || data.country}</p>
                    <p><strong>ISP:</strong> {data.org || data.isp}</p>
                    <p><strong>Latitude:</strong> {data.latitude || data.lat}</p>
                    <p><strong>Longitude:</strong> {data.longitude || data.lon}</p>
                    <p className="text-xs text-gray-500 mt-2">Data from: {data.source}</p>
                </div>
            )}
        </div>
    );
}

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

export default function HomePage() {
	return (
		<main className="p-10 mx-auto">
			<h1 className="text-4xl font-bold mb-6">Teeny Tiny Web</h1>

			<p className="text-lg text-gray-700 mb-6">
				A lightweight documentation-style website featuring guides, projects, roadmaps, and free resources.
			</p>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-3">🚀 Technologies Used</h2>
				<ul className="list-disc list-inside text-gray-700">
					<li>Next.js (App Router)</li>
					<li>TypeScript</li>
					<li>Tailwind CSS</li>
					<li>MDX for documentation</li>
					<li>Deployed on DigitalOcean</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-3">🔧 Development</h2>
				<p className="text-gray-700">
					This project was built using Next.js, Tailwind CSS, and TypeScript, following a modular and scalable approach.
					All content is stored in MDX format for easy documentation and extendability.
				</p>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-3">📌 Explore</h2>
				<ul className="list-disc list-inside text-blue-600">
					<li><a href="/docs" className="hover:underline">Docs</a> - Quick guides & tutorials</li>
					<li><a href="/projects" className="hover:underline">Projects</a> - Open-source projects</li>
					<li><a href="/roadmaps" className="hover:underline">Roadmaps</a> - Structured learning paths</li>
					<li><a href="/freebie" className="hover:underline">Freebies</a> - Free resources & PDFs</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-3">📅 Future Plans</h2>

				{/* IT Tools Collection */}
				<div className="mb-4">
					<h3 className="text-xl font-semibold mb-2">🛠️ IT Tools Collection</h3>
					<p className="text-gray-700">
						- Token Generator (JWT, API Key, UUID)<br />
						- Hash Text (MD5, SHA-256, bcrypt)<br />
						- Date-Time Converter (Unix, ISO, Local Format)<br />
						- XML to JSON, JSON to XML<br />
						- Markdown to HTML<br />
						- Base64 Encode / Decode
					</p>
				</div>

				{/* Interactive Roadmaps & Progress Tracking */}
				<div className="mb-4">
					<h3 className="text-xl font-semibold mb-2">📊 Interactive Roadmaps & Progress Tracking</h3>
					<p className="text-gray-700">
						- Allow users to save roadmap progress<br />
						- Detailed explanations & recommended resources<br />
						- Step-by-step guides and interactive tasks
					</p>
				</div>

				{/* Enhanced Documentation Experience */}
				<div className="mb-4">
					<h3 className="text-xl font-semibold mb-2">📖 Enhanced Documentation Experience</h3>
					<p className="text-gray-700">
						- Expand technical guides and tutorials<br />
						- Advanced search and filtering features<br />
						- Personal documentation where users can add notes
					</p>
				</div>

				{/* Open Source Community Contributions */}
				<div className="mb-4">
					<h3 className="text-xl font-semibold mb-2">🤝 Open Source Community Contributions</h3>
					<p className="text-gray-700">
						- Open source projects for community contributions<br />
						- New mini projects & feature request board<br />
						- More GitHub integrations
					</p>
				</div>
			</section>


			<footer className="mt-10 border-t pt-6 text-center">

				<section className="text-center mt-6">
					<p className="text-gray-600">🌐 Connect with us:</p>
					<div className="flex justify-center gap-6 mt-3">
						<a href="https://github.com/Gunduz-Medya/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 transition">
							<FaGithub className="w-6 h-6" />
						</a>
						<a href="https://www.instagram.com/gunduz_medya" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition">
							<FaInstagram className="w-6 h-6" />
						</a>
						<a href="https://www.linkedin.com/company/gunduzmedya/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 transition">
							<FaLinkedin className="w-6 h-6" />
						</a>
					</div>
				</section>

				<div className="mt-6">
					<a href="https://www.digitalocean.com/?refcode=525051e9e7a7&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge">
						<img src="https://web-platforms.sfo2.cdn.digitaloceanspaces.com/WWW/Badge%203.svg" alt="Powered by DigitalOcean" className="mx-auto mt-2" />
					</a>
				</div>
			</footer>
		</main>
	);
}

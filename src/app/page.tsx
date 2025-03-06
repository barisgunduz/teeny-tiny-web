"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { FaGithub, FaTwitter, FaLinkedin, FaRocket, FaUsers } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlineCategory } from "react-icons/md";
import siteData from "@/data/site/site.json";
import projectsData from "@/data/site/projects.json";
import roadmapsData from "@/data/roadmaps.json";
import docsData from "@/data/site/docs.json";

export default function HomePage() {
	const [projectsCount, setProjectsCount] = useState(0);
	const [roadmapsCount, setRoadmapsCount] = useState(0);
	const [docsCount, setDocsCount] = useState(0);

	useEffect(() => {
		setProjectsCount(projectsData.length);
		setRoadmapsCount(roadmapsData.length);
		setDocsCount(docsData.length);
	}, []);

	return (
		<div className="min-h-screen bg-gray-100 text-gray-900">
			{/* Hero Section */}
			<section className="text-center py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
				<h1 className="text-5xl font-bold">Teeny Tiny Web</h1>
				<p className="mt-4 text-lg">Small but Mighty Dev Resources 🚀</p>
				<div className="mt-6 flex justify-center space-x-4">
					<Link href="/docs" className="bg-white text-blue-600 px-6 py-2 rounded-lg shadow-lg hover:bg-gray-200">
						Explore Docs
					</Link>
					<Link href="/projects" className="bg-white text-blue-600 px-6 py-2 rounded-lg shadow-lg hover:bg-gray-200">
						Browse Projects
					</Link>
				</div>
			</section>

			{/* Stats Section */}
			<section className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center py-12 px-6">
				<div className="bg-white p-6 rounded-lg shadow-md">
					<MdOutlineCategory className="text-4xl text-blue-500 mx-auto" />
					<h3 className="text-xl font-semibold mt-2">Roadmaps</h3>
					<p className="text-gray-600">
						<CountUp end={roadmapsCount} duration={2} /> available
					</p>
				</div>
				<div className="bg-white p-6 rounded-lg shadow-md">
					<IoDocumentTextOutline className="text-4xl text-blue-500 mx-auto" />
					<h3 className="text-xl font-semibold mt-2">Documentation</h3>
					<p className="text-gray-600">
						<CountUp end={docsCount} duration={2} /> guides
					</p>
				</div>
				<div className="bg-white p-6 rounded-lg shadow-md">
					<FaRocket className="text-4xl text-blue-500 mx-auto" />
					<h3 className="text-xl font-semibold mt-2">Projects</h3>
					<p className="text-gray-600">
						<CountUp end={projectsCount} duration={2} /> tools & apps
					</p>
				</div>
			</section>

			{/* Footer */}
			<footer className="text-center py-6 bg-gray-900 text-gray-300">
				<h3 className="text-lg font-semibold">🚀 Powered by</h3>
				<a href="https://www.digitalocean.com/?refcode=525051e9e7a7&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge">
					<img
						src="https://web-platforms.sfo2.cdn.digitaloceanspaces.com/WWW/Badge%203.svg"
						alt="Powered by DigitalOcean"
						className="mx-auto mt-2"
					/>
				</a>
				<p className="mt-4">Connect with us:</p>
				<div className="flex justify-center space-x-4 mt-2">
					<a href="https://github.com/Gunduz-Medya/teeny-tiny-web" className="text-gray-400 hover:text-white">
						<FaGithub className="text-2xl" />
					</a>
					<a href="https://x.com/gunduzmedya_" className="text-gray-400 hover:text-white">
						<FaTwitter className="text-2xl" />
					</a>
					<a href="https://www.linkedin.com/company/gunduzmedya/" className="text-gray-400 hover:text-white">
						<FaLinkedin className="text-2xl" />
					</a>
				</div>
			</footer>
		</div>
	);
}

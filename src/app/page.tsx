// src/app/page.tsx - Teeny Tiny Web Ana Sayfa
"use client";

import Link from "next/link";
import projectsData from "@/data/site/projects.json";
import docsData from "@/data/site/docs.json";
import roadmapsData from "@/data/site/roadmaps.json";
import siteData from "@/data/site/site.json";

export default function HomePage() {
	return (
		<div className="p-8 min-h-screen bg-gray-50">
			{/* Hero Section */}
			<section className="text-center mb-12">
				<h1 className="text-5xl font-bold text-gray-900">
					{siteData.title}
				</h1>
				<p className="text-lg text-gray-600 mt-4">
					{siteData.description}
				</p>
				<div className="mt-6 space-x-4">
					<Link
						href="/projects"
						className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
					>
						Explore Projects
					</Link>
					<Link
						href="/docs"
						className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
					>
						Read Docs
					</Link>
					<Link
						href="/roadmaps"
						className="px-6 py-3 bg-yellow-600 text-white rounded-lg shadow hover:bg-yellow-700"
					>
						Browse Roadmaps
					</Link>
				</div>
			</section>

			{/* Featured Projects */}
			<section className="mb-12">
				<h2 className="text-3xl font-semibold text-gray-800">
					Featured Projects
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
					{projectsData.slice(0, 3).map((project) => (
						<Link
							key={project.slug}
							href={`/projects/${project.slug}`}
						>
							<div className="p-6 bg-white shadow-lg rounded-xl hover:shadow-xl transition border border-gray-200 hover:border-blue-500 h-32 flex flex-col justify-center">
								<h3 className="text-lg font-semibold text-gray-800 truncate">
									{project.title}
								</h3>
								<p className="text-gray-600 text-sm mt-1 line-clamp-2">
									{project.description}
								</p>
							</div>
						</Link>
					))}
				</div>
			</section>

			{/* Popular Guides */}
			<section className="mb-12">
				<h2 className="text-3xl font-semibold text-gray-800">
					Popular Guides
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
					{docsData.slice(0, 5).map((doc) => (
						<Link key={doc.slug} href={`/docs/${doc.slug}`}>
							<div className="p-6 bg-white shadow-lg rounded-xl hover:shadow-xl transition border border-gray-200 hover:border-green-500 h-32 flex flex-col justify-center">
								<h3 className="text-lg font-semibold text-gray-800 truncate">
									{doc.title}
								</h3>
								<p className="text-gray-600 text-sm mt-1 line-clamp-2">
									{doc.description}
								</p>
							</div>
						</Link>
					))}
				</div>
			</section>

			{/* Featured Roadmaps */}
			<section className="mb-12">
				<h2 className="text-3xl font-semibold text-gray-800">
					Roadmaps
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
					{roadmapsData.slice(0, 3).map((roadmap) => (
						<Link
							key={roadmap.slug}
							href={`/roadmaps/${roadmap.slug}`}
						>
							<div className="p-6 bg-white shadow-lg rounded-xl hover:shadow-xl transition border border-gray-200 hover:border-blue-500 h-32 flex flex-col justify-center">
								<h3 className="text-lg font-semibold text-gray-800 truncate">
									{roadmap.title.replace(" Roadmap", "")}
								</h3>
								<p className="text-gray-600 text-sm mt-1 line-clamp-2">
									{roadmap.description}
								</p>
							</div>
						</Link>
					))}
				</div>
			</section>

			{/* Contribute Section */}
			<section className="mb-12 text-center">
				<h2 className="text-3xl font-semibold text-gray-800">
					Contribute to the Project
				</h2>
				<p className="text-gray-600 mt-4">
					Want to add a new project, guide, or improve something?
					Check out our GitHub repositories.
				</p>
				<div className="mt-6 space-x-4">
					<a
						href={siteData.github.projects}
						className="px-6 py-3 bg-gray-900 text-white rounded-lg shadow hover:bg-gray-700"
					>
						Projects Repo
					</a>
					<a
						href={siteData.github.site}
						className="px-6 py-3 bg-gray-900 text-white rounded-lg shadow hover:bg-gray-700"
					>
						Website Repo
					</a>
				</div>
			</section>

			{/* Social Media Section */}
			<section className="text-center">
				<h2 className="text-3xl font-semibold text-gray-800">
					Follow Us
				</h2>
				<div className="flex justify-center space-x-4 mt-4">
					{siteData.socials.map((social) => (
						<a
							key={social.name}
							href={social.link}
							className="text-gray-600 hover:text-gray-900 text-lg"
						>
							{social.name}
						</a>
					))}
				</div>
			</section>
		</div>
	);
}

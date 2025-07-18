"use client";

import {
	Bars3Icon,
	BookOpenIcon,
	ChartBarIcon,
	GiftIcon,
	HomeIcon,
	MapIcon,
	RocketLaunchIcon,
	SparklesIcon,
	WrenchIcon,
	XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useEffect, useState } from "react";
import Script from "next/script"; // EKLENDİ

import "../app/globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
	const [isReady, setIsReady] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		setIsReady(true);
	}, []);

	// Close menu after clicking a link
	const handleNavClick = () => {
		setIsOpen(false);
	};

	return (
		<html lang="en">
			<head>
				<Script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-XFCNN13F5Q"
				/>
				<Script id="google-analytics">
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'G-XFCNN13F5Q');
					`}
				</Script>
			</head>
			<body className={`bg-background text-textPrimary min-h-screen ${isReady ? "grid md:grid-cols-[250px_1fr]" : ""}`}>
				{/* Mobile Menu Button */}
				<div className="md:hidden flex justify-between items-center px-6 py-4 bg-foreground shadow-md">
					<button onClick={() => setIsOpen(!isOpen)} className="text-textPrimary hover:text-accent">
						{isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
					</button>
					<span className="font-semibold text-lg">Teeny Tiny Web</span>
				</div>

				{/* Sidebar Navigation */}
				<aside
					className={`fixed md:static top-0 left-0 w-64 md:w-64 h-screen bg-foreground shadow-md p-6 border-r border-borderColor transform ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 transition-transform duration-300 ease-in-out z-50`}
				>
					<nav className="flex flex-col space-y-4">
						<Link href="/" className="flex items-center text-textPrimary hover:text-accent" onClick={handleNavClick}>
							<HomeIcon className="h-5 w-5 mr-2" />
							<span>Home</span>
						</Link>
						<Link href="/docs" className="flex items-center text-textPrimary hover:text-accent" onClick={handleNavClick}>
							<BookOpenIcon className="h-5 w-5 mr-2" />
							<span>Tiny Docs</span>
						</Link>
						<Link href="/projects" className="flex items-center text-textPrimary hover:text-accent" onClick={handleNavClick}>
							<RocketLaunchIcon className="h-5 w-5 mr-2" />
							<span>Sample Projects</span>
						</Link>
						<Link href="/roadmaps" className="flex items-center text-textPrimary hover:text-accent" onClick={handleNavClick}>
							<MapIcon className="h-5 w-5 mr-2" />
							<span>Dev Roadmaps</span>
						</Link>
						<Link href="/tools" className="flex items-center text-textPrimary hover:text-accent" onClick={handleNavClick}>
							<WrenchIcon className="h-5 w-5 mr-2" />
							<span>IT Tools</span>
						</Link>
						<Link href="/dummy" className="flex items-center text-textPrimary hover:text-accent" onClick={handleNavClick}>
							<ChartBarIcon className="h-5 w-5 mr-2" />
							<span>Dummy Data</span>
						</Link>
						<Link href="/100-chatgpt-promt" className="flex items-center text-textPrimary hover:text-accent" onClick={handleNavClick}>
							<SparklesIcon className="h-5 w-5 mr-2" />
							<span>AI Prompts</span>
						</Link>
						<Link href="/freebie" className="flex items-center text-textPrimary hover:text-accent" onClick={handleNavClick}>
							<GiftIcon className="h-5 w-5 mr-2" />
							<span>Freebie (Coming Soon)</span>
						</Link>
					</nav>
				</aside>

				{/* Main Content Area */}
				<main className="w-full h-screen overflow-y-auto">{children}</main>
			</body>
		</html>
	);
}

"use client";

import "../app/globals.css";
import { useEffect, useState } from "react";
import {
	HomeIcon,
	BookOpenIcon,
	RocketLaunchIcon,
	MapIcon,
	GiftIcon,
	WrenchIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
	const [isReady, setIsReady] = useState(false);

	useEffect(() => {
		setIsReady(true);
	}, []);

	return (
		<html lang="en">
			<body
				className={`${isReady
						? "flex flex-col md:flex-row bg-background text-textPrimary min-h-screen"
						: ""
					}`}
			>
				{/* SOL: Menü */}
				<aside
					className={`w-full md:w-1/4 h-auto md:h-screen bg-foreground shadow-md p-6 flex md:flex-col md:fixed border-r border-borderColor`}
				>
					{/* Logo */}
					<div className="flex items-center mb-4 md:mb-6">
						<HomeIcon className="h-8 w-8 text-textPrimary mr-2" />
						<h1 className="text-2xl font-bold text-textPrimary">
							Teeny Tiny Web
						</h1>
					</div>

					{/* Menü */}
					<nav className="flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-4 w-full">
						<Link
							href="/"
							className="flex items-center text-textPrimary hover:text-accent"
						>
							<HomeIcon className="h-5 w-5 mr-2" />
							<span>Home</span>
						</Link>
						<Link
							href="/docs"
							className="flex items-center text-textPrimary hover:text-accent"
						>
							<BookOpenIcon className="h-5 w-5 mr-2" />
							<span>Docs</span>
						</Link>
						<Link
							href="/projects"
							className="flex items-center text-textPrimary hover:text-accent"
						>
							<RocketLaunchIcon className="h-5 w-5 mr-2" />
							<span>Projects</span>
						</Link>
						<Link
							href="/roadmaps"
							className="flex items-center text-textPrimary hover:text-accent"
						>
							<MapIcon className="h-5 w-5 mr-2" />
							<span>Roadmaps</span>
						</Link>
						<Link href="/tools" className="flex items-center text-textPrimary hover:text-accent">
							<WrenchIcon className="h-5 w-5 mr-2" />
							<span>Tools</span>
						</Link>
						<Link
							href="/freebie"
							className="flex items-center text-textPrimary hover:text-accent"
						>
							<GiftIcon className="h-5 w-5 mr-2" />
							<span>Freebie</span>
						</Link>
					</nav>
				</aside>

				{/* SAĞ: İçerik Alanı */}
				<main className="w-full md:w-3/4 md:ml-[25%] h-screen overflow-y-auto">
					{children}
				</main>
			</body>
		</html>
	);
}

import HomePage from "@/views/home/HomePage";

export const metadata = {
	title: "Teeny Tiny Web | Small but Mighty Dev Resources",
	description: "Discover minimal, ready-to-use starter projects and utilities for web development. Fast, clean, and practical examples powered by modern tech.",
	keywords: ["starter projects", "web dev tools", "tiny projects", "Dev Roadmaps", "IT Tools", "Teeny Tiny Web", "Dummy Data"],
	openGraph: {
		title: "Teeny Tiny Web",
		description: "Discover minimal, ready-to-use starter projects and utilities for web development. Fast, clean, and practical examples powered by modern tech.",
		url: "https://www.teenytinyweb.com",
		siteName: "Teeny Tiny Web",
		images: [
			{
				url: "/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Teeny Tiny Web",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Teeny Tiny Web",
		description: "Discover minimal, ready-to-use starter projects and utilities for web development. Fast, clean, and practical examples powered by modern tech.",
		creator: "@teenytinyweb",
		images: ["/og-image.jpg"],
	}
};

export default function Home() {
	return <HomePage />;
}

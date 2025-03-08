import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import Image from "next/image";
import { ComponentProps } from "react";
import { notFound } from "next/navigation";

const components = {
	img: (props: ComponentProps<typeof Image>) => (
		<Image
			{...props}
			alt={props.alt || "Project Image"}
			width={800}
			height={400}
			className="rounded-md shadow-md mx-auto"
		/>
	),
};

export default function ProjectPage({ params }: { params: { slug?: string } }) {
	if (!params?.slug) {
		notFound();
	}

	const projectsDirectory = path.join(process.cwd(), "content/projects");
	const filePath = path.join(projectsDirectory, `${params.slug}.mdx`);

	if (!fs.existsSync(filePath)) {
		notFound();
	}

	const fileContents = fs.readFileSync(filePath, "utf8");
	const { content } = matter(fileContents);

	const githubLink = `https://github.com/barisgunduz/teeny-tiny-web-projects/tree/master/${params.slug}`;

	return (
		<main className="p-10">
			<a
				href={githubLink}
				target="_blank"
				className="text-blue-500 hover:underline block mt-4"
			>
				GitHub Repo →
			</a>

			<div className="mt-6 prose prose-lg text-gray-700">
				<MDXRemote
					source={content}
					options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
					components={components}
				/>
			</div>

			<div className="mt-10">
				<Link
					href="/projects"
					className="inline-block px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition"
				>
					← Back to Projects
				</Link>
			</div>
		</main>
	);
}

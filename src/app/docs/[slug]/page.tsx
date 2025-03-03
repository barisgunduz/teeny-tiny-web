import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import { notFound } from "next/navigation";

// 🔥 **Yeni Fonksiyon: Belirtilen `slug` için içeriği al**
async function getDocContent(slug: string) {
	const docsDirectory = path.join(process.cwd(), "content/docs");
	const filePath = path.join(docsDirectory, `${slug}.mdx`);

	if (!fs.existsSync(filePath)) {
		return null;
	}

	const fileContents = fs.readFileSync(filePath, "utf8");
	const { content, data } = matter(fileContents);
	return { content, title: data.title || "Documentation" };
}

export default async function DocPage({
	params,
}: {
	params: { slug: string };
}) {
	// 🔥 **params.async olarak işlendi**
	if (!params?.slug) {
		notFound();
	}

	const docData = await getDocContent(params.slug);

	if (!docData) {
		notFound();
	}

	return (
		<main className="p-10">
			<h1 className="text-3xl font-bold">{docData.title}</h1>
			<div className="mt-6 prose prose-lg text-gray-700">
				<MDXRemote
					source={docData.content}
					options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
				/>
			</div>

			<div className="mt-10">
				<Link
					href="/docs"
					className="inline-block px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition"
				>
					← Back to Docs
				</Link>
			</div>
		</main>
	);
}

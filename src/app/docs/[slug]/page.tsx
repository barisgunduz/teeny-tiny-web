import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import Link from "next/link";

export default function DocPage({ params }: { params: { slug: string } }) {
  const docsDirectory = path.join(process.cwd(), "content/docs");
  const filePath = path.join(docsDirectory, `${params.slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return (
      <main className="p-10">
        <h1 className="text-3xl font-bold">404 - Document Not Found</h1>
        <p className="text-gray-600">The documentation you are looking for does not exist.</p>
        <Link href="/docs" className="text-blue-500 hover:underline">
          ← Back to Docs
        </Link>
      </main>
    );
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(fileContents);

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">{data.title || "Documentation"}</h1>
      <div className="mt-6 prose prose-lg text-gray-700">
        <MDXRemote source={content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
      </div>

      <div className="mt-10">
        <Link href="/docs" className="inline-block px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition">
          ← Back to Docs
        </Link>
      </div>
    </main>
  );
}

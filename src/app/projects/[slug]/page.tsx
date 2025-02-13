import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import Image from "next/image";

const components = {
  img: (props: any) => (
    <Image {...props} alt={props.alt || "Project Image"} width={800} height={400} className="rounded-md shadow-md mx-auto" />
  ),
};

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const projectsDirectory = path.join(process.cwd(), "content/projects");
  const filePath = path.join(projectsDirectory, `${params.slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return (
      <main className="p-10">
        <h1 className="text-3xl font-bold">404 - Project Not Found</h1>
        <p className="text-gray-600">The project you are looking for does not exist.</p>
        <Link href="/projects" className="text-blue-500 hover:underline">
          ← Back to Projects
        </Link>
      </main>
    );
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { content } = matter(fileContents);

  // Otomatik GitHub linki oluştur
  const githubLink = `https://github.com/barisgunduz/teeny-tiny-web-projects/tree/master/${params.slug}`;

  return (
    <main className="p-10">

      {/* GitHub Repo Linki */}
      <a href={githubLink} target="_blank" className="text-blue-500 hover:underline block mt-4">
        GitHub Repo →
      </a>

      {/* MDX içeriği */}
      <div className="mt-6 prose prose-lg text-gray-700">
        <MDXRemote source={content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} components={components} />
      </div>

      {/* Back to Projects Linki */}
      <div className="mt-10">
        <Link href="/projects" className="inline-block px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition">
          ← Back to Projects
        </Link>
      </div>
    </main>
  );
}

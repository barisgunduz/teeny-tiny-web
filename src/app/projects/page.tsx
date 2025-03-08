import fs from "fs";
import path from "path";
import Link from "next/link";
import matter from "gray-matter";

export default function ProjectsPage() {
    const projectsDirectory = path.join(process.cwd(), "content/projects");

    if (!fs.existsSync(projectsDirectory)) {
        return (
            <>
                <h1 className="text-3xl font-bold">🚀 Projects</h1>
                <main className="p-10">
                    <p className="text-gray-600">No projects found.</p>
                </main>
            </>
        );
    }

    const files = fs.readdirSync(projectsDirectory);
    const projects = files.map((filename) => {
        const filePath = path.join(projectsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, "utf8");
        const { data, content } = matter(fileContents);

        const lines = content.split("\n").filter((line) => line.trim() !== "");
        const markdownTitleIndex = lines.findIndex((line) => line.startsWith("##"));
        const markdownTitle = markdownTitleIndex !== -1 ? lines[markdownTitleIndex].replace("##", "").trim() : filename.replace(".mdx", "");

        let markdownDescription = "No description available.";
        if (markdownTitleIndex !== -1) {
            const descriptionIndex = lines.findIndex((line, index) => index > markdownTitleIndex && !line.startsWith("#"));
            if (descriptionIndex !== -1) {
                markdownDescription = lines[descriptionIndex].trim();
            }
        }

        return {
            slug: filename.replace(".mdx", ""),
            title: data.title || markdownTitle,
            description: data.description || markdownDescription,
        };
    });

    return (
        <>
            <h1 className="text-3xl font-bold">🚀 Projects</h1>
            <main className="p-10">
                <ul className="mt-6 space-y-4">
                    {projects.length > 0 ? (
                        projects.map((project) => (
                            <li key={project.slug} className="border p-4 rounded-lg shadow-md bg-white">
                                <h2 className="text-xl font-semibold">{project.title}</h2>
                                <p className="text-gray-600">{project.description}</p>
                                <Link href={`/projects/${project.slug}`} className="text-blue-500 hover:underline text-lg font-medium">
                                    Details →
                                </Link>
                            </li>
                        ))
                    ) : (
                        <p className="text-gray-500">No projects available.</p>
                    )}
                </ul>
            </main>
        </>

    );
}

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

        // 🔥 Markdown içeriğini parçalayarak title ve description oluşturuyoruz
        const lines = content.split("\n").filter((line) => line.trim() !== ""); // Boş satırları temizle
        const markdownTitleIndex = lines.findIndex((line) => line.startsWith("##")); // İlk '##' başlığını bul
        const markdownTitle = markdownTitleIndex !== -1 ? lines[markdownTitleIndex].replace("##", "").trim() : filename.replace(".mdx", ""); // Title belirle

        // '##' başlığından sonraki ilk düz metni description olarak al
        let markdownDescription = "No description available.";
        if (markdownTitleIndex !== -1) {
            const descriptionIndex = lines.findIndex((line, index) => index > markdownTitleIndex && !line.startsWith("#")); // İlk düz metni bul
            if (descriptionIndex !== -1) {
                markdownDescription = lines[descriptionIndex].trim();
            }
        }

        return {
            slug: filename.replace(".mdx", ""), // URL için slug
            title: data.title || markdownTitle, // Önce frontmatter title, yoksa Markdown içindeki '##'
            description: data.description || markdownDescription, // Önce frontmatter description, yoksa Markdown içindeki ilk düz metin
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

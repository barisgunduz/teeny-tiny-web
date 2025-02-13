import fs from "fs";
import path from "path";
import matter from "gray-matter";

// ✅ Server Fonksiyonu: FS ile Markdown Dosyalarını Oku
export function getDocs() {
  const docsDirectory = path.join(process.cwd(), "content/docs");
  if (!fs.existsSync(docsDirectory)) return [];

  const files = fs.readdirSync(docsDirectory);

  // MDX dosyalarını oku ve metadata'yı al
  const docs = files.map((filename) => {
    const filePath = path.join(docsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug: filename.replace(".mdx", ""),
      title: data.title || filename.replace(".mdx", ""),
      category: data.category || "Other",
    };
  });

  return docs;
}

const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

// İçerik dizinleri
const contentDirs = {
	docs: path.join(__dirname, "../content/docs"),
	projects: path.join(__dirname, "../content/projects"),
};

// JSON dosyalarının yolu
const outputFiles = {
	docs: path.join(__dirname, "../src/data/site/docs.json"),
	projects: path.join(__dirname, "../src/data/site/projects.json"),
};

// Markdown dosyalarından metadata çıkarma
function extractMetadata(filePath, filename) {
	const fileContents = fs.readFileSync(filePath, "utf8");
	const { data } = matter(fileContents);

	return {
		slug: filename.replace(".mdx", ""), // Dosya adını slug olarak kullan
		title: data.title || filename.replace(".mdx", ""), // Başlık
		description: data.description || "No description available.", // Açıklama
		category: data.category || "General", // Kategori varsa al, yoksa "General"
	};
}

// JSON dosyalarını güncelle
function updateJsonFiles() {
	Object.keys(contentDirs).forEach((key) => {
		const dirPath = contentDirs[key];
		const jsonPath = outputFiles[key];

		if (!fs.existsSync(dirPath)) {
			console.error(`🚨 Error: Directory not found → ${dirPath}`);
			return;
		}

		const files = fs
			.readdirSync(dirPath)
			.filter((file) => file.endsWith(".mdx"));
		const items = files.map((file) =>
			extractMetadata(path.join(dirPath, file), file)
		);

		fs.writeFileSync(jsonPath, JSON.stringify(items, null, 2));
		console.log(`✅ Successfully updated → ${jsonPath}`);
	});
}

// Scripti çalıştır
updateJsonFiles();

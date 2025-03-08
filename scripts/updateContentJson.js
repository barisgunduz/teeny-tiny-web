const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const contentDirs = {
	docs: path.join(__dirname, "../content/docs"),
	projects: path.join(__dirname, "../content/projects"),
};

const outputFiles = {
	docs: path.join(__dirname, "../src/data/site/docs.json"),
	projects: path.join(__dirname, "../src/data/site/projects.json"),
};

function extractMetadata(filePath, filename) {
	const fileContents = fs.readFileSync(filePath, "utf8");
	const { data } = matter(fileContents);

	return {
		slug: filename.replace(".mdx", ""),
		title: data.title || filename.replace(".mdx", ""),
		description: data.description || "No description available.",
		category: data.category || "General",
	};
}

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

updateJsonFiles();

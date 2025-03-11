"use client";

import { useState } from "react";
import mammoth from "mammoth";

export default function MarkdownToWord() {
    const [markdown, setMarkdown] = useState("");
    const [wordContent, setWordContent] = useState("");

    const convertToWord = async () => {
        if (!markdown.trim()) return;
        try {
            const result = await mammoth.convertMarkdownToHtml({ markdown });
            setWordContent(result.value);
        } catch (error) {
            console.error("Error converting Markdown to Word:", error);
            setWordContent("Error processing document.");
        }
    };

    const downloadWordFile = () => {
        const blob = new Blob([wordContent], { type: "application/msword" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "document.docx";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">📄 Markdown to Word Converter</h2>
            <textarea
                className="w-full p-3 border rounded-md"
                placeholder="Enter Markdown..."
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
                rows={6}
            />
            <button
                onClick={convertToWord}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
                Convert to Word
            </button>
            {wordContent && (
                <button
                    onClick={downloadWordFile}
                    className="mt-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
                >
                    Download Word File
                </button>
            )}
        </div>
    );
}

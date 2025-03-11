"use client";

import { useState } from "react";
import CopyToClipboard from "@/components/CopyToClipboard";
import prettier from "prettier/standalone";
import parserHtml from "prettier/plugins/html";

const HtmlFormatter = () => {
    const [input, setInput] = useState("");
    const [formattedHtml, setFormattedHtml] = useState("");

    const formatHtml = async () => {
        try {
            const prettyHtml = prettier.format(input, {
                parser: "html",
                plugins: [parserHtml],
            });
            setFormattedHtml(await prettyHtml);
        } catch (error) {
            setFormattedHtml("⚠️ Invalid HTML Input");
        }
    };

    return (
        <div className="space-y-4">
            <h2 className="text-lg font-semibold">HTML Formatter</h2>
            <textarea
                className="w-full h-40 p-2 border rounded"
                placeholder="Enter your HTML code..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                onClick={formatHtml}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition"
            >
                Format HTML
            </button>
            {formattedHtml && (
                <div className="relative p-4 border rounded bg-gray-100">
                    <pre className="whitespace-pre-wrap break-words">{formattedHtml}</pre>
                    <CopyToClipboard text={formattedHtml} />
                </div>
            )}
        </div>
    );
};

export default HtmlFormatter;

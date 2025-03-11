"use client";

import { useState } from "react";
import CopyToClipboard from "@/components/CopyToClipboard";
import prettier from "prettier/standalone";
import parserCss from "prettier/plugins/postcss";

const CssFormatter = () => {
    const [input, setInput] = useState("");
    const [formattedCss, setFormattedCss] = useState("");

    const formatCss = async () => {
        try {
            const prettyCss = await prettier.format(input, {
                parser: "css",
                plugins: [parserCss],
            });
            setFormattedCss(prettyCss);
        } catch (error) {
            setFormattedCss("⚠️ Invalid CSS Input");
        }
    };

    return (
        <div className="space-y-4">
            <h2 className="text-lg font-semibold">CSS Formatter</h2>
            <textarea
                className="w-full h-40 p-2 border rounded"
                placeholder="Enter your CSS code..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                onClick={formatCss}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition"
            >
                Format CSS
            </button>
            {formattedCss && (
                <div className="relative p-4 border rounded bg-gray-100">
                    <pre className="whitespace-pre-wrap break-words">{formattedCss}</pre>
                    <CopyToClipboard text={formattedCss} />
                </div>
            )}
        </div>
    );
};

export default CssFormatter;

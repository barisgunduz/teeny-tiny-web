"use client";

import { useState } from "react";
import { diffChars } from "diff";
import CopyToClipboard from "@/components/CopyToClipboard";

export default function TextDiffChecker() {
    const [text1, setText1] = useState("");
    const [text2, setText2] = useState("");
    const [diffResult, setDiffResult] = useState("");

    const handleCompare = () => {
        const diff = diffChars(text1, text2);
        const formattedDiff = diff.map((part, index) => (
            <span
                key={index}
                className={`${part.added ? "bg-green-200 text-green-800" : part.removed ? "bg-red-200 text-red-800" : ""
                    }`}
            >
                {part.value}
            </span>
        ));
        setDiffResult(formattedDiff);
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">🔍 Text Diff Checker</h2>
            <p className="text-gray-600 mb-4">Compare two texts and highlight the differences.</p>

            <div className="grid grid-cols-2 gap-4">
                <textarea
                    className="w-full h-32 p-2 border rounded-md"
                    placeholder="Enter first text here..."
                    value={text1}
                    onChange={(e) => setText1(e.target.value)}
                />
                <textarea
                    className="w-full h-32 p-2 border rounded-md"
                    placeholder="Enter second text here..."
                    value={text2}
                    onChange={(e) => setText2(e.target.value)}
                />
            </div>

            <button
                onClick={handleCompare}
                className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition"
            >
                Compare Texts
            </button>

            {diffResult && (
                <div className="mt-6 bg-gray-100 p-4 rounded-md">
                    <h3 className="text-lg font-semibold mb-2">Differences:</h3>
                    <div className="text-lg font-mono p-2 bg-white rounded-md">{diffResult}</div>
                    <div className="mt-3">
                        <CopyToClipboard text={text1 + " ↔ " + text2} />
                    </div>
                </div>
            )}
        </div>
    );
}

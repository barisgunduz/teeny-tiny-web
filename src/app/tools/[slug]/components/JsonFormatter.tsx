"use client";

import { useState } from "react";

export default function JsonFormatter() {
    const [input, setInput] = useState("");
    const [formattedJson, setFormattedJson] = useState("");
    const [copySuccess, setCopySuccess] = useState(false);

    const formatJson = () => {
        try {
            const parsed = JSON.parse(input);
            setFormattedJson(JSON.stringify(parsed, null, 2));
        } catch (error) {
            setFormattedJson("❌ Invalid JSON");
        }
    };

    const copyToClipboard = () => {
        if (formattedJson && formattedJson !== "❌ Invalid JSON") {
            navigator.clipboard.writeText(formattedJson);
            setCopySuccess(true);

            setTimeout(() => setCopySuccess(false), 2000);
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
                <h3 className="text-lg font-semibold mb-2">Input JSON</h3>
                <textarea
                    className="w-full p-3 border rounded-md h-48 text-sm font-mono"
                    placeholder='{"example": "Enter JSON here"}'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    onClick={formatJson}
                    className="mt-3 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                >
                    Format JSON
                </button>
            </div>

            <div>
                <h3 className="text-lg font-semibold mb-2 flex justify-between">
                    <span>Formatted JSON</span>
                    <button
                        onClick={copyToClipboard}
                        className={`px-3 py-1 rounded-md text-sm ${copySuccess ? "bg-green-500 text-white" : "bg-gray-200 hover:bg-gray-300"
                            } transition`}
                    >
                        {copySuccess ? "Copied!" : "📋 Copy"}
                    </button>
                </h3>
                <textarea
                    className="w-full p-3 border rounded-md h-48 text-sm font-mono bg-gray-100"
                    readOnly
                    value={formattedJson}
                />
            </div>
        </div>
    );
}

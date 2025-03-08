"use client";

import { useState } from "react";

export default function Base64Encoder() {
    const [input, setInput] = useState("");
    const [encoded, setEncoded] = useState("");
    const [decoded, setDecoded] = useState("");
    const [copySuccess, setCopySuccess] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.target.value;
        setInput(text);
        setEncoded(btoa(text));
        try {
            setDecoded(atob(text));
        } catch {
            setDecoded("❌ Invalid Base64");
        }
    };

    const copyToClipboard = () => {
        if (encoded) {
            navigator.clipboard.writeText(encoded);
            setCopySuccess(true);
            setTimeout(() => setCopySuccess(false), 2000);
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
                <h3 className="text-lg font-semibold mb-2">Enter Text</h3>
                <textarea
                    className="w-full p-3 border rounded-md h-32 text-sm font-mono"
                    placeholder="Type your text here..."
                    value={input}
                    onChange={handleInputChange}
                />
            </div>

            <div>
                <h3 className="text-lg font-semibold mb-2 flex justify-between">
                    <span>Encoded (Base64)</span>
                    <button
                        onClick={copyToClipboard}
                        className={`px-3 py-1 rounded-md text-sm ${copySuccess ? "bg-green-500 text-white" : "bg-gray-200 hover:bg-gray-300"
                            } transition`}
                    >
                        {copySuccess ? "Copied!" : "📋 Copy"}
                    </button>
                </h3>
                <textarea
                    className="w-full p-3 border rounded-md h-16 text-sm font-mono bg-gray-100"
                    readOnly
                    value={encoded}
                />

                <h3 className="text-lg font-semibold mt-4">Decoded Text</h3>
                <textarea
                    className="w-full p-3 border rounded-md h-16 text-sm font-mono bg-gray-100"
                    readOnly
                    value={decoded}
                />
            </div>
        </div>
    );
}

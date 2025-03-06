"use client";
import { useState } from "react";

export default function HtmlEncoderDecoder() {
    const [input, setInput] = useState("");
    const [encoded, setEncoded] = useState("");
    const [decoded, setDecoded] = useState("");

    const handleEncode = () => {
        setEncoded(input.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
    };

    const handleDecode = () => {
        setDecoded(input.replace(/&lt;/g, "<").replace(/&gt;/g, ">"));
    };

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
    };

    return (
        <div className="p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">HTML Encoder / Decoder</h2>
            <textarea
                className="w-full p-2 border rounded mb-4"
                rows={4}
                placeholder="Enter HTML here..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <div className="flex gap-4">
                <button onClick={handleEncode} className="px-4 py-2 bg-blue-600 text-white rounded">
                    Encode
                </button>
                <button onClick={handleDecode} className="px-4 py-2 bg-green-600 text-white rounded">
                    Decode
                </button>
            </div>
            {encoded && (
                <div className="mt-4">
                    <h3 className="text-lg font-semibold">Encoded:</h3>
                    <div className="bg-gray-100 p-2 rounded flex justify-between">
                        <span className="break-all">{encoded}</span>
                        <button
                            onClick={() => handleCopy(encoded)}
                            className="text-blue-500 hover:underline"
                        >
                            Copy
                        </button>
                    </div>
                </div>
            )}
            {decoded && (
                <div className="mt-4">
                    <h3 className="text-lg font-semibold">Decoded:</h3>
                    <div className="bg-gray-100 p-2 rounded flex justify-between">
                        <span className="break-all">{decoded}</span>
                        <button
                            onClick={() => handleCopy(decoded)}
                            className="text-blue-500 hover:underline"
                        >
                            Copy
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

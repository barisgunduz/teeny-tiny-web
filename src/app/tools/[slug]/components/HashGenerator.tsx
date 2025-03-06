"use client";

import { useState } from "react";
import crypto from "crypto";

export default function HashGenerator() {
    const [inputText, setInputText] = useState("");
    const [md5, setMd5] = useState("");
    const [sha256, setSha256] = useState("");
    const [sha512, setSha512] = useState("");

    const generateHashes = () => {
        setMd5(crypto.createHash("md5").update(inputText).digest("hex"));
        setSha256(crypto.createHash("sha256").update(inputText).digest("hex"));
        setSha512(crypto.createHash("sha512").update(inputText).digest("hex"));
    };

    return (
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-center">🔐 Hash Generator</h2>
            <textarea
                className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                rows={3}
                placeholder="Enter text to hash..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
            ></textarea>
            <button
                className="mt-3 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
                onClick={generateHashes}
            >
                Generate Hashes
            </button>
            {md5 && (
                <div className="mt-4">
                    <p className="font-semibold">MD5:</p>
                    <p className="bg-gray-100 p-2 rounded-md text-sm break-all">{md5}</p>
                </div>
            )}
            {sha256 && (
                <div className="mt-2">
                    <p className="font-semibold">SHA256:</p>
                    <p className="bg-gray-100 p-2 rounded-md text-sm break-all">{sha256}</p>
                </div>
            )}
            {sha512 && (
                <div className="mt-2">
                    <p className="font-semibold">SHA512:</p>
                    <p className="bg-gray-100 p-2 rounded-md text-sm break-all">{sha512}</p>
                </div>
            )}
        </div>
    );
}

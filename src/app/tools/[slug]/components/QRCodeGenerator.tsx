"use client";

import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

export default function QRCodeGenerator() {
    const [input, setInput] = useState("");

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">📱 QR Code Generator</h2>
            <p className="text-gray-600 mb-4">Enter text or a URL to generate a QR code.</p>

            <input
                type="text"
                className="w-full p-3 border rounded-md"
                placeholder="Enter text or URL..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            {input.trim() && (
                <div className="mt-4 flex flex-col items-center">
                    <QRCodeCanvas value={input} size={200} />
                </div>
            )}
        </div>
    );
}


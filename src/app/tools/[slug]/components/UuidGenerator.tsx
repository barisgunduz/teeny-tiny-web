"use client";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { MdOutlineFingerprint } from "react-icons/md";

export default function UuidGenerator() {
    const [uuid, setUuid] = useState<string>(uuidv4());

    const generateUuid = () => {
        setUuid(uuidv4());
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(uuid);
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <MdOutlineFingerprint className="text-blue-500 text-3xl" />
                UUID Generator
            </h1>
            <p className="text-gray-600 mt-2">
                Generate unique UUIDs instantly.
            </p>

            <div className="mt-6 bg-gray-100 p-4 rounded-lg flex items-center justify-between">
                <span className="text-gray-800 font-mono break-all">{uuid}</span>
                <button
                    onClick={copyToClipboard}
                    className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                    Copy
                </button>
            </div>

            <button
                onClick={generateUuid}
                className="mt-4 w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
                Generate New UUID
            </button>
        </div>
    );
}

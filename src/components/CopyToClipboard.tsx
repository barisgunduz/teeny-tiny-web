"use client";

import { useState } from "react";
import { ClipboardIcon, CheckIcon } from "@heroicons/react/24/outline";

const CopyToClipboard = ({ text }: { text: string }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset after 2 sec
        } catch (error) {
            console.error("Failed to copy:", error);
        }
    };

    return (
        <button
            onClick={handleCopy}
            className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-md hover:bg-gray-700 transition"
        >
            {copied ? <CheckIcon className="w-5 h-5 text-green-400" /> : <ClipboardIcon className="w-5 h-5" />}
            {copied ? "Copied!" : "Copy"}
        </button>
    );
};

export default CopyToClipboard;

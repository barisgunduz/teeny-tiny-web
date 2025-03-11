import { useState } from "react";
import beautify from "js-beautify";
import CopyToClipboard from "@/components/CopyToClipboard";

const JsFormatter = () => {
    const [input, setInput] = useState("");
    const [formattedJs, setFormattedJs] = useState("");

    const formatJs = () => {
        try {
            const formatted = beautify.js(input, { indent_size: 2, space_in_empty_paren: true });
            setFormattedJs(formatted);
        } catch (error) {
            setFormattedJs("⚠️ Invalid JavaScript Input");
        }
    };

    return (
        <div className="space-y-4">
            <h2 className="text-lg font-semibold">JavaScript Formatter</h2>
            <textarea
                className="w-full h-40 p-2 border rounded"
                placeholder="Enter JavaScript code..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                onClick={formatJs}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition"
            >
                Format JavaScript
            </button>
            {formattedJs && (
                <div className="relative p-4 border rounded bg-gray-100">
                    <pre className="whitespace-pre-wrap break-words">{formattedJs}</pre>
                    <CopyToClipboard text={formattedJs} />
                </div>
            )}
        </div>
    );
};

export default JsFormatter;

"use client";

import { useState } from "react";
import { format } from "sql-formatter"; // ✅ Correct import
import CopyToClipboard from "@/components/CopyToClipboard";

const SQLFormatter = () => {
    const [sqlInput, setSqlInput] = useState("");
    const [formattedSql, setFormattedSql] = useState("");

    const handleFormat = () => {
        try {
            setFormattedSql(format(sqlInput)); // ✅ Uses the correct function
        } catch (error) {
            setFormattedSql("Invalid SQL syntax.");
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">SQL Formatter</h2>

            {/* SQL Input Textarea */}
            <textarea
                value={sqlInput}
                onChange={(e) => setSqlInput(e.target.value)}
                placeholder="Enter your SQL query here..."
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows={6}
            />

            {/* Format Button */}
            <button
                onClick={handleFormat}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
                Format SQL
            </button>

            {/* Formatted SQL Output */}
            {formattedSql && (
                <div className="mt-6 p-4 bg-gray-100 rounded-md relative">
                    <pre className="whitespace-pre-wrap text-gray-800">{formattedSql}</pre>

                    {/* Copy to Clipboard Button Inside the Output Card */}
                    <div className="absolute top-2 right-2">
                        <CopyToClipboard text={formattedSql} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default SQLFormatter;

"use client";
import { useState } from "react";

export default function RegexTester() {
    const [pattern, setPattern] = useState("");
    const [testString, setTestString] = useState("");
    const [matches, setMatches] = useState<string[]>([]);

    const testRegex = () => {
        try {
            const regex = new RegExp(pattern, "g");
            const matchResults = testString.match(regex) || [];
            setMatches(matchResults);
        } catch (error) {
            setMatches(["Invalid regex pattern"]);
        }
    };

    return (
        <div className="flex flex-col gap-4">
            <label className="font-semibold">Regular Expression:</label>
            <input
                type="text"
                className="border p-2 rounded-md"
                placeholder="Enter regex pattern (e.g., \d+)"
                value={pattern}
                onChange={(e) => setPattern(e.target.value)}
            />

            <label className="font-semibold">Test String:</label>
            <textarea
                className="border p-2 rounded-md"
                placeholder="Enter text to test"
                value={testString}
                onChange={(e) => setTestString(e.target.value)}
            />

            <button
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                onClick={testRegex}
            >
                Test Regex
            </button>

            <div>
                <h3 className="font-semibold mt-2">Matches:</h3>
                <pre className="bg-gray-100 p-2 rounded-md">{matches.join("\n") || "No matches found"}</pre>
            </div>
        </div>
    );
}

"use client";

import { useState } from "react";

export default function PingTester() {
    const [address, setAddress] = useState("");
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState<number[]>([]);
    const [error, setError] = useState("");

    const handlePing = async () => {
        if (!address) return;
        setLoading(true);
        setError("");
        setResults([]);

        try {
            const pings: number[] = [];

            // Perform 5 ping attempts
            for (let i = 0; i < 5; i++) {
                const start = performance.now();
                try {
                    await fetch(`https://${address}`, { method: "HEAD", mode: "no-cors" });
                } catch (err) {
                    console.warn("Ping attempt failed, possible CORS issue.");
                }
                const end = performance.now();
                pings.push(end - start);
            }

            setResults(pings);
        } catch (err) {
            setError("Failed to ping the address. Ensure it's a valid domain.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">📡 Ping & Latency Tester</h2>

            <div className="flex gap-2">
                <input
                    type="text"
                    placeholder="Enter domain (e.g., google.com)"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={handlePing}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition"
                >
                    Ping
                </button>
            </div>

            {loading && <p className="mt-4 text-blue-500">Pinging...</p>}

            {error && <p className="mt-4 text-red-500">{error}</p>}

            {results.length > 0 && (
                <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-3">Ping Results:</h3>
                    <div className="p-4 border rounded-md bg-gray-50">
                        <p><strong>Min Latency:</strong> {Math.min(...results).toFixed(2)} ms</p>
                        <p><strong>Max Latency:</strong> {Math.max(...results).toFixed(2)} ms</p>
                        <p><strong>Average Latency:</strong> {(results.reduce((a, b) => a + b, 0) / results.length).toFixed(2)} ms</p>
                    </div>
                </div>
            )}
        </div>
    );
}

"use client";

import { useState } from "react";

const recordTypes = ["A", "AAAA", "CNAME", "MX", "TXT", "NS", "SOA"];

export default function DnsLookup() {
    const [domain, setDomain] = useState("");
    const [dnsRecords, setDnsRecords] = useState<{ name: string; type: string; data: string }[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const fetchDnsRecords = async () => {
        if (!domain.trim()) {
            setError("Please enter a valid domain.");
            return;
        }

        setLoading(true);
        setError("");
        setDnsRecords([]);

        try {
            const allRecords: { name: string; type: string; data: string }[] = [];

            for (const type of recordTypes) {
                const response = await fetch(`https://dns.google/resolve?name=${domain}&type=${type}`);
                const data = await response.json();

                if (data.Answer) {
                    data.Answer.forEach((record: any) => {
                        allRecords.push({
                            name: record.name.replace(/\.$/, ""), // Remove trailing dot for clarity
                            type,
                            data: record.data.replace(/\.$/, ""),
                        });
                    });
                }
            }

            if (allRecords.length === 0) {
                setError("No DNS records found.");
            } else {
                setDnsRecords(allRecords);
            }
        } catch (err) {
            setError("Failed to fetch DNS records. Please try again.");
        }

        setLoading(false);
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">🔍 DNS Lookup</h2>

            <div className="flex gap-2">
                <input
                    type="text"
                    placeholder="Enter domain (e.g., example.com)"
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={fetchDnsRecords}
                    disabled={loading}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition disabled:bg-gray-400"
                >
                    {loading ? "Searching..." : "Lookup"}
                </button>
            </div>

            {error && <p className="text-red-500 mt-3">{error}</p>}

            {dnsRecords.length > 0 && (
                <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-3">Results for {domain}:</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
                                    <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
                                    <th className="border border-gray-300 px-4 py-2 text-left">Data</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dnsRecords.map((record, index) => (
                                    <tr key={index} className="hover:bg-gray-100">
                                        <td className="border border-gray-300 px-4 py-2">{record.type}</td>
                                        <td className="border border-gray-300 px-4 py-2">{record.name}</td>
                                        <td className="border border-gray-300 px-4 py-2">{record.data}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}

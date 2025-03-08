"use client";

import { useState } from "react";
import dummyData from "@/data/site/dummy.json";
import { ClipboardIcon, CheckIcon, ExclamationCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";

type DummyDataKeys = keyof typeof dummyData;

const categories: DummyDataKeys[] = Object.keys(dummyData) as DummyDataKeys[];

export default function DummyPage() {
    const [selectedCategory, setSelectedCategory] = useState<DummyDataKeys | null>(null);
    const [fetchedData, setFetchedData] = useState<string | null>(null);
    const [isFetching, setIsFetching] = useState(false);
    const [copied, setCopied] = useState(false);

    // Handle category selection (CLEAR previous data)
    const handleCategorySelect = (category: DummyDataKeys) => {
        setSelectedCategory(category);
        setFetchedData(null); // Clear old data
    };

    // Handle fetching dummy data
    const handleFetchData = () => {
        if (!selectedCategory) return;
        setIsFetching(true);
        setTimeout(() => {
            setFetchedData(JSON.stringify(dummyData[selectedCategory], null, 2));
            setIsFetching(false);
        }, 500);
    };

    // Handle copy to clipboard
    const handleCopy = async () => {
        if (!fetchedData) return;
        await navigator.clipboard.writeText(fetchedData);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    // Handle clearing selection
    const handleClear = () => {
        setSelectedCategory(null);
        setFetchedData(null);
    };

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center">📊 Dummy Data Generator</h1>

            {/* Info Message - Always Visible */}
            <div
                className={`flex items-center gap-2 p-3 rounded-md mb-4 border ${selectedCategory
                        ? "bg-green-100 text-green-800 border-green-300"
                        : "bg-yellow-100 text-yellow-800 border-yellow-300"
                    }`}
            >
                <ExclamationCircleIcon className="w-6 h-6" />
                <span>
                    {selectedCategory
                        ? `Category selected: ${selectedCategory}`
                        : "Please select a category to get data."}
                </span>

                {/* Clear Selection Button */}
                {selectedCategory && (
                    <button
                        onClick={handleClear}
                        className="ml-auto flex items-center gap-1 text-red-600 hover:text-red-800 transition"
                    >
                        <XCircleIcon className="w-5 h-5" />
                        Clear
                    </button>
                )}
            </div>

            {/* Category Selection */}
            <div className="flex flex-wrap gap-3 justify-center mb-6">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => handleCategorySelect(category)}
                        className={`px-4 py-2 rounded-lg font-semibold transition ${selectedCategory === category
                                ? "bg-blue-600 text-white"
                                : "bg-gray-200 hover:bg-gray-300"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Fetch Button */}
            {selectedCategory && (
                <div className="text-center mb-4">
                    <button
                        onClick={handleFetchData}
                        disabled={isFetching}
                        className={`px-5 py-2 rounded-lg font-semibold transition ${isFetching
                                ? "bg-gray-400 text-white cursor-not-allowed"
                                : "bg-green-600 text-white hover:bg-green-700"
                            }`}
                    >
                        {isFetching ? "Fetching..." : `Get ${selectedCategory} Data`}
                    </button>
                </div>
            )}

            {/* Display Data */}
            {fetchedData && (
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300 relative">
                    <h2 className="text-xl font-semibold mb-4 capitalize">{selectedCategory} Data</h2>
                    <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-auto whitespace-pre-wrap border border-gray-200">
                        {fetchedData}
                    </pre>

                    {/* Copy to Clipboard Button */}
                    <button
                        onClick={handleCopy}
                        className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-md hover:bg-gray-700 transition"
                    >
                        {copied ? <CheckIcon className="w-5 h-5 text-green-400" /> : <ClipboardIcon className="w-5 h-5" />}
                        {copied ? "Copied!" : "Copy"}
                    </button>
                </div>
            )}
        </div>
    );
}

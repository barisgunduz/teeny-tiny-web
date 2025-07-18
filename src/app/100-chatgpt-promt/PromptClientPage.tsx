"use client";

import { useState } from "react";
import prompts from "@/data/site/prompts.json";
import CopyToClipboard from "@/components/CopyToClipboard";
import Modal from "@/components/Modal";

type Prompt = {
    id: number;
    goal: string;
    prompt: string;
    note: string;
    category: string;
};

const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
        case "blog":
            return "bg-green-100 text-green-800";
        case "social":
            return "bg-blue-100 text-blue-800";
        case "code":
            return "bg-purple-100 text-purple-800";
        case "marketing":
            return "bg-pink-100 text-pink-800";
        case "video":
            return "bg-yellow-100 text-yellow-800";
        case "education":
            return "bg-indigo-100 text-indigo-800";
        case "creative":
            return "bg-orange-100 text-orange-800";
        case "community":
            return "bg-red-100 text-red-800";
        default:
            return "bg-gray-100 text-gray-700";
    }
};

export default function PromptClientPage() {
    const [selected, setSelected] = useState<Prompt | null>(null);
    const [activeCategory, setActiveCategory] = useState<string>("all");

    const allCategories = Array.from(
        new Set(prompts.map((item) => item.category.toLowerCase()))
    );

    const filteredPrompts =
        activeCategory === "all"
            ? prompts
            : prompts.filter((item) => item.category.toLowerCase() === activeCategory);

    return (
        <div className="p-4 max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center">🧠 100 ChatGPT Prompts</h1>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
                <button
                    className={`px-3 py-1 text-sm rounded-full border ${activeCategory === "all"
                            ? "bg-black text-white"
                            : "bg-white text-black hover:bg-gray-100"
                        }`}
                    onClick={() => setActiveCategory("all")}
                >
                    All
                </button>
                {allCategories.map((cat) => (
                    <button
                        key={cat}
                        className={`px-3 py-1 text-sm rounded-full border capitalize ${activeCategory === cat
                                ? "bg-black text-white"
                                : "bg-white text-black hover:bg-gray-100"
                            }`}
                        onClick={() => setActiveCategory(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Prompt Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredPrompts.map((item) => (
                    <div
                        key={item.id}
                        onClick={() => setSelected(item)}
                        className="cursor-pointer border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition bg-white flex flex-col justify-between"
                    >
                        <div>
                            <p className="mb-1">
                                <strong>🎯 Purpose:</strong> {item.goal}
                            </p>
                            <p className="mb-1">
                                <strong>💬 Prompt:</strong>{" "}
                                {item.prompt.length > 75
                                    ? `${item.prompt.slice(0, 75)}...`
                                    : item.prompt}
                            </p>
                            <p className="text-sm text-gray-500 mb-2">
                                <strong>📌 Note:</strong> {item.note}
                            </p>
                        </div>

                        <div className="mt-auto pt-3">
                            <span
                                className={`inline-block px-2 py-1 rounded text-xs font-medium ${getCategoryColor(
                                    item.category
                                )}`}
                            >
                                {item.category}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selected && (
                <Modal isOpen={!!selected} onClose={() => setSelected(null)}>
                    <button
                        onClick={() => setSelected(null)}
                        className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
                    >
                        ×
                    </button>
                    <h2 className="text-2xl font-bold mb-4">{selected.goal}</h2>
                    <p className="text-gray-800 whitespace-pre-line leading-relaxed mb-6">
                        {selected.prompt}
                    </p>

                    <hr className="my-4 border-gray-200" />

                    <div className="flex items-center justify-between">
                        <span
                            className={`inline-block px-2 py-1 rounded text-xs font-medium ${getCategoryColor(
                                selected.category
                            )}`}
                        >
                            {selected.category}
                        </span>
                        <CopyToClipboard text={selected.prompt} />
                    </div>
                </Modal>
            )}
        </div>
    );
}

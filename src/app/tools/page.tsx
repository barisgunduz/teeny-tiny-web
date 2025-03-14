"use client";

import { useState } from "react";
import toolsData from "@/data/site/tools.json";
import Link from "next/link";
import { ComponentType } from "react";
import * as MdIcons from "react-icons/md";

export default function ToolsPage() {
    const [searchQuery, setSearchQuery] = useState("");

    // Sort tools alphabetically
    const sortedTools = [...toolsData].sort((a, b) => a.title.localeCompare(b.title));

    // Filter tools based on search query
    const filteredTools = sortedTools.filter((tool) =>
        tool.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="p-8 min-h-screen bg-gray-50">
            <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">
                🔧 IT Tools
            </h1>
            <p className="text-lg text-gray-600 text-center mb-8">
                A collection of useful tools for developers and IT professionals.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto mb-6">
                <input
                    type="text"
                    placeholder="Search tools..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Tools Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredTools.map((tool) => {
                    const IconComponent =
                        (MdIcons as Record<string, ComponentType<{ className?: string }>>)[
                        tool.icon
                        ] || MdIcons.MdBuild;

                    return (
                        <Link
                            key={tool.slug}
                            href={`/tools/${tool.slug}`}
                            className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center hover:shadow-xl transition border border-gray-200 hover:border-blue-500"
                        >
                            <IconComponent className="text-5xl text-blue-500 mb-3" />
                            <h3 className="text-xl font-semibold text-gray-800 text-center">
                                {tool.title}
                            </h3>
                            <p className="text-gray-600 text-center text-sm mt-2">
                                {tool.description}
                            </p>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

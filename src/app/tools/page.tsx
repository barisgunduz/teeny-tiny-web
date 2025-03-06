"use client";

import Link from "next/link";
import * as MdIcons from "react-icons/md";
import toolsData from "@/data/site/tools.json";
import { ComponentType } from "react";

export default function ToolsPage() {
    return (
        <div className="p-8 min-h-screen bg-gray-50">
            <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">
                🔧 IT Tools
            </h1>
            <p className="text-lg text-gray-600 text-center mb-8">
                A collection of useful tools for developers and IT professionals.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {toolsData.map((tool) => {
                    // TypeScript'in tip hatasını önlemek için güvenli bir şekilde ikon belirleme
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

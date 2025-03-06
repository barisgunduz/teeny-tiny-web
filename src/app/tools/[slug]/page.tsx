"use client";

import { useParams } from "next/navigation";
import toolsData from "@/data/site/tools.json"; // ✅ Doğru dosya yolu
import JsonFormatter from "./components/JsonFormatter";
import Base64Encoder from "./components/Base64Encoder";
import TimestampConverter from "./components/TimestampConverter";
import Link from "next/link";
import { JSX } from "react";

// Tool bileşenlerini belirleyen nesne
const toolsMap: Record<string, JSX.Element> = {
    "json-formatter": <JsonFormatter />,
    "base64-encoder": <Base64Encoder />,
    "timestamp-converter": <TimestampConverter />,
};

export default function ToolPage() {
    const params = useParams();
    const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug; // 🛠 Slug'ı string olarak zorunlu kıl

    const tool = toolsData.find((t) => t.slug === slug); // JSON'dan ilgili tool'u çek

    if (!tool || !slug || !toolsMap[slug]) {
        return (
            <div className="p-6 text-center">
                <h1 className="text-2xl font-semibold text-red-600">
                    Tool not found ❌
                </h1>
                <p className="mt-2 text-gray-500">
                    The tool you're looking for does not exist or has been removed.
                </p>
                <Link href="/tools" className="mt-4 inline-block text-blue-600 hover:underline">
                    ← Back to Tools
                </Link>
            </div>
        );
    }

    return (
        <div className="mx-auto p-6">
            {/* Tool Başlığı ve Açıklaması */}
            <div className="mb-6 text-center">
                <h1 className="text-3xl font-bold text-gray-900">{tool.title}</h1>
                <p className="text-gray-600 mt-2">{tool.description}</p>
            </div>

            {/* Tool İçeriği */}
            {toolsMap[slug]}

            {/* Tools Sayfasına Dön Linki */}
            <div className="mt-6 text-center">
                <Link href="/tools" className="text-blue-600 hover:underline">
                    ← Back to Tools
                </Link>
            </div>
        </div>
    );
}

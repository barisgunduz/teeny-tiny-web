"use client";

import toolsData from "@/data/site/tools.json";
import Link from "next/link";
import { useParams } from "next/navigation";
import { JSX } from "react";
import Base64Encoder from "./components/Base64Encoder";
import ColorConverter from "./components/ColorConverter";
import HashGenerator from "./components/HashGenerator";
import HtmlEncoderDecoder from "./components/HtmlEncoderDecoder";
import IPLookup from "./components/IPLookup";
import JsonFormatter from "./components/JsonFormatter";
import JWTDecoder from "./components/JWTDecoder";
import LoremIpsumGenerator from "./components/LoremIpsumGenerator";
import MacLookup from "./components/MacLookup";
import RegexTester from "./components/RegexTester";
import TimestampConverter from "./components/TimestampConverter";
import UrlEncoderDecoder from "./components/UrlEncoderDecoder";
import UuidGenerator from "./components/UuidGenerator";

const toolsMap: Record<string, JSX.Element> = {
    "json-formatter": <JsonFormatter />,
    "base64-encoder": <Base64Encoder />,
    "timestamp-converter": <TimestampConverter />,
    "uuid-generator": <UuidGenerator />,
    "url-encoder-decoder": <UrlEncoderDecoder />,
    "html-encoder-decoder": <HtmlEncoderDecoder />,
    "hash-generator": <HashGenerator />,
    "ip-lookup": <IPLookup />,
    "jwt-decoder": <JWTDecoder />,
    "color-converter": <ColorConverter />,
    "mac-lookup": <MacLookup />,
    "regex-tester": <RegexTester />,
    "lorem-ipsum-generator": <LoremIpsumGenerator />
};

export default function ToolPage() {
    const params = useParams();
    const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

    const tool = toolsData.find((t) => t.slug === slug);

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

            <div className="mb-6 text-center">
                <h1 className="text-3xl font-bold text-gray-900">{tool.title}</h1>
                <p className="text-gray-600 mt-2">{tool.description}</p>
            </div>

            {toolsMap[slug]}

            <div className="mt-6 text-center">
                <Link href="/tools" className="text-blue-600 hover:underline">
                    ← Back to Tools
                </Link>
            </div>
        </div>
    );
}

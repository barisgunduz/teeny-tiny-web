"use client";

import { useState } from "react";
import { FaCopy } from "react-icons/fa";
import xml2js from "xml2js";

const JsonXmlConverter = () => {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [conversionType, setConversionType] = useState<"json-to-xml" | "xml-to-json">("json-to-xml");
    const [copySuccess, setCopySuccess] = useState(false);

    // Convert JSON to XML
    const convertJsonToXml = (jsonStr: string) => {
        try {
            const jsonObj = JSON.parse(jsonStr);
            const builder = new xml2js.Builder();
            return builder.buildObject(jsonObj);
        } catch (error) {
            return "Invalid JSON format.";
        }
    };

    // Convert XML to JSON
    const convertXmlToJson = async (xmlStr: string) => {
        try {
            const parser = new xml2js.Parser({ explicitArray: false });
            const result = await parser.parseStringPromise(xmlStr);
            return JSON.stringify(result, null, 2);
        } catch (error) {
            return "Invalid XML format.";
        }
    };

    // Handle conversion
    const handleConvert = async () => {
        if (conversionType === "json-to-xml") {
            setOutput(convertJsonToXml(input));
        } else {
            const result = await convertXmlToJson(input);
            setOutput(result);
        }
    };

    // Copy output to clipboard
    const handleCopy = async () => {
        if (!output) return;
        try {
            await navigator.clipboard.writeText(output);
            setCopySuccess(true);
            setTimeout(() => setCopySuccess(false), 2000);
        } catch (error) {
            console.error("Failed to copy:", error);
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">JSON ↔ XML Converter</h2>

            {/* Input Area */}
            <textarea
                className="w-full p-2 border rounded mb-4"
                rows={6}
                placeholder={conversionType === "json-to-xml" ? "Enter JSON here..." : "Enter XML here..."}
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            {/* Conversion Type Selector */}
            <div className="flex justify-between mb-4">
                <button
                    className={`px-4 py-2 rounded-md ${conversionType === "json-to-xml" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                    onClick={() => setConversionType("json-to-xml")}
                >
                    JSON to XML
                </button>
                <button
                    className={`px-4 py-2 rounded-md ${conversionType === "xml-to-json" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                    onClick={() => setConversionType("xml-to-json")}
                >
                    XML to JSON
                </button>
            </div>

            {/* Convert Button */}
            <button
                className="w-full bg-green-500 text-white p-2 rounded-md mb-4 hover:bg-green-600 transition"
                onClick={handleConvert}
            >
                Convert
            </button>

            {/* Output Area */}
            <textarea
                className="w-full p-2 border rounded mb-4"
                rows={6}
                placeholder="Converted result will appear here..."
                value={output}
                readOnly
            />

            {/* Copy to Clipboard */}
            <button
                className="w-full flex items-center justify-center bg-gray-700 text-white p-2 rounded-md hover:bg-gray-800 transition"
                onClick={handleCopy}
            >
                <FaCopy className="mr-2" />
                {copySuccess ? "Copied!" : "Copy to Clipboard"}
            </button>
        </div>
    );
};

export default JsonXmlConverter;

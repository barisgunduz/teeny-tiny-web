"use client";
import { useState } from "react";
import { FaCopy, FaCheck } from "react-icons/fa";

const LoremIpsumGenerator = () => {
    const [paragraphs, setParagraphs] = useState(2);
    const [generatedText, setGeneratedText] = useState("");
    const [copied, setCopied] = useState(false);

    const loremIpsumSource = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Nullam auctor felis eget aliquam dignissim.",
        "Vivamus euismod ligula nec tincidunt tincidunt.",
        "Orci dui tincidunt augue, ut ultricies magna justo at odio.",
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
        "Phasellus tristique nisi at ligula vulputate, ut elementum arcu dapibus.",
        "Mauris venenatis diam vel justo eleifend, et tincidunt arcu vehicula.",
        "Cras vehicula velit ut sapien malesuada, sit amet fermentum nulla viverra.",
        "Suspendisse potenti. Duis in eros vel purus tincidunt efficitur.",
        "Curabitur quis elit feugiat, luctus magna ut, consequat nisi.",
        "Nam scelerisque nunc vel turpis vehicula, vel feugiat erat pellentesque.",
        "Etiam ultricies felis sit amet nisl feugiat scelerisque.",
        "Proin id augue non sapien tincidunt tincidunt.",
        "Donec accumsan libero nec ipsum gravida, a ullamcorper nulla efficitur.",
    ];

    // Generate Lorem Ipsum text
    const generateLoremIpsum = () => {
        const paragraphsArray = [];
        for (let i = 0; i < paragraphs; i++) {
            const shuffled = loremIpsumSource.sort(() => 0.5 - Math.random());
            const paragraph = shuffled.slice(0, 4).join(" "); // Generate paragraph with 4 random lines
            paragraphsArray.push(paragraph);
        }
        setGeneratedText(paragraphsArray.join("\n\n"));
        setCopied(false);
    };

    // Copy generated text to clipboard
    const copyToClipboard = () => {
        navigator.clipboard.writeText(generatedText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Lorem Ipsum Generator</h2>

            {/* Paragraph count input */}
            <div className="mb-4">
                <label className="block font-medium mb-1">Number of Paragraphs:</label>
                <input
                    type="number"
                    value={paragraphs}
                    onChange={(e) => setParagraphs(Math.max(1, parseInt(e.target.value) || 1))}
                    className="border rounded p-2 w-full"
                    min="1"
                />
            </div>

            {/* Generate button */}
            <button
                onClick={generateLoremIpsum}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
                Generate Lorem Ipsum
            </button>

            {/* Display generated text */}
            {generatedText && (
                <div className="mt-4 p-4 bg-gray-100 rounded-lg relative">
                    <pre className="whitespace-pre-wrap">{generatedText}</pre>

                    {/* Copy to clipboard button */}
                    <button
                        onClick={copyToClipboard}
                        className={`absolute top-2 right-2 flex items-center gap-2 px-3 py-1 text-sm rounded-md ${copied ? "bg-green-500 text-white" : "bg-gray-600 text-white hover:bg-gray-800"
                            } transition-all`}
                        title="Copy to clipboard"
                    >
                        {copied ? <FaCheck /> : <FaCopy />}
                        {copied ? "Copied!" : "Copy"}
                    </button>
                </div>
            )}
        </div>
    );
};

export default LoremIpsumGenerator;

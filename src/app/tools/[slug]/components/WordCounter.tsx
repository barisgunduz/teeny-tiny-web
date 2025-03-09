"use client";

import { useState } from "react";

export default function WordCounter() {
    const [text, setText] = useState("");
    const [wordCount, setWordCount] = useState(0);
    const [charCount, setCharCount] = useState(0);
    const [sentenceCount, setSentenceCount] = useState(0);
    const [paragraphCount, setParagraphCount] = useState(0);

    const analyzeText = (input: string) => {
        const words = input.trim().split(/\s+/).filter((word) => word.length > 0);
        const sentences = input.split(/[.!?]/).filter((sentence) => sentence.trim().length > 0);
        const paragraphs = input.split(/\n+/).filter((paragraph) => paragraph.trim().length > 0);

        setWordCount(words.length);
        setCharCount(input.length);
        setSentenceCount(sentences.length);
        setParagraphCount(paragraphs.length);
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">🔍 Word Counter & Analyzer</h2>
            <p className="text-gray-600 mb-4">Analyze the number of words, characters, sentences, and paragraphs.</p>

            <textarea
                className="w-full h-32 p-3 border rounded-md"
                placeholder="Enter text here..."
                value={text}
                onChange={(e) => {
                    setText(e.target.value);
                    analyzeText(e.target.value);
                }}
            />

            <div className="grid grid-cols-2 gap-4 mt-4 text-gray-800">
                <div className="p-3 bg-gray-100 rounded-md">
                    <strong>Words:</strong> {wordCount}
                </div>
                <div className="p-3 bg-gray-100 rounded-md">
                    <strong>Characters:</strong> {charCount}
                </div>
                <div className="p-3 bg-gray-100 rounded-md">
                    <strong>Sentences:</strong> {sentenceCount}
                </div>
                <div className="p-3 bg-gray-100 rounded-md">
                    <strong>Paragraphs:</strong> {paragraphCount}
                </div>
            </div>
        </div>
    );
}

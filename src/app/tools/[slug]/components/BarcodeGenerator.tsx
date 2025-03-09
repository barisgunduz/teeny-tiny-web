"use client";

import { useState, useEffect, useRef } from "react";
import JsBarcode from "jsbarcode";

export default function BarcodeGenerator() {
    const [input, setInput] = useState("");
    const barcodeRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        if (input.trim() !== "" && barcodeRef.current) {
            try {
                JsBarcode(barcodeRef.current, input, {
                    format: "CODE128",
                    displayValue: true,
                    background: "#ffffff",
                    lineColor: "#000000",
                });
            } catch (error) {
                console.error("Barcode generation error:", error);
            }
        }
    }, [input]);

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">📊 Barcode Generator</h2>
            <p className="text-gray-600 mb-4">Enter text or numbers to generate a barcode.</p>

            <input
                type="text"
                className="w-full p-3 border rounded-md"
                placeholder="Enter barcode data..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            {input.trim() && (
                <div className="mt-4 flex flex-col items-center">
                    <svg ref={barcodeRef}></svg>
                </div>
            )}
        </div>
    );
}

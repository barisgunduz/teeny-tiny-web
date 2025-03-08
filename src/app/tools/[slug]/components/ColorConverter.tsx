"use client";

import { useState } from "react";

export default function ColorConverter() {
    const [hex, setHex] = useState("#ff5733");
    const [rgb, setRgb] = useState("rgb(255, 87, 51)");
    const [error, setError] = useState("");

    const hexToRgb = (hex: string) => {
        setError("");
        if (!/^#?[0-9A-Fa-f]{6}$/.test(hex)) {
            setError("Invalid HEX color format.");
            return "";
        }
        let formattedHex = hex.replace("#", "");
        let r = parseInt(formattedHex.substring(0, 2), 16);
        let g = parseInt(formattedHex.substring(2, 4), 16);
        let b = parseInt(formattedHex.substring(4, 6), 16);
        return `rgb(${r}, ${g}, ${b})`;
    };

    const rgbToHex = (rgb: string) => {
        setError("");
        const match = rgb.match(/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/);
        if (!match) {
            setError("Invalid RGB color format.");
            return "";
        }
        let r = parseInt(match[1]).toString(16).padStart(2, "0");
        let g = parseInt(match[2]).toString(16).padStart(2, "0");
        let b = parseInt(match[3]).toString(16).padStart(2, "0");
        return `#${r}${g}${b}`;
    };

    return (
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-center">🎨 Color Converter</h2>

            {/* HEX to RGB */}
            <div className="mb-4">
                <label className="block font-semibold mb-1">HEX to RGB:</label>
                <div className="flex items-center gap-2">
                    <input
                        type="color"
                        value={hex}
                        onChange={(e) => {
                            setHex(e.target.value);
                            setRgb(hexToRgb(e.target.value));
                        }}
                        className="w-12 h-12 cursor-pointer border rounded-md"
                    />
                    <input
                        type="text"
                        className="flex-1 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                        placeholder="#FF5733"
                        value={hex}
                        onChange={(e) => {
                            setHex(e.target.value);
                            setRgb(hexToRgb(e.target.value));
                        }}
                    />
                </div>
                {rgb && <p className="mt-2 text-gray-700">RGB: {rgb}</p>}
            </div>

            {/* RGB to HEX */}
            <div>
                <label className="block font-semibold mb-1">RGB to HEX:</label>
                <input
                    type="text"
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                    placeholder="rgb(255, 87, 51)"
                    value={rgb}
                    onChange={(e) => {
                        setRgb(e.target.value);
                        setHex(rgbToHex(e.target.value));
                    }}
                />
                {hex && <p className="mt-2 text-gray-700">HEX: {hex}</p>}
            </div>

            {error && <p className="text-red-500 mt-3">{error}</p>}
        </div>
    );
}

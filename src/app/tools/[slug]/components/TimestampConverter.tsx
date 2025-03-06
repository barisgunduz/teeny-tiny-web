"use client";
import { useState } from "react";
import { MdAccessTime } from "react-icons/md";

export default function TimestampConverter() {
    const [timestamp, setTimestamp] = useState<string>("");
    const [date, setDate] = useState<string>("");
    const [convertedDate, setConvertedDate] = useState<string>("");
    const [convertedTimestamp, setConvertedTimestamp] = useState<string>("");

    // Timestamp -> Human Readable Date
    const handleTimestampChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setTimestamp(value);

        const parsedTimestamp = parseInt(value, 10);
        if (!isNaN(parsedTimestamp)) {
            const dateObj = new Date(parsedTimestamp * 1000);
            setConvertedDate(dateObj.toLocaleString());
        } else {
            setConvertedDate("");
        }
    };

    // Date -> Timestamp
    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setDate(value);

        const dateObj = new Date(value);
        if (!isNaN(dateObj.getTime())) {
            setConvertedTimestamp(Math.floor(dateObj.getTime() / 1000).toString());
        } else {
            setConvertedTimestamp("");
        }
    };

    // Copy to Clipboard
    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <MdAccessTime className="text-blue-500 text-3xl" />
                Timestamp Converter
            </h1>
            <p className="text-gray-600 mt-2">
                Convert Unix timestamps to readable dates and vice versa.
            </p>

            {/* Timestamp -> Date */}
            <div className="mt-6">
                <label className="block text-gray-700 font-medium">
                    Enter Unix Timestamp:
                </label>
                <div className="flex gap-2 mt-2">
                    <input
                        type="number"
                        value={timestamp}
                        onChange={handleTimestampChange}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter Unix timestamp..."
                    />
                    <button
                        onClick={() => copyToClipboard(convertedDate)}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                    >
                        Copy
                    </button>
                </div>
                {convertedDate && (
                    <p className="mt-2 text-gray-800 font-medium">🕰️ {convertedDate}</p>
                )}
            </div>

            {/* Date -> Timestamp */}
            <div className="mt-6">
                <label className="block text-gray-700 font-medium">
                    Select a Date & Time:
                </label>
                <div className="flex gap-2 mt-2">
                    <input
                        type="datetime-local"
                        value={date}
                        onChange={handleDateChange}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        onClick={() => copyToClipboard(convertedTimestamp)}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                    >
                        Copy
                    </button>
                </div>
                {convertedTimestamp && (
                    <p className="mt-2 text-gray-800 font-medium">
                        🔢 {convertedTimestamp}
                    </p>
                )}
            </div>
        </div>
    );
}

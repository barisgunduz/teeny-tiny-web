"use client";

import { useState } from "react";
import { DateTime } from "luxon";

const timeZones = [
    "America/New_York",
    "Europe/London",
    "Asia/Tokyo",
    "Australia/Sydney",
    "America/Los_Angeles",
    "Europe/Berlin",
    "Asia/Dubai",
    "Asia/Kolkata",
    "Africa/Johannesburg",
    "Pacific/Honolulu",
];

export default function TimeZoneConverter() {
    const [selectedTime, setSelectedTime] = useState<string>("");
    const [selectedZones, setSelectedZones] = useState<string[]>(["Europe/London"]); // Default selection
    const [convertedTimes, setConvertedTimes] = useState<{ zone: string; time: string }[]>([]);

    const convertTime = () => {
        if (!selectedTime) return;

        const utcTime = DateTime.fromISO(selectedTime, { zone: "utc" });

        const results = selectedZones.map((zone) => ({
            zone,
            time: utcTime.setZone(zone).toFormat("yyyy-MM-dd HH:mm:ss ZZZZ"),
        }));

        setConvertedTimes(results);
    };

    const handleZoneChange = (zone: string) => {
        setSelectedZones((prev) =>
            prev.includes(zone) ? prev.filter((z) => z !== zone) : [...prev, zone]
        );
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">🕒 Time Zone Converter</h2>

            <div className="flex flex-col gap-3">
                <label className="text-gray-700 font-medium">Select Date & Time (UTC):</label>
                <input
                    type="datetime-local"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Target Time Zones */}
                <label className="text-gray-700 font-medium">Select Time Zones:</label>
                <div className="grid grid-cols-2 gap-2">
                    {timeZones.map((zone) => (
                        <label key={zone} className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                checked={selectedZones.includes(zone)}
                                onChange={() => handleZoneChange(zone)}
                                className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                            />
                            <span className="text-gray-700">{zone}</span>
                        </label>
                    ))}
                </div>

                <button
                    onClick={convertTime}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition mt-2"
                >
                    Convert Time
                </button>
            </div>

            {/* Converted Times Display */}
            {convertedTimes.length > 0 && (
                <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-3">Converted Times:</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="border border-gray-300 px-4 py-2 text-left">Time Zone</th>
                                    <th className="border border-gray-300 px-4 py-2 text-left">Converted Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {convertedTimes.map((entry, index) => (
                                    <tr key={index} className="hover:bg-gray-100">
                                        <td className="border border-gray-300 px-4 py-2">{entry.zone}</td>
                                        <td className="border border-gray-300 px-4 py-2">{entry.time}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}

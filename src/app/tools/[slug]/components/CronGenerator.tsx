"use client";

import { useState } from "react";
import CopyToClipboard from "@/components/CopyToClipboard";

export default function CronGenerator() {
    const [minute, setMinute] = useState("*");
    const [hour, setHour] = useState("*");
    const [dayOfMonth, setDayOfMonth] = useState("*");
    const [month, setMonth] = useState("*");
    const [dayOfWeek, setDayOfWeek] = useState("*");

    const cronExpression = `${minute} ${hour} ${dayOfMonth} ${month} ${dayOfWeek}`;

    return (
        <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">⏳ Cron Expression Generator</h2>
            <p className="text-gray-600 mb-4">Generate a cron expression for scheduling tasks.</p>

            {/* Input Fields */}
            <div className="grid grid-cols-2 gap-4">
                {[
                    { label: "Minute", value: minute, setValue: setMinute, placeholder: "0-59" },
                    { label: "Hour", value: hour, setValue: setHour, placeholder: "0-23" },
                    { label: "Day of Month", value: dayOfMonth, setValue: setDayOfMonth, placeholder: "1-31" },
                    { label: "Month", value: month, setValue: setMonth, placeholder: "1-12" },
                    { label: "Day of Week", value: dayOfWeek, setValue: setDayOfWeek, placeholder: "0-6 (Sunday = 0)" },
                ].map((field, index) => (
                    <div key={index}>
                        <label className="block text-gray-700">{field.label}:</label>
                        <input
                            type="text"
                            value={field.value}
                            onChange={(e) => field.setValue(e.target.value)}
                            className="w-full p-2 border rounded-md"
                            placeholder={field.placeholder}
                        />
                    </div>
                ))}
            </div>

            {/* ✅ Fixed: Correctly Positioned Copy Button */}
            <div className="mt-6 bg-gray-100 p-4 rounded-md flex items-center justify-between relative">
                <p className="text-lg font-mono bg-gray-200 p-2 rounded-md flex-1 text-center">{cronExpression}</p>
                <div className="ml-4">
                    <CopyToClipboard text={cronExpression} />
                </div>
            </div>
        </div>
    );
}

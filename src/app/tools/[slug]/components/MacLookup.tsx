"use client";
import vendorsData from "@/data/site/vendors.json"; // JSON'u import et
import { useState } from "react";

export default function MacLookup() {
    const [mac, setMac] = useState("");
    const [vendor, setVendor] = useState("");

    const lookupMac = () => {
        const formattedMac = mac
          .trim()
          .toUpperCase()
          .slice(0, 8)
          .replace(/-/g, ":")
          .replace(/\./g, ":"); // Eğer nokta ile ayrılmışsa düzelt
      
        console.log("🚀 ~ lookupMac ~ formattedMac:", formattedMac);
      
        // JSON'un her ihtimale karşı string-key olarak kullanımı
        const vendorMap: Record<string, string> = vendorsData as Record<string, string>;
      
        console.log("🚀 ~ lookupMac ~ vendorsData[formattedMac]:", vendorMap[formattedMac]);
      
        if (vendorMap.hasOwnProperty(formattedMac)) {
          setVendor(vendorMap[formattedMac]);
        } else {
          setVendor("Unknown Vendor");
        }
      };
      


    return (
        <div className="p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">MAC Address Lookup</h2>
            <input
                type="text"
                value={mac}
                onChange={(e) => setMac(e.target.value)}
                placeholder="Enter MAC Address (e.g., 18:3E:EF:F3:1B:D9)"
                className="w-full p-2 border border-gray-300 rounded-md"
            />
            <button
                onClick={lookupMac}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md"
            >
                Lookup
            </button>
            <p className="mt-4 text-lg font-semibold">
                Vendor: <span className="text-blue-600">{vendor}</span>
            </p>
        </div>
    );
}

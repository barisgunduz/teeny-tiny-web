"use client";

import { useState } from "react";

export default function JWTDecoder() {
    const [jwt, setJwt] = useState("");
    const [decoded, setDecoded] = useState<any>(null);
    const [error, setError] = useState("");

    const decodeJWT = () => {
        setError("");
        setDecoded(null);

        if (!jwt) {
            setError("Please enter a valid JWT token.");
            return;
        }

        try {
            const parts = jwt.split(".");
            if (parts.length !== 3) {
                throw new Error("Invalid JWT format.");
            }

            const decodeBase64 = (str: string) =>
                JSON.parse(atob(str.replace(/-/g, "+").replace(/_/g, "/")));

            const header = decodeBase64(parts[0]);
            const payload = decodeBase64(parts[1]);
            const signature = parts[2];

            setDecoded({ header, payload, signature });
        } catch (err) {
            setError("Invalid JWT token format.");
        }
    };

    return (
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-center">🔑 JWT Decoder</h2>
            <textarea
                className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                placeholder="Paste JWT token here..."
                value={jwt}
                onChange={(e) => setJwt(e.target.value)}
                rows={3}
            />
            <button
                className="mt-3 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
                onClick={decodeJWT}
            >
                Decode JWT
            </button>

            {error && <p className="text-red-500 mt-3">{error}</p>}

            {decoded && (
                <div className="mt-4 bg-gray-100 p-4 rounded-md text-sm">
                    <p><strong>Header:</strong></p>
                    <pre className="bg-white p-2 rounded-md">{JSON.stringify(decoded.header, null, 2)}</pre>

                    <p className="mt-2"><strong>Payload:</strong></p>
                    <pre className="bg-white p-2 rounded-md">{JSON.stringify(decoded.payload, null, 2)}</pre>

                    <p className="mt-2"><strong>Signature:</strong> {decoded.signature}</p>
                </div>
            )}
        </div>
    );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type Doc = {
  category: string;
  title: string;
  slug: string;
  content: string;
};

export default function DocsPage() {
  const [docs, setDocs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/api/docs")
      .then((res) => res.json())
      .then((data) => setDocs(data))
      .catch((error) => console.error("Failed to fetch docs:", error));
  }, []);

  const groupedDocs: Record<string, Doc[]> = docs.reduce((acc, doc: Doc) => {
    if (!acc[doc.category]) acc[doc.category] = [];
    acc[doc.category].push(doc);
    return acc;
  }, {} as Record<string, Doc[]>);

  const filteredDocs: Doc[] = docs.filter((doc: Doc) =>
    doc.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">📚 Documentation</h1>

      <input
        type="text"
        placeholder="Search Docs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mt-4 p-2 border rounded w-full"
      />

      {searchTerm === "" ? (
        Object.keys(groupedDocs).map((category) => (
          <section key={category} className="mt-6">
            <h2 className="text-xl font-semibold">{category}</h2>
            <ul className="mt-2 space-y-2">
              {groupedDocs[category].map((doc) => (
                <li key={doc.slug} className="border p-4 rounded-lg shadow-md bg-white">
                  <Link href={`/docs/${doc.slug}`} className="text-blue-500 hover:underline">
                    {doc.title} →
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))
      ) : (
        <ul className="mt-6 space-y-4">
          {filteredDocs.length > 0 ? (
            filteredDocs.map((doc) => (
              <li key={doc.slug} className="border p-4 rounded-lg shadow-md bg-white">
                <Link href={`/docs/${doc.slug}`} className="text-blue-500 hover:underline">
                  {doc.title} →
                </Link>
              </li>
            ))
          ) : (
            <p className="text-gray-500">No results found.</p>
          )}
        </ul>
      )}
    </main>
  );
}

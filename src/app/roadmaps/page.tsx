"use client";
import Link from 'next/link';
import roadmapsData from '@/data/roadmaps.json';
import { useState, useEffect } from 'react';

export default function RoadmapsPage() {
  const [progress, setProgress] = useState({});

  useEffect(() => {
    const savedProgress = localStorage.getItem("roadmap-progress");
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }
  }, []);

  return (
    <div className="p-8 min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">Explore Roadmaps</h1>
      <p className="text-lg text-gray-600 text-center mb-8">
        Learn step by step and improve your skills with structured roadmaps.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {roadmapsData.map((roadmap) => {
          const completedSteps = progress[roadmap.slug] || [];
          const totalSteps = roadmap.steps.length;
          const percentage = totalSteps > 0 ? (completedSteps.length / totalSteps) * 100 : 0;
          return (
            <Link key={roadmap.slug} href={`/roadmaps/${roadmap.slug}`}>
              <div className="p-6 bg-white shadow-lg rounded-xl hover:shadow-xl transition cursor-pointer border border-gray-200 hover:border-blue-500 h-52 flex flex-col justify-between">
                <h2 className="text-xl font-semibold text-gray-800">{roadmap.title.replace(' Roadmap', '')}</h2>
                <p className="text-gray-600 text-sm flex-grow overflow-hidden">{roadmap.description.split(' ').slice(0, 12).join(' ')}...</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <span className="mt-4 inline-block text-sm text-blue-600 font-semibold">View Details →</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
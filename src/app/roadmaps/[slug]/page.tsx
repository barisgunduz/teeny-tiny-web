"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import roadmapsData from "@/data/roadmaps.json";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

// Define correct types
type Roadmap = {
	slug: string;
	title: string;
	description: string;
	steps: string[];
};

type ProgressType = Record<string, number[]>;

export default function RoadmapDetailPage() {
	const params = useParams();
	const slug = Array.isArray(params.slug)
		? params.slug[0]
		: params.slug || "";
	const roadmap: Roadmap | undefined = roadmapsData.find(
		(r) => r.slug === slug
	);
	const [progress, setProgress] = useState<ProgressType>({});
	const [completedSteps, setCompletedSteps] = useState<number[]>([]);

	useEffect(() => {
		const savedProgress = localStorage.getItem("roadmap-progress");
		if (savedProgress) {
			const parsedProgress: ProgressType = JSON.parse(savedProgress);
			setProgress(parsedProgress);
			if (parsedProgress[slug]) {
				setCompletedSteps(parsedProgress[slug]);
			}
		}
	}, [slug]);

	const toggleStep = (index: number) => {
		setCompletedSteps((prev: number[]) => {
			const updatedSteps = prev.includes(index)
				? prev.filter((i) => i !== index)
				: [...prev, index];
			const updatedProgress: ProgressType = {
				...progress,
				[slug]: updatedSteps,
			};
			setProgress(updatedProgress);
			localStorage.setItem(
				"roadmap-progress",
				JSON.stringify(updatedProgress)
			);
			return updatedSteps;
		});
	};

	const downloadPDF = () => {
		if (!roadmap) return;
		const doc = new jsPDF();
		doc.text(roadmap.title, 20, 10);
		autoTable(doc, {
			startY: 20,
			head: [["Step", "Completed"]],
			body: roadmap.steps.map((step, index) => [
				step,
				completedSteps.includes(index) ? "✔" : "✘",
			]),
		});
		doc.save(`${roadmap.slug}-roadmap.pdf`);
	};

	if (!roadmap) {
		return (
			<p className="p-8 text-red-600 text-center">Roadmap not found</p>
		);
	}

	const progressPercentage =
		(completedSteps.length / roadmap.steps.length) * 100;

	return (
		<div className="p-8 max-w-3xl mx-auto bg-white shadow-lg rounded-xl border border-gray-200">
			<div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
				<div
					className="bg-blue-600 h-2.5 rounded-full"
					style={{ width: `${progressPercentage}%` }}
				></div>
			</div>
			<div className="flex justify-between items-center">
				<h1 className="text-3xl font-bold mb-4 text-gray-900">
					{roadmap.title}
				</h1>
				<button
					onClick={downloadPDF}
					className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700"
				>
					Download PDF
				</button>
			</div>
			<p className="text-gray-700 mb-6 text-lg">{roadmap.description}</p>

			<div className="border-l-4 border-blue-500 pl-4 space-y-4">
				{roadmap.steps.map((step, index) => (
					<div
						key={index}
						className="flex items-center gap-4 bg-blue-50 p-4 rounded-lg shadow-md"
					>
						<input
							type="checkbox"
							checked={completedSteps.includes(index)}
							onChange={() => toggleStep(index)}
							className="h-5 w-5 cursor-pointer"
						/>
						<p
							className={`text-gray-800 font-medium ${
								completedSteps.includes(index)
									? "line-through text-gray-500"
									: ""
							}`}
						>
							{step}
						</p>
					</div>
				))}
			</div>

			<div className="mt-8 text-center">
				<Link
					href="/roadmaps"
					className="text-blue-600 hover:underline font-semibold text-lg"
				>
					← Back to Roadmaps
				</Link>
			</div>
		</div>
	);
}

"use client";

import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { FaGithub, FaInstagram, FaRocket, FaTwitter } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdBarChart, MdBuild, MdOutlineCategory } from "react-icons/md";

import roadmapsData from "@/data/roadmaps.json";
import docsData from "@/data/site/docs.json";
import dummyData from "@/data/site/dummy.json";
import projectsData from "@/data/site/projects.json";
import siteData from "@/data/site/site.json";
import toolsData from "@/data/site/tools.json";
import promptsData from "@/data/site/prompts.json";
import { SparklesIcon } from "@heroicons/react/24/outline";

export default function HomePage() {
    const [projectsCount, setProjectsCount] = useState(0);
    const [roadmapsCount, setRoadmapsCount] = useState(0);
    const [docsCount, setDocsCount] = useState(0);
    const [toolsCount, setToolsCount] = useState(0);
    const [dummyDataCount, setDummyDataCount] = useState(0);
    const [promptsCount, setPromptsCount] = useState(0);

    useEffect(() => {
        setProjectsCount(projectsData.length);
        setRoadmapsCount(roadmapsData.length);
        setDocsCount(docsData.length);
        setToolsCount(toolsData.length);
        setDummyDataCount(Object.keys(dummyData).length);
        setPromptsCount(promptsData.length);
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 text-gray-900">
            {/* Hero */}
            <section className="text-center py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
                <div className="flex justify-center items-center w-full">
                    <Image className="max-w-full h-auto" src="/img/logo/teeny-tiny-web-logo-white.png" alt="Teeny Tiny Web Logo" width={374} height={76} priority />
                </div>
                <p className="mt-4 text-lg">Small but Mighty Dev Resources 🚀</p>
                <div className="mt-6 flex justify-center space-x-4">
                    <Link href="/docs" className="bg-white text-blue-600 px-6 py-2 rounded-lg shadow-lg hover:bg-gray-200">
                        Explore Docs
                    </Link>
                    <Link href="/projects" className="bg-white text-blue-600 px-6 py-2 rounded-lg shadow-lg hover:bg-gray-200">
                        Browse Projects
                    </Link>
                </div>
            </section>

            {/* Stats */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center py-12 px-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <Link href="/docs">
                        <div className="cursor-pointer">
                            <IoDocumentTextOutline className="text-4xl text-blue-500 mx-auto" />
                            <h3 className="text-xl font-semibold mt-2">Tiny Docs</h3>
                            <p className="text-gray-600">
                                <CountUp end={docsCount} duration={2} /> guides
                            </p>
                        </div>
                    </Link>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <Link href="/projects">
                        <div className="cursor-pointer">
                            <FaRocket className="text-4xl text-blue-500 mx-auto" />
                            <h3 className="text-xl font-semibold mt-2">Sample Projects</h3>
                            <p className="text-gray-600">
                                <CountUp end={projectsCount} duration={2} /> tools & apps
                            </p>
                        </div>
                    </Link>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <Link href="/roadmaps">
                        <div className="cursor-pointer">
                            <MdOutlineCategory className="text-4xl text-blue-500 mx-auto" />
                            <h3 className="text-xl font-semibold mt-2">Dev Roadmaps</h3>
                            <p className="text-gray-600">
                                <CountUp end={roadmapsCount} duration={2} /> available
                            </p>
                        </div>
                    </Link>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <Link href="/tools">
                        <div className="cursor-pointer">
                            <MdBuild className="text-4xl text-blue-500 mx-auto" />
                            <h3 className="text-xl font-semibold mt-2">IT Tools</h3>
                            <p className="text-gray-600">
                                <CountUp end={toolsCount} duration={2} /> available
                            </p>
                        </div>
                    </Link>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <Link href="/dummy">
                        <div className="cursor-pointer">
                            <MdBarChart className="text-4xl text-blue-500 mx-auto" />
                            <h3 className="text-xl font-semibold mt-2">Dummy Data</h3>
                            <p className="text-gray-600">
                                <CountUp end={dummyDataCount} duration={2} /> categories
                            </p>
                        </div>
                    </Link>
                </div>
                {/* AI Prompts Card */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <Link href="/100-chatgpt-promt">
                        <div className="cursor-pointer">
                           <SparklesIcon className="w-10 h-10 text-blue-500 mx-auto" />
                            <h3 className="text-xl font-semibold mt-2">AI Prompts</h3>
                            <p className="text-gray-600">
                                <CountUp end={promptsCount} duration={2} /> available
                            </p>
                        </div>
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="text-center py-6 bg-gray-900 text-gray-300">
                <div className="flex items-center justify-center gap-4">
                    <Link href="https://www.digitalocean.com/?refcode=525051e9e7a7&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge" title="Powered by DigitalOcean" target="_blank">
                        <Image
                            src="https://web-platforms.sfo2.cdn.digitaloceanspaces.com/WWW/Badge%203.svg"
                            alt="Powered by DigitalOcean"
                            width={200}
                            height={65}
                        />
                    </Link>
                    <Link href="https://buymeacoffee.com/barisgunduz" title="Buy Me a Coffee" target="_blank">
                        <Image
                            src="/img/logo/bmc-button.png"
                            alt="Buy Me a Coffee"
                            width={230}
                            height={65}
                        />
                    </Link>
                </div>

                {/* Socials */}
                <div className="flex justify-center space-x-4 mt-6">
                    <Link href={siteData.socials[0].link} className="text-gray-400 hover:text-white" target="_blank">
                        <FaGithub className="text-2xl" />
                    </Link>
                    <Link href={siteData.socials[1].link} className="text-gray-400 hover:text-white" target="_blank">
                        <FaTwitter className="text-2xl" />
                    </Link>
                    <Link href={siteData.socials[2].link} className="text-gray-400 hover:text-white" target="_blank">
                        <FaInstagram className="text-2xl" />
                    </Link>
                </div>
            </footer>
        </div>
    );
}

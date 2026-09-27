"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Star, GitFork, Loader2, ArrowUpRight } from "lucide-react";

// Inline Github Icon
const GithubIcon = ({ size = 20 }: { size?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
);

interface Repo {
    id: number;
    name: string;
    description: string;
    html_url: string;
    homepage: string;
    topics: string[];
    stargazers_count: number;
    forks_count: number;
    language: string;
    updated_at: string;
}

const staticProjects = [
    {
        id: 1,
        name: "LearnIt",
        description: "Full-Stack Tutor Marketplace connecting students with verified tutors. Implemented secure auth, real-time chat, booking management, and Razorpay.",
        html_url: "#",
        homepage: "#",
        topics: ["React", "TypeScript", "Supabase", "PostgreSQL"],
        stargazers_count: 5,
        forks_count: 2,
        language: "TypeScript",
        updated_at: new Date().toISOString()
    },
    {
        id: 2,
        name: "TradeX AI",
        description: "AI-Powered Financial Intelligence Platform with interactive market dashboards, watchlists, and data visualization via an AI-ready architecture.",
        html_url: "#",
        homepage: "#",
        topics: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        stargazers_count: 8,
        forks_count: 1,
        language: "TypeScript",
        updated_at: new Date().toISOString()
    },
    {
        id: 3,
        name: "FastAPI Product API",
        description: "High-performance REST API using FastAPI and PostgreSQL to serve and filter over 200,000 product records with cursor-based pagination.",
        html_url: "#",
        homepage: "#",
        topics: ["FastAPI", "PostgreSQL", "Python"],
        stargazers_count: 12,
        forks_count: 4,
        language: "Python",
        updated_at: new Date().toISOString()
    },
    {
        id: 4,
        name: "Academic Projects & AI",
        description: "Gender Prediction Using Sound, IP Geolocation Tracker, Machine Learning Sentiment Analysis in English Literature, and Python App automation.",
        html_url: "#",
        homepage: "#",
        topics: ["Python", "Machine Learning", "AI"],
        stargazers_count: 10,
        forks_count: 3,
        language: "Python",
        updated_at: new Date().toISOString()
    }
];

export default function Projects() {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeFilter, setActiveFilter] = useState("All");

    useEffect(() => {
        // Simulate load for animation
        setTimeout(() => {
            setRepos(staticProjects);
            setLoading(false);
        }, 500);
    }, []);

    const filters = useMemo(() => {
        const langs = Array.from(new Set(repos.map(r => r.language).filter(Boolean)));
        return ["All", ...langs.slice(0, 4)];
    }, [repos]);

    const filteredRepos = useMemo(() => {
        let filtered = activeFilter === "All" ? repos : repos.filter(r => r.language === activeFilter);
        return filtered;
    }, [repos, activeFilter]);

    return (
        <section id="projects" className="relative py-24 px-6 z-10 min-h-screen">
            <div className="max-w-6xl mx-auto w-full">
                {/* Header section */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-sm font-orbitron text-blue-500 uppercase tracking-[0.3em] mb-2 block">
                            Deployments
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-white">
                            FEATURED PROJECTS
                        </h2>
                    </motion.div>

                    {/* Filters */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-wrap gap-2"
                    >
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-4 py-2 rounded-full font-orbitron text-xs tracking-widest transition-all duration-300 border ${activeFilter === filter
                                    ? "bg-blue-600 border-blue-500 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]"
                                    : "bg-white/5 border-white/10 text-gray-400 hover:text-white hover:border-white/30"
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </motion.div>
                </div>

                {/* Loading State */}
                {loading && (
                    <div className="w-full flex items-center justify-center py-20 text-blue-500">
                        <Loader2 className="animate-spin" size={40} />
                    </div>
                )}

                {/* Project Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredRepos.map((repo, i) => {
                            const isFeatured = i === 0 && activeFilter === "All"; // Highlight first repo as featured

                            return (
                                <motion.div
                                    layout
                                    key={repo.id}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    className={`
                    group glass-panel rounded-2xl border transition-all duration-500 flex flex-col overflow-hidden relative
                    ${isFeatured ? "md:col-span-2 lg:col-span-2 border-blue-500/30" : "border-white/5 hover:border-white/20"}
                    hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(37,99,235,0.1)]
                  `}
                                >
                                    {/* Decorative Glow */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-rose-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

                                    <div className="p-8 flex flex-col h-full relative z-10">
                                        <div className="flex justify-between items-start mb-6">
                                            <div className="flex items-center gap-2">
                                                {isFeatured && <span className="px-2 py-1 bg-rose-500/20 text-rose-400 font-orbitron text-[10px] tracking-widest rounded uppercase border border-rose-500/20">Featured</span>}
                                                {repo.language && <span className="px-2 py-1 bg-white/5 text-gray-300 font-orbitron text-[10px] tracking-widest rounded border border-white/10 uppercase">{repo.language}</span>}
                                            </div>

                                            <div className="flex gap-4">
                                                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-transform hover:scale-110">
                                                    <GithubIcon size={20} />
                                                </a>
                                                {repo.homepage && (
                                                    <a href={repo.homepage} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-transform hover:scale-110">
                                                        <ExternalLink size={20} />
                                                    </a>
                                                )}
                                            </div>
                                        </div>

                                        <h3 className={`font-orbitron font-bold text-white mb-4 group-hover:text-blue-400 transition-colors ${isFeatured ? "text-3xl" : "text-xl"}`}>
                                            {repo.name}
                                        </h3>

                                        <p className={`text-gray-400 font-inter font-light flex-grow leading-relaxed ${isFeatured ? "text-lg mb-8" : "text-sm mb-6"}`}>
                                            {repo.description || "Experimental architecture and codebase engineered by Surya Teja. Explore the repository for detailed source code."}
                                        </p>

                                        <div className="mt-auto border-t border-white/10 pt-4 flex items-center justify-between">
                                            <div className="flex flex-wrap gap-2">
                                                {repo.topics?.slice(0, isFeatured ? 5 : 2).map((topic) => (
                                                    <span key={topic} className="text-xs font-inter text-gray-500">
                                                        #{topic}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="flex items-center gap-4 text-gray-500 text-sm font-orbitron">
                                                <div className="flex items-center gap-1 group-hover:text-amber-400 transition-colors">
                                                    <Star size={14} /> <span>{repo.stargazers_count}</span>
                                                </div>
                                                <div className="flex items-center gap-1 group-hover:text-blue-400 transition-colors">
                                                    <GitFork size={14} /> <span>{repo.forks_count}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}

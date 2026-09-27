"use client";

import { motion } from "framer-motion";
import { Activity, GitPullRequest, Flame, Users } from "lucide-react";
import Image from "next/image";

const GithubIcon = ({ size = 20 }: { size?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
);

const USERNAME = "suryateja021";

export default function GithubStats() {
    return (
        <section id="github" className="relative py-24 px-6 z-10 glass-panel border-y border-white/5">
            <div className="max-w-6xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-sm font-orbitron text-green-500 uppercase tracking-[0.3em] mb-2 block font-medium">
                        Open Source
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-white">
                        GITHUB OVERVIEW
                    </h2>
                </motion.div>

                {/* GitHub Stats Cards using github-readme-stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="glass-panel rounded-2xl border border-white/5 p-4 overflow-hidden hover:border-green-500/20 transition-all duration-300"
                    >
                        <img
                            src={`https://github-readme-stats.vercel.app/api?username=${USERNAME}&show_icons=true&theme=transparent&hide_border=true&title_color=22c55e&icon_color=3b82f6&text_color=9ca3af&bg_color=00000000`}
                            alt="GitHub Stats"
                            className="w-full h-auto"
                            loading="lazy"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="glass-panel rounded-2xl border border-white/5 p-4 overflow-hidden hover:border-blue-500/20 transition-all duration-300"
                    >
                        <img
                            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${USERNAME}&layout=compact&theme=transparent&hide_border=true&title_color=3b82f6&text_color=9ca3af&bg_color=00000000`}
                            alt="Top Languages"
                            className="w-full h-auto"
                            loading="lazy"
                        />
                    </motion.div>
                </div>

                {/* Streak Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="glass-panel rounded-2xl border border-white/5 p-4 overflow-hidden max-w-2xl mx-auto hover:border-rose-500/20 transition-all duration-300"
                >
                    <img
                        src={`https://github-readme-streak-stats.herokuapp.com/?user=${USERNAME}&theme=transparent&hide_border=true&stroke=1a1a2e&ring=e11d48&fire=e11d48&currStreakLabel=ffffff&sideLabels=9ca3af&currStreakNum=ffffff&sideNums=9ca3af&dates=4b5563&background=00000000`}
                        alt="GitHub Streak"
                        className="w-full h-auto"
                        loading="lazy"
                    />
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-center mt-12"
                >
                    <a
                        href={`https://github.com/${USERNAME}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-3 px-8 py-4 border border-white/10 hover:border-green-500/50 text-gray-300 hover:text-white font-orbitron text-sm tracking-widest rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.2)]"
                    >
                        <GithubIcon size={20} />
                        VIEW FULL PROFILE
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

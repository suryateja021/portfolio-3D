"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, FolderGit2, BookOpen } from "lucide-react";

const experiences = [
    {
        category: "Education",
        icon: GraduationCap,
        title: "B.Tech in Computer Science & Engineering",
        organization: "CMR Engineering College",
        period: "2023 - 2027",
        description: "Focusing on core computer science subjects including Data Structures, OOPS, DBMS, and Operating Systems. Passionate about artificial intelligence and full stack development.",
        color: "from-blue-500 to-cyan-500"
    },
    {
        category: "Education",
        icon: Briefcase,
        title: "Intermediate (MPC)",
        organization: "Narayana Junior College",
        period: "2021 - 2023",
        description: "Completed with 85% aggregate. Built a strong foundation in Mathematics, Physics, and Chemistry, driving my analytical and logical thinking.",
        color: "from-rose-500 to-pink-500"
    },
    {
        category: "Education",
        icon: BookOpen,
        title: "Secondary School Certificate (SSC)",
        organization: "Vijetha High School, Narayankhed",
        period: "2021",
        description: "Graduated with an outstanding 100% score (10.0 GPA), establishing a strong precedent for academic excellence.",
        color: "from-green-500 to-emerald-500"
    }
];

export default function Experience() {
    return (
        <section id="experience" className="relative py-24 px-6 z-10 glass-panel border-b border-white/5 pb-32">
            <div className="max-w-4xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-20 text-center md:text-left"
                >
                    <span className="text-sm font-orbitron text-purple-500 uppercase tracking-[0.3em] mb-2 block font-medium">
                        Timeline
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-white">
                        EVOLUTION PATH
                    </h2>
                </motion.div>

                {/* Global Timeline Line */}
                <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-purple-500/50 before:via-blue-500/20 before:to-transparent">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group"
                        >
                            {/* Glowing Timeline Node */}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-[#050505] shadow-[0_0_15px_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_20px_currentColor] transition-all duration-300 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 ml-0 z-10 shrink-0 mt-3 md:mt-0 relative overflow-hidden" style={{ color: "rgb(168, 85, 247)" }}>
                                <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-20 group-hover:opacity-80 transition-opacity duration-300`} />
                                <exp.icon size={16} className="relative z-10 text-white drop-shadow-md" />
                            </div>

                            {/* Content Card */}
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-panel p-6 md:p-8 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300 relative overflow-hidden group-hover:-translate-y-1">
                                {/* Subtle gradient hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                                <div className="flex flex-col mb-4 relative z-10">
                                    <span className="font-orbitron tracking-widest text-xs text-gray-400 mb-2 uppercase flex items-center justify-between">
                                        <span>{exp.category}</span>
                                        <span className="text-gray-500 font-inter">{exp.period}</span>
                                    </span>
                                    <h3 className="font-bold text-xl md:text-2xl text-white font-inter mb-1 leading-tight">{exp.title}</h3>
                                    <span className={`text-transparent bg-clip-text bg-gradient-to-r ${exp.color} font-inter font-medium`}>
                                        {exp.organization}
                                    </span>
                                </div>
                                <p className="text-gray-400 font-inter font-light leading-relaxed text-sm md:text-base relative z-10">
                                    {exp.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

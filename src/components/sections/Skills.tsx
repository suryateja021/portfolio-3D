"use client";

import { motion } from "framer-motion";
import {
    AppWindow,
    Cpu,
    Database,
    BrainCircuit,
    Wrench,
    Code,
    Cloud,
    TerminalSquare,
    Workflow
} from "lucide-react";

const skillCategories = [
    {
        title: "Programming",
        icon: Code,
        color: "from-blue-500 to-cyan-400",
        glow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] group-hover:border-blue-500/30",
        skills: [
            { name: "Python" }, { name: "Java" }, { name: "JavaScript" }, { name: "TypeScript" }, { name: "SQL" }
        ]
    },
    {
        title: "Frontend Dev",
        icon: AppWindow,
        color: "from-green-500 to-emerald-400",
        glow: "group-hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] group-hover:border-green-500/30",
        skills: [
            { name: "React.js" }, { name: "HTML5 & CSS3" }, { name: "Responsive Design" }, { name: "React Router" }
        ]
    },
    {
        title: "Backend Dev",
        icon: TerminalSquare,
        color: "from-purple-500 to-fuchsia-400",
        glow: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] group-hover:border-purple-500/30",
        skills: [
            { name: "FastAPI & REST APIs" }, { name: "SQLAlchemy" }, { name: "Authentication" }, { name: "Authorization" }
        ]
    },
    {
        title: "Databases",
        icon: Database,
        color: "from-rose-500 to-pink-400",
        glow: "group-hover:shadow-[0_0_30px_rgba(244,63,94,0.3)] group-hover:border-rose-500/30",
        skills: [
            { name: "PostgreSQL" }, { name: "SQL" }, { name: "Database Design" }, { name: "Query Optimization" }
        ]
    },
    {
        title: "CS Fundamentals",
        icon: BrainCircuit,
        color: "from-amber-500 to-orange-400",
        glow: "group-hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] group-hover:border-amber-500/30",
        skills: [
            { name: "Data Structures & Algorithms" }, { name: "OOP" }, { name: "DBMS" }, { name: "OS" }, { name: "Computer Networks" }
        ]
    },
    {
        title: "Software Engineering",
        icon: Cpu,
        color: "from-indigo-500 to-blue-400",
        glow: "group-hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] group-hover:border-indigo-500/30",
        skills: [
            { name: "Git & GitHub" }, { name: "Debugging & Testing" }, { name: "API Integration" }, { name: "Error Handling" }
        ]
    },
    {
        title: "DevOps",
        icon: Cloud,
        color: "from-teal-500 to-emerald-400",
        glow: "group-hover:shadow-[0_0_30px_rgba(20,184,166,0.3)] group-hover:border-teal-500/30",
        skills: [
            { name: "Linux" }, { name: "Docker" }, { name: "CI/CD Fundamentals" }, { name: "Cloud Deployment" }
        ]
    },
    {
        title: "Tools & Tech",
        icon: Wrench,
        color: "from-pink-500 to-rose-400",
        glow: "group-hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] group-hover:border-pink-500/30",
        skills: [
            { name: "VS Code" }, { name: "Linux Commands" }, { name: "MS Office" }
        ]
    },
    {
        title: "Core Skills",
        icon: Workflow,
        color: "from-cyan-500 to-blue-400",
        glow: "group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] group-hover:border-cyan-500/30",
        skills: [
            { name: "Problem Solving" }, { name: "Code Optimization" }, { name: "Version Control" }, { name: "Debugging" }
        ]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="relative py-24 px-6 z-10 glass-panel border-y border-white/5">
            <div className="max-w-6xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-sm font-orbitron text-rose-500 uppercase tracking-[0.3em] mb-2 block">
                        Capabilities
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-white">
                        TECHNICAL ARSENAL
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`glass-panel p-8 rounded-2xl border border-white/5 group transition-all duration-500 relative overflow-hidden ${category.glow}`}
                        >
                            {/* Background glow gradient */}
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500`} />

                            <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-4">
                                <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:scale-110 transition-transform duration-300">
                                    <category.icon size={24} className="text-white" />
                                </div>
                                <h3 className="font-orbitron font-bold text-xl text-white tracking-widest">{category.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, i) => (
                                    <div key={skill.name} className={`px-4 py-2 bg-gradient-to-r ${category.color} bg-opacity-10 hover:bg-opacity-20 rounded-lg border border-white/10 transition-all duration-300 cursor-default hover:-translate-y-1`}>
                                        <span className="text-sm font-inter text-white font-medium">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

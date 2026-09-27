"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, BadgeCheck, BrainCircuit } from "lucide-react";

const certs = [
    {
        name: "Introduction to Cybersecurity",
        issuer: "Cisco",
        date: "2023",
        icon: ShieldCheck,
        color: "from-amber-500 to-orange-500",
        glow: "group-hover:shadow-[0_0_25px_rgba(245,158,11,0.25)]",
    },
    {
        name: "Modern AI",
        issuer: "Cisco",
        date: "2024",
        icon: BrainCircuit,
        color: "from-rose-500 to-pink-500",
        glow: "group-hover:shadow-[0_0_25px_rgba(244,63,94,0.25)]",
    },
    {
        name: "Agentforce Certification",
        issuer: "Salesforce",
        date: "2024",
        icon: BadgeCheck,
        color: "from-blue-500 to-cyan-500",
        glow: "group-hover:shadow-[0_0_25px_rgba(59,130,246,0.25)]",
    },
    {
        name: "Full Stack Development",
        issuer: "Infosys Springboard",
        date: "2023",
        icon: Award,
        color: "from-green-500 to-emerald-500",
        glow: "group-hover:shadow-[0_0_25px_rgba(34,197,94,0.25)]",
    },
];

export default function Certifications() {
    return (
        <section id="certifications" className="relative py-24 px-6 z-10">
            <div className="max-w-5xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-sm font-orbitron text-purple-500 uppercase tracking-[0.3em] mb-2 block font-medium">
                        Accolades
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-white">
                        CERTIFICATIONS
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {certs.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className={`glass-panel p-8 rounded-2xl border border-white/5 hover:border-white/15 text-center flex flex-col items-center group transition-all duration-500 relative overflow-hidden ${cert.glow}`}
                        >
                            {/* Decorative glow blob */}
                            <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-15 blur-3xl transition-opacity duration-500`} />

                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                                <cert.icon size={28} className="text-white drop-shadow-md" />
                            </div>

                            <h3 className="font-inter font-bold text-lg text-white mb-2 leading-snug">{cert.name}</h3>
                            <p className="text-sm text-gray-400 font-inter font-light mb-4">{cert.issuer}</p>

                            <div className="mt-auto pt-4 border-t border-white/5 w-full">
                                <span className="font-orbitron text-xs text-gray-500 tracking-widest">{cert.date}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

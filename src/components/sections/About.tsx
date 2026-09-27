"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { Download, GraduationCap, Sparkles, Code2, FolderOpen } from "lucide-react";
import Image from "next/image";

function AnimatedNumber({ value }: { value: number }) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { stiffness: 50, damping: 20 });

    useEffect(() => {
        if (inView) {
            motionValue.set(value);
        }
    }, [inView, value, motionValue]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Math.round(latest).toString();
            }
        });
    }, [springValue]);

    return <span ref={ref}>0</span>;
}

export default function About() {
    const stats = [
        { label: "Projects", icon: FolderOpen, value: 10, suffix: "+" },
        { label: "Technologies", icon: Code2, value: 15, suffix: "+" },
        { label: "Certifications", icon: GraduationCap, value: 4, suffix: "" },
        { label: "Coding Problems", icon: Sparkles, value: 250, suffix: "+" },
    ];

    return (
        <section id="about" className="relative py-24 px-6 min-h-screen flex items-center z-10 my-10">
            <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row gap-16 items-center">

                {/* Left: Profile Placeholder & Quick Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-5/12 flex flex-col gap-8"
                >
                    <div className="relative w-full aspect-square max-w-[400px] mx-auto rounded-3xl overflow-hidden glass-panel border border-white/10 group p-2">
                        <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl z-10 pointer-events-none" />
                        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#111]">
                            {/* Profile Image Placeholder */}
                            <div className="absolute inset-0 flex items-center justify-center text-gray-600/30 flex-col">
                                <div className="w-32 h-32 rounded-full border-4 border-dashed border-gray-600/30 mb-4 animate-spin-slow" />
                                <span className="font-orbitron tracking-widest text-sm">PROFILE_IMG_HOLDER</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <button className="group relative px-6 py-3 bg-white/5 border border-white/10 hover:border-blue-500/50 rounded-full flex items-center gap-3 overflow-hidden transition-all duration-300">
                            <div className="absolute inset-0 bg-blue-500 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 z-0" />
                            <span className="relative z-10 font-orbitron text-sm tracking-widest text-white flex items-center gap-2 group-hover:text-white">
                                DOWNLOAD RESUME <Download size={16} />
                            </span>
                        </button>
                    </div>
                </motion.div>

                {/* Right: Intro & Details */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full lg:w-7/12"
                >
                    <span className="text-sm font-orbitron text-blue-500 uppercase tracking-[0.3em] font-medium border-b border-blue-500/30 pb-1 mb-6 inline-block">
                        Who I Am
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-white mb-6">
                        ENGINEERING THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-blue-600">FUTURE</span>
                    </h2>

                    <div className="space-y-6 text-gray-400 font-inter text-lg font-light leading-relaxed mb-10">
                        <p>
                            I am a dedicated Frontend and Full Stack Developer fueled by the relentless pursuit of building exceptional digital experiences. By merging robust architectural design with stunning cinematic interfaces, I construct applications that are as intelligent as they are beautiful.
                        </p>

                        <div className="glass-panel p-6 rounded-xl border border-white/5">
                            <h3 className="text-white font-orbitron font-semibold mb-2">🎓 Education</h3>
                            <p className="text-sm text-gray-400">Pursuing a Bachelor of Technology in Computer Science & Engineering. Passionate about participating in dynamic technical hackathons and pushing the boundaries of AI integration in modern web applications.</p>
                        </div>

                        <div className="glass-panel p-6 rounded-xl border border-white/5">
                            <h3 className="text-white font-orbitron font-semibold mb-2">🎯 Current Focus</h3>
                            <p className="text-sm text-gray-400">Deepening expertise in Full Stack architectures with Next.js & React 19, mastering WebGL via Three.js, and integrating performant AI inference workflows directly into user interfaces.</p>
                        </div>
                    </div>

                </motion.div>
            </div>

            {/* Animated Statistics */}
            <div className="max-w-6xl mx-auto w-full mt-24">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="glass-panel p-6 rounded-2xl border border-white/5 text-center flex flex-col items-center group hover:border-rose-500/30 hover:bg-rose-500/5 transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <stat.icon className="text-rose-400" size={24} />
                            </div>
                            <h4 className="text-3xl font-bold font-orbitron text-white mb-2 flex items-center justify-center">
                                <AnimatedNumber value={stat.value} />{stat.suffix}
                            </h4>
                            <span className="text-xs uppercase tracking-widest text-gray-500 font-inter">{stat.label}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

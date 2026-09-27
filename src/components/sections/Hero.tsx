"use client";

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useGsapIntro } from '@/hooks/useGsapIntro';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
    const heroRef = useRef<HTMLElement>(null);
    useGsapIntro(heroRef);

    return (
        <section ref={heroRef} className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-6">
            <div className="max-w-5xl mx-auto text-center z-10">

                <div className="mb-6 gsap-fade-up">
                    <span className="text-sm md:text-base font-orbitron text-rose-500 uppercase tracking-[0.3em] font-medium border-b border-rose-500/30 pb-1">
                        Frontend Developer & Full Stack Developer
                    </span>
                </div>

                <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-bold font-orbitron tracking-tighter text-white mb-6 gsap-fade-up select-none">
                    SURYA{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-rose-500 to-rose-600 animate-gradient-x drop-shadow-lg">
                        TEJA
                    </span>
                </h1>

                <p className="text-lg md:text-2xl text-gray-300 font-inter max-w-2xl mx-auto mb-12 leading-relaxed font-light gsap-fade-up">
                    Building immersive digital experiences with modern web technologies and AI.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 gsap-fade-up">
                    <a
                        href="#projects"
                        className="group relative px-8 py-4 bg-transparent text-white font-orbitron tracking-widest text-sm rounded-none overflow-hidden transition-all duration-300"
                    >
                        {/* Hover background block */}
                        <div className="absolute inset-0 bg-blue-600 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" />
                        <div className="absolute inset-0 border border-blue-500/50 group-hover:border-blue-600 transition-colors z-0" />
                        <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                            View Projects
                        </span>
                    </a>
                    <a
                        href="#contact"
                        className="group relative px-8 py-4 bg-transparent text-gray-300 font-orbitron tracking-widest text-sm rounded-none overflow-hidden transition-all hover:text-white"
                    >
                        <div className="absolute inset-0 bg-rose-600 translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" />
                        <div className="absolute inset-0 border border-gray-600 group-hover:border-rose-600 transition-colors z-0" />
                        <span className="relative z-10">Contact Me</span>
                    </a>
                </div>
            </div>

            {/* Animated Scroll Indicator */}
            <motion.a
                href="#about"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 gsap-fade-up hover:text-white text-gray-500 transition-colors cursor-pointer"
                aria-label="Scroll Down"
            >
                <span className="text-[10px] font-orbitron tracking-[0.3em] uppercase">Scroll</span>
                <div className="w-[1px] h-16 relative overflow-hidden bg-white/10">
                    <motion.div
                        animate={{ y: [-64, 64] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                        className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-rose-500 to-blue-500"
                    />
                </div>
            </motion.a>
        </section>
    );
}

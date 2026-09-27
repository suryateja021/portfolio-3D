"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const NavLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 gsap-nav-down ${scrolled ? 'py-4 backdrop-blur-md bg-black/40 border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]' : 'py-6 bg-transparent border-b border-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="group font-orbitron font-bold text-2xl tracking-wider text-white flex items-center gap-1">
                    <motion.div
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.5 }}
                        className="w-4 h-4 bg-rose-500 mr-2 shadow-[0_0_10px_rgba(225,29,72,0.8)] group-hover:bg-blue-500 group-hover:shadow-[0_0_10px_rgba(37,99,235,0.8)] transition-colors duration-300"
                    />
                    SURYA<span className="text-transparency group-hover:text-blue-500 transition-colors">.</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8 items-center">
                    {NavLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 tracking-wide uppercase font-inter group"
                        >
                            {link.name}
                            <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-rose-500 transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                    <a
                        href="https://github.com/suryateja021"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative px-5 py-2 overflow-hidden text-sm font-inter rounded-full border border-blue-500/50 text-blue-400 font-medium group transition-all"
                    >
                        <span className="absolute inset-0 bg-blue-500 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 z-0" />
                        <span className="relative z-10 group-hover:text-white transition-colors">GitHub</span>
                    </a>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.nav
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full backdrop-blur-xl bg-black/80 border-b border-white/10 py-8 flex flex-col items-center gap-6 md:hidden shadow-2xl"
                    >
                        {NavLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className="text-lg font-medium text-gray-200 uppercase tracking-widest hover:text-white hover:-translate-y-1 transition-all"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}

"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send, ArrowUpRight } from "lucide-react";

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
    </svg>
);
const GithubIcon = ({ size = 20 }: { size?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
);
const TwitterIcon = ({ size = 20 }: { size?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
);

const socialLinks = [
    { name: "GitHub", icon: GithubIcon, href: "https://github.com/suryateja021", color: "hover:bg-white hover:text-black" },
    { name: "LinkedIn", icon: LinkedinIcon, href: "#", color: "hover:bg-blue-600 hover:border-blue-600" },
    { name: "Twitter", icon: TwitterIcon, href: "#", color: "hover:bg-sky-500 hover:border-sky-500" },
];

export default function Contact() {
    return (
        <section id="contact" className="relative py-24 px-6 z-10 glass-panel border-t border-white/5 mt-10">
            <div className="max-w-6xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span className="text-sm font-orbitron text-rose-500 uppercase tracking-[0.3em] mb-2 block font-medium">
                        Comms Channel
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold font-orbitron text-white mb-6">
                        LET&apos;S CONNECT
                    </h2>
                    <p className="text-gray-400 font-inter text-lg font-light max-w-xl mx-auto">
                        Whether you have a project in mind, an opportunity, or just want to say hi, my inbox is always open. Let&apos;s build something spectacular.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                    {/* Left: Info Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2 flex flex-col gap-6"
                    >
                        <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-rose-500/20 transition-all duration-300 group">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Mail size={20} className="text-rose-400" />
                                </div>
                                <div>
                                    <p className="font-orbitron text-xs text-gray-500 tracking-widest uppercase">Email</p>
                                    <a href="mailto:hello@suryateja.dev" className="font-inter text-lg text-white hover:text-rose-400 transition-colors">hello@suryateja.dev</a>
                                </div>
                            </div>
                        </div>

                        <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-blue-500/20 transition-all duration-300 group">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <MapPin size={20} className="text-blue-400" />
                                </div>
                                <div>
                                    <p className="font-orbitron text-xs text-gray-500 tracking-widest uppercase">Location</p>
                                    <p className="font-inter text-lg text-white">India / Remote</p>
                                </div>
                            </div>
                        </div>

                        {/* Socials */}
                        <div className="flex gap-4 mt-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.name}
                                    className={`p-4 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-all duration-300 ${social.color}`}
                                >
                                    <social.icon size={22} />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Contact Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        onSubmit={(e) => e.preventDefault()}
                        className="lg:col-span-3 glass-panel p-8 md:p-10 rounded-2xl border border-white/10 flex flex-col gap-8"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="contact-name" className="font-orbitron text-xs tracking-widest text-gray-500 uppercase">Name</label>
                                <input
                                    type="text"
                                    id="contact-name"
                                    className="bg-transparent border-b-2 border-gray-700 py-3 text-white font-inter placeholder-gray-600 focus:outline-none focus:border-rose-500 transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="contact-email" className="font-orbitron text-xs tracking-widest text-gray-500 uppercase">Email</label>
                                <input
                                    type="email"
                                    id="contact-email"
                                    className="bg-transparent border-b-2 border-gray-700 py-3 text-white font-inter placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="contact-subject" className="font-orbitron text-xs tracking-widest text-gray-500 uppercase">Subject</label>
                            <input
                                type="text"
                                id="contact-subject"
                                className="bg-transparent border-b-2 border-gray-700 py-3 text-white font-inter placeholder-gray-600 focus:outline-none focus:border-purple-500 transition-colors"
                                placeholder="Project Proposal"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="contact-message" className="font-orbitron text-xs tracking-widest text-gray-500 uppercase">Message</label>
                            <textarea
                                id="contact-message"
                                rows={4}
                                className="bg-transparent border-b-2 border-gray-700 py-3 text-white font-inter placeholder-gray-600 focus:outline-none focus:border-green-500 transition-colors resize-none"
                                placeholder="Tell me about your project..."
                            />
                        </div>

                        <button
                            type="submit"
                            className="group relative mt-4 flex items-center justify-center gap-3 bg-transparent border border-white/20 text-white font-orbitron py-4 px-8 tracking-widest text-sm overflow-hidden transition-all duration-300 rounded-xl"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-blue-600 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 z-0" />
                            <span className="relative z-10 flex items-center gap-2">
                                TRANSMIT <Send size={16} />
                            </span>
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}

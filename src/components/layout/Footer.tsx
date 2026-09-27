import Link from "next/link";

const GithubIcon = ({ size = 20 }: { size?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
);
const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
    </svg>
);
const TwitterIcon = ({ size = 20 }: { size?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
);

const footerLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

const socialLinks = [
    { name: "GitHub", icon: GithubIcon, href: "https://github.com/suryateja021", color: "hover:bg-white hover:text-black hover:border-white" },
    { name: "LinkedIn", icon: LinkedinIcon, href: "#", color: "hover:bg-blue-600 hover:border-blue-600" },
    { name: "Twitter", icon: TwitterIcon, href: "#", color: "hover:bg-sky-500 hover:border-sky-500" },
];

export default function Footer() {
    return (
        <footer className="relative z-10 glass-panel border-t border-white/10 py-16 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start mb-12">
                    {/* Brand */}
                    <div className="flex flex-col items-center md:items-start">
                        <Link href="/" className="font-orbitron font-bold text-2xl tracking-wider text-white mb-3">
                            SURYA<span className="text-rose-500">.</span>TEJA
                        </Link>
                        <p className="font-inter text-gray-500 text-sm font-light max-w-xs text-center md:text-left">
                            Crafting immersive, cinematic digital experiences with modern web technologies.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col items-center">
                        <h4 className="font-orbitron text-xs tracking-[0.2em] text-gray-400 uppercase mb-4">Navigation</h4>
                        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                            {footerLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-inter text-gray-500 hover:text-white transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Socials */}
                    <div className="flex flex-col items-center md:items-end">
                        <h4 className="font-orbitron text-xs tracking-[0.2em] text-gray-400 uppercase mb-4">Connect</h4>
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.name}
                                    className={`p-3 bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:text-white transition-all duration-300 ${social.color}`}
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Divider & Copyright */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="font-orbitron text-[10px] tracking-[0.3em] text-gray-600 uppercase">
                        © {new Date().getFullYear()} Surya Teja. All rights reserved.
                    </p>
                    <p className="font-inter text-xs text-gray-600">
                        Designed & Built with <span className="text-rose-500">♥</span> using Next.js, Three.js & Framer Motion
                    </p>
                </div>
            </div>
        </footer>
    );
}

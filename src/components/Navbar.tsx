import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');
    const { scrollY } = useScroll();

    const navbarBg = useTransform(
        scrollY,
        [0, 100],
        ['rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255, 0.85)']
    );

    const navbarBorder = useTransform(
        scrollY,
        [0, 100],
        ['rgba(255, 255, 255, 0.3)', 'rgba(200, 200, 255, 0.5)']
    );

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'skills', 'projects', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section === 'home' ? '' : section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 200 && rect.bottom >= 200;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#", id: "home" },
        { name: "About", href: "#about", id: "about" },
        { name: "Skills", href: "#skills", id: "skills" },
        { name: "Works", href: "#projects", id: "projects" },
        { name: "Contact", href: "#contact", id: "contact" }
    ];

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] w-[95vw] sm:w-[90vw] max-w-5xl"
        >
            <motion.div
                style={{
                    backgroundColor: navbarBg,
                    borderColor: navbarBorder,
                }}
                className="backdrop-blur-2xl border rounded-full shadow-2xl overflow-hidden w-full"
            >
                {/* Animated gradient overlay */}
                <motion.div
                    className="absolute inset-0 opacity-20 pointer-events-none"
                    animate={{
                        background: [
                            'linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.3), transparent)',
                            'linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.3), transparent)',
                            'linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.3), transparent)',
                        ],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />

                <div className="relative flex items-center justify-between gap-2 sm:gap-4 px-4 sm:px-6 py-3">
                    {/* Compact Logo */}
                    <motion.a
                        href="#"
                        className="flex items-center gap-2 group flex-shrink-0"
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="relative">
                            <motion.div
                                className="absolute -inset-0.5 rounded-xl opacity-60 blur-sm"
                                animate={{
                                    background: [
                                        'linear-gradient(0deg, #6366f1, #a855f7)',
                                        'linear-gradient(180deg, #a855f7, #6366f1)',
                                        'linear-gradient(360deg, #6366f1, #a855f7)',
                                    ],
                                }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            />

                            <div className="relative w-8 h-8 sm:w-9 sm:h-9 bg-black rounded-xl flex items-center justify-center">
                                <span className="text-white font-black text-base sm:text-lg">V</span>
                            </div>
                        </div>

                        <div className="hidden sm:flex flex-col">
                            <span className="text-black font-black text-base leading-none tracking-tight">
                                VISHAL
                            </span>
                            <span className="text-indigo-600 text-[9px] font-bold uppercase tracking-wider">
                                Developer
                            </span>
                        </div>
                    </motion.a>

                    {/* Compact Navigation */}
                    <div className="hidden md:flex items-center gap-1 bg-black/5 p-1 rounded-full shrink overflow-hidden">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.id;
                            return (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    className="relative px-3 lg:px-4 py-1.5 rounded-full overflow-hidden group"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="navPill"
                                            className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600"
                                            transition={{
                                                type: "spring",
                                                bounce: 0.2,
                                                duration: 0.6
                                            }}
                                        />
                                    )}

                                    <div className="absolute inset-0 bg-white/0 group-hover:bg-black/5 transition-colors duration-300 rounded-full" />

                                    <span className={`
                                        relative z-10 text-xs font-bold tracking-wide transition-all duration-300
                                        ${isActive ? 'text-white' : 'text-gray-700 group-hover:text-black'}
                                    `}>
                                        {link.name}
                                    </span>

                                    {isActive && (
                                        <motion.div
                                            className="absolute -top-0.5 -right-0.5"
                                            animate={{
                                                scale: [1, 1.2, 1],
                                                rotate: [0, 180, 360],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                        >
                                            <Sparkles className="w-2.5 h-2.5 text-yellow-400" />
                                        </motion.div>
                                    )}
                                </motion.a>
                            );
                        })}
                    </div>

                    {/* Compact Right Section */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                        {/* Social Icons */}
                        <div className="hidden lg:flex items-center gap-1">
                            {[
                                { icon: Github, href: "https://github.com/singhvishal77894" },
                                { icon: Linkedin, href: "https://linkedin.com/in/vishal-singh" }
                            ].map((social, idx) => (
                                <motion.a
                                    key={idx}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center text-gray-600 hover:text-black transition-colors duration-300"
                                    whileHover={{ y: -2, scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <social.icon className="w-4 h-4" />
                                </motion.a>
                            ))}
                        </div>

                        {/* Compact CTA */}
                        <motion.a
                            href="#contact"
                            className="relative group overflow-hidden"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.div
                                className="absolute -inset-0.5 rounded-full opacity-60 blur-sm"
                                animate={{
                                    background: [
                                        'linear-gradient(0deg, #6366f1, #a855f7)',
                                        'linear-gradient(120deg, #a855f7, #6366f1)',
                                        'linear-gradient(240deg, #6366f1, #a855f7)',
                                        'linear-gradient(360deg, #a855f1, #a855f7)',
                                    ],
                                }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            />

                            <div className="relative bg-black px-4 sm:px-5 py-1.5 rounded-full flex items-center gap-2">
                                <span className="text-white font-bold text-[10px] sm:text-xs whitespace-nowrap">Hire Me</span>
                                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                            </div>
                        </motion.a>
                    </div>
                </div>
            </motion.div>
        </motion.nav>
    );
};

export default Navbar;

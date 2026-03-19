import { motion } from 'framer-motion';
import {
    Code2,
    Monitor,
    Server,
    Database,
    Wrench,
    CheckCircle2,
    Cpu,
    Blocks
} from 'lucide-react';

const Skills = () => {
    const categories = [
        {
            title: "Languages",
            icon: Code2,
            skills: ["C++", "JavaScript (ES6+)", "TypeScript", "Python (Basics)"],
            details: "Core logic and systemic thinking fundamentals."
        },
        {
            title: "Frontend Engineering",
            icon: Monitor,
            skills: ["React.js", "Tailwind CSS", "Framer Motion", "HTML5/CSS3"],
            details: "Crafting modern, responsive user interfaces."
        },
        {
            title: "Backend Engineering",
            icon: Server,
            skills: ["Node.js", "Express.js", "REST APIs", "JWT Auth"],
            details: "Building secure and scalable server architectures."
        },
        {
            title: "Databases & Tools",
            icon: Database,
            skills: ["MongoDB", "SQL (Basic)", "Git/GitHub", "Postman", "VS Code"],
            details: "Data management and clinical development workflows."
        }
    ];

    const productSkills = [
        "Fast Prototyping",
        "User-centric design thinking",
        "Problem framing",
        "Feature prioritization",
        "Iterative improvements",
        "Use-case thinking",
        "Domain exploration",
        "Value-first mindset"
    ];

    return (
        <section id="skills" className="py-32 px-[60px] relative z-10 scroll-mt-32">
            <div className="max-w-[1240px] mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm mb-4 block">Abilities</span>
                        <h2 className="text-5xl font-black text-black leading-tight">
                            Technical <br />
                            <span className="text-gray-400">Expertise.</span>
                        </h2>
                    </div>
                    <p className="text-gray-600 max-w-md text-lg leading-relaxed">
                        A comprehensive toolkit focused on bridging the gap between hardware-level logic and high-level web applications.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white border border-gray-100 p-8 rounded-[40px] hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-50/50 transition-all duration-300 group"
                        >
                            <div className="flex items-start gap-6">
                                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                                    <cat.icon size={28} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-black mb-2">{cat.title}</h3>
                                    <p className="text-sm text-gray-500 mb-6">{cat.details}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {cat.skills.map((skill, i) => (
                                            <span
                                                key={skill}
                                                className="px-4 py-1.5 bg-gray-50 text-gray-600 text-xs font-bold rounded-full group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Unified Product Building Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden bg-black rounded-[40px] p-10 md:p-16 text-white"
                >
                    <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
                        <Blocks size={300} strokeWidth={0.5} />
                    </div>

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-indigo-400 text-[10px] font-bold uppercase tracking-widest mb-6">
                                <Cpu size={12} />
                                Competitive Advantage
                            </div>
                            <h3 className="text-4xl font-bold mb-6">Product Building & <br />Design Thinking</h3>
                            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                I bring more than just code to the table. I understand the business value, user psychology, and product lifecycle required to turn a repository into a real-world success.
                            </p>
                            <div className="flex items-center gap-4 text-sm font-bold">
                                <div className="flex -space-x-3">
                                    <div className="w-10 h-10 rounded-full border-2 border-black bg-indigo-600 flex items-center justify-center">VP</div>
                                    <div className="w-10 h-10 rounded-full border-2 border-black bg-purple-600 flex items-center justify-center">UX</div>
                                    <div className="w-10 h-10 rounded-full border-2 border-black bg-gray-800 flex items-center justify-center">FS</div>
                                </div>
                                <span className="text-gray-500 italic">Full-Cycle execution</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {productSkills.map((skill, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all pointer-events-none"
                                >
                                    <CheckCircle2 size={18} className="text-indigo-400 flex-shrink-0" />
                                    <span className="text-sm font-medium text-gray-200">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;

import { motion } from 'framer-motion';
import { Github, ArrowUpRight, Code2, Globe, Layout, Sparkles } from 'lucide-react';

// Custom Header Components
const ColorCraftHeader = () => (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF512F] via-[#DD2476] to-[#6366F1] opacity-80" />
        <motion.div
            animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 180, 270, 360],
                x: [0, 20, -20, 0],
                y: [0, -20, 20, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] opacity-30 pointer-events-none"
            style={{
                background: "radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 60%)",
                filter: "blur(60px)"
            }}
        />
        <div className="absolute inset-0 flex flex-wrap gap-2 p-8 items-start justify-center opacity-40">
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, delay: i * 0.2, repeat: Infinity }}
                    className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center text-xs font-bold font-mono"
                    style={{ color: i % 2 === 0 ? '#FF512F' : '#6366F1' }}
                >
                    #{i}F{i}D
                </motion.div>
            ))}
        </div>
    </div>
);

const InfineezeHeader = () => (
    <div className="absolute inset-0 w-full h-full bg-[#0A0F1E] overflow-hidden">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-20"
            style={{
                backgroundImage: `linear-gradient(#1E293B 1px, transparent 1px), linear-gradient(90deg, #1E293B 1px, transparent 1px)`,
                backgroundSize: '20px 20px'
            }}
        />

        {/* Glowing Line Chart Path */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 240">
            <motion.path
                d="M 0 180 Q 50 160, 100 170 T 200 120 T 300 140 T 400 80"
                fill="none"
                stroke="#10B981"
                strokeWidth="3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            />
            {[100, 200, 300].map((x, i) => (
                <motion.circle
                    key={i}
                    cx={x}
                    cy={x === 200 ? 120 : (x === 100 ? 170 : 140)}
                    r="4"
                    fill="#10B981"
                    animate={{ r: [4, 6, 4], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                />
            ))}
        </svg>

        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] to-transparent pointer-events-none" />

        {/* Statistics Floating */}
        <div className="absolute top-10 right-10 flex flex-col items-end gap-2 text-[#10B981] font-mono">
            <span className="text-2xl font-bold">$42,920.00</span>
            <span className="text-xs bg-[#10B981]/10 px-2 py-1 rounded">▲ 12.5%</span>
        </div>
    </div>
);

const Projects = () => {
    const projects = [
        {
            title: "CodeVisualizer",
            category: "Education Tool",
            description: "An interactive educational platform that helps students visualize Data Structures & Algorithms (DSA) in real-time, making complex concepts easier to understand.",
            tags: ["React", "D3.js", "Algorithms"],
            icon: Code2,
            image: "/projects/code-visualizer.png",
            link: "https://codevisulizer.netlify.app/",
            isLive: true
        },
        {
            title: "SkilloCity",
            category: "Community Platform",
            description: "A micro-mentorship and peer learning platform connecting learners with experts for quick, focused guidance and skill exchange.",
            tags: ["MERN Stack", "Socket.io", "Real-time"],
            icon: Globe,
            image: "/projects/skillo-city.png",
            status: "Under Process",
            isLive: false
        },
        {
            title: "Roamify",
            category: "Travel Tech",
            description: "Smart travel planning application offering personalized itinerary recommendations and seamless trip organization features.",
            tags: ["React", "Maps API", "Node.js"],
            icon: Layout,
            image: "/projects/roamify.png",
            isLive: true
        },
        {
            title: "Serene Space",
            category: "HealthTech",
            description: "AI-powered emotional wellness platform providing personalized mental health support and daily check-ins for user well-being.",
            tags: ["AI/ML", "React", "Python"],
            icon: Sparkles,
            image: "/projects/serene-space.png",
            isLive: true
        },
        {
            title: "ColorCraft",
            category: "Developer Tool",
            description: "A comprehensive gradient and color palette generator designed specifically for developers and designers to streamline UI design workflows.",
            tags: ["React", "Canvas API", "Design"],
            icon: Layout,
            customHeader: <ColorCraftHeader />,
            isLive: true
        },
        {
            title: "Infineeze Finance",
            category: "FinTech",
            description: "Personal finance dashboard featuring budgeting tools, expense tracking, and analytical insights to improve financial health.",
            tags: ["Analytics", "React", "Node.js"],
            icon: Globe,
            customHeader: <InfineezeHeader />,
            isLive: true
        }
    ];

    return (
        <section id="projects" className="py-32 px-6 md:px-[60px] relative z-10 scroll-mt-32">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="max-w-[1240px] mx-auto"
            >
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm mb-4 block">Portfolio</span>
                        <h2 className="text-4xl md:text-5xl font-black text-black leading-tight">
                            Selected <br />
                            <span className="text-gray-400">Works.</span>
                        </h2>
                    </div>
                    <p className="text-gray-600 max-w-md text-lg leading-relaxed">
                        A collection of full-stack products built with a focus on problem-solving, user value, and technical excellence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative bg-white border border-gray-100 rounded-[32px] overflow-hidden hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-500"
                        >
                            {/* Header Area */}
                            <div className="h-[180px] bg-gradient-to-br from-[#E8E3FF] to-[#D7CFFF] relative overflow-hidden flex items-center justify-center">
                                {/* Textured Pattern */}
                                <div className="absolute inset-0 pattern-grid-lg opacity-20" />

                                {project.image ? (
                                    <div className="absolute inset-0 w-full h-full p-4">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#D7CFFF]/40 to-transparent pointer-events-none" />
                                    </div>
                                ) : project.customHeader ? (
                                    project.customHeader
                                ) : (
                                    <>
                                        {/* Floating Icon Fallback */}
                                        <motion.div
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            className="relative z-10 w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-xl shadow-indigo-200/50 text-indigo-600"
                                        >
                                            <project.icon size={40} />
                                        </motion.div>

                                        {/* Title Overlay for visual depth */}
                                        <h4 className="absolute bottom-[-10%] left-[5%] text-[80px] font-black text-white/40 select-none uppercase tracking-tighter">
                                            {project.title.split(' ')[0]}
                                        </h4>
                                    </>
                                )}

                                {/* Status Badge for SkilloCity */}
                                {project.status && (
                                    <div className="absolute top-4 right-4 bg-yellow-400/90 backdrop-blur text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg z-20">
                                        {project.status}
                                    </div>
                                )}
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <span className="text-indigo-600 text-xs font-bold uppercase tracking-widest mb-2 block">
                                            {project.category}
                                        </span>
                                        <a href={project.link || "#"} target={project.link ? "_blank" : "_self"} rel="noopener noreferrer">
                                            <h3 className="text-xl font-bold text-black group-hover:text-indigo-600 transition-colors">
                                                {project.title}
                                            </h3>
                                        </a>
                                    </div>
                                    <div className="flex gap-2">
                                        <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-50 rounded-full hover:bg-black hover:text-white transition-all duration-300" title="View Code">
                                            <Github size={18} />
                                        </a>
                                        {/* Live Button */}
                                        <a
                                            href={project.link || "#"}
                                            target={project.link ? "_blank" : "_self"}
                                            rel="noopener noreferrer"
                                            className={`
                                                w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300
                                                ${project.isLive
                                                    ? "bg-indigo-600 text-white hover:bg-black"
                                                    : "bg-gray-100 text-gray-400 cursor-not-allowed"}
                                            `}
                                            title="Live Demo"
                                        >
                                            <ArrowUpRight size={18} />
                                        </a>
                                    </div>
                                </div>

                                <p className="text-gray-600 mb-6 text-base leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="px-3 py-1.5 text-xs font-semibold bg-gray-50 text-gray-500 border border-gray-100 rounded-lg group-hover:bg-indigo-50 group-hover:text-indigo-600 group-hover:border-indigo-100 transition-colors duration-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;

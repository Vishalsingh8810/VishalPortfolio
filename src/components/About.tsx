import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Target, Code2, Rocket, Sparkles, Award, TrendingUp, Globe, MapPin, Coffee, Terminal, Zap } from 'lucide-react';

// --- Card Components ---

const BentoCard = ({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className={`relative bg-white border border-gray-100 rounded-[32px] overflow-hidden p-8 hover:shadow-2xl hover:border-indigo-100 transition-colors duration-500 group ${className}`}
        >
            <div style={{ transform: "translateZ(50px)" }} className="h-full">
                {children}
            </div>
        </motion.div>
    );
};

const CodeCard = () => (
    <div className="flex flex-col h-full font-mono text-sm">
        <div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-3">
            <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <span className="text-gray-400 text-xs ml-2">bio.ts — vishalPortfolio</span>
        </div>
        <div className="space-y-1">
            <p><span className="text-purple-600">const</span> <span className="text-blue-600">developer</span> = &#123;</p>
            <p className="pl-4"><span className="text-gray-500">name:</span> <span className="text-emerald-600">'Vishal Singh'</span>,</p>
            <p className="pl-4"><span className="text-gray-500">role:</span> <span className="text-emerald-600">'Full Stack Engineer'</span>,</p>
            <p className="pl-4"><span className="text-gray-500">specialty:</span> [<span className="text-emerald-600">'MERN'</span>, <span className="text-emerald-600">'C++'</span>],</p>
            <p className="pl-4"><span className="text-gray-500">mindset:</span> <span className="text-emerald-600">'Problem-Solving'</span>,</p>
            <p className="pl-4"><span className="text-gray-500">passion:</span> <span className="text-emerald-600">'Building Products'</span></p>
            <p>&#125;;</p>
            <br />
            <p><span className="text-blue-600 animate-pulse">_</span></p>
        </div>
    </div>
);

const LocationCard = () => (
    <div className="flex flex-col items-center justify-center text-center h-full">
        <div className="relative mb-4">
            <MapPin className="text-indigo-600 w-10 h-10" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-indigo-600"></span>
            </span>
        </div>
        <h4 className="text-xl font-black text-black">Lucknow, India</h4>
        <p className="text-gray-500 font-semibold text-xs uppercase tracking-widest mt-1">GMT+5:30</p>
    </div>
);

const TechGridCard = () => (
    <div className="grid grid-cols-2 gap-4 h-full">
        {[
            { icon: Globe, label: "React", color: "bg-blue-50 text-blue-600" },
            { icon: Terminal, label: "Node.js", color: "bg-green-50 text-green-600" },
            { icon: Target, label: "MongoDB", color: "bg-emerald-50 text-emerald-600" },
            { icon: Zap, label: "Express", color: "bg-gray-50 text-gray-600" }
        ].map((tech, i) => (
            <motion.div
                key={i}
                whileHover={{ scale: 1.05, y: -2 }}
                className={`${tech.color} rounded-2xl p-4 flex flex-col items-center justify-center border border-transparent hover:border-current/10 transition-all`}
            >
                <tech.icon size={20} className="mb-2" />
                <span className="text-[10px] font-bold uppercase">{tech.label}</span>
            </motion.div>
        ))}
    </div>
);

const About = () => {
    return (
        <section id="about" className="pt-10 pb-32 px-6 md:px-[60px] relative z-10 scroll-mt-32">
            <div className="max-w-[1240px] mx-auto">
                {/* Header Area */}
                <div className="flex flex-col md:flex-row items-baseline justify-between mb-16 gap-4">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black text-black"
                    >
                        THE <span className="text-indigo-600">STORY</span><br />
                        BEHIND THE CODE.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-gray-500 max-w-sm font-medium leading-relaxed"
                    >
                        Bridging the technical depth of C++ with the modern versatility of the MERN stack to build products that matter.
                    </motion.p>
                </div>

                {/* --- Bento Grid --- */}
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {/* Main Bio Card - Large */}
                    <BentoCard className="md:col-span-2 lg:col-span-3 lg:row-span-2 min-h-[400px]">
                        <div className="flex flex-col h-full bg-white">
                            <Sparkles className="text-yellow-400 mb-6" size={32} />
                            <h3 className="text-3xl font-black text-black mb-6 leading-tight">
                                I don't just write code.<br />
                                <span className="text-indigo-600">I solve problems.</span>
                            </h3>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Hi, I'm <span className="font-bold text-black italic">Vishal Singh</span>. I approach development with a product-first mindset. Whether it's architecting a complex backend or designing an intuitive user journey, my focus is always on <span className="text-black font-semibold">User Value.</span>
                            </p>
                            <div className="mt-auto flex items-center gap-4">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-indigo-50 flex items-center justify-center">
                                            <Code2 size={14} className="text-indigo-600" />
                                        </div>
                                    ))}
                                </div>
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Bridging Engineering & Product</span>
                            </div>
                        </div>
                    </BentoCard>

                    {/* Code Card - Interactive Code */}
                    <BentoCard className="md:col-span-2 lg:col-span-3 min-h-[250px] bg-slate-50/50 border-slate-100">
                        <CodeCard />
                    </BentoCard>

                    {/* Tech Staggered Grid */}
                    <BentoCard className="md:col-span-2 lg:col-span-2 min-h-[250px]">
                        <TechGridCard />
                    </BentoCard>

                    {/* Experience/Education Accent */}
                    <BentoCard className="md:col-span-1 lg:col-span-1 min-h-[200px] flex flex-col justify-center items-center bg-indigo-600 text-white border-none shadow-indigo-100">
                        <Award size={40} className="mb-4" />
                        <span className="text-2xl font-black">6+</span>
                        <span className="text-[10px] font-bold uppercase tracking-widest opacity-80">Projects</span>
                    </BentoCard>

                    {/* Location Card */}
                    <BentoCard className="md:col-span-2 lg:col-span-1 min-h-[200px] bg-gray-50/50 border-gray-100">
                        <LocationCard />
                    </BentoCard>

                    {/* Future Vision - Wide */}
                    <BentoCard className="md:col-span-4 lg:col-span-3 bg-black text-white border-none overflow-hidden hover:shadow-black/20">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <Rocket size={100} />
                        </div>
                        <div className="relative z-10">
                            <h4 className="text-xl font-black mb-4 flex items-center gap-2">
                                <TrendingUp className="text-yellow-400" size={24} />
                                FUTURE VISION
                            </h4>
                            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                                I’m currently exploring how AI-driven tools can empower communities. My goal is to build impactful products that scale.
                            </p>
                        </div>
                    </BentoCard>

                    {/* Coffee/Work Ethic */}
                    <BentoCard className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-100">
                        <div className="flex items-center gap-4 h-full">
                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg text-indigo-600 shrink-0">
                                <Coffee size={24} />
                            </div>
                            <div>
                                <h4 className="text-sm font-black text-black">Code & Caffeine</h4>
                                <p className="text-gray-500 text-[10px] font-semibold leading-tight">Fast prototyping, deep engineering.</p>
                            </div>
                        </div>
                    </BentoCard>
                </div>
            </div>
        </section>
    );
};

export default About;

import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="w-full min-h-screen pt-[100px] lg:pt-[120px] pb-20 lg:pb-32 bg-gradient-to-b from-[#E8E3FF] via-[#F0EEFF] to-transparent px-6 md:px-[60px] grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-[80px] relative overflow-hidden z-10">
            {/* Left Column - Text Content */}
            <div className="flex flex-col items-start z-10">
                {/* Greeting Badge */}
                <motion.span
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="inline-block bg-white border-2 border-black rounded-[24px] px-[20px] py-[8px] text-[13px] font-semibold mb-[32px]"
                >
                    ✱ HELLO!
                </motion.span>

                {/* Main Headline */}
                <motion.h1
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="text-[40px] md:text-[48px] lg:text-[56px] font-bold leading-[1.15] tracking-[-1px] text-black mb-[20px] md:mb-[28px]"
                >
                    I Build Full-Stack Products<br />
                    <span className="relative inline-block">
                        From Idea to Execution.
                        {/* Wavy Underline */}
                        <svg className="absolute -bottom-2 left-0 w-full h-4 animate-draw-in" preserveAspectRatio="none" viewBox="0 0 400 16">
                            <path d="M0 12 Q100 8, 200 10 T400 12" fill="none" stroke="#6366F1" strokeWidth="6" strokeLinecap="round" />
                        </svg>
                    </span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-[18px] font-[400] leading-[1.6] text-[#333333] max-w-[540px] mb-[36px]"
                >
                    I’m a Full-Stack Developer and Product-oriented Software Engineer who enjoys converting ideas into real, usable products.
                </motion.p>

                {/* CTA Button */}
                <motion.button
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    whileHover={{
                        backgroundColor: '#000',
                        color: '#fff',
                        y: -2,
                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="border-2 border-black rounded-[12px] px-[32px] py-[16px] text-[16px] font-semibold text-black bg-transparent cursor-pointer mb-8 lg:mb-0"
                >
                    See My Works
                </motion.button>
            </div>

            {/* Right Column - Portrait & Badge */}
            <div className="relative h-full w-full flex items-center justify-center z-10 order-first lg:order-last">
                <div className="relative w-full max-w-[320px] md:max-w-[420px] lg:max-w-[520px] aspect-[52/60]">
                    {/* Circular Badge - Floating */}
                    <motion.div
                        initial={{ opacity: 0, rotate: -20, scale: 0.8 }}
                        animate={{ opacity: 1, rotate: -8, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.8,
                            type: 'spring',
                            stiffness: 100
                        }}
                        className="absolute top-[12%] -left-[5%] md:-left-[8%] w-[100px] h-[100px] md:w-[140px] md:h-[140px] bg-white border-[3px] border-black rounded-full flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.12)] z-20"
                    >
                        <div className="relative w-full h-full flex items-center justify-center">
                            {/* Circular Text using SVG */}
                            <svg className="absolute w-full h-full" viewBox="0 0 140 140">
                                <path
                                    id="circlePath"
                                    d="M 70, 70 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                                    fill="none"
                                />
                                <text fontSize="11" fontWeight="700" letterSpacing="1.5" fill="black">
                                    <textPath href="#circlePath" startOffset="25%" textAnchor="middle">
                                        AVAILABLE FOR FREELANCE ★
                                    </textPath>
                                </text>
                            </svg>
                            {/* Center Arrow Icon */}
                            <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M7 17L17 7" />
                                <path d="M7 7h10v10" />
                            </svg>
                        </div>
                    </motion.div>

                    {/* Portrait Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                        className="w-full h-full rounded-t-[160px] md:rounded-t-[260px] rounded-b-[12px] overflow-hidden bg-gradient-to-br from-[#8B7DD8] to-[#9B8CE8] shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
                    >
                        <img
                            src="/profile.jpg"
                            alt="Portrait of Vishal Singh"
                            className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 ease-in-out"
                        />
                    </motion.div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#D7CFFF]/60 rounded-full blur-3xl -z-10" />
                    <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#E8E3FF]/80 rounded-full blur-3xl -z-10" />
                </div>
            </div>

            {/* Decorative Sparkles - Top Right */}
            <div className="absolute top-[15%] right-[12%] pointer-events-none">
                <motion.svg
                    className="w-16 h-16"
                    viewBox="0 0 64 64"
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: 'linear'
                    }}
                >
                    <path d="M32 8 L34 28 L54 30 L34 32 L32 52 L30 32 L10 30 L30 28 Z" fill="none" stroke="black" strokeWidth="2" transform="rotate(15 32 32)" />
                    <path d="M48 12 L49 20 L57 21 L49 22 L48 30 L47 22 L39 21 L47 20 Z" fill="none" stroke="black" strokeWidth="2" transform="rotate(-10 48 21)" />
                </motion.svg>
            </div>

            {/* Decorative Waves - Bottom Right */}
            <div className="absolute bottom-[25%] right-[8%] pointer-events-none">
                <motion.svg
                    className="w-24"
                    viewBox="0 0 100 40"
                    animate={{ x: [-5, 5, -5] }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut'
                    }}
                >
                    <path d="M0 8 Q25 4, 50 8 T100 8" fill="none" stroke="black" strokeWidth="2" />
                    <path d="M0 20 Q25 16, 50 20 T100 20" fill="none" stroke="black" strokeWidth="2" />
                    <path d="M0 32 Q25 28, 50 32 T100 32" fill="none" stroke="black" strokeWidth="2" />
                </motion.svg>
            </div>
        </section>
    );
};

export default Hero;

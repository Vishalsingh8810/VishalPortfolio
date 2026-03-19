import { motion, useScroll, useTransform } from 'framer-motion';


const ScrollBackground = () => {
    const { scrollYProgress } = useScroll();

    // Smooth movement for background elements
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 300]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Top Right - Soft Purple/Blue */}
            <motion.div
                style={{ y: y1 }}
                className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-purple-200/20 rounded-full blur-3xl opacity-50"
            />

            {/* Middle Left - Soft Indigo/Pink */}
            <motion.div
                style={{ y: y2, rotate }}
                className="absolute top-[40%] left-[-10%] w-[500px] h-[500px] bg-indigo-200/20 rounded-full blur-3xl opacity-40"
            />

            {/* Bottom Right - Cyan/Blue */}
            <motion.div
                style={{ y: y3 }}
                className="absolute bottom-[-10%] right-[10%] w-[700px] h-[700px] bg-blue-100/30 rounded-full blur-[100px] opacity-40"
            />

            {/* Overlay Grid Pattern for texture */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{ backgroundImage: 'radial-gradient(#6366F1 1px, transparent 1px)', backgroundSize: '32px 32px' }}
            />
        </div>
    );
};

export default ScrollBackground;

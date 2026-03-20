import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Instagram, Phone, Send, Briefcase } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Construct mailto link
        const subject = `Portfolio Contact from ${formData.name}`;
        const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
        window.location.href = `mailto:singhvishal77894@gmail.com?subject=${subject}&body=${body}`;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="py-32 px-[60px] bg-black text-white relative overflow-hidden scroll-mt-32">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800 via-black to-black" />

            <div className="max-w-[1240px] mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left Column: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-[#6366F1] font-bold tracking-wider uppercase text-sm mb-4 block">Get in Touch</span>
                        <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                            Let's Work <br />
                            <span className="text-gray-500">Together.</span>
                        </h2>

                        <p className="text-xl text-gray-400 mb-12 max-w-md">
                            I'm currently looking for new opportunities. Whether you have a project or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="space-y-6 mb-12">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#6366F1]">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Email</p>
                                    <a href="mailto:singhvishal77894@gmail.com" className="text-lg font-medium hover:text-[#6366F1] transition-colors">
                                        singhvishal77894@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#6366F1]">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Phone</p>
                                    <a href="tel:8810665469" className="text-lg font-medium hover:text-[#6366F1] transition-colors">
                                        +91 8810665469
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-green-400">
                                    <Briefcase size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Employment Status</p>
                                    <span className="text-lg font-medium text-green-400 flex items-center gap-2">
                                        Open to Opportunities
                                        <span className="relative flex h-3 w-3">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            {[
                                { icon: Github, href: "https://github.com" },
                                { icon: Linkedin, href: "https://linkedin.com" },
                                { icon: Instagram, href: "https://instagram.com/thakur_vishal_singh8810" }
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-white/5 rounded-full hover:bg-white hover:text-black transition-all duration-300"
                                >
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-white/5 p-8 md:p-10 rounded-3xl border border-white/10 backdrop-blur-sm"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#6366F1] transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#6366F1] transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#6366F1] transition-colors resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-200 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2"
                            >
                                <Send size={20} />
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>

                <div className="mt-20 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
                    © 2026 Vishal Singh. All rights reserved. Built with React & Tailwind.
                </div>
            </div>
        </section>
    );
};

export default Contact;

"use client";

import { motion } from 'framer-motion';
import { FaCheckCircle, FaAward, FaUsers } from 'react-icons/fa';

export default function AboutClient() {
    return (
        <div className="bg-white overflow-hidden">
            {/* Immersive Header */}
            <section className="relative bg-gray-900 text-white py-32 lg:py-40 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-primary/20 to-gray-900 z-0"></div>
                {/* Abstract Shapes */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 tracking-tight text-shadow"
                    >
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">RoadSafe Pro</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed"
                    >
                        Our Mission: To engineer a safer future through proactive education, intelligent infrastructure, and unwavering commitment to quality.
                    </motion.p>
                </div>
            </section>

            {/* Our Story - Organic Layout */}
            <section className="py-24 relative">
                <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-900 to-white z-0"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl transform rotate-3 scale-105 opacity-20 blur-lg"></div>
                            <img
                                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
                                alt="RoadSafe Pro Team Planning"
                                className="relative rounded-2xl shadow-2xl z-10"
                            />
                            {/* Floating Stat Card */}
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="absolute -bottom-12 -right-6 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-soft border border-white/50 z-20 hidden md:block"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center text-secondary">
                                        <FaAward className="text-2xl" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Accredited</p>
                                        <p className="text-xl font-bold text-gray-900">Safety Verified</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-secondary font-bold tracking-wider uppercase text-sm">Our Origin</span>
                            <h2 className="text-4xl font-bold text-gray-900 font-heading mt-2 mb-6">Driven by a Purpose</h2>
                            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                                RoadSafe Pro was founded on a simple, powerful belief: <strong className="text-gray-900">most road incidents are preventable.</strong>
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                With a combined experience of over 15 years in traffic management, logistics, and driver training, our team saw a need for a single provider that could address road safety from multiple angles—from education to infrastructure.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                We partner with organizations across Ethiopia to create safer environments for drivers, pedestrians, and communities. We don't just inspect; we innovate.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Leadership Section - Glass Cards */}
            <section className="py-24 bg-neutral-50 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl font-bold text-gray-900 font-heading"
                        >
                            Meet The Leadership
                        </motion.h2>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 100 }}
                            viewport={{ once: true }}
                            className="h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"
                        ></motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-5xl mx-auto"
                    >
                        <div className="glass p-8 md:p-12 rounded-3xl md:flex gap-12 items-center relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700"></div>

                            <div className="md:w-1/3 relative z-10">
                                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg border-2 border-white">
                                    {/* Placeholder for Team Photo */}
                                    <div className="h-full w-full bg-gray-200 flex items-center justify-center text-gray-400">
                                        <FaUsers className="text-6xl" />
                                    </div>
                                </div>
                            </div>

                            <div className="md:w-2/3 mt-8 md:mt-0 relative z-10">
                                <h3 className="text-3xl font-bold text-gray-900 mb-1">Your Name</h3>
                                <p className="text-primary font-bold text-lg mb-6 uppercase tracking-wide">Founder & Principal Consultant</p>
                                <blockquote className="text-xl text-gray-600 italic leading-relaxed border-l-4 border-secondary pl-6 mb-6">
                                    "With a background in Engineering and Traffic Safety, I started RoadSafe Pro to make a tangible difference. I am passionate about empowering drivers and ensuring our road infrastructure is clear, effective, and forgiving."
                                </blockquote>
                                <div className="flex gap-4">
                                    <div className="px-4 py-2 bg-white rounded-full text-sm font-bold text-gray-500 shadow-sm">Traffic Engineering</div>
                                    <div className="px-4 py-2 bg-white rounded-full text-sm font-bold text-gray-500 shadow-sm">Fleet Management</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

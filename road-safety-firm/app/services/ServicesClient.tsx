"use client";

import Button from '@/components/Button';
import { motion } from 'framer-motion';
import { FaCarSide, FaClipboardList, FaIndustry, FaArrowRight } from 'react-icons/fa';

export default function ServicesClient() {
    return (
        <div className="bg-white overflow-hidden">
            {/* Hero Section */}
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
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Expertise</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed"
                    >
                        Comprehensive, evidence-based solutions designed to minimize risk and maximize safety for everyone on the road.
                    </motion.p>
                </div>
            </section>

            {/* Defensive Driving */}
            <section className="py-24 relative" id="driving">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-12 gap-16 items-center">
                        <motion.div
                            className="lg:col-span-5 relative"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}

                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl transform rotate-3 scale-105 opacity-20 blur-lg"></div>
                            <img
                                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
                                alt="Driving Training"
                                className="relative rounded-2xl shadow-2xl z-10 w-full"
                            />
                        </motion.div>
                        <div className="lg:col-span-7 mt-10 lg:mt-0">
                            <div className="h-16 w-16 bg-blue-50 text-primary rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm">
                                <FaCarSide />
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900 font-heading mb-4">Defensive Driving Training</h2>
                            <h3 className="text-xl text-secondary font-bold mb-6 tracking-wide">Go beyond Basic Driving Skills.</h3>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Our courses are designed to transform the way your drivers view the road. We focus on proactive techniques, risk anticipation, and in-vehicle coaching to reduce collision rates and lower your insurance premiums.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                {['Corporate Fleet Training', 'Light & Heavy Vehicle Courses', 'On-Road Coaching', 'Classroom Theory'].map((item, idx) => (
                                    <div key={idx} className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-100">
                                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <Button href="/contact" className="shadow-lg">Inquire About Training</Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Auditing - Dark Section */}
            <section className="py-24 bg-gray-900 text-white relative overflow-hidden" id="audits">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-800 skew-x-12 translate-x-32 opacity-50 z-0"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="lg:grid lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-7 order-2 lg:order-1">
                            <div className="h-16 w-16 bg-green-500/20 text-green-400 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-glow">
                                <FaClipboardList />
                            </div>
                            <h2 className="text-4xl font-bold text-white font-heading mb-4">Traffic Sign Auditing</h2>
                            <h3 className="text-xl text-gray-300 font-semibold mb-6">Ensure Compliance and Clarity.</h3>
                            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                                Faded, missing, or non-compliant signs create confusion and danger. Our detailed audits provide you with a clear, actionable report to bring your road network up to the highest safety standards.
                            </p>
                            <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 mb-8">
                                <h4 className="font-bold text-white mb-4 text-lg">Our Audit Process</h4>
                                <ul className="space-y-4">
                                    {[
                                        { step: "01", title: "Site Survey", desc: "Physical inspection of signage." },
                                        { step: "02", title: "Compliance Check", desc: "Assessment against regulations." },
                                        { step: "03", title: "Condition Report", desc: "Wear & visibility evaluation." },
                                        { step: "04", title: "Recommendations", desc: "Prioritized action list." }
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <span className="text-green-400 font-bold font-mono mr-4 mt-1">{item.step}</span>
                                            <div>
                                                <strong className="text-gray-200 block">{item.title}</strong>
                                                <span className="text-gray-500 text-sm">{item.desc}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <Button href="/contact" variant="secondary" className="shadow-glow">Schedule an Audit</Button>
                        </div>
                        <motion.div
                            className="lg:col-span-5 order-1 lg:order-2 relative"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1584281722573-41bbd73c8808?q=80&w=1974&auto=format&fit=crop"
                                alt="Traffic Audit"
                                className="rounded-2xl shadow-2xl border-4 border-gray-700 w-full"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Manufacturing */}
            <section className="py-24 relative" id="manufacturing">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-12 gap-16 items-center">
                        <motion.div
                            className="lg:col-span-5 relative"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}

                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl transform -rotate-3 scale-105 opacity-20 blur-lg"></div>
                            <img
                                src="https://images.unsplash.com/photo-1543499797-a2873328cecb?q=80&w=2070&auto=format&fit=crop"
                                alt="Sign Manufacturing"
                                className="relative rounded-2xl shadow-2xl z-10 w-full"
                            />
                        </motion.div>
                        <div className="lg:col-span-7 mt-10 lg:mt-0">
                            <div className="h-16 w-16 bg-orange-100 text-accent rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm">
                                <FaIndustry />
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900 font-heading mb-4">Traffic Sign Manufacturing</h2>
                            <h3 className="text-xl text-accent font-bold mb-6 tracking-wide">Quality Signs for Clear Communication.</h3>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                We manufacture a wide range of traffic signs, from standard regulatory and warning signs to custom signage for construction zones and private facilities. We use premium materials for maximum durability and reflectivity.
                            </p>

                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-8">
                                {['Regulatory & Warning Signs', 'High-Intensity Prismatic', 'Aluminum & Steel Blanks', 'Custom Site Signage'].map((item, idx) => (
                                    <li key={idx} className="flex items-center text-gray-700 bg-white p-3 rounded-lg shadow-sm border border-gray-100 hover:border-accent transition-colors">
                                        <FaArrowRight className="text-accent text-sm mr-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Button href="/contact" variant="outline" className="border-gray-300 text-gray-600 hover:text-white hover:bg-gray-800">Request a Manufacturing Quote</Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

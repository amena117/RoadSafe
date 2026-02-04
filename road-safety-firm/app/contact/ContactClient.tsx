"use client";

import { useState } from 'react';
import Button from '@/components/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

export default function ContactClient() {
    const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormState('submitting');

        // Simulate API call
        setTimeout(() => {
            setFormState('success');
        }, 1500);
    };

    return (
        <div className="bg-neutral-50 overflow-hidden min-h-screen">
            {/* Header */}
            <section className="relative bg-gray-900 text-white py-24 pb-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-gray-900 to-gray-900 z-0"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-soft"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-6xl font-bold font-heading mb-6 tracking-tight text-shadow"
                    >
                        Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Touch</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-xl text-gray-300 max-w-2xl mx-auto font-light"
                    >
                        Ready to make your roads safer? Our expert team is standing by to discuss your specific needs.
                    </motion.p>
                </div>
            </section>

            {/* Content Section (Overlapping) */}
            <section className="relative -mt-32 pb-24 z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Contact Info Cards */}
                        <div className="lg:col-span-1 space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                className="glass p-8 rounded-2xl relative overflow-hidden group"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
                                <div className="relative z-10">
                                    <div className="h-12 w-12 bg-blue-50 text-primary rounded-xl flex items-center justify-center text-xl mb-4 shadow-sm">
                                        <FaPhone />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">Call Us</h3>
                                    <p className="text-sm text-gray-500 mb-2">Mon-Sat from 8am to 5pm.</p>
                                    <a href="tel:+251900881416" className="text-xl font-bold text-primary hover:text-blue-700 transition-colors">+251 900881416</a>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                                className="glass p-8 rounded-2xl relative overflow-hidden group"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full blur-2xl -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
                                <div className="relative z-10">
                                    <div className="h-12 w-12 bg-green-50 text-secondary rounded-xl flex items-center justify-center text-xl mb-4 shadow-sm">
                                        <FaEnvelope />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">Email Us</h3>
                                    <p className="text-sm text-gray-500 mb-2">We'll get back to you within 24h.</p>
                                    <a href="mailto:info@roadsafepro.com" className="text-lg font-bold text-secondary hover:text-green-700 transition-colors">info@roadsafepro.com</a>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 }}
                                className="glass p-8 rounded-2xl relative overflow-hidden group"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-full blur-2xl -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
                                <div className="relative z-10">
                                    <div className="h-12 w-12 bg-orange-50 text-accent rounded-xl flex items-center justify-center text-xl mb-4 shadow-sm">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">Visit Us</h3>
                                    <p className="text-sm text-gray-500 mb-2">Stop by our office.</p>
                                    <p className="text-lg font-bold text-gray-800">Addis Ababa, Ethiopia</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Form */}
                        <div className="lg:col-span-2">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 h-full"
                            >
                                <div className="p-8 md:p-12 h-full flex flex-col justify-center">
                                    <AnimatePresence mode='wait'>
                                        {formState === 'success' ? (
                                            <motion.div
                                                key="success"
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0 }}
                                                className="text-center py-12"
                                            >
                                                <div className="h-20 w-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                                    <FaCheckCircle className="text-4xl" />
                                                </div>
                                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                                                <p className="text-gray-500 mb-8">Thank you for contacting us. We will get back to you shortly.</p>
                                                <Button onClick={() => setFormState('idle')} variant="outline">Send Another Message</Button>
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                key="form"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                            >
                                                <div className="flex items-center gap-3 mb-8">
                                                    <div className="h-10 w-1 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
                                                    <h2 className="text-3xl font-bold text-gray-900 font-heading">Send us a Message</h2>
                                                </div>

                                                <form onSubmit={handleSubmit} className="space-y-6">
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                        <div className="space-y-2">
                                                            <label htmlFor="name" className="text-sm font-semibold text-gray-700 ml-1">Name</label>
                                                            <input type="text" id="name" className="w-full rounded-xl border-gray-200 bg-gray-50 px-4 py-3 focus:border-primary focus:ring-primary focus:bg-white transition-all duration-300" placeholder="John Doe" required />
                                                        </div>
                                                        <div className="space-y-2">
                                                            <label htmlFor="company" className="text-sm font-semibold text-gray-700 ml-1">Company</label>
                                                            <input type="text" id="company" className="w-full rounded-xl border-gray-200 bg-gray-50 px-4 py-3 focus:border-primary focus:ring-primary focus:bg-white transition-all duration-300" placeholder="Company Ltd" />
                                                        </div>
                                                    </div>

                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                        <div className="space-y-2">
                                                            <label htmlFor="email" className="text-sm font-semibold text-gray-700 ml-1">Email</label>
                                                            <input type="email" id="email" className="w-full rounded-xl border-gray-200 bg-gray-50 px-4 py-3 focus:border-primary focus:ring-primary focus:bg-white transition-all duration-300" placeholder="john@example.com" required />
                                                        </div>
                                                        <div className="space-y-2">
                                                            <label htmlFor="phone" className="text-sm font-semibold text-gray-700 ml-1">Phone</label>
                                                            <input type="tel" id="phone" className="w-full rounded-xl border-gray-200 bg-gray-50 px-4 py-3 focus:border-primary focus:ring-primary focus:bg-white transition-all duration-300" placeholder="+251..." />
                                                        </div>
                                                    </div>

                                                    <div className="space-y-2">
                                                        <label htmlFor="service" className="text-sm font-semibold text-gray-700 ml-1">I'm interested in...</label>
                                                        <div className="relative">
                                                            <select id="service" className="w-full rounded-xl border-gray-200 bg-gray-50 px-4 py-3 focus:border-primary focus:ring-primary focus:bg-white transition-all duration-300 appearance-none">
                                                                <option>General Inquiry</option>
                                                                <option>Defensive Driving Training</option>
                                                                <option>Traffic Sign Audit</option>
                                                                <option>Sign Manufacturing</option>
                                                            </select>
                                                            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                                                                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="space-y-2">
                                                        <label htmlFor="message" className="text-sm font-semibold text-gray-700 ml-1">Message</label>
                                                        <textarea id="message" rows={4} className="w-full rounded-xl border-gray-200 bg-gray-50 px-4 py-3 focus:border-primary focus:ring-primary focus:bg-white transition-all duration-300 resize-none" placeholder="Tell us about your project..." required></textarea>
                                                    </div>

                                                    <div className="pt-4">
                                                        <Button type="submit" className="w-full md:w-auto px-12 py-4 shadow-lg hover:shadow-glow flex items-center gap-2" disabled={formState === 'submitting'}>
                                                            {formState === 'submitting' ? (
                                                                <span>Sending...</span>
                                                            ) : (
                                                                <>
                                                                    <span>Send Message</span>
                                                                    <FaPaperPlane className="text-sm" />
                                                                </>
                                                            )}
                                                        </Button>
                                                    </div>
                                                </form>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Placeholder or Subtle Background */}
            <section className="py-10 bg-neutral-50 flex justify-center pb-20">
                <p className="text-gray-400 text-sm italic">Designed for RoadSafe Pro</p>
            </section>
        </div>
    );
}

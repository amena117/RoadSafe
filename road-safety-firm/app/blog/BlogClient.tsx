"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

const blogPosts = [
    {
        id: 1,
        title: "5 Common Traffic Sign Failures We See",
        excerpt: "Learn about the most frequent signage issues that lead to accidents and non-compliance fines.",
        category: "Audits",
        date: "March 15, 2025",
        image: "https://images.unsplash.com/photo-1596525164478-430c6a32d159?q=80&w=2072&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "How Defensive Driving Lowers Your TCO",
        excerpt: "Discover the financial benefits of training your fleet drivers, from fuel savings to reduced insurance premiums.",
        category: "Training",
        date: "March 10, 2025",
        image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "A Guide to MUTCD Standards for Private Property",
        excerpt: "Private roads still need to follow public standards. Here is what you need to know to stay compliant.",
        category: "Compliance",
        date: "March 1, 2025",
        image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop"
    },
];

export default function BlogClient() {
    return (
        <div className="bg-neutral-50 min-h-screen">
            {/* Header */}
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
                        Safety <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Resources</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed"
                    >
                        Insights, news, and guides from the road safety experts.
                    </motion.p>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <motion.div
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-2xl transition-all duration-300 border border-white/20 flex flex-col h-full transform hover:-translate-y-1"
                            >
                                <div className="h-56 w-full relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold border border-white/30 tracking-wide uppercase">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-8 flex-1 flex flex-col relative bg-white">
                                    <div className="text-sm text-gray-400 mb-3 font-medium">{post.date}</div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3 font-heading group-hover:text-primary transition-colors leading-tight">
                                        <Link href="#" className="before:absolute before:inset-0">{post.title}</Link>
                                    </h3>
                                    <p className="text-gray-600 mb-6 flex-1 leading-relaxed line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center text-primary font-bold group-hover:translate-x-2 transition-transform duration-300">
                                        Read Article
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-gray-500 mb-4">Looking for more specific information?</p>
                        <Link href="/contact" className="inline-block border-b-2 border-primary text-primary font-bold hover:text-blue-800 transition-colors">
                            Contact our team directly
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

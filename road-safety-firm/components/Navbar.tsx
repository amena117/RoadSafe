"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Resources', href: '/blog' },
    ];

    return (
        <nav className="fixed w-full z-50 top-0 transition-all duration-300 glass border-b-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center gap-2">
                            {/* Icon Placeholder */}
                            <div className="h-8 w-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold">
                                R
                            </div>
                            <Link href="/" className="text-2xl font-bold font-heading text-primary tracking-tight">
                                RoadSafe Pro
                            </Link>
                        </div>
                        <div className="hidden md:ml-10 md:flex md:space-x-8 items-center">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-600 hover:text-primary px-1 pt-1 text-sm font-medium transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        <Link href="/contact">
                            <button className="bg-primary hover:bg-blue-800 text-black px-5 py-2.5 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5">
                                Contact Us
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <FaTimes className="block h-6 w-6" /> : <FaBars className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 overflow-hidden shadow-xl"
                    >
                        <div className="px-4 pt-4 pb-6 space-y-2 sm:px-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-4 py-3 rounded-xl text-base font-semibold text-gray-700 hover:text-primary hover:bg-blue-50 transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 mt-2 border-t border-gray-100">
                                <Link href="/contact" onClick={() => setIsOpen(false)} className="block">
                                    <button className="w-full bg-primary hover:bg-blue-800 text-black px-5 py-3.5 rounded-xl text-base font-bold shadow-md transition-all flex items-center justify-center gap-2">
                                        Contact Us
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;

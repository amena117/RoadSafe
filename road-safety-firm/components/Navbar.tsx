"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Resources', href: '/blog' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 top-0 transition-all duration-300 ${scrolled
                ? 'glass dark:bg-gray-900/90 py-3 shadow-lg'
                : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center gap-2 group">
                            {/* Icon Placeholder */}
                            <div className="h-10 w-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-black font-bold shadow-md group-hover:scale-110 transition-transform duration-300">
                                R
                            </div>
                            <span className={`text-2xl font-bold font-heading tracking-tight transition-colors duration-300 ${scrolled ? 'text-black' : 'text-black'}`}>
                                RoadSafe <span className="text-secondary">Pro</span>
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="relative group"
                            >
                                <span className={`text-sm font-bold transition-colors duration-300 ${scrolled ? 'text-black hover:text-primary' : 'text-black hover:text-gray-200'}`}>
                                    {link.name}
                                </span>
                                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full`}></span>
                            </Link>
                        ))}

                        <Link href="/contact">
                            <button className={`px-6 py-2.5 rounded-full text-sm font-bold shadow-lg transition-all transform hover:-translate-y-0.5 ${scrolled
                                ? 'bg-primary text-black hover:bg-blue-700'
                                : 'bg-white text-black hover:bg-gray-100'
                                }`}>
                                Contact Us
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={toggleMenu}
                            className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-colors ${scrolled ? 'text-gray-900' : 'text-black'
                                }`}
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
                                    className="block px-4 py-3 rounded-xl text-base font-bold text-black hover:text-primary hover:bg-blue-50 transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 mt-2 border-t border-gray-100">
                                <Link href="/contact" onClick={() => setIsOpen(false)} className="block">
                                    <button className="w-full bg-primary hover:bg-blue-800 text-white px-5 py-3.5 rounded-xl text-base font-bold shadow-md transition-all flex items-center justify-center gap-2">
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

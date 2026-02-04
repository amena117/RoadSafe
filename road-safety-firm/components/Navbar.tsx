import Link from 'next/link';
import React from 'react';

const Navbar = () => {
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
                            <Link
                                href="/"
                                className="text-gray-600 hover:text-primary px-1 pt-1 text-sm font-medium transition-colors"
                            >
                                Home
                            </Link>
                            <Link
                                href="/about"
                                className="text-gray-600 hover:text-primary px-1 pt-1 text-sm font-medium transition-colors"
                            >
                                About Us
                            </Link>
                            <Link
                                href="/services"
                                className="text-gray-600 hover:text-primary px-1 pt-1 text-sm font-medium transition-colors"
                            >
                                Services
                            </Link>
                            <Link
                                href="/blog"
                                className="text-gray-600 hover:text-primary px-1 pt-1 text-sm font-medium transition-colors"
                            >
                                Resources
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link href="/contact">
                            <button className="bg-primary hover:bg-blue-800 text-black px-5 py-2.5 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5">
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

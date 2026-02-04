import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="relative bg-gray-900 text-white border-t border-white/10 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-black z-0"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl opacity-50"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pb-24 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="text-2xl font-bold font-heading text-white tracking-tight flex items-center gap-3 mb-6">
                            <div className="h-10 w-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-glow">
                                R
                            </div>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">RoadSafe Pro</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Building Safer Roads, One Journey at a Time. We provide professional, data-driven road safety solutions for a better tomorrow.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300">
                                <span className="sr-only">Facebook</span>
                                <FaFacebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300">
                                <span className="sr-only">Twitter</span>
                                <FaTwitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300">
                                <span className="sr-only">LinkedIn</span>
                                <FaLinkedin className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-bold text-white tracking-wider uppercase mb-6 border-b border-white/10 pb-2 inline-block">Services</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/services#driving" className="text-gray-400 hover:text-primary transition-colors flex items-center group">
                                    <span className="w-0 overflow-hidden group-hover:w-2 transition-all duration-300 mr-0 group-hover:mr-2 text-primary opacity-0 group-hover:opacity-100">&rsaquo;</span>
                                    Defensive Driving
                                </Link>
                            </li>
                            <li>
                                <Link href="/services#manufacturing" className="text-gray-400 hover:text-primary transition-colors flex items-center group">
                                    <span className="w-0 overflow-hidden group-hover:w-2 transition-all duration-300 mr-0 group-hover:mr-2 text-primary opacity-0 group-hover:opacity-100">&rsaquo;</span>
                                    Sign Manufacturing
                                </Link>
                            </li>
                            <li>
                                <Link href="/services#audits" className="text-gray-400 hover:text-primary transition-colors flex items-center group">
                                    <span className="w-0 overflow-hidden group-hover:w-2 transition-all duration-300 mr-0 group-hover:mr-2 text-primary opacity-0 group-hover:opacity-100">&rsaquo;</span>
                                    Traffic Audits
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-sm font-bold text-white tracking-wider uppercase mb-6 border-b border-white/10 pb-2 inline-block">Company</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/about" className="text-gray-400 hover:text-primary transition-colors flex items-center group">
                                    <span className="w-0 overflow-hidden group-hover:w-2 transition-all duration-300 mr-0 group-hover:mr-2 text-primary opacity-0 group-hover:opacity-100">&rsaquo;</span>
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-400 hover:text-primary transition-colors flex items-center group">
                                    <span className="w-0 overflow-hidden group-hover:w-2 transition-all duration-300 mr-0 group-hover:mr-2 text-primary opacity-0 group-hover:opacity-100">&rsaquo;</span>
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-gray-400 hover:text-primary transition-colors flex items-center group">
                                    <span className="w-0 overflow-hidden group-hover:w-2 transition-all duration-300 mr-0 group-hover:mr-2 text-primary opacity-0 group-hover:opacity-100">&rsaquo;</span>
                                    Resources
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-sm font-bold text-white tracking-wider uppercase mb-6 border-b border-white/10 pb-2 inline-block">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start group">
                                <div className="h-8 w-8 rounded-lg bg-white/5 flex items-center justify-center text-secondary mr-3 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                                    <FaMapMarkerAlt className="h-4 w-4" />
                                </div>
                                <span className="text-sm text-gray-400 leading-relaxed">
                                    Addis Ababa, Ethiopia<br />
                                </span>
                            </li>
                            <li className="flex items-center group">
                                <div className="h-8 w-8 rounded-lg bg-white/5 flex items-center justify-center text-secondary mr-3 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                                    <FaPhone className="h-4 w-4" />
                                </div>
                                <span className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer">+251 900881416</span>
                            </li>
                            <li className="flex items-center group">
                                <div className="h-8 w-8 rounded-lg bg-white/5 flex items-center justify-center text-secondary mr-3 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                                    <FaEnvelope className="h-4 w-4" />
                                </div>
                                <span className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer">info@roadsafepro.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-16 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
                    <p className="text-sm text-gray-500">
                        &copy; {new Date().getFullYear()} RoadSafe Pro. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-500">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

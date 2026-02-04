"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    href?: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'outline';
    className?: string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
}

const Button = ({ children, href, onClick, variant = 'primary', className = '', type = "button", disabled = false }: ButtonProps) => {
    const baseStyles = "inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100";

    const variants = {
        primary: "bg-gradient-to-r from-primary to-blue-700 text-white hover:shadow-glow hover:-translate-y-0.5 shadow-lg",
        secondary: "bg-gradient-to-r from-secondary to-green-600 text-white hover:shadow-glow hover:-translate-y-0.5 shadow-lg",
        outline: "bg-transparent border-2 border-white text-white hover:bg-white/10 hover:border-white shadow-soft"
    };


    const content = (
        <motion.button
            whileHover={disabled ? {} : { scale: 1.05 }}
            whileTap={disabled ? {} : { scale: 0.95 }}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {children}
        </motion.button>
    );

    if (href && !disabled) {
        return (
            <Link href={href} legacyBehavior>
                {content}
            </Link>
        );
    }

    return content;
};

export default Button;

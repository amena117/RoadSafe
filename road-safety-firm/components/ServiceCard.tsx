"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ServiceCardProps {
    title: string;
    description: string;
    icon: ReactNode;
    delay?: number;
}

const ServiceCard = ({ title, description, icon, delay = 0 }: ServiceCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.5, delay }}
            className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-soft border border-white/50 hover:shadow-xl transition-all duration-300 group"
        >
            <div className="h-14 w-14 bg-gradient-to-br from-blue-50 to-white text-primary rounded-xl flex items-center justify-center mb-6 text-2xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">{title}</h3>
            <p className="text-gray-600 leading-relaxed">
                {description}
            </p>
        </motion.div>
    );
};

export default ServiceCard;

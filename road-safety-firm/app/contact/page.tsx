import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
    title: 'Contact Us | RoadSafe Pro',
    description: 'Get in touch for a free consultation. Defensive driving, sign audits, and manufacturing quotes.',
};

export default function Contact() {
    return <ContactClient />;
}

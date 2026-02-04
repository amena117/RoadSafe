import { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
    title: 'About Us | RoadSafe Pro',
    description: 'Learn about our mission to engineer a safer future through education and infrastructure.',
};

export default function About() {
    return <AboutClient />;
}

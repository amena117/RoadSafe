import { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
    title: 'Our Services | RoadSafe Pro',
    description: 'Explore our services: Defensive Driving Training, Traffic Sign Audits, and Sign Manufacturing.',
};

export default function Services() {
    return <ServicesClient />;
}

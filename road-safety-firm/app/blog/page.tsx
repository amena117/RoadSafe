import { Metadata } from 'next';
import BlogClient from './BlogClient';

export const metadata: Metadata = {
    title: 'Safety Resources | RoadSafe Pro',
    description: 'Read the latest insights, news, and guides from our road safety experts.',
};

export default function Blog() {
    return <BlogClient />;
}

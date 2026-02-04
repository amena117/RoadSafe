import { Inter, Montserrat } from 'next/font/google';
import "./globals.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Define fonts with desired weights/subsets
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-inter', // Optional: for CSS var usage
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata = {
  title: 'RoadSafe Pro | Comprehensive Road Safety Solutions',
  description: 'Your trusted partner in defensive driving training, traffic sign audits, and sign manufacturing. Building safer roads for everyone.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="antialiased font-sans text-gray-900 bg-neutral-50">
        <Navbar />
        <main className="pt-20 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
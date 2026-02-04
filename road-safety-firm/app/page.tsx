"use client";

import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import { FaCarSide, FaClipboardCheck, FaIndustry, FaCheckCircle, FaUserShield, FaHardHat } from "react-icons/fa";
import { motion } from "framer-motion";



export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900 pt-20">
        {/* Background Image with Parallax-like fix */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/80 to-primary/40 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1596423736737-67c87c73a0e6?q=80&w=2070&auto=format&fit=crop"
            alt="Highway"
            className="w-full h-full object-cover scale-105 animate-pulse-soft"
          />
        </div>

        {/* Floating Shapes */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float z-0"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float z-0" style={{ animationDelay: '2s' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-block px-4 py-1.5 rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-300 font-medium text-sm mb-6 backdrop-blur-sm">
                Trusted by Corporate Fleets & Governments
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight text-white mb-6 text-shadow">
                Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Safer Roads</span>, <br />One Journey at a Time.
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
                Professional Road Safety Solutions: Defensive Driving, Traffic Sign Audits, High-Quality Sign Manufacturing and Road Marking.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/contact" variant="primary" className="font-bold text-lg shadow-glow">
                  Get a Free Consultation
                </Button>
                <Button href="/services" variant="outline" className="border-gray-500 text-gray-300 hover:text-white hover:border-white font-bold text-lg">
                  Explore Services
                </Button>
              </div>
            </motion.div>

            {/* Hero Visual Element (Glass Card) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-30 animate-pulse"></div>
              <div className="relative glass-dark p-8 rounded-2xl border border-gray-700/50">
                <div className="flex items-center gap-4 mb-6 border-b border-gray-700/50 pb-4">
                  <div className="h-12 w-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                    <FaCheckCircle className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">Safety Compliance</h3>
                    <p className="text-gray-400 text-sm">Latest Audit Standards</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-gray-300 text-sm">
                    <span>Signage Visibility</span>
                    <span className="text-green-400 font-bold">98%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '98%' }}></div>
                  </div>

                  <div className="flex items-center justify-between text-gray-300 text-sm">
                    <span>Driver Awareness</span>
                    <span className="text-blue-400 font-bold">Verified</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction with Asymmetric Layout */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-neutral-50 skew-x-12 translate-x-32 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-secondary font-bold tracking-wider uppercase text-sm">About RoadSafe Pro</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-heading mt-2 mb-6 leading-tight">
                We don't just react to problems; <br /> <span className="text-primary">we prevent them.</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Your trusted partner in comprehensive road safety. We are dedicated to reducing risks and saving lives through expert defensive driving training, meticulous traffic sign audits, and the manufacturing of durable, economical and compliant traffic signs.
              </p>
              <div className="flex items-center gap-8">
                <div>
                  <p className="text-3xl font-bold text-gray-900">15+</p>
                  <p className="text-gray-500 text-sm">Years Experience</p>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">100%</p>
                  <p className="text-gray-500 text-sm">Compliance Rate</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 rounded-3xl transform rotate-6 scale-95"></div>
                <img
                  src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2071&auto=format&fit=crop"
                  alt="Safety Expert"
                  className="rounded-3xl shadow-2xl relative z-10"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview with Pattern */}
      <section className="py-24 bg-neutral-900 text-white relative">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#4b5563_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold font-heading mb-4"
            >
              Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Safety Solutions</span>
            </motion.h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Expertly tailored services to meet the highest safety standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Defensive Driving"
              description="Equip your drivers with the best skills to anticipate hazards and prevent accidents on any road."
              icon={<FaCarSide />}
              delay={0.1}
            />
            <ServiceCard
              title="Traffic Sign Audits"
              description="Ensure your roadways are compliant, clear, and safe with our professional signage assessments and reports."
              icon={<FaClipboardCheck />}
              delay={0.2}
            />
            <ServiceCard
              title="Sign Manufacturing"
              description="Source high-quality, economical and durable traffic signs built to meet all official standards and specifications."
              icon={<FaIndustry />}
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us - Overlapping Layout */}
      <section className="py-32 bg-gray-50 overflow-visible">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-center">
            <div className="relative mb-16 lg:mb-0">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative z-10"
              >
                <img
                  src="https://images.unsplash.com/photo-1566236967733-149ebc973a21?q=80&w=2070&auto=format&fit=crop"
                  alt="Road Safety"
                  className="rounded-2xl shadow-2xl w-full"
                />
                {/* Floating Quote Card */}
                <div className="absolute -bottom-10 -right-10 w-2/3 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-soft border border-white/50 hidden md:block">
                  <h4 className="font-bold text-gray-900 mb-2">Did You Know?</h4>
                  <p className="text-gray-600 text-sm">Proper signage alone can reduce accident rates by up to 40% in high-risk zones.</p>
                </div>
              </motion.div>
              <div className="absolute top-10 -left-10 w-full h-full border-2 border-primary/20 rounded-2xl z-0 transform -rotate-3"></div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-accent font-bold tracking-wider uppercase text-sm">Why Choose Us</span>
              <h2 className="text-4xl font-bold text-gray-900 font-heading mt-2 mb-8">The Integrated Road Safety Advantage</h2>
              <div className="space-y-8">
                <div className="group flex">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <FaCheckCircle className="h-6 w-6" />
                  </div>
                  <div className="ml-6">
                    <h4 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">Holistic Approach</h4>
                    <p className="mt-2 text-gray-600">We are one of the few firms that understand the entire safety ecosystem—from the driver's seat to the roadside sign.</p>
                  </div>
                </div>
                <div className="group flex">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                    <FaHardHat className="h-6 w-6" />
                  </div>
                  <div className="ml-6">
                    <h4 className="text-xl font-bold text-gray-900 group-hover:text-secondary transition-colors">Practical Expertise</h4>
                    <p className="mt-2 text-gray-600">Our advice isn't just theoretical; it's grounded in real-world experience and knowledge of what works.</p>
                  </div>
                </div>
                <div className="group flex">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    <FaUserShield className="h-6 w-6" />
                  </div>
                  <div className="ml-6">
                    <h4 className="text-xl font-bold text-gray-900 group-hover:text-accent transition-colors">Quality & Compliance</h4>
                    <p className="mt-2 text-gray-600">Every service and product we deliver is built to meet or exceed established safety standards.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section - Gradient Mesh */}
      {/* CTA Section - Immersive Dark */}
      <section className="relative bg-gray-900 pt-32 pb-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900 to-gray-800/50 z-0"></div>
        {/* Abstract Shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 text-white">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 tracking-tight">Ready to Make Your Roads Safer?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Join the hundreds of organizations trusting RoadSafe Pro for their safety needs. Get expert advice today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/contact" className="font-bold text-lg px-12 py-4 shadow-lg hover:shadow-glow">
              Contact Us Today
            </Button>
            <Button href="/services" variant="outline" className="border-gray-600 text-gray-300 hover:bg-white hover:text-gray-900 font-bold text-lg px-12 py-4 transition-colors">
              View Our Portfolio
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

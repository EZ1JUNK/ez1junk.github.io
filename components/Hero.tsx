'use client';

import Link from 'next/link';
import { ArrowRight, Phone, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'motion/react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
  },
};

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div 
            className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-700 font-semibold text-sm mb-6 border border-green-200 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              Serving NYC 5 Boros & Long Island
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="font-heading text-5xl lg:text-7xl font-black tracking-tight text-gray-900 mb-6 leading-[1.1]">
              NYC&apos;s #1 <br/>
              <span className="text-gradient">
                Junk Removal
              </span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Reliable, EZ, and cleaner service for your home or business. We handle the heavy lifting so you don&apos;t have to.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-10">
              <motion.button 
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={(e) => {
                  e.preventDefault();
                  window.dispatchEvent(new CustomEvent('openBookingModal'));
                }}
                className="inline-flex justify-center items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg hover:shadow-xl hover:shadow-green-600/20"
              >
                Book Online Now
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.a 
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="tel:1-888-391-5865"
                className="inline-flex justify-center items-center gap-2 bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-200 px-8 py-4 rounded-full font-bold text-lg transition-colors hover:border-green-200 shadow-sm hover:shadow-md"
              >
                <Phone className="w-5 h-5 text-green-600" />
                1-888-391-5865
              </motion.a>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm font-medium text-gray-600">
              <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                Fully Licensed & Insured
              </div>
              <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                Same Day Service
              </div>
              <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                Eco-Friendly Disposal
              </div>
            </motion.div>
          </motion.div>
          
          {/* Image/Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
            className="relative h-[400px] lg:h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl bg-gradient-to-br from-green-50 to-emerald-100/50 mt-8 lg:mt-0 border border-white/60"
          >
            <motion.img 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              src="/ez1junk/images/business_svc.jpg" 
              alt="Business Services" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-transparent pointer-events-none"></div>
            <motion.div 
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              className="absolute top-0 left-0 right-0 p-6 lg:p-8"
            >
              <div className="glass-panel p-5 lg:p-6 rounded-2xl max-w-sm mx-auto lg:mx-0">
                <div className="flex items-center justify-center lg:justify-start gap-4 mb-3">
                  <div className="text-sm font-bold text-center lg:text-left text-gray-900">
                    Trusted by 500+<br/>Happy Customers
                  </div>
                </div>
                <div className="flex justify-center lg:justify-start text-yellow-400">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <motion.svg 
                      key={i} 
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + (i * 0.1), type: "spring", stiffness: 200 }}
                      className="w-5 h-5 fill-current drop-shadow-sm" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}

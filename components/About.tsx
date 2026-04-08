'use client';

import Image from 'next/image';
import { ShieldCheck, Leaf, Clock } from 'lucide-react';
import { motion } from 'motion/react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
  },
};

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#f3f4f6_1px,transparent_1px)] [background-size:20px_20px] opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            className="relative h-[400px] lg:h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl order-2 lg:order-1 bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-8 border border-green-100"
          >
            {/* Decorative circles behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle,rgba(255,255,255,0.8)_0%,transparent_70%)]"></div>
            
            <motion.img 
              whileHover={{ scale: 1.05, rotate: -2 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
              src="/ez1junk/images/re_think_green.jpg" 
              alt="ReThink Green" 
              className="w-full max-w-sm lg:max-w-md object-contain drop-shadow-2xl relative z-10"
            />
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="order-1 lg:order-2"
          >
            <motion.h2 variants={itemVariants} className="text-green-600 font-bold tracking-wide uppercase text-sm mb-3">Company Profile</motion.h2>
            <motion.h3 variants={itemVariants} className="font-heading text-4xl md:text-5xl font-black text-gray-900 mb-6">Who We Are</motion.h3>
            <motion.p variants={itemVariants} className="text-lg text-gray-600 mb-10 leading-relaxed">
              1-888-EZ1-JUNK is a fully licensed and insured junk removal company serving all 5 boroughs of NYC and Long Island. We pride ourselves on providing reliable, EZ, and cleaner service to both residential and commercial clients.
            </motion.p>

            <div className="space-y-8">
              <motion.div variants={itemVariants} className="flex gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-white border border-green-100 shadow-sm flex items-center justify-center shrink-0 group-hover:bg-green-50 group-hover:border-green-200 group-hover:shadow-md transition-all duration-300">
                  <ShieldCheck className="w-7 h-7 text-green-600 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Fully Licensed</h4>
                  <p className="text-gray-600 leading-relaxed">We operate under BIC LICENSE #3177, ensuring professional and compliant waste removal.</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-white border border-emerald-100 shadow-sm flex items-center justify-center shrink-0 group-hover:bg-emerald-50 group-hover:border-emerald-200 group-hover:shadow-md transition-all duration-300">
                  <Leaf className="w-7 h-7 text-emerald-600 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Eco-Friendly Focus</h4>
                  <p className="text-gray-600 leading-relaxed">We don&apos;t just dump. We sort, recycle, and donate whenever possible to reduce landfill waste.</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-white border border-orange-100 shadow-sm flex items-center justify-center shrink-0 group-hover:bg-orange-50 group-hover:border-orange-200 group-hover:shadow-md transition-all duration-300">
                  <Clock className="w-7 h-7 text-orange-600 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Fast & Reliable</h4>
                  <p className="text-gray-600 leading-relaxed">We respect your time. Our teams arrive promptly and work efficiently to clear your space.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

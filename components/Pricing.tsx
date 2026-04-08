'use client';

import { CheckCircle2, PhoneCall } from 'lucide-react';
import { motion } from 'motion/react';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-green-600 font-bold tracking-wide uppercase text-sm mb-3">How We Price</h2>
          <h3 className="font-heading text-4xl md:text-5xl font-black text-gray-900 mb-6">Fair & Transparent Pricing</h3>
          <p className="text-lg text-gray-600">
            Our pricing is based on volume—how much space your junk takes up in our truck. No hidden fees, ever.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden max-w-5xl mx-auto border border-gray-100"
        >
          <div className="grid md:grid-cols-5">
            <div className="md:col-span-3 p-8 lg:p-12 bg-green-900 text-white relative overflow-hidden">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-[radial-gradient(#22c55e_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>
              <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-green-500 opacity-20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-emerald-500 opacity-20 rounded-full blur-3xl"></div>
              
              <h4 className="text-3xl font-bold mb-4 relative z-10">What&apos;s Included?</h4>
              <p className="text-green-100/80 mb-10 relative z-10 text-lg">Every junk removal job includes all the essentials so you don&apos;t have to lift a finger.</p>
              
              <ul className="space-y-6 relative z-10">
                {[
                  'Labor & Heavy Lifting',
                  'Travel & Transportation',
                  'Proper Disposal Fees',
                  'Recycling & Donation',
                  'Post-Removal Cleanup'
                ].map((item, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-green-800 flex items-center justify-center shrink-0 border border-green-700/50">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                    </div>
                    <span className="font-medium text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-2 p-8 lg:p-12 flex flex-col justify-center items-center text-center bg-white">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                <PhoneCall className="w-10 h-10 text-green-600" />
              </div>
              <h4 className="text-3xl font-bold text-gray-900 mb-4">Get a Free Quote</h4>
              <p className="text-gray-600 mb-8 text-lg">We provide an upfront, no-obligation quote before we start any work.</p>
              <motion.a 
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="tel:1-888-391-5865"
                className="w-full bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-colors mb-4 shadow-lg hover:shadow-xl"
              >
                Call for Estimate
              </motion.a>
              <p className="text-sm text-gray-500 font-medium">Or book online and we&apos;ll quote on-site.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

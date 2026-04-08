'use client';

import { CalendarCheck, Truck, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

const steps = [
  {
    title: 'Book Your Appointment',
    description: 'Call us at 1-888-391-5865 or book online. Choose a time that works best for you.',
    icon: CalendarCheck,
  },
  {
    title: 'We Arrive & Quote',
    description: 'Our professional team arrives on time, reviews your junk, and provides a clear, upfront price.',
    icon: Truck,
  },
  {
    title: 'Junk is Gone',
    description: 'We do all the heavy lifting, clean up the area, and responsibly dispose of your items.',
    icon: Sparkles,
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
  },
};

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-green-50/50 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-green-600 font-bold tracking-wide uppercase text-sm mb-3">Simple Process</h2>
          <h3 className="font-heading text-4xl md:text-5xl font-black text-gray-900 mb-6">How It Works</h3>
          <p className="text-lg text-gray-600">
            Getting rid of your junk has never been easier. Just three simple steps to a clutter-free space.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-12 lg:gap-16 relative"
        >
          {/* Connecting dashed line for desktop */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 -z-10">
            <div className="w-full h-full border-t-2 border-dashed border-gray-200"></div>
            <motion.div 
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
              className="absolute top-0 left-0 h-full border-t-2 border-dashed border-green-500"
            />
          </div>
          
          {steps.map((step, index) => (
            <motion.div key={index} variants={stepVariants} className="relative text-center group">
              <div className="relative w-24 h-24 mx-auto mb-8">
                {/* Pulse effect behind icon */}
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }}
                  className="absolute inset-0 bg-green-200 rounded-full"
                ></motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="absolute inset-0 bg-white border-4 border-green-50 rounded-full flex items-center justify-center shadow-md relative z-10 group-hover:border-green-100 group-hover:shadow-lg transition-all"
                >
                  <step.icon className="w-10 h-10 text-green-600" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-sm border-4 border-white shadow-sm">
                    {index + 1}
                  </div>
                </motion.div>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h4>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

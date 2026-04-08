'use client';

import { Home, Building2, Recycle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';

const services = [
  {
    title: 'Home Junk Removal',
    description: 'Clear out your living space. We handle garages, basements, attics, and backyards with care and efficiency.',
    icon: Home,
    color: 'bg-green-50 text-green-600',
    features: ['Garage Cleanouts', 'Basement Clearing', 'Attic Junk Removal', 'Backyard Debris'],
    image: '/ez1junk/images/index_12.jpg'
  },
  {
    title: 'Business Junk Removal',
    description: 'Keep your workspace productive. We clear out offices, warehouses, and retail stores without disrupting your operations.',
    icon: Building2,
    color: 'bg-emerald-50 text-emerald-600',
    features: ['Office Furniture', 'Warehouse Clearing', 'Retail Store Cleanouts', 'Electronic Waste'],
    image: '/ez1junk/images/index_14.jpg'
  },
  {
    title: 'EZ Junk Removal',
    description: 'Our signature reliable, EZ, and cleaner service. We do all the heavy lifting, loading, and proper disposal.',
    icon: Recycle,
    color: 'bg-teal-50 text-teal-600',
    features: ['Reliable Service', 'EZ Process', 'Cleaner Results', 'Eco-Friendly Disposal'],
    image: '/ez1junk/images/index_18.jpg'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
  },
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50 relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-green-100/40 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-green-600 font-bold tracking-wide uppercase text-sm mb-3">Our Services</h2>
          <h3 className="font-heading text-4xl md:text-5xl font-black text-gray-900 mb-6">What We Remove</h3>
          <p className="text-lg text-gray-600">
            From single items to entire property cleanouts, our professional team is equipped to handle any junk removal job, big or small.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 group flex flex-col"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="w-full h-full relative"
                >
                  <Image src={service.image} alt={service.title} fill className="object-cover relative z-10" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent z-20"></div>
                </motion.div>
                <div className="absolute bottom-6 left-6 z-30">
                  <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center shadow-lg backdrop-blur-md bg-white/95 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-7 h-7" />
                  </div>
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h4 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8 flex-grow">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 font-medium text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    window.dispatchEvent(new CustomEvent('openBookingModal'));
                  }}
                  className="inline-flex items-center text-green-600 font-bold hover:text-green-700 transition-colors mt-auto text-left group/btn"
                >
                  Book this service 
                  <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

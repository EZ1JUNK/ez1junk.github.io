'use client';

import { motion } from 'motion/react';

export default function CTAButton() {
  return (
    <motion.button 
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      onClick={(e) => {
        e.preventDefault();
        window.dispatchEvent(new CustomEvent('openBookingModal'));
      }}
      className="bg-white text-green-600 hover:bg-gray-50 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl"
    >
      Book Online Now
    </motion.button>
  );
}

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openBookingModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(false);
    window.dispatchEvent(new CustomEvent('openBookingModal'));
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm py-0' : 'bg-transparent py-2'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2 relative h-12 w-32">
              <Image 
                src="/images/index_04.png" 
                alt="1-888-EZ1-JUNK" 
                fill
                className="object-contain"
                referrerPolicy="no-referrer"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <Link href="#services" className="text-gray-800 hover:text-green-600 font-medium transition-colors">Services</Link>
            <Link href="#pricing" className="text-gray-800 hover:text-green-600 font-medium transition-colors">Pricing</Link>
            <Link href="#about" className="text-gray-800 hover:text-green-600 font-medium transition-colors">About</Link>
            <Link href="#faq" className="text-gray-800 hover:text-green-600 font-medium transition-colors">FAQ</Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:1-888-391-5865" className="flex items-center gap-2 text-gray-900 font-bold hover:text-green-600 transition-colors">
              <Phone className="w-5 h-5 text-green-600" />
              <span>1-888-391-5865</span>
            </a>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openBookingModal}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-full font-semibold transition-colors shadow-md hover:shadow-lg"
            >
              Book Online
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 hover:text-green-600 focus:outline-none p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              <Link href="#services" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-md">Services</Link>
              <Link href="#pricing" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-md">Pricing</Link>
              <Link href="#about" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-md">About</Link>
              <Link href="#faq" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-md">FAQ</Link>
              <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-3 px-3">
                <a href="tel:1-888-391-5865" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-center gap-2 text-gray-900 font-bold py-3 bg-gray-50 rounded-lg">
                  <Phone className="w-5 h-5 text-green-600" />
                  <span>1-888-391-5865</span>
                </a>
                <button 
                  onClick={openBookingModal}
                  className="flex justify-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold w-full"
                >
                  Book Online
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

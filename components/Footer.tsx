'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6 relative h-12 w-32 inline-block">
              <Image 
                src="/images/index_04.png" 
                alt="1-888-EZ1-JUNK" 
                fill
                className="object-contain"
                referrerPolicy="no-referrer"
              />
            </Link>
            <p className="text-gray-400 mb-6">
              NYC&apos;s #1 Junk Removal Service. Reliable, EZ, and cleaner service for your home or business.
            </p>
            <div className="flex items-center gap-2 text-gray-300 font-medium">
              <span className="bg-gray-800 px-3 py-1 rounded-md text-sm">BIC LICENSE #3177</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="#services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="#pricing" className="text-gray-400 hover:text-white transition-colors">How We Price</Link></li>
              <li><Link href="#about" className="text-gray-400 hover:text-white transition-colors">Company Profile</Link></li>
              <li><Link href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQs</Link></li>
              <li>
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    window.dispatchEvent(new CustomEvent('openBookingModal'));
                  }}
                  className="text-green-400 hover:text-green-300 transition-colors font-medium text-left"
                >
                  Book Online
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-4">
              <li className="text-gray-400">Home Junk Removal</li>
              <li className="text-gray-400">Garage Cleanouts</li>
              <li className="text-gray-400">Business Junk Removal</li>
              <li className="text-gray-400">Office Clearing</li>
              <li className="text-gray-400">Warehouse Cleanouts</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:1-888-391-5865" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                  <Phone className="w-5 h-5 text-green-500" />
                  <span className="font-bold text-xl text-white">1-888-391-5865</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-green-500 shrink-0 mt-1" />
                <span>Serving NYC 5 Boro&apos;s & Long Island</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} 1888EZ1JUNK. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

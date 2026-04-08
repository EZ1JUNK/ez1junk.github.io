'use client';

import { useState, useEffect } from 'react';
import { X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: 'Home Junk Removal',
    message: ''
  });

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('openBookingModal', handleOpen);
    return () => window.removeEventListener('openBookingModal', handleOpen);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'date') {
      const selectedDate = new Date(value);
      // getUTCDay is used to avoid timezone shift issues when parsing YYYY-MM-DD strings
      if (selectedDate.getUTCDay() === 0) {
        alert('Sorry, we are closed on Sundays. Please select another date.');
        setFormData({ ...formData, date: '' });
        return;
      }
    }
    
    setFormData({ ...formData, [name]: value });
  };

  const generateTimeOptions = () => {
    const options = [];
    for (let i = 7; i <= 17; i++) {
      const hour12 = i > 12 ? i - 12 : i;
      const ampm = i >= 12 ? 'PM' : 'AM';
      const formattedHour = i.toString().padStart(2, '0');
      options.push(
        <option key={formattedHour} value={`${formattedHour}:00`}>
          {`${hour12}:00 ${ampm}`}
        </option>
      );
    }
    return options;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const payload = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone_number: formData.phone,
      service_needed: formData.service,
      additional_details: formData.message,
      booking_datetime: (formData.date && formData.time) ? `${formData.date}T${formData.time}:00` : new Date().toISOString(),
    };

    try {
      const response = await fetch('https://ez1junk.retool.com/url/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error('Booking failed');

      setIsSuccess(true);
      // Clear form on success
      setFormData({
        firstName: '', lastName: '', email: '', phone: '', date: '', time: '', service: 'Home Junk Removal', message: ''
      });
      
      setTimeout(() => {
        setIsOpen(false);
        setIsSuccess(false);
      }, 3000);
    } catch (error) {
      console.error(error);
      alert('There was an error submitting your booking. Please try again or call us.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          ></motion.div>

          {/* Modal Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
            className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden"
          >
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900">Book Online</h3>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-900 transition-colors p-1"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-center py-12"
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                      className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">Request Received!</h4>
                    <p className="text-gray-600">We&apos;ll get back to you shortly to confirm your appointment.</p>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                        <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all" placeholder="John" />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                        <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all" placeholder="Doe" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all" placeholder="(555) 123-4567" />
                      </div>
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
                        <select id="service" name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all bg-white">
                          <option>Home Junk Removal</option>
                          <option>Business Junk Removal</option>
                          <option>Construction Debris</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                        <input type="date" id="date" name="date" value={formData.date} min={new Date().toISOString().split('T')[0]} onChange={handleChange} required className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all text-gray-900" />
                      </div>
                      <div>
                        <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">Preferred Time</label>
                        <select id="time" name="time" value={formData.time} onChange={handleChange} required className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all bg-white text-gray-900">
                          <option value="" disabled>Select a time</option>
                          {generateTimeOptions()}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Additional Details</label>
                      <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={3} className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all resize-none" placeholder="Tell us what needs to be removed..."></textarea>
                    </div>

                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Submit Request
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

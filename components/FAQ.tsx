'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  {
    question: "What kind of junk do you remove?",
    answer: "We remove almost anything! This includes furniture, appliances, electronics, yard waste, construction debris, office equipment, and general household trash. We cannot take hazardous materials like chemicals, wet paint, or asbestos."
  },
  {
    question: "How do you determine the price?",
    answer: "Our pricing is based entirely on volume—how much space your items take up in our truck. The price includes all labor, travel, transport, and disposal fees. We provide a free, no-obligation estimate before we start."
  },
  {
    question: "Do I need to be there for the removal?",
    answer: "It's best if you are there to point out exactly what needs to go. However, if you can't be on-site, we can arrange curbside pickup or coordinate access as long as we can communicate with you to confirm the items and price."
  },
  {
    question: "What areas do you serve?",
    answer: "We proudly serve all 5 boroughs of New York City (Manhattan, Brooklyn, Queens, Bronx, Staten Island) as well as Long Island."
  },
  {
    question: "What happens to my junk after you take it?",
    answer: "We are committed to eco-friendly practices. We sort through the items we collect to recycle materials and donate usable goods to local charities. Only true waste goes to the landfill."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white relative">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-green-50/50 blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-green-600 font-bold tracking-wide uppercase text-sm mb-3">Got Questions?</h2>
          <h3 className="font-heading text-4xl md:text-5xl font-black text-gray-900 mb-6">Frequently Asked Questions</h3>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-green-200 shadow-md ring-1 ring-green-100' : 'border-gray-100 hover:border-green-100 hover:shadow-sm'}`}
              >
                <button
                  className="w-full px-6 py-6 text-left flex justify-between items-center focus:outline-none group"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className={`font-bold text-lg transition-colors duration-300 ${isOpen ? 'text-green-700' : 'text-gray-900 group-hover:text-green-600'}`}>
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${isOpen ? 'bg-green-100 text-green-600' : 'bg-gray-50 text-gray-400 group-hover:bg-green-50 group-hover:text-green-500'}`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2">
                        <p className="text-gray-600 leading-relaxed text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

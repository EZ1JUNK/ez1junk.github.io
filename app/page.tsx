import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Pricing from '@/components/Pricing';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import HowItWorks from '@/components/HowItWorks';
import Footer from '@/components/Footer';
import CTAButton from '@/components/CTAButton';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Pricing />
        <About />
        <FAQ />
        
        {/* CTA Section */}
        <section className="py-24 bg-green-600 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 mix-blend-overlay bg-cover bg-center" style={{ backgroundImage: "url('/images/skyline2.png')" }}></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-black text-white mb-6">Ready to get rid of your junk?</h2>
            <p className="text-xl text-green-100 mb-10">
              Call us today or book online for fast, reliable, and eco-friendly junk removal services.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <CTAButton />
              <a 
                href="tel:1-888-391-5865"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold text-lg transition-all"
              >
                Call 1-888-391-5865
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

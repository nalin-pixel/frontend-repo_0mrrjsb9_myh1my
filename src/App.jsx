import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { ProblemSection, WhyChooseSection, ApproachSection, WhatYouGetSection } from './components/Sections';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Dynamic subtle animated background */}
      <div className="pointer-events-none fixed inset-0 opacity-70" aria-hidden>
        <div className="absolute inset-0 animate-[pulse_12s_ease-in-out_infinite]" style={{
          background: 'radial-gradient(1200px_800px_at_30%_20%, rgba(147,51,234,0.18), transparent), radial-gradient(1000px_600px_at_70%_60%, rgba(139,92,246,0.12), transparent)'
        }} />
      </div>

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <ProblemSection />
        <WhyChooseSection />
        <ApproachSection />
        <WhatYouGetSection />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

import { useCallback } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Navbar() {
  const onScrollTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md/50 bg-black/50 border-b border-white/10">
      <div className="mx-auto max-w-7xl h-24 px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Circular Opturium logo with subtle gradient ring */}
          <div className="relative w-12 h-12 rounded-full bg-black flex items-center justify-center">
            <div className="absolute inset-0 rounded-full p-[2px]" style={{
              background: 'conic-gradient(from 180deg, rgba(168,85,247,0.6), rgba(147,51,234,0.6), rgba(59,130,246,0.2), rgba(168,85,247,0.6))'
            }}>
              <div className="w-full h-full rounded-full bg-black" />
            </div>
            <span className="relative text-white font-semibold tracking-wider">O</span>
          </div>
          <span className="text-xl sm:text-2xl font-semibold text-white">Opturium</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <button onClick={() => onScrollTo('home')} className="text-white/80 hover:text-white transition-colors">Home</button>
          <button onClick={() => onScrollTo('services')} className="text-white/80 hover:text-white transition-colors">Services</button>
          <button onClick={() => onScrollTo('process')} className="text-white/80 hover:text-white transition-colors">Process</button>
          <button onClick={() => onScrollTo('contact')} className="text-white/80 hover:text-white transition-colors">Contact</button>
        </nav>

        <button onClick={() => onScrollTo('cta')} className="inline-flex items-center gap-2 rounded-full px-5 py-3 bg-purple-600 hover:bg-purple-500 text-white font-semibold transition-colors shadow-[0_0_30px_rgba(147,51,234,0.35)]">
          Book a demo <ArrowRight size={18} />
        </button>
      </div>
    </header>
  );
}

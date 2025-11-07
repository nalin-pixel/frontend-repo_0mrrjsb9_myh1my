export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 py-12">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-8 items-start">
        <div>
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full bg-black flex items-center justify-center">
              <div className="absolute inset-0 rounded-full p-[2px]" style={{
                background: 'conic-gradient(from 180deg, rgba(168,85,247,0.6), rgba(147,51,234,0.6), rgba(59,130,246,0.2), rgba(168,85,247,0.6))'
              }}>
                <div className="w-full h-full rounded-full bg-black" />
              </div>
              <span className="relative text-white font-semibold tracking-wider">O</span>
            </div>
            <span className="text-lg font-semibold text-white">Opturium</span>
          </div>
          <p className="mt-3 text-sm text-white/60 max-w-sm">Mysterious by design. Clear on results. We build the invisible AI layer that moves numbers that matter.</p>
        </div>
        <div className="md:justify-self-center">
          <nav className="space-y-2 text-white/70">
            <a href="#home" className="block hover:text-white">Home</a>
            <a href="#services" className="block hover:text-white">Services</a>
            <a href="#process" className="block hover:text-white">Process</a>
            <a href="#cta" className="block hover:text-white">Book demo</a>
          </nav>
        </div>
        <div className="md:justify-self-end text-white/70 text-sm">
          <p>contact@opturium.com</p>
          <p className="mt-2">© {new Date().getFullYear()} Opturium. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

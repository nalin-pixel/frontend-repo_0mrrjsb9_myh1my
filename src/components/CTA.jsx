import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="cta" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-purple-800/30 via-black to-black p-10">
          <div className="pointer-events-none absolute -inset-1 rounded-[28px] bg-[radial-gradient(closest-side,rgba(147,51,234,0.35),rgba(0,0,0,0))] blur-2xl" aria-hidden />
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-sm tracking-widest text-purple-300/80 uppercase">Exclusive</p>
            <h3 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white">Only 5 consultation slots available this month</h3>
            <p className="mt-3 text-white/70 max-w-2xl">We partner with select teams ready to operationalize AI. If thats you, lets talk.</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#contact" className="rounded-full px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-semibold transition-colors shadow-[0_0_40px_rgba(147,51,234,0.4)]">Book a free demo</a>
              <span className="text-white/50 text-sm">No fluff. 30 minutes. Clear next steps.</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

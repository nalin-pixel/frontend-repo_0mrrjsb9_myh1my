import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] overflow-hidden pt-28">
      {/* Animated gradient background overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-60" aria-hidden>
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full blur-3xl" style={{
          background: 'radial-gradient(closest-side, rgba(168,85,247,0.35), rgba(0,0,0,0))'
        }} />
      </div>

      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative z-10">
          <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            AI infrastructure for decisive businesses
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-6 text-lg text-white/70 max-w-xl">
            Deploy proprietary automation systems that compound ROI. We architect the invisible AI layer that powers ops, revenue, and support.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }} className="mt-8 flex items-center gap-4">
            <a href="#cta" className="rounded-full px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-semibold transition-colors shadow-[0_0_40px_rgba(147,51,234,0.4)]">
              Book demo
            </a>
            <a href="#services" className="text-white/70 hover:text-white transition-colors">Explore services</a>
          </motion.div>
        </div>

        <div className="relative h-[480px] lg:h-[560px]">
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          {/* Floating dashboard mockup overlay */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.7 }} className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[88%] max-w-xl rounded-xl border border-white/10 bg-black/60 backdrop-blur-md p-4 shadow-2xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-white/50">Ops Throughput</p>
                <p className="text-2xl font-semibold text-white">+142%</p>
              </div>
              <div className="w-1/2 h-2 rounded bg-white/10 overflow-hidden">
                <div className="h-full bg-purple-600" style={{ width: '72%' }} />
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[
                { label: 'Leads', value: '+68%', w: '68%' },
                { label: 'AHT', value: '-37%', w: '37%' },
                { label: 'Automation', value: '84%', w: '84%' },
              ].map((m) => (
                <div key={m.label} className="rounded-lg border border-white/10 p-3 bg-black/40">
                  <p className="text-xs text-white/50">{m.label}</p>
                  <p className="text-lg font-semibold text-white">{m.value}</p>
                  <div className="mt-2 h-1.5 rounded bg-white/10 overflow-hidden">
                    <div className="h-full bg-purple-600" style={{ width: m.w }} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Rocket, Workflow, Shield, Gauge, Zap, Cog, LineChart, Layers, Lock, CheckCircle2, ArrowRightLeft, Code, ChartColumn } from 'lucide-react';

function SectionWrapper({ id, children }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  return (
    <section id={id} ref={ref} className="relative py-24">
      <div className={`mx-auto max-w-7xl px-6 transition-opacity duration-700 ${inView ? 'opacity-100' : 'opacity-0 translate-y-6'}`}>
        {children}
      </div>
    </section>
  );
}

export function ProblemSection() {
  const cards = [
    { icon: Gauge, title: 'Leads go cold', desc: 'Slow follow-ups bleed revenue. We build agents that move faster than your pipeline.' },
    { icon: Workflow, title: 'Ops drag', desc: 'Fragmented tools and manual handoffs create latency. We stitch it into one brain.' },
    { icon: LineChart, title: 'Unclear ROI', desc: 'Dashboards lie. We track the hard metrics that compound over time.' },
    { icon: Cog, title: 'Process entropy', desc: 'Knowledge walks out the door. We encode your edge into systems.' },
  ];

  return (
    <SectionWrapper id="services">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">The problem</h2>
      <p className="mt-4 text-white/70 max-w-2xl">Most teams stitch together tools and hope for lift. We design a unified AI layer that executes, measures, and improves.</p>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map(({ icon: Icon, title, desc }, idx) => (
          <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }}
            className="group relative rounded-2xl border border-white/10 bg-black/50 p-6 hover:-translate-y-1 transition-transform">
            <div className="absolute inset-0 rounded-2xl bg-purple-500/0 group-hover:bg-purple-500/10 blur-2xl transition-colors" aria-hidden />
            <div className="relative flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-600/20 text-purple-400 flex items-center justify-center group-hover:rotate-6 transition-transform">
                <Icon size={20} />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
            </div>
            <p className="relative mt-4 text-sm text-white/70">{desc}</p>
            <div className="relative mt-5 h-2 rounded bg-white/10 overflow-hidden">
              <div className="h-full bg-purple-600" style={{ width: `${70 + idx * 6}%` }} />
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

export function WhyChooseSection() {
  const items = [
    { icon: Shield, title: 'Proprietary methodology', desc: 'We combine deterministic systems with adaptive agents—details shared only with clients.' },
    { icon: Zap, title: 'Speed to value', desc: 'Weeks, not quarters. Compact pilots that prove lift before scale.' },
    { icon: Layers, title: 'Full-stack automation', desc: 'From data flows to frontlines, one orchestrated layer.' },
    { icon: Lock, title: 'Risk aware', desc: 'Guardrails, auditability, and controls built in from day one.' },
    { icon: Rocket, title: 'Compounding ROI', desc: 'Every workflow becomes a flywheel that improves with use.' },
    { icon: ChartColumn, title: 'Operational clarity', desc: 'The right metrics in the right places—no vanity graphs.' },
  ];

  return (
    <SectionWrapper id="why">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">Why choose Opturium</h2>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(({ icon: Icon, title, desc }, idx) => (
          <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }}
            className="group relative rounded-2xl border border-white/10 bg-black/50 p-6 hover:shadow-[0_0_60px_rgba(147,51,234,0.25)] transition-all">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-600/20 text-purple-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon size={20} />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
            </div>
            <p className="mt-3 text-sm text-white/70">{desc}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

export function ApproachSection() {
  const steps = [
    { icon: Workflow, title: 'Model the system', desc: 'Map inputs, incentives, constraints. Build the control loop.' },
    { icon: Code, title: 'Instrument & automate', desc: 'Wire data planes, agents, actions. Guardrails by default.' },
    { icon: ArrowRightLeft, title: 'Measure & iterate', desc: 'Ship. Observe. Tighten feedback loops for compounding lift.' },
  ];

  return (
    <SectionWrapper id="process">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">Our approach</h2>
      <p className="mt-4 text-white/70 max-w-2xl">A clear sequence, intentionally constrained. Enough signal to decide—no public playbooks.</p>

      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {steps.map(({ icon: Icon, title, desc }, idx) => (
          <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }}
            className="relative rounded-2xl border border-white/10 bg-black/50 p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-600/20 text-purple-400 flex items-center justify-center">
                <Icon size={20} />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
            </div>
            <p className="mt-3 text-sm text-white/70">{desc}</p>
            {/* Code snippet mockup */}
            <div className="mt-5 rounded-lg border border-white/10 bg-gradient-to-b from-black/40 to-black/20 p-4">
              <pre className="text-xs text-white/80 leading-6"><code>{`pipeline -> inputs(stream) -> agent.decide() -> action.execute() -> metrics.emit()`}</code></pre>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Before / After */}
      <div className="mt-12 grid md:grid-cols-2 gap-6">
        {['Before', 'After'].map((state, i) => (
          <motion.div key={state} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * i }}
            className="rounded-2xl border border-white/10 bg-black/50 p-6">
            <h4 className="text-white font-semibold">{state}</h4>
            <div className="mt-4 h-40 rounded bg-gradient-to-r from-purple-900/40 to-black/20 flex items-end p-4 gap-2">
              {Array.from({ length: 8 }).map((_, idx) => (
                <div key={idx} className="flex-1 bg-purple-600/40 rounded" style={{ height: `${state === 'Before' ? (20 + idx * 6) : (80 - idx * 6)}%` }} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

export function WhatYouGetSection() {
  const deliverables = [
    'Executive workshop + roadmap',
    'Custom automation systems tailored to your stack',
    'Agent orchestration with guardrails',
    'Observability, metrics, and control plane',
    'Runbooks and operational playbooks',
    'Ongoing iteration and support',
  ];

  return (
    <SectionWrapper id="what-you-get">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">What you get</h2>
      <div className="mt-8 grid md:grid-cols-2 gap-8 items-start">
        <ul className="space-y-4">
          {deliverables.map((d) => (
            <li key={d} className="flex items-start gap-3">
              <CheckCircle2 className="text-purple-400 mt-1" size={18} />
              <span className="text-white/90">{d}</span>
            </li>
          ))}
        </ul>
        <div className="rounded-2xl border border-white/10 bg-black/50 p-6">
          <div className="grid grid-cols-3 gap-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="aspect-video rounded-lg border border-white/10 bg-gradient-to-br from-purple-900/30 to-black/30" />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

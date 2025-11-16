import { motion } from 'framer-motion'
import { ShieldCheck, Lock, Radar, Cpu } from 'lucide-react'

const items = [
  {
    icon: ShieldCheck,
    title: 'Unified Protection',
    desc: 'One platform for endpoint, email, and cloud—backed by continuous monitoring.',
  },
  {
    icon: Radar,
    title: 'Real‑time Detection',
    desc: 'Stream events at scale and detect anomalies with ML models tuned to your stack.',
  },
  {
    icon: Cpu,
    title: 'AI‑assisted Response',
    desc: 'Automated playbooks isolate hosts, revoke keys, and notify stakeholders instantly.',
  },
  {
    icon: Lock,
    title: 'Compliance‑ready',
    desc: 'Built‑in reports and evidence collection for SOC2, ISO 27001, and HIPAA.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative bg-zinc-950 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
            Everything you need to stay secure
          </h2>
          <p className="mt-3 text-white/60">
            Purpose‑built to protect modern, fast‑moving teams without slowing them down.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 hover:border-white/20 transition-colors"
            >
              <div className="h-10 w-10 rounded-lg bg-emerald-400/15 text-emerald-300 inline-flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/60">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

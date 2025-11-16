import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-gradient-to-b from-black via-black to-zinc-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/DtQLjBkD1UpownGS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 md:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            SOC-grade protection for modern teams
          </div>

          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-white">
            Enterprise cyber security, simplified.
          </h1>
          <p className="mt-4 text-lg text-white/70">
            Monitor, detect and neutralize threats in real‑time with AI‑powered defense. Built for startups to the Fortune 500.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#pricing" className="pointer-events-auto inline-flex items-center justify-center rounded-md bg-emerald-400 px-6 py-3 text-sm font-medium text-black hover:bg-emerald-300 transition-colors">
              Start free trial
            </a>
            <a href="#features" className="pointer-events-auto inline-flex items-center justify-center rounded-md border border-white/20 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors">
              See how it works
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-white/60">
            {[
              ['99.99%', 'uptime'],
              ['< 2m', 'threat response'],
              ['SOC2', 'Type II'],
              ['AES‑256', 'encryption'],
            ].map(([stat, label]) => (
              <div key={label}>
                <div className="text-xl font-semibold text-white">{stat}</div>
                <div className="text-xs uppercase tracking-wide text-white/50">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-[60rem] w-[60rem] rounded-full bg-emerald-500/10 blur-[120px]" />
      </motion.div>
    </section>
  )
}

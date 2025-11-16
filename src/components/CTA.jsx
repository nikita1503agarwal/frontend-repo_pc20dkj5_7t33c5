import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-b from-zinc-950 to-black py-24 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative isolate rounded-2xl border border-white/10 p-10 bg-white/5">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
              Ready to fortify your stack?
            </h2>
            <p className="mt-3 text-white/70">
              Get started in minutes with our guided setup. No credit card required.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#" className="inline-flex items-center justify-center rounded-md bg-emerald-400 px-6 py-3 text-sm font-medium text-black hover:bg-emerald-300 transition-colors">
                Start free
              </a>
              <a href="#" className="inline-flex items-center justify-center rounded-md border border-white/20 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors">
                Talk to sales
              </a>
            </div>
          </motion.div>

          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-12 -bottom-12 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
        </div>
      </div>
    </section>
  )
}

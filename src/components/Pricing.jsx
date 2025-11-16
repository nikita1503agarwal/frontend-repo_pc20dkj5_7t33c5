import { motion } from 'framer-motion'

const plans = [
  {
    name: 'Starter',
    price: '$0',
    period: 'forever',
    highlight: false,
    features: ['Up to 5 devices', 'Email alerts', 'Basic reporting', 'Community support'],
  },
  {
    name: 'Growth',
    price: '$49',
    period: 'per month',
    highlight: true,
    features: ['Up to 50 devices', 'Realtime alerts', 'Automated playbooks', 'SAML SSO'],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'annual',
    highlight: false,
    features: ['Unlimited devices', 'Dedicated CSM', 'On‑prem options', 'Custom SLAs'],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-zinc-950 py-24 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Simple, transparent pricing</h2>
          <p className="mt-3 text-white/60">Start free, upgrade when you scale. Cancel anytime.</p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className={`rounded-2xl border bg-gradient-to-b p-6 ${
                plan.highlight
                  ? 'from-emerald-500/10 to-transparent border-emerald-400/30'
                  : 'from-white/5 to-transparent border-white/10'
              }`}
            >
              <div className="flex items-end gap-2">
                <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                {plan.highlight && (
                  <span className="rounded-full bg-emerald-400/20 px-2 py-0.5 text-xs text-emerald-300">Most popular</span>
                )}
              </div>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl font-semibold text-white">{plan.price}</span>
                <span className="text-sm text-white/60">{plan.period}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="text-sm text-white/70">• {f}</li>
                ))}
              </ul>
              <a href="#" className={`mt-8 inline-flex w-full items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                plan.highlight ? 'bg-emerald-400 text-black hover:bg-emerald-300' : 'bg-white/10 text-white hover:bg-white/20'
              }`}>
                {plan.highlight ? 'Start free trial' : 'Contact sales'}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

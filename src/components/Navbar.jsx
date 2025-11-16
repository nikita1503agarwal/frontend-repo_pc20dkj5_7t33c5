import { useState } from 'react'
import { Menu, Shield, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#features', label: 'Features' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#testimonials', label: 'Stories' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-sm bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="inline-flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-emerald-500/20 text-emerald-400">
              <Shield className="h-5 w-5" />
            </span>
            <span className="text-white font-semibold tracking-tight">AegisGuard</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-white/70 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#pricing" className="text-sm text-white/70 hover:text-white">Pricing</a>
            <a href="#" className="text-sm font-medium text-black bg-emerald-400 hover:bg-emerald-300 transition-colors px-4 py-2 rounded-md">Start free</a>
          </div>

          <button onClick={() => setOpen(true)} className="md:hidden p-2 rounded-md text-white/80 hover:text-white hover:bg-white/10">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/80">
          <div className="absolute right-4 top-4">
            <button onClick={() => setOpen(false)} className="p-2 rounded-md text-white/80 hover:text-white hover:bg-white/10">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="mt-20 mx-6 rounded-xl border border-white/10 bg-black/50 p-6 space-y-4">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block text-lg text-white/90 py-2">
                {item.label}
              </a>
            ))}
            <div className="pt-2">
              <a href="#" className="block w-full text-center text-black bg-emerald-400 hover:bg-emerald-300 transition-colors px-4 py-3 rounded-md font-medium">
                Start free
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

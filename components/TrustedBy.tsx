'use client'

import { motion } from 'framer-motion'

const partners = [
  'Securitas', 'Veolia', 'SNCF', 'Renault', 'Total', 'BNP Paribas',
  'Carrefour', 'L\'Oréal', 'Air France', 'Société Générale',
]

export default function TrustedBy() {
  const doubled = [...partners, ...partners]

  return (
    <section className="py-16 border-t border-b" style={{ borderColor: '#E2E8F0', background: 'white' }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm font-semibold uppercase tracking-widest mb-10"
          style={{ color: '#94A3B8', letterSpacing: '0.15em' }}
        >
          Ils nous font confiance
        </motion.p>

        {/* Marquee */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div
            className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(90deg, white, transparent)' }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(-90deg, white, transparent)' }}
          />

          <div className="marquee-track flex gap-16 items-center" style={{ width: 'max-content' }}>
            {doubled.map((name, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-6 py-3 rounded-xl whitespace-nowrap select-none"
                style={{
                  background: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  minWidth: '140px',
                }}
              >
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-white"
                  style={{ background: `hsl(${(i * 47) % 360}, 65%, 50%)` }}
                >
                  {name[0]}
                </div>
                <span className="text-sm font-semibold" style={{ color: '#475569' }}>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

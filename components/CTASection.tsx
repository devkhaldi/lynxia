'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, PhoneCall } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Dynamic Background */}
      <div 
        className="absolute inset-0 z-0 bg-slate-50"
      >
        <div 
          className="absolute inset-0 opacity-40" 
          style={{
            backgroundImage: 'radial-gradient(circle at top right, rgba(79,70,229,0.15), transparent 50%), radial-gradient(circle at bottom left, rgba(6,182,212,0.15), transparent 50%)'
          }}
        />
        <div 
          className="absolute inset-0"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%234f46e5\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Prêt à optimiser vos <br />
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #4F46E5, #06B6D4)' }}>
              contrats d&apos;assurance ?
            </span>
          </h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Contactez-nous aujourd&apos;hui. Nos experts réalisent un audit gratuit de vos garanties actuelles sous 24h.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <button 
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-transform hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #4F46E5, #06B6D4)' }}
              >
                Demander un devis <ArrowRight size={18} />
              </button>
            </Link>
            <a href="tel:0605869207">
              <button 
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors"
                style={{ background: 'white', color: '#0F172A', border: '1px solid #E2E8F0' }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#F8FAFC')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'white')}
              >
                <PhoneCall size={18} color="#4F46E5" /> 06 05 86 92 07
              </button>
            </a>
          </div>
          <p className="text-sm text-slate-500 mt-6">
            L&apos;audit est gratuit et sans aucun engagement.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

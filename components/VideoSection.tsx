'use client'

import { motion } from 'framer-motion'
import { Play, TrendingDown, Clock, ShieldCheck } from 'lucide-react'

export default function VideoSection() {
  return (
    <section className="section-padding" style={{ background: '#F8FAFC' }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-4"
            style={{ background: 'rgba(79,70,229,0.08)', border: '1px solid rgba(79,70,229,0.2)', color: '#4F46E5' }}
          >
            L&apos;assurance nouvelle génération
          </div>
          <h2 className="text-4xl font-extrabold mb-4" style={{ color: '#0F172A' }}>
            100% digital, <span className="gradient-text">100% humain</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#64748B' }}>
            Découvrez comment nous simplifions la gestion de vos contrats. L&apos;expertise d&apos;un courtier 
            traditionnel, avec la rapidité et la transparence d&apos;une plateforme moderne.
          </p>
        </motion.div>

        {/* Video / Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden aspect-video max-w-5xl mx-auto"
          style={{
            background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
            boxShadow: '0 25px 60px rgba(0,0,0,0.15)',
            border: '1px solid rgba(255,255,255,0.1)'
          }}
        >
          {/* Mock UI Header */}
          <div className="absolute top-0 left-0 right-0 h-12 border-b border-white/10 flex items-center px-4 bg-slate-900/50 backdrop-blur-sm z-10">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <div className="mx-auto px-4 py-1 rounded-md bg-white/5 text-[11px] text-slate-400 font-mono tracking-wider">
              Espace_Client_Lynxia_Assur.pdf
            </div>
          </div>

          {/* Abstract graphics instead of real video for now */}
          <div className="absolute inset-0 flex items-center justify-center pt-12">
            <div className="grid grid-cols-2 gap-8 w-full max-w-3xl px-8">
              <div className="space-y-4">
                <div className="h-4 bg-white/10 rounded-full w-3/4" />
                <div className="h-4 bg-white/5 rounded-full w-1/2" />
                <div className="h-24 bg-indigo-500/20 rounded-xl border border-indigo-500/30 mt-8" />
              </div>
              <div className="space-y-4">
                <div className="h-32 bg-cyan-500/20 rounded-xl border border-cyan-500/30" />
                <div className="h-16 bg-white/5 rounded-xl border border-white/10" />
              </div>
            </div>
          </div>

          {/* Play button overlay */}
          <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center backdrop-blur-[2px] group cursor-pointer z-20">
            <div className="w-20 h-20 rounded-full flex items-center justify-center transition-transform group-hover:scale-110" style={{ background: 'linear-gradient(135deg, #4F46E5, #06B6D4)' }}>
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center pl-1">
                <Play size={24} color="#4F46E5" fill="#4F46E5" />
              </div>
            </div>
          </div>

          {/* Value props overlay over video */}
          <div className="absolute bottom-6 left-6 right-6 hidden md:grid grid-cols-3 gap-4 z-20">
            {[
              { label: 'Réduction moyenne', value: '-22%', icon: TrendingDown, color: '#10B981' },
              { label: 'Attestation en ligne', value: '< 2 min', icon: Clock, color: '#38BDF8' },
              { label: 'Dossiers gérés', value: '100%', icon: ShieldCheck, color: '#A78BFA' },
            ].map((stat) => {
              const Icon = stat.icon
              return (
                <div key={stat.label} className="bg-slate-900/80 backdrop-blur-md rounded-xl p-4 border border-white/10 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.05)' }}>
                    <Icon size={20} color={stat.color} />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white mb-0.5">{stat.value}</div>
                    <div className="text-xs text-slate-400">{stat.label}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

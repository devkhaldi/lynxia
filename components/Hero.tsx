'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronRight, FileText, Shield, FileCheck, CheckCircle, ArrowRight, User } from 'lucide-react'

const floatingCards = [
  {
    icon: FileCheck,
    color: '#059669',
    bg: '#D1FAE5',
    title: 'Devis validé',
    sub: 'Multirisque Pro - Validé',
    badge: '✓',
    badgeBg: '#A7F3D0',
    badgeColor: '#065F46',
    delay: 0,
    x: 0,
    y: 0,
  },
  {
    icon: Shield,
    color: '#4F46E5',
    bg: '#EEF2FF',
    title: 'Attestation générée',
    sub: 'Garantie Décennale',
    badge: 'PDF',
    badgeBg: '#C7D2FE',
    badgeColor: '#3730A3',
    delay: 1,
    x: 0,
    y: 0,
  },
  {
    icon: FileText,
    color: '#F59E0B',
    bg: '#FFFBEB',
    title: 'Dossier sinistre',
    sub: 'Pris en charge à 100%',
    badge: '★',
    badgeBg: '#FEF3C7',
    badgeColor: '#D97706',
    delay: 1.5,
    x: 0,
    y: 0,
  },
]

export default function Hero() {
  return (
    <section className="hero-gradient relative min-h-screen flex items-center" style={{ paddingTop: '88px' }}>
      <div className="max-w-7xl mx-auto px-6 w-full py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-sm font-medium"
              style={{
                background: 'rgba(79,70,229,0.08)',
                border: '1px solid rgba(79,70,229,0.2)',
                color: '#4F46E5',
              }}
            >
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#4F46E5' }} />
              Courtier 100% digital, 100% humain
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6"
              style={{ color: '#0F172A', lineHeight: '1.1' }}
            >
              Clarté. Rapidité. <br />
              <span className="gradient-text">Solutions fiables.</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg leading-relaxed mb-8 max-w-lg"
              style={{ color: '#64748B' }}
            >
              Votre courtier expert en assurance professionnelle pour les entreprises, 
              indépendants et dirigeants. Des explications simples sans jargon pour des décisions éclairées.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link href="/contact">
                <button className="btn-primary text-base">
                  Obtenir un devis gratuit <ArrowRight size={16} />
                </button>
              </Link>
              <Link href="/services">
                <button className="btn-secondary text-base">
                  Nos garanties
                </button>
              </Link>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-6"
            >
              <div className="flex -space-x-3">
                {['#4F46E5', '#06B6D4', '#8B5CF6', '#F59E0B'].map((color, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: color }}
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ color: '#F59E0B', fontSize: '13px' }}>★</span>
                  ))}
                </div>
                <p className="text-sm" style={{ color: '#64748B' }}>
                  <strong style={{ color: '#0F172A' }}>4,9 étoiles</strong> avis clients vérifiés
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: Client Portal Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Main dashboard card */}
              <div
                className="glass-card rounded-3xl p-6 w-80 relative z-10"
                style={{ boxShadow: '0 25px 60px rgba(79,70,229,0.18)' }}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ background: 'linear-gradient(135deg,#4F46E5,#06B6D4)' }}
                    >
                      <User size={15} color="white" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold" style={{ color: '#0F172A' }}>Espace Client</div>
                      <div className="text-xs" style={{ color: '#94A3B8' }}>Lynxia Assur</div>
                    </div>
                  </div>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {[
                    { label: 'Contrats actifs', value: '3', color: '#4F46E5' },
                    { label: 'Attestations', value: '4', color: '#059669' },
                    { label: 'Devis en cours', value: '1', color: '#F59E0B' },
                    { label: 'Sinistres', value: '0', color: '#06B6D4' },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl p-3"
                      style={{ background: 'rgba(79,70,229,0.04)', border: '1px solid rgba(79,70,229,0.08)' }}
                    >
                      <div className="text-2xl font-bold mb-0.5" style={{ color: stat.color }}>{stat.value}</div>
                      <div className="text-xs" style={{ color: '#94A3B8' }}>{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Recent event */}
                <div
                  className="flex items-center gap-3 rounded-xl p-3 mb-3 border"
                  style={{ background: '#F8FAFC', borderColor: '#E2E8F0' }}
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: '#EEF2FF' }}>
                    <Shield size={14} color="#4F46E5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-semibold" style={{ color: '#0F172A' }}>Garantie Décennale</div>
                    <div className="text-[11px]" style={{ color: '#64748B' }}>Couverture active</div>
                  </div>
                  <div className="text-[11px] font-medium" style={{ color: '#059669' }}>
                    À jour
                  </div>
                </div>

                <button className="w-full py-2.5 rounded-xl text-xs font-bold text-white transition-all shadow-md hover:shadow-lg" style={{ background: 'linear-gradient(135deg, #4F46E5, #06B6D4)' }}>
                  Télécharger mon attestation
                </button>
              </div>

              {/* Floating alert cards */}
              {floatingCards.map((card, i) => {
                const Icon = card.icon
                const positions = [
                  { top: '-40px', right: '-60px' },
                  { bottom: '80px', right: '-80px' },
                  { bottom: '-40px', left: '-60px' },
                ]
                const pos = positions[i]

                return (
                  <motion.div
                    key={i}
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3 + card.delay, repeat: Infinity, ease: 'easeInOut', delay: card.delay }}
                    className="absolute glass-card rounded-2xl px-4 py-3 flex items-center gap-3 z-20"
                    style={{
                      ...pos,
                      minWidth: '200px',
                      boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
                    }}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: card.bg }}
                    >
                      <Icon size={16} color={card.color} />
                    </div>
                    <div>
                      <div className="text-xs font-bold" style={{ color: '#0F172A' }}>{card.title}</div>
                      <div className="text-xs font-medium" style={{ color: '#64748B' }}>{card.sub}</div>
                    </div>
                  </motion.div>
                )
              })}

              {/* Decorative glow */}
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(79,70,229,0.12) 0%, transparent 70%)',
                  transform: 'scale(1.3)',
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <div className="text-xs font-medium" style={{ color: '#94A3B8' }}>Découvrir</div>
        <ChevronRight size={18} style={{ color: '#94A3B8', transform: 'rotate(90deg)' }} />
      </motion.div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Zap, ShieldCheck, HeartHandshake } from 'lucide-react'

const features = [
  {
    icon: CheckCircle,
    color: '#4F46E5',
    bg: '#EEF2FF',
    title: 'Clarté absolue',
    description:
      'Pas de jargon compliqué ni de petits caractères. Nous vous fournissons des explications simples pour des décisions éclairées.',
  },
  {
    icon: Zap,
    color: '#06B6D4',
    bg: '#ECFEFF',
    title: 'Réactivité garantie',
    description:
      'Vos demandes sont traitées en priorité absolue, qu\'il s\'agisse d\'un devis, d\'une modification ou de la gestion d\'un sinistre.',
  },
  {
    icon: ShieldCheck,
    color: '#8B5CF6',
    bg: '#F5F3FF',
    title: 'Expertise de marché',
    description:
      'Une connaissance fine des compagnies d\'assurances pour défendre vos intérêts et vous offrir les meilleures garanties au meilleur prix.',
  },
  {
    icon: HeartHandshake,
    color: '#F59E0B',
    bg: '#FFFBEB',
    title: 'Proximité humaine',
    description:
      'Un interlocuteur unique qui connaît réellement votre entreprise, comprend vos enjeux, et agit rapidement quand vous en avez besoin.',
  },
]

export default function Features() {
  return (
    <section id="features" className="section-padding" style={{ background: '#F8FAFC' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-4"
            style={{ background: 'rgba(79,70,229,0.08)', border: '1px solid rgba(79,70,229,0.2)', color: '#4F46E5' }}
          >
            Nos engagements
          </div>
          <h2 className="text-4xl font-extrabold mb-4" style={{ color: '#0F172A' }}>
            Pourquoi choisir <span className="gradient-text">Lynxia Assur Conseil</span> ?
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#64748B' }}>
            Nous réinventons le courtage avec une approche 100% orientée vers le client professionnel : 
            digitale pour la rapidité, humaine pour le conseil.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="feature-card rounded-2xl p-8 flex gap-6 items-start"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: feature.bg }}
                >
                  <Icon size={26} color={feature.color} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#0F172A' }}>
                    {feature.title}
                  </h3>
                  <p className="text-base leading-relaxed" style={{ color: '#64748B' }}>
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

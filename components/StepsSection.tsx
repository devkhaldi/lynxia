'use client'

import { motion } from 'framer-motion'
import { FileSearch, Scale, Edit3, HeartHandshake } from 'lucide-react'

const steps = [
  {
    icon: FileSearch,
    number: '01',
    color: '#4F46E5',
    bg: '#EEF2FF',
    title: 'Audit express',
    description: 'Nous analysons vos obligations légales et vos risques actuels pour comprendre exactement ce qu\'il vous faut — ni plus, ni moins.',
  },
  {
    icon: Scale,
    number: '02',
    color: '#06B6D4',
    bg: '#ECFEFF',
    title: 'Comparaison experte',
    description: "Nous interrogeons notre réseau de partenaires pour trouver et négocier les couvertures offrant le meilleur rapport qualité/prix.",
  },
  {
    icon: Edit3,
    number: '03',
    color: '#8B5CF6',
    bg: '#F5F3FF',
    title: 'Souscription simplifiée',
    description: "Vous recevez une proposition claire, expliquée par l'un de nos experts. La signature électronique permet d'être assuré dans l'heure.",
  },
  {
    icon: HeartHandshake,
    number: '04',
    color: '#F59E0B',
    bg: '#FFFBEB',
    title: 'Suivi & Sinistres',
    description: 'En cas de sinistre, vous n\'êtes jamais seul. Nous prenons en charge la relation avec la compagnie pour défendre vos intérêts.',
  },
]

export default function StepsSection() {
  return (
    <section id="how-it-works" className="section-padding" style={{ background: 'white' }}>
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
            style={{ background: 'rgba(6,182,212,0.08)', border: '1px solid rgba(6,182,212,0.25)', color: '#0891B2' }}
          >
            Démarche simplifiée
          </div>
          <h2 className="text-4xl font-extrabold mb-4" style={{ color: '#0F172A' }}>
            Un processus <span className="gradient-text">fluide et transparent</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#64748B' }}>
            L&apos;assurance ne devrait pas être une contrainte. Laissez nos courtiers gérer la complexité 
            pour vous, de l&apos;analyse de vos besoins jusqu&apos;à la déclaration de sinistre.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connector line (desktop) */}
          <div
            className="absolute top-12 left-0 right-0 h-0.5 hidden md:block"
            style={{
              background: 'linear-gradient(90deg, #4F46E5, #06B6D4, #8B5CF6, #F59E0B)',
              left: '12.5%',
              right: '12.5%',
            }}
          />

          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Icon circle */}
                <div
                  className="relative w-24 h-24 rounded-2xl flex items-center justify-center mb-6 z-10 transition-transform hover:scale-105"
                  style={{
                    background: step.bg,
                    border: `2px solid ${step.color}20`,
                    boxShadow: `0 8px 24px ${step.color}20`,
                  }}
                >
                  <Icon size={34} color={step.color} />
                  {/* Step number badge */}
                  <div
                    className="absolute -top-2 -right-2 w-7 h-7 rounded-full text-xs font-bold text-white flex items-center justify-center"
                    style={{ background: step.color }}
                  >
                    {i + 1}
                  </div>
                </div>

                <div
                  className="text-xs font-bold uppercase tracking-widest mb-2"
                  style={{ color: step.color, letterSpacing: '0.12em' }}
                >
                  Étape {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#0F172A' }}>
                  {step.title}
                </h3>
                <p className="text-base leading-relaxed" style={{ color: '#64748B' }}>
                  {step.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

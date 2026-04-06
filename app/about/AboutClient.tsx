'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Users, HeartHandshake, Award, Target, Globe } from 'lucide-react'
import Link from 'next/link'

const values = [
  { icon: Target, color: '#4F46E5', bg: '#EEF2FF', title: 'Indépendance', desc: 'Nous ne sommes liés à aucune compagnie. Notre seule priorité est de défendre vos intérêts professionnels.' },
  { icon: HeartHandshake, color: '#EF4444', bg: '#FFF1F2', title: 'Humain avant tout', desc: 'Face à un sinistre, vous avez besoin de réponses, pas d\'un robot. Un conseiller dédié vous accompagne de A à Z.' },
  { icon: ShieldCheck, color: '#F59E0B', bg: '#FFFBEB', title: 'Transparence totale', desc: 'Des assurances claires, sans coûts cachés ni jargon juridique incompréhensible.' },
  { icon: Globe, color: '#10B981', bg: '#ECFDF5', title: 'Accessibilité', desc: 'Un portail digital pour gérer vos documents 24/7, combiné à notre disponibilité permanente par téléphone.' },
]

export default function AboutClient() {
  return (
    <div style={{ paddingTop: '72px' }}>
      {/* Hero */}
      <section
        className="section-padding"
        style={{ background: 'linear-gradient(135deg,#EEF2FF 0%,#ECFEFF 100%)' }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{ background: 'rgba(79,70,229,0.08)', border: '1px solid rgba(79,70,229,0.2)', color: '#4F46E5' }}
            >
              Notre histoire
            </div>
            <h1 className="text-5xl font-extrabold mb-6" style={{ color: '#0F172A' }}>
              Le courtage pensé pour les{' '}
              <span className="gradient-text">professionnels</span>
            </h1>
            <p className="text-xl leading-relaxed" style={{ color: '#475569' }}>
              Lynxia Assur Conseil est né d&apos;un constat simple : l&apos;assurance B2B est souvent lente, opaque et impersonnelle. 
              Nous avons décidé de combiner la puissance des outils numériques actuels avec le conseil humain d&apos;antan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#0F172A' }}>
                Pourquoi Lynxia Assur Conseil ?
              </h2>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: '#64748B' }}>
                <p>
                  Trouver la bonne assurance décennale, couvrir une flotte de VTC ou assurer des locaux commerciaux peut s&apos;avérer être un parcours du combattant pour un dirigeant.
                </p>
                <p>
                  En tant que cabinet de courtage indépendant situé à Clichy, nous avons fait le choix de la spécialisation. Nous étudions le marché de l&apos;assurance B2B en temps réel pour dénicher les offres les plus protectrices au prix le plus juste.
                </p>
                <p>
                  Notre approche est double : **100% digitale** pour la rapidité (devis, édition d&apos;attestations) et **100% humaine** pour l&apos;expertise et la relation (audit, conseil, assistance sinistre).
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Award, value: 'Expertise', label: 'Sur-mesure B2B', color: '#4F46E5' },
                { icon: Users, value: '500+', label: 'Clients satisfaits', color: '#06B6D4' },
                { icon: ShieldCheck, value: '24h', label: 'Réactivité devis', color: '#8B5CF6' },
                { icon: Target, value: '100%', label: 'Indépendance', color: '#10B981' },
              ].map(({ icon: Icon, value, label, color }) => (
                <div
                  key={label}
                  className="rounded-2xl p-6 text-center feature-card"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                    style={{ background: `${color}18` }}
                  >
                    <Icon size={20} color={color} />
                  </div>
                  <div className="text-3xl font-extrabold gradient-text mb-1">{value}</div>
                  <div className="text-sm" style={{ color: '#64748B' }}>{label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding" style={{ background: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#0F172A' }}>
              Nos <span className="gradient-text">valeurs</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-6">
            {values.map((val, i) => {
              const Icon = val.icon
              return (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="feature-card rounded-2xl p-6 text-center bg-white"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                    style={{ background: val.bg }}
                  >
                    <Icon size={22} color={val.color} />
                  </div>
                  <div className="font-semibold mb-2" style={{ color: '#0F172A' }}>{val.title}</div>
                  <div className="text-sm" style={{ color: '#64748B' }}>{val.desc}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: 'white' }}>
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#0F172A' }}>
            Prêt à faire un audit de vos garanties ?
          </h2>
          <Link href="/contact">
            <button className="btn-primary text-base">Contacter un conseiller</button>
          </Link>
        </div>
      </section>
    </div>
  )
}

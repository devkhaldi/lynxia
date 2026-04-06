'use client'

import { motion } from 'framer-motion'
import { HardHat, Car, Truck, Building2, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: HardHat,
    color: '#4F46E5',
    bg: '#EEF2FF',
    title: 'Garantie Décennale',
    description:
      'L\'assurance décennale est obligatoire pour tout professionnel du bâtiment. Nous accompagnons les entreprises sur mesure, adaptées à leur activité et à leurs chantiers.',
    features: [
      'Attestation immédiate post-souscription',
      'Couverture construction & rénovation',
      'Responsabilité Civile Pro incluse',
      'Négociation des reprises du passé',
      'Assistance juridique intégrée',
    ],
    badge: 'Spécialité BTP',
  },
  {
    icon: Car,
    color: '#06B6D4',
    bg: '#ECFEFF',
    title: 'Assurance Taxi & VTC',
    description:
      'L\'activité de Taxi ou VTC comporte des risques spécifiques. Une assurance solide est primordiale pour rouler en toute légalité et garantir vos revenus.',
    features: [
      'RC Circulation & Exploitation',
      'Garantie bris de glace sans franchise',
      'Protection matérielle et corporelle',
      'Assistance 0 km 24/7',
      'Montage du dossier en 2 heures',
    ],
    badge: null,
  },
  {
    icon: Truck,
    color: '#8B5CF6',
    bg: '#F5F3FF',
    title: 'Transport & Flotte',
    description:
      'La gestion d\'une flotte nécessite une assurance capable de protéger votre entreprise contre l\'ensemble des aléas de la route (marchandises, conducteurs, véhicules).',
    features: [
      'Contrats optimisés par nombres',
      'Garantie perte d\'exploitation véhicule',
      'Suivi unifié des sinistres',
      'Couverture marchandises transportées',
      'Aide à la prévention routière',
    ],
    badge: null,
  },
  {
    icon: Building2,
    color: '#F59E0B',
    bg: '#FFFBEB',
    title: 'Multirisque Professionnelle',
    description:
      'La protection par excellence. Elle couvre vos locaux, vos matériels, vos stocks et vos responsabilités face aux dommages inattendus.',
    features: [
      'Couverture Incendie, Dégât des eaux',
      'Protection Vol et vandalisme',
      'Bris de machine et matériel info.',
      'Perte d\'exploitation',
      'Couverture sur mesure (TPE/PME)',
    ],
    badge: null,
  },
]

export default function ServicesClient() {
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
              Nos garanties
            </div>
            <h1 className="text-5xl font-extrabold mb-6" style={{ color: '#0F172A' }}>
              Une gamme de solutions <br />
              pour <span className="gradient-text">votre métier</span>
            </h1>
            <p className="text-xl leading-relaxed" style={{ color: '#475569' }}>
              De l&apos;artisan du bâtiment au transporteur routier en passant par la startup tech, 
              nos courtiers façonnent le contrat adapté à votre réalité opérationnelle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service cards */}
      <section className="section-padding" style={{ background: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="feature-card rounded-2xl p-8 relative bg-white"
                >
                  {service.badge && (
                    <div
                      className="absolute top-6 right-6 px-3 py-1 rounded-full text-xs font-bold"
                      style={{ background: '#4F46E5', color: 'white' }}
                    >
                      {service.badge}
                    </div>
                  )}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                    style={{ background: service.bg }}
                  >
                    <Icon size={26} color={service.color} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3" style={{ color: '#0F172A' }}>{service.title}</h3>
                  <p className="mb-6 leading-relaxed" style={{ color: '#64748B' }}>{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-sm" style={{ color: '#475569' }}>
                        <CheckCircle size={15} color={service.color} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <button
                      className="flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3"
                      style={{ color: service.color }}
                    >
                      Demander un devis gratuit <ArrowRight size={15} />
                    </button>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding" style={{ background: 'white' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#0F172A' }}>
              Le devis <span className="gradient-text">en 24/48 heures</span>
            </h2>
            <p className="text-lg mb-12" style={{ color: '#64748B' }}>
              Nous comprenons que l&apos;attestation d&apos;assurance bloque parfois vos chantiers. 
              Notre réactivité est notre promesse.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              {['Analyse', 'Comparaison', 'Négociation', 'Souscription'].map((step, i) => (
                <div key={step} className="flex items-center gap-3 justify-center">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold text-white shadow-sm"
                    style={{ background: 'linear-gradient(135deg,#4F46E5,#06B6D4)' }}
                  >
                    {i + 1}
                  </div>
                  <span className="font-medium" style={{ color: '#0F172A' }}>{step}</span>
                  {i < 3 && <ArrowRight size={16} className="hidden sm:block" style={{ color: '#94A3B8' }} />}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

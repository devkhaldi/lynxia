'use client'

import { motion } from 'framer-motion'
import { HardHat, Car, Truck, Building2, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    title: 'Garantie Décennale',
    description: "Protection obligatoire pour tous les professionnels du bâtiment. Des offres sur mesure pour sécuriser vos chantiers.",
    icon: HardHat,
    color: '#4F46E5', // Indigo
  },
  {
    title: 'Assurance Taxi & VTC',
    description: 'Une assurance adaptée et obligatoire pour circuler en toute légalité et protéger vos revenus face aux aléas.',
    icon: Car,
    color: '#06B6D4', // Cyan
  },
  {
    title: 'Flotte de Véhicules',
    description: 'Gestion centralisée d\'une activité de transport pour protéger l\'ensemble de vos véhicules professionnels en un seul contrat.',
    icon: Truck,
    color: '#8B5CF6', // Purple
  },
  {
    title: 'Multirisque Professionnelle',
    description: 'La protection essentielle de vos locaux, matériels et responsabilités (incendie, vol, perte d\'exploitation).',
    icon: Building2,
    color: '#F59E0B', // Amber
  },
]

export default function Benefits() {
  return (
    <section className="section-padding bg-slate-50 border-t border-slate-200 relative overflow-hidden">
      {/* Background glow */}
      <div 
        className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle, #4F46E5 0%, transparent 70%)', transform: 'translateY(-50%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-extrabold mb-6 text-slate-900 leading-tight">
              Des solutions adaptées à <br />
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #06B6D4, #8B5CF6)' }}>
                chaque métier
              </span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Parce qu&apos;une entreprise du bâtiment ne court pas les mêmes risques qu&apos;un chauffeur VTC, 
              nous proposons des contrats spécialisés, négociés auprès des meilleures compagnies.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                'Audit de vos contrats actuels',
                'Négociation des primes d\'assurance',
                'Accompagnement juridique en cas de litige'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center bg-indigo-100 text-indigo-600">
                    <ArrowRight size={12} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/services">
              <button className="btn-primary" style={{ background: 'linear-gradient(135deg, #4F46E5, #06B6D4)', border: 'none' }}>
                Voir tous nos services
              </button>
            </Link>
          </motion.div>

          {/* Right: Cards grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {services.map((service, i) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-2xl p-6 relative group transition-all duration-300 hover:-translate-y-1 bg-white"
                  style={{ 
                    border: '1px solid #E2E8F0',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = service.color;
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 10px 30px ${service.color}15`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = '#E2E8F0';
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  }}
                >
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${service.color}15` }}
                  >
                    <Icon size={24} color={service.color} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

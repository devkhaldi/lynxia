'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    content: "Lynxia Assur Conseil a su comprendre mes besoins et m’a trouvé une solution parfaitement adaptée, avec un suivi toujours disponible.",
    author: "Marie L.",
    role: "Secrétaire Générale, Lyon",
    rating: 5,
    color: "#4F46E5",
    initial: "M",
  },
  {
    content: "Professionnels et réactifs, ils ont négocié mes contrats d’assurance entreprise en optimisant à la fois les garanties et les coûts.",
    author: "Paul D.",
    role: "Gérant PME, Paris",
    rating: 5,
    color: "#06B6D4",
    initial: "P",
  },
  {
    content: "Dès la souscription de ma garantie décennale, j'ai eu affaire à un interlocuteur unique qui m'a accompagné de A à Z. C'est rare de nos jours.",
    author: "Jérôme R.",
    role: "Artisan BTP, Marseille",
    rating: 5,
    color: "#F59E0B",
    initial: "J",
  },
]

export default function Testimonials() {
  return (
    <section className="section-padding bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-6"
            style={{ background: 'white', border: '1px solid #E2E8F0', color: '#64748B', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}
          >
            <span style={{ color: '#F59E0B' }}>★</span> Avis 100% vérifiés
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900 leading-tight">
            Ce que nos <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #F59E0B, #EF4444)' }}>clients</span> apprécient
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Plus de 200 entreprises nous font confiance pour protéger leur activité au quotidien.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1, type: "spring", stiffness: 60 }}
              className="relative rounded-3xl p-8 bg-white transition-shadow duration-300 group cursor-default"
              style={{
                border: '1px solid #E2E8F0',
                boxShadow: '0 10px 30px rgba(15,23,42,0.03)',
              }}
            >
              {/* Decorative Quote Icon Background */}
              <div className="absolute top-6 right-6 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-300">
                <Quote size={64} color="#0F172A" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <span key={i} style={{ color: '#F59E0B', fontSize: '18px' }}>★</span>
                ))}
              </div>

              {/* Review Text */}
              <p className="text-base text-slate-700 leading-relaxed mb-8 italic relative z-10 min-h-[90px]">
                &quot;{t.content}&quot;
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 mt-auto border-t border-slate-100 pt-6">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                  style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}88)` }}
                >
                  {t.initial}
                </div>
                <div>
                  <div className="font-bold text-slate-900">{t.author}</div>
                  <div className="text-sm text-slate-500">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

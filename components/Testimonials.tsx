'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    content: "Lynxia Assur Conseil a su comprendre mes besoins et m’a trouvé une solution parfaitement adaptée, avec un suivi toujours disponible.",
    author: "Marie L.",
    role: "Secrétaire Générale, Lyon",
    rating: 5,
  },
  {
    content: "Professionnels et réactifs, ils ont négocié mes contrats d’assurance entreprise en optimisant à la fois les garanties et les coûts.",
    author: "Paul D.",
    role: "Gérant PME, Paris",
    rating: 5,
  },
  {
    content: "Dès la souscription de ma garantie décennale, j'ai eu affaire à un interlocuteur unique qui m'a accompagné de A à Z. C'est rare de nos jours.",
    author: "Jérôme R.",
    role: "Artisan BTP, Marseille",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="section-padding" style={{ background: 'white' }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-4"
            style={{ background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.25)', color: '#D97706' }}
          >
            Avis vérifiés
          </div>
          <h2 className="text-4xl font-extrabold mb-4" style={{ color: '#0F172A' }}>
            Ce que nos <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #F59E0B, #EF4444)' }}>clients</span> apprécient le plus
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#64748B' }}>
            Plus de 200 entreprises nous font confiance pour protéger leur activité au quotidien.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl p-8"
              style={{
                background: '#F8FAFC',
                border: '1px solid #E2E8F0',
                boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
              }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <span key={i} style={{ color: '#F59E0B' }}>★</span>
                ))}
              </div>
              <p className="text-base leading-relaxed mb-6 italic" style={{ color: '#334155' }}>
                &quot;{t.content}&quot;
              </p>
              <div>
                <div className="font-bold text-sm" style={{ color: '#0F172A' }}>{t.author}</div>
                <div className="text-xs" style={{ color: '#94A3B8' }}>{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

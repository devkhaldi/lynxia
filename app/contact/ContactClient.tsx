'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { sendEmail } from './actions'

export default function ContactClient() {
  const [form, setForm] = useState({ 
    name: '', 
    email: '', 
    phone: '',
    insuranceType: 'Garantie Décennale', 
    message: '' 
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    
    const formData = new FormData()
    Object.entries(form).forEach(([key, value]) => formData.append(key, value))
    
    const result = await sendEmail(formData)
    
    setLoading(false)
    if (result.success) {
      setSubmitted(true)
    } else {
      setError(result.error || 'Une erreur est survenue.')
    }
  }

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '12px',
    border: '1.5px solid #E2E8F0',
    fontSize: '15px',
    background: 'white',
    color: '#0F172A',
    outline: 'none',
    transition: 'border-color 0.2s',
    fontFamily: 'inherit',
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      {/* Hero */}
      <section
        className="py-20"
        style={{ background: 'linear-gradient(135deg,#EEF2FF 0%,#ECFEFF 100%)' }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{ background: 'rgba(79,70,229,0.08)', border: '1px solid rgba(79,70,229,0.2)', color: '#4F46E5' }}
            >
              <Mail size={14} />
              Demander un devis
            </div>
            <h1 className="text-5xl font-extrabold mb-4" style={{ color: '#0F172A' }}>
              Parlons de vos{' '}
              <span className="gradient-text">assurances</span>
            </h1>
            <p className="text-xl" style={{ color: '#475569' }}>
              Nos courtiers vous répondent rapidement pour concevoir la protection idéale selon votre métier.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding" style={{ background: '#F8FAFC' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* Left: Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              <div>
                <h2 className="text-2xl font-bold mb-2" style={{ color: '#0F172A' }}>Nos coordonnées</h2>
                <p style={{ color: '#64748B' }}>Disponible du lundi au vendredi, 9h – 18h.</p>
              </div>

              {[
                { icon: Mail, label: 'Email', value: 'contact@lynxiaassurconseil.com', color: '#4F46E5' },
                { icon: Phone, label: 'Téléphone', value: '06 05 86 92 07', color: '#06B6D4' },
                { icon: MapPin, label: 'Bureau', value: 'Bureau 3, 6 Rue des Bateliers, 92110 Clichy, France', color: '#8B5CF6' },
              ].map(({ icon: Icon, label, value, color }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 p-5 rounded-2xl"
                  style={{ background: 'white', border: '1px solid #E2E8F0' }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${color}15` }}
                  >
                    <Icon size={20} color={color} />
                  </div>
                  <div>
                    <div className="text-xs font-medium mb-0.5" style={{ color: '#94A3B8' }}>{label}</div>
                    <div className="font-medium text-sm" style={{ color: '#0F172A' }}>{value}</div>
                  </div>
                </div>
              ))}

              {/* Response time */}
              <div
                className="p-5 rounded-2xl"
                style={{ background: 'rgba(79,70,229,0.06)', border: '1px solid rgba(79,70,229,0.15)' }}
              >
                <div className="text-sm font-semibold mb-1" style={{ color: '#4F46E5' }}>⚡ Étude et devis gratuits</div>
                <div className="text-xs leading-relaxed" style={{ color: '#64748B' }}>
                  Aucun frais de dossier caché. Nos devis d&apos;assurance sont entièrement gratuits et sans engagement de votre part.
                </div>
              </div>

            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div
                className="rounded-3xl p-8 bg-white"
                style={{ border: '1px solid #E2E8F0', boxShadow: '0 4px 30px rgba(79,70,229,0.06)' }}
              >
                {submitted ? (
                  <div className="text-center py-8">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{ background: '#D1FAE5' }}
                    >
                      <CheckCircle size={32} color="#059669" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2" style={{ color: '#0F172A' }}>Demande envoyée !</h3>
                    <p style={{ color: '#64748B' }}>Un de nos courtiers vous contactera dans les plus brefs délais.</p>
                  </div>
                ) : (
                  <>
                    <h3 className="text-xl font-bold mb-6" style={{ color: '#0F172A' }}>
                      Votre demande de devis
                    </h3>
                    {error && (
                      <div 
                        className="mb-6 p-4 rounded-xl flex items-center gap-3 text-sm"
                        style={{ background: '#FEF2F2', border: '1px solid #FEE2E2', color: '#DC2626' }}
                      >
                        <AlertCircle size={18} />
                        {error}
                      </div>
                    )}
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium mb-2 text-slate-700">Nom / Prénom *</label>
                          <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            placeholder="Jean Dupont"
                            style={inputStyle}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2 text-slate-700">Email *</label>
                          <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            placeholder="contact@entreprise.com"
                            style={inputStyle}
                          />
                        </div>
                      </div>
                      
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium mb-2 text-slate-700">Téléphone *</label>
                          <input
                            type="text"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            required
                            placeholder="06 12 34 56 78"
                            style={inputStyle}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2 text-slate-700">Type d&apos;assurance</label>
                          <select
                            name="insuranceType"
                            value={form.insuranceType}
                            onChange={handleChange}
                            style={inputStyle}
                          >
                            <option>Garantie Décennale</option>
                            <option>Assurance Taxi / VTC</option>
                            <option>Flotte Automobile</option>
                            <option>Multirisque Professionnelle</option>
                            <option>Autre</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2 text-slate-700">Message (détails de l&apos;activité)</label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          rows={4}
                          placeholder="Décrivez brièvement votre activité, vos besoins de couverture ou posez vos questions..."
                          style={{ ...inputStyle, resize: 'vertical' }}
                        />
                      </div>
                      
                      <button
                        type="submit"
                        disabled={loading}
                        className="btn-primary w-full justify-center text-base"
                        style={{ opacity: loading ? 0.7 : 1 }}
                      >
                        {loading ? 'Envoi en cours...' : (<>Demander un devis gratuit <Send size={16} /></>)}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section (Full Width) */}
      <section className="w-full h-[500px] bg-slate-100 relative">
        <iframe
          src="https://maps.google.com/maps?q=Bureau%203%206%20Rue%20des%20Bateliers%2092110%20Clichy%20France&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
      </section>
    </div>
  )
}

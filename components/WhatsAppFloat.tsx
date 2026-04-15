'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppFloat() {
  const phoneNumber = '33605869207'
  const message = 'Bonjour Lynxia Assur Conseil, je souhaite obtenir un devis pour mon entreprise.'
  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center shadow-2xl transition-transform hover:scale-110"
      style={{
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #25D366, #128C7E)',
        boxShadow: '0 10px 25px rgba(37,211,102,0.3)',
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ background: '#25D366' }} />
      <MessageCircle size={30} color="white" fill="white" className="relative z-10" />
    </motion.a>
  )
}

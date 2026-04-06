import type { Metadata } from 'next'
import ContactClient from './ContactClient'

export const metadata: Metadata = {
  title: 'Contact | Lynxia Conseil',
  description: 'Contactez Lynxia Conseil pour demander une démo ou obtenir plus d\'informations sur nos solutions de sécurité IA.',
  openGraph: {
    title: 'Contact | Lynxia Conseil',
    description: 'Reservez votre démo gratuite dès aujourd\'hui.',
  },
}

export default function ContactPage() {
  return <ContactClient />
}

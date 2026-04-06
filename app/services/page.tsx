import type { Metadata } from 'next'
import ServicesClient from './ServicesClient'

export const metadata: Metadata = {
  title: 'Services | Lynxia Conseil',
  description: 'Découvrez toutes nos solutions IA : surveillance intelligente, analyse comportementale, reporting et solutions personnalisées.',
  openGraph: {
    title: 'Nos Services | Lynxia Conseil',
    description: 'Solutions de sécurité IA complètes pour toutes les tailles d\'entreprises.',
  },
}

export default function ServicesPage() {
  return <ServicesClient />
}

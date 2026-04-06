import type { Metadata } from 'next'
import AboutClient from './AboutClient'

export const metadata: Metadata = {
  title: 'À Propos | Lynxia Conseil',
  description: 'Découvrez la mission, l\'équipe et les valeurs de Lynxia Conseil — pionniers de la sécurité intelligente par l\'IA.',
  openGraph: {
    title: 'À Propos | Lynxia Conseil',
    description: 'Notre mission : rendre la sécurité intelligente accessible à toutes les entreprises.',
  },
}

export default function AboutPage() {
  return <AboutClient />
}

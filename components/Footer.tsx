'use client'

import Link from 'next/link'
import { Shield, ExternalLink, MessageSquare, Code2, Mail, Phone, MapPin } from 'lucide-react'

const footerLinks = {
  Navigation: [
    { href: '/', label: 'Accueil' },
    { href: '/about', label: 'À Propos' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ],
  Services: [
    { href: '/services', label: 'Garantie Décennale' },
    { href: '/services', label: 'Assurance Taxi & VTC' },
    { href: '/services', label: 'Flotte Automobile' },
    { href: '/services', label: 'Multirisque Pro' },
  ],
  Légal: [
    { href: '#', label: 'Politique de confidentialité' },
    { href: '#', label: 'Conditions d\'utilisation' },
    { href: '#', label: 'Mentions légales' },
  ],
}

export default function Footer() {
  return (
    <footer style={{ background: '#0F172A', color: '#CBD5E1' }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg,#4F46E5,#06B6D4)' }}
              >
                <Shield size={18} color="white" strokeWidth={2.5} />
              </div>
              <span className="text-xl font-bold text-white">
                Lynxia<span className="gradient-text"> Assur Conseil</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6" style={{ color: '#94A3B8' }}>
              Cabinet de courtage indépendant spécialisé dans la protection des entreprises.
              100% digital, 100% humain.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {[
                { icon: ExternalLink, href: '#', label: 'LinkedIn' },
                { icon: MessageSquare, href: '#', label: 'Twitter' },
                { icon: Code2, href: '#', label: 'GitHub' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(79,70,229,0.3)'
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.08)'
                  }}
                >
                  <Icon size={16} color="#94A3B8" />
                </a>
              ))}
            </div>

            {/* Contact info */}
            <div className="mt-6 space-y-2">
              {[
                { icon: Mail, text: 'contact@lynxiaassurconseil.com' },
                { icon: Phone, text: '01 83 86 55 53' },
                { icon: MapPin, text: '6 Rue des Bateliers, 92110 Clichy' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-sm" style={{ color: '#94A3B8' }}>
                  <Icon size={14} style={{ color: '#4F46E5' }} />
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-widest" style={{ letterSpacing: '0.1em' }}>
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors hover:text-white"
                      style={{ color: '#94A3B8' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div
          className="mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          <p className="text-sm" style={{ color: '#64748B' }}>
            © {new Date().getFullYear()} Lynxia Assur Conseil. Tous droits réservés.
          </p>
          <p className="text-sm" style={{ color: '#64748B' }}>
            Conçu avec ❤️ pour simplifier vos assurances
          </p>
        </div>
      </div>
    </footer>
  )
}

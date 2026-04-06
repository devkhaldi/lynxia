'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Shield, ChevronRight } from 'lucide-react'
import AnimatedLogo from './AnimatedLogo'

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/about', label: 'À Propos' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(255,255,255,0.85)'
          : 'rgba(255,255,255,0)',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(79,70,229,0.1)' : 'none',
        boxShadow: scrolled ? '0 2px 20px rgba(79,70,229,0.08)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between" style={{ height: '72px' }}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <AnimatedLogo />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href))
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium py-1 transition-colors group ${
                  isActive ? 'text-indigo-600' : 'text-slate-600 hover:text-indigo-600'
                }`}
              >
                {link.label}
                {/* Active underline */}
                {isActive && (
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-indigo-600 rounded-full" />
                )}
                {/* Hover animated underline */}
                {!isActive && (
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-indigo-400 rounded-full origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                )}
              </Link>
            )
          })}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/contact">
            <button className="btn-primary text-sm py-2.5 px-5">
              Obtenir un devis <ChevronRight size={15} />
            </button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg transition-colors"
          style={{ color: '#0F172A' }}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: isOpen ? '400px' : '0',
          background: 'rgba(255,255,255,0.97)',
          backdropFilter: 'blur(20px)',
          borderTop: isOpen ? '1px solid rgba(79,70,229,0.1)' : 'none',
        }}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href))
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium py-2 transition-colors flex items-center justify-between ${
                  isActive ? 'text-indigo-600' : 'text-slate-600 hover:text-indigo-600'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
                {isActive && <div className="w-1.5 h-1.5 rounded-full bg-indigo-600" />}
              </Link>
            )
          })}
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            <button className="btn-primary w-full justify-center mt-2">
              Obtenir un devis
            </button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

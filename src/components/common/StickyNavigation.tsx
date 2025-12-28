'use client';

import { useEffect, useState, type MouseEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Icon from '@/components/ui/AppIcon';

interface NavigationItem {
  id: string;
  label: string;
  href: string;
  offset: number;
}

interface StickyNavigationProps {
  onWhatsAppClick?: () => void;
}

/**
 * ✅ ORDEN DEL MENÚ (Equipo oculto temporalmente)
 * 1. Inicio
 * 2. Sobre mí
 * 3. Servicios
 * 4. Planes
 * 5. Ubicación
 */
const navigationItems: NavigationItem[] = [
  { id: 'inicio', label: 'Inicio', href: '/#inicio', offset: 0 },
  { id: 'sobre-mi', label: 'Sobre mí', href: '/#sobre-mi', offset: 80 },
  { id: 'servicios', label: 'Servicios', href: '/#servicios', offset: 80 },
  { id: 'planes', label: 'Planes', href: '/#planes', offset: 80 },
  // { id: 'equipo', label: 'Equipo', href: '/#equipo', offset: 80 }, // OCULTO TEMPORALMENTE
  { id: 'ubicacion', label: 'Ubicación', href: '/#ubicacion', offset: 80 },
];

const StickyNavigation = ({ onWhatsAppClick }: StickyNavigationProps) => {
  const [activeSection, setActiveSection] = useState<string>('inicio');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const NAV_HEIGHT = 80;
    const ACTIVE_MARGIN = 12;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (window.location.pathname === '/' || window.location.pathname === '') {
        const scrollPosition = window.scrollY + NAV_HEIGHT + ACTIVE_MARGIN;

        for (let i = navigationItems.length - 1; i >= 0; i--) {
          const id = navigationItems[i].id;
          const el = document.getElementById(id);
          if (el && el.offsetTop <= scrollPosition) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, item: NavigationItem) => {
    if (window.location.pathname === '/' || window.location.pathname === '') {
      e.preventDefault();
      setIsMenuOpen(false);

      const element = document.getElementById(item.id);
      if (element) {
        const offsetPosition = element.offsetTop - item.offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });

        window.history.pushState(null, '', `/#${item.id}`);
        setActiveSection(item.id);
      }
    } else {
      setIsMenuOpen(false);
    }

    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'navigation_click', {
        section: item.id,
        label: item.label,
      });
    }
  };

  const handleWhatsAppClick = () => {
    if (onWhatsAppClick) onWhatsAppClick();

    const phoneNumber = '5493876000000';
    const message = encodeURIComponent(
      'Hola, estoy interesado en conocer más sobre el sistema de preparación física de Victor Cuellar.'
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank', 'noopener,noreferrer');

    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'whatsapp_click', {
        location: 'navigation',
        section: activeSection,
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled ? 'bg-card shadow-card' : 'bg-card'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* LOGO OFICIAL */}
          <Link
            href="/#inicio"
            onClick={(e) => handleNavClick(e, navigationItems[0])}
            className="flex items-center group"
            aria-label="Ir a inicio"
          >
            {/* Contenedor con tamaño estable para que no mueva el layout */}
            <div className="relative h-10 w-[140px] sm:w-[160px]">
              <Image
                src="/assets/images/victor-cuellar-logo.png"
                alt="Victor Cuellar – Preparación Física Aplicada al Rendimiento"
                fill
                priority
                sizes="(max-width: 640px) 140px, 160px"
                className="object-contain transition-transform duration-250 group-hover:scale-[1.02]"
              />
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className={`px-4 py-2 rounded-lg font-body font-semibold text-sm transition-all duration-250 ${
                  activeSection === item.id &&
                  (typeof window !== 'undefined' &&
                    (window.location.pathname === '/' || window.location.pathname === ''))
                    ? 'text-primary bg-primary/10 border-b-2 border-primary'
                    : 'text-muted-foreground hover:text-white hover:bg-muted'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={handleWhatsAppClick}
              className="hidden sm:flex items-center space-x-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white font-cta font-bold text-sm rounded-lg transition-all duration-250 shadow-cta hover:shadow-none hover:border-2 hover:border-primary"
            >
              <Icon name="ChatBubbleLeftRightIcon" size={20} variant="solid" />
              <span>WhatsApp</span>
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-muted-foreground hover:text-white hover:bg-muted transition-colors duration-250"
              aria-label="Toggle menu"
            >
              <Icon name={isMenuOpen ? 'XMarkIcon' : 'Bars3Icon'} size={24} />
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-card border-t border-border">
          <div className="px-4 py-4 space-y-2">
            {navigationItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className={`block px-4 py-3 rounded-lg font-body font-semibold text-sm transition-all duration-250 ${
                  activeSection === item.id
                    ? 'text-primary bg-primary/10 border-l-4 border-primary'
                    : 'text-muted-foreground hover:text-white hover:bg-muted'
                }`}
              >
                {item.label}
              </Link>
            ))}

            <button
              onClick={handleWhatsAppClick}
              className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white font-cta font-bold text-sm rounded-lg transition-all duration-250 shadow-cta"
            >
              <Icon name="ChatBubbleLeftRightIcon" size={20} variant="solid" />
              <span>Contactar por WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default StickyNavigation;

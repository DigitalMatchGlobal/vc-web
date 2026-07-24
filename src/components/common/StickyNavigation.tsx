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
 * ✅ ORDEN DEL MENÚ
 * 1. Inicio
 * 2. Sobre mí
 * 3. Servicios
 * 4. Planes
 * 5. Equipo
 * 6. Ubicación
 */
const navigationItems: NavigationItem[] = [
  { id: 'inicio', label: 'Inicio', href: '/#inicio', offset: 0 },
  { id: 'sobre-mi', label: 'Sobre mí', href: '/#sobre-mi', offset: 80 },
  { id: 'servicios', label: 'Servicios', href: '/#servicios', offset: 80 },
  { id: 'planes', label: 'Planes', href: '/#planes', offset: 80 },
  { id: 'equipo', label: 'Equipo', href: '/#equipo', offset: 80 }, 
  { id: 'ubicacion', label: 'Ubicación', href: '/#ubicacion', offset: 80 },
];

// Portal / app de atletas
const APP_URL = 'https://app.victorcuellar.fit/';

const StickyNavigation = ({}: StickyNavigationProps) => {
  const [activeSection, setActiveSection] = useState<string>('inicio');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
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

  const handleAppClick = () => {
    window.open(APP_URL, '_blank', 'noopener,noreferrer');

    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'app_login_click', {
        location: 'navigation',
        section: activeSection,
      });
    }
  };

  // Bloquea el scroll del body y permite cerrar el menú con Escape (UX pro en mobile)
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] border-b transition-all duration-300 ${
          isScrolled ? 'bg-card border-white/10 shadow-card' : 'bg-card border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* LOGO OFICIAL */}
            <Link
              href="/#inicio"
              onClick={(e) => handleNavClick(e, navigationItems[0])}
              className="flex items-center group shrink-0"
              aria-label="Ir a inicio"
            >
              <div className="relative h-10 w-[132px] sm:w-[160px]">
                <Image
                  src="/assets/images/victor-cuellar-logo.png"
                  alt="Victor Cuellar – Preparación Física Aplicada al Rendimiento"
                  fill
                  priority
                  sizes="(max-width: 640px) 132px, 160px"
                  className="object-contain object-left transition-transform duration-250 group-hover:scale-[1.02]"
                />
              </div>
            </Link>

            {/* NAV DESKTOP */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`px-4 py-2 rounded-lg font-body font-semibold text-sm transition-all duration-250 ${
                    mounted &&
                    activeSection === item.id &&
                    (window.location.pathname === '/' || window.location.pathname === '')
                      ? 'text-primary bg-primary/10 border-b-2 border-primary'
                      : 'text-muted-foreground hover:text-white hover:bg-muted'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* CONTROLES DERECHA */}
            <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
              <button
                onClick={handleAppClick}
                className={`group items-center gap-2 rounded-lg bg-primary px-3.5 sm:px-5 py-2.5 font-cta font-bold text-sm text-white shadow-[0_2px_12px_rgba(225,6,0,0.25)] transition-all duration-200 hover:bg-primary/90 hover:shadow-[0_6px_22px_rgba(225,6,0,0.45)] active:scale-[0.97] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-card ${
                  isMenuOpen ? 'hidden lg:inline-flex' : 'inline-flex'
                }`}
              >
                <Icon
                  name="BoltIcon"
                  size={18}
                  variant="solid"
                  className="transition-transform duration-200 group-hover:scale-110"
                />
                <span>Ingresar</span>
              </button>

              {/* BOTÓN MENÚ (mobile) */}
              <button
                onClick={() => setIsMenuOpen((v) => !v)}
                className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-white/10 bg-white/5 text-white transition-colors duration-200 hover:bg-white/10 hover:border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
              >
                <Icon name={isMenuOpen ? 'XMarkIcon' : 'Bars3Icon'} size={22} />
              </button>
            </div>
          </div>
        </div>

        {/* PANEL MENÚ MOBILE */}
        <div
          id="mobile-menu"
          className={`lg:hidden absolute top-full inset-x-0 origin-top transition-all duration-300 ease-out ${
            isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3 pointer-events-none'
          }`}
        >
          <div className="mx-4 mt-2 overflow-hidden rounded-2xl border border-white/10 bg-card shadow-card">
            <div className="p-2">
              {navigationItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`group flex items-center justify-between rounded-xl px-4 py-3.5 font-body font-semibold text-[15px] transition-colors duration-200 ${
                      isActive
                        ? 'bg-primary/10 text-primary'
                        : 'text-muted-foreground hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className={`h-5 w-1 rounded-full transition-colors ${
                          isActive ? 'bg-primary' : 'bg-transparent group-hover:bg-white/20'
                        }`}
                      />
                      {item.label}
                    </span>
                    <Icon
                      name="ChevronRightIcon"
                      size={16}
                      className={isActive ? 'text-primary' : 'text-white/25'}
                    />
                  </Link>
                );
              })}
            </div>

            <div className="border-t border-white/10 p-3">
              <button
                onClick={handleAppClick}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-cta font-bold text-sm text-white shadow-[0_2px_12px_rgba(225,6,0,0.25)] transition-all duration-200 hover:bg-primary/90 active:scale-[0.98]"
              >
                <Icon
                  name="BoltIcon"
                  size={18}
                  variant="solid"
                  className="transition-transform duration-200 group-hover:scale-110"
                />
                <span>Ingresar a la App</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* BACKDROP */}
      <div
        className={`lg:hidden fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />
    </>
  );
};

export default StickyNavigation;
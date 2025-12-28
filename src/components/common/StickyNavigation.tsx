'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
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

const navigationItems: NavigationItem[] = [
  // EL SECRETO: Usamos '/#' para obligar a ir siempre a la página principal
  { id: 'inicio', label: 'Inicio', href: '/#inicio', offset: 0 },
  { id: 'servicios', label: 'Servicios', href: '/#servicios', offset: 80 },
  { id: 'equipo', label: 'Equipo', href: '/#equipo', offset: 80 },
  { id: 'planes', label: 'Planes', href: '/#planes', offset: 80 },
  { id: 'contacto', label: 'Contacto', href: '/#contacto', offset: 80 },
];

const StickyNavigation = ({ onWhatsAppClick }: StickyNavigationProps) => {
  const [activeSection, setActiveSection] = useState<string>('inicio');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Solo si estamos en la página principal, calculamos qué sección se ve
      if (window.location.pathname === '/') {
        const sections = navigationItems.map(item => ({
          id: item.id,
          element: document.getElementById(item.id),
        }));

        const scrollPosition = window.scrollY + 150;

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          if (section.element && section.element.offsetTop <= scrollPosition) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Función simple para manejar el clic
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavigationItem) => {
    // Si ya estamos en la home, hacemos el scroll suave manual para que se vea lindo
    if (window.location.pathname === '/') {
      e.preventDefault(); // Evitamos recargar
      const element = document.getElementById(item.id);
      if (element) {
        const offsetPosition = element.offsetTop - item.offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
        // Actualizamos la URL sin recargar
        window.history.pushState(null, '', `/#${item.id}`);
      }
      setIsMenuOpen(false);
    } 
    // Si NO estamos en la home (ej: estamos en un 404 o en Políticas), 
    // NO prevenimos el default. Dejamos que el Link nos lleve a la home.
    else {
      setIsMenuOpen(false);
    }
  };

  const handleWhatsAppClick = () => {
    if (onWhatsAppClick) {
      onWhatsAppClick();
    }
    const phoneNumber = '5493876000000';
    const message = encodeURIComponent('Hola, estoy interesado en conocer más sobre el sistema de preparación física de Victor Cuellar.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled ? 'bg-card shadow-card' : 'bg-card'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/#inicio"
            onClick={(e) => handleNavClick(e, navigationItems[0])}
            className="flex items-center space-x-3 group"
          >
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center transition-transform duration-250 group-hover:scale-105">
              <span className="text-white font-headline font-bold text-xl">VC</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-headline font-bold text-xl text-white tracking-wide">
                VICTOR CUELLAR
              </h1>
            </div>
          </Link>

          {/* Menú Desktop */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className={`px-4 py-2 rounded-lg font-body font-semibold text-sm transition-all duration-250 ${
                  activeSection === item.id
                    ? 'text-primary bg-primary/10 border-b-2 border-primary' 
                    : 'text-muted-foreground hover:text-white hover:bg-muted'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Botones Derecha */}
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

      {/* Menú Móvil */}
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
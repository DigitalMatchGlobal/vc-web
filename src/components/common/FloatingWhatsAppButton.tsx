'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FloatingWhatsAppButtonProps {
  activeSection?: string;
}

const sectionMessages: Record<string, string> = {
  inicio: 'Hola, estoy interesado en conocer más sobre el sistema de preparación física de Victor Cuellar.',
  servicios: 'Hola, me gustaría obtener más información sobre los servicios de entrenamiento personalizado.',
  equipo: 'Hola, quisiera conocer más sobre el equipo multidisciplinario y su metodología.',
  planes: 'Hola, estoy interesado en conocer los planes de entrenamiento y sus precios.',
  contacto: 'Hola, me gustaría agendar una consulta inicial para evaluar mis objetivos.',
};

const FloatingWhatsAppButton = ({ activeSection = 'inicio' }: FloatingWhatsAppButtonProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    const phoneNumber = '5493876000000';
    const message = encodeURIComponent(sectionMessages[activeSection] || sectionMessages.inicio);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');

    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'whatsapp_click', {
        location: 'floating_button',
        section: activeSection,
        message_type: activeSection,
      });
    }
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-6 right-6 z-[150] group"
      aria-label="Contactar por WhatsApp"
    >
      <div
        className={`flex items-center space-x-3 px-5 py-4 bg-primary hover:bg-primary/90 text-white rounded-full shadow-cta transition-all duration-250 ${
          isHovered ? 'pr-6' : ''
        }`}
      >
        <div className="relative">
          <Icon name="ChatBubbleLeftRightIcon" size={24} variant="solid" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-success rounded-full animate-pulse-glow"></span>
        </div>
        <span
          className={`font-cta font-bold text-sm whitespace-nowrap overflow-hidden transition-all duration-250 ${
            isHovered ? 'max-w-[200px] opacity-100' : 'max-w-0 opacity-0'
          }`}
        >
          Consulta Ahora
        </span>
      </div>
      <div className="absolute inset-0 bg-primary rounded-full animate-pulse-glow opacity-50 -z-10"></div>
    </button>
  );
};

export default FloatingWhatsAppButton;
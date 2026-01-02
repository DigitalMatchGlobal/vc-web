'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FloatingWhatsAppButtonProps {
  activeSection?: string;
}

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
    // ✅ NÚMERO ACTUALIZADO
    const phoneNumber = '5493876856439';
    
    // ✅ MENSAJE ÚNICO ESTANDARIZADO
    const message = encodeURIComponent(
      'Hola, estoy interesado en conocer más sobre el sistema de preparación física de Victor Cuellar.'
    );
    
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');

    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'whatsapp_click', {
        location: 'floating_button',
        section: activeSection,
        message_type: 'standard_inquiry', // Etiqueta para seguimiento
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
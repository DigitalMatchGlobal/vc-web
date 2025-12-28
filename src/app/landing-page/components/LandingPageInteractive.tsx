'use client';

import { useState, useEffect } from 'react';
import StickyNavigation from '@/components/common/StickyNavigation';
import FloatingWhatsAppButton from '@/components/common/FloatingWhatsAppButton';
import SectionAnchorSystem from '@/components/common/SectionAnchorSystem';
import ConversionTrackingWrapper from '@/components/common/ConversionTrackingWrapper';
import HeroSection from './HeroSection';
import AuthoritySection from './AuthoritySection';
import PhilosophySection from './PhilosophySection';
// import TeamSection from './TeamSection'; // COMENTADO: Oculto temporalmente
import ServicesSection from './ServicesSection';
import PlansSection from './PlansSection';
import MindsetSection from './MindsetSection';
import LocationSection from './LocationSection';
import FAQSection from './FAQSection';
// import ConversionSection from './ConversionSection'; 
import Footer from './Footer';

// CAMBIO: Se elimina 'equipo' de la lista de anclas
const sections = [
  { id: 'inicio', offset: 0 },
  { id: 'sobre-mi', offset: 80 },
  { id: 'servicios', offset: 80 }, 
  { id: 'planes', offset: 80 },    
  // { id: 'equipo', offset: 80 }, // COMENTADO
  { id: 'ubicacion', offset: 80 },
];

const LandingPageInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const handleHashChange = () => {
      const hash = window.location?.hash?.slice(1);
      if (hash) {
        setActiveSection(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [isHydrated]);

  const handleWhatsAppClick = () => {
    const phoneNumber = '5493876000000';
    const message = encodeURIComponent('Hola, estoy interesado en conocer más sobre el sistema de preparación física de Victor Cuellar.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handlePreRegisterClick = () => {
    const contactSection = document.getElementById('ubicacion');
    if (contactSection) {
      const offsetPosition = contactSection?.offsetTop - 80;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <ConversionTrackingWrapper trackPageView pageTitle="Victor Cuellar">
      <div className="min-h-screen bg-background">
        <StickyNavigation onWhatsAppClick={handleWhatsAppClick} />
        <SectionAnchorSystem sections={sections} />
        
        <main>
          <HeroSection 
            onWhatsAppClick={handleWhatsAppClick}
            onPreRegisterClick={handlePreRegisterClick}
          />
          {/* Seccion Sobre mi (Authority + Philosophy) */}
          <AuthoritySection />
          <PhilosophySection />

          {/* ✅ ORDEN DE SECCIONES (TeamSection comentado) */}
          <ServicesSection />
          <PlansSection />
          {/* <TeamSection /> */} 
          
          <MindsetSection />
          <LocationSection />
          <FAQSection />
          {/* <ConversionSection /> */}
        </main>

        <Footer />

        {isHydrated && <FloatingWhatsAppButton activeSection={activeSection} />}
      </div>
    </ConversionTrackingWrapper>
  );
};

export default LandingPageInteractive;
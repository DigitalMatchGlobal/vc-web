'use client';

// ... (tus otros imports)
import FAQSection from './FAQSection';
// import ConversionSection from './ConversionSection'; // COMENTADO
import Footer from './components/Footer'; // <--- AGREGAR ESTE IMPORT (Ajusta la ruta si es necesario, si Footer está en la misma carpeta es './Footer')

// ... (resto del código igual)

  return (
    <ConversionTrackingWrapper trackPageView pageTitle="Victor Cuellar">
      <div className="min-h-screen bg-background">
        <StickyNavigation onWhatsAppClick={handleWhatsAppClick} />
        <SectionAnchorSystem sections={sections} />
        
        <main>
          {/* ... (resto de tus secciones: Hero, Authority, etc) */}
          <LocationSection />
          <FAQSection />
          {/* <ConversionSection /> */}
        </main>

        <Footer />  {/* <--- AGREGAR EL FOOTER AQUÍ, FUERA DEL MAIN */}

        {isHydrated && <FloatingWhatsAppButton activeSection={activeSection} />}
      </div>
    </ConversionTrackingWrapper>
  );
};

export default LandingPageInteractive;
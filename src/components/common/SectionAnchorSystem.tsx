'use client';

import { useEffect } from 'react';

interface SectionConfig {
  id: string;
  offset: number;
}

interface SectionAnchorSystemProps {
  sections: SectionConfig[];
}

const SectionAnchorSystem = ({ sections }: SectionAnchorSystemProps) => {
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (!hash) return;

      const section = sections.find(s => s.id === hash);
      if (!section) return;

      const element = document.getElementById(section.id);
      if (!element) return;

      setTimeout(() => {
        const offsetPosition = element.offsetTop - section.offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }, 100);
    };

    window.addEventListener('hashchange', handleHashChange);
    // Solo ejecutamos esto si hay un hash real, para evitar saltos innecesarios al cargar
    if (window.location.hash) {
      handleHashChange();
    }

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [sections]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          
          // MODIFICACIÓN CLAVE:
          // Si la sección es "inicio", limpiamos el hash de la URL.
          // Si es cualquier otra sección, actualizamos el hash.
          if (sectionId === 'inicio') {
            // Reemplazamos la URL actual por la misma pero sin el hash
             window.history.replaceState(null, '', window.location.pathname);
          } else {
            const newHash = `#${sectionId}`;
            if (window.location.hash !== newHash) {
              window.history.replaceState(null, '', newHash);
            }
          }

          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'section_view', {
              section_id: sectionId,
              engagement_time: Date.now(),
            });
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [sections]);

  return null;
};

export default SectionAnchorSystem;
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
    // Scroll a la sección que indica el path (carga directa, refresh, back/forward).
    const scrollToPath = () => {
      const id = window.location.pathname.replace(/^\//, '');
      if (!id) return; // "/" = inicio, no hace falta scrollear

      const section = sections.find(s => s.id === id);
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

    // popstate cubre back/forward del navegador entre secciones.
    window.addEventListener('popstate', scrollToPath);
    // Al cargar, si el path apunta a una sección, scrolleamos hasta ella.
    scrollToPath();

    return () => window.removeEventListener('popstate', scrollToPath);
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

          // Actualizamos la URL (sin #) a medida que scrolleás:
          // inicio = "/", el resto = "/<id>". Usamos replaceState para no
          // llenar el historial mientras se hace scroll.
          const newPath = sectionId === 'inicio' ? '/' : `/${sectionId}`;
          if (window.location.pathname !== newPath) {
            window.history.replaceState(null, '', newPath);
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
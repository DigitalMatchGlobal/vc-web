'use client';

import { useEffect, useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface StatCounter {
  id: string;
  value: number;
  label: string;
  suffix: string;
}

const PRE_REGISTER_URL = 'https://forms.gle/qtYAkNHNR8X5rrSx9';

const HeroSection = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [ctaEntered, setCtaEntered] = useState(false);

  const [counters, setCounters] = useState<StatCounter[]>([
    { id: 'experience', value: 0, label: 'Años de Experiencia', suffix: '+' },
    { id: 'athletes', value: 0, label: 'Atletas Entrenados', suffix: '+' },
    { id: 'success', value: 0, label: 'Tasa de Éxito', suffix: '%' },
  ]);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setCtaEntered(true), 250);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const targets = [
      { id: 'experience', target: 25 },
      { id: 'athletes', target: 500 },
      { id: 'success', target: 95 },
    ];

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const timer = setInterval(() => {
      setCounters((prev) =>
        prev.map((counter) => {
          const target = targets.find((t) => t.id === counter.id)?.target || 0;
          if (counter.value >= target) return counter;
          const increment = Math.ceil(target / steps);
          return { ...counter, value: Math.min(counter.value + increment, target) };
        })
      );
    }, interval);

    return () => clearInterval(timer);
  }, [isHydrated]);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Estilos para la animación del texto (Ticker) */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 40s linear infinite; /* Animación más lenta para mejor lectura */
        }
        @media (max-width: 640px) {
          .animate-marquee {
            animation: marquee 20s linear infinite; /* Ajuste para móvil */
          }
        }
      `}</style>

      <div className="absolute inset-0 z-0">
        <AppImage
          src="https://images.unsplash.com/photo-1727990435802-4d98b944c6d9"
          alt="Athletic male boxer in black training gear throwing powerful punch in dark gym with dramatic lighting"
          className="w-full h-full object-cover"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
        <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
        <div className="space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <h1 className="font-headline font-black text-5xl sm:text-7xl lg:text-8xl text-white tracking-tight">
              VICTOR <span className="text-primary">CUELLAR</span>
            </h1>
            <p className="font-accent font-bold text-lg sm:text-2xl lg:text-3xl text-muted-foreground uppercase tracking-wider">
              Preparación Física Aplicada al Rendimiento
            </p>
          </div>

          <p className="max-w-3xl mx-auto font-body text-base sm:text-xl text-white/90 leading-relaxed px-2">
            El único sistema integral de rendimiento en Salta que combina 25+ años de metodología comprobada con
            experiencia multidisciplinaria
          </p>

          {/* CTA ÚNICO - centrado */}
          <div className="flex flex-col items-center justify-center pt-6 space-y-8 w-full">
            <a
              href={PRE_REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="hero-preregister"
              className={[
                'inline-flex items-center justify-center',
                'px-8 sm:px-12 py-4 sm:py-5',
                'bg-primary hover:bg-primary/90',
                'text-white',
                'font-cta font-extrabold text-lg sm:text-xl',
                'rounded-xl',
                'shadow-cta',
                'transition-all duration-500 ease-out',
                'focus:outline-none focus:ring-4 focus:ring-primary/40',
                'hover:scale-105',
                ctaEntered ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95',
              ].join(' ')}
            >
              Pre-registro Gratuito
            </a>

            {/* --- BARRA DINÁMICA (TICKER) CORREGIDA --- */}
            {ctaEntered && (
              <div className="w-screen relative left-1/2 -translate-x-1/2 overflow-hidden py-3 bg-gradient-to-r from-black/20 via-white/5 to-black/20 border-y border-white/5 backdrop-blur-sm">
                <div className="animate-marquee whitespace-nowrap flex items-center">
                  {[...Array(10)].map((_, i) => (
                    <div key={i} className="flex items-center opacity-90">
                      {/* Texto 1: Cupos */}
                      <span className="mx-3 sm:mx-6 font-headline font-bold text-[11px] sm:text-sm text-white uppercase tracking-widest italic">
                        ⚡️ CUPOS LIMITADOS
                      </span>
                      {/* Texto 2: Reserva */}
                      <span className="mx-3 sm:mx-6 font-cta font-bold text-[10px] sm:text-xs text-primary uppercase tracking-widest">
                        RESERVA TU LUGAR
                      </span>
                      {/* Texto 3: Niveles (Nuevo Texto) */}
                      <span className="mx-3 sm:mx-6 font-headline font-bold text-[11px] sm:text-sm text-white uppercase tracking-widest italic">
                        💪 PARA TODOS LOS NIVELES
                      </span>
                       {/* Texto 4: Motivación (Nuevo Texto) */}
                       <span className="mx-3 sm:mx-6 font-cta font-bold text-[10px] sm:text-xs text-primary uppercase tracking-widest">
                        🚀 TU MEJOR VERSIÓN
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {isHydrated && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-8 sm:pt-10 max-w-4xl mx-auto">
              {counters.map((counter, index) => (
                <div
                  key={counter.id}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-4 sm:p-6 hover:border-primary transition-all duration-250"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="font-headline font-black text-3xl sm:text-5xl text-primary">
                    {counter.value}
                    {counter.suffix}
                  </div>
                  <div className="font-body text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2 uppercase tracking-wide">
                    {counter.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <Icon name="ChevronDownIcon" size={32} className="text-white/60 w-6 h-6 sm:w-8 sm:h-8" />
      </div>
    </section>
  );
};

export default HeroSection;
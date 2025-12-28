'use client';

import { useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface HeroSectionProps {
  onWhatsAppClick: () => void;
  onPreRegisterClick: () => void;
}

interface StatCounter {
  id: string;
  value: number;
  label: string;
  suffix: string;
}

const HeroSection = ({ onWhatsAppClick, onPreRegisterClick }: HeroSectionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [counters, setCounters] = useState<StatCounter[]>([
  { id: 'experience', value: 0, label: 'Años de Experiencia', suffix: '+' },
  { id: 'athletes', value: 0, label: 'Atletas Entrenados', suffix: '+' },
  { id: 'success', value: 0, label: 'Tasa de Éxito', suffix: '%' }]
  );

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const targets = [
    { id: 'experience', target: 25 },
    { id: 'athletes', target: 500 },
    { id: 'success', target: 95 }];


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
      <div className="absolute inset-0 z-0">
        <AppImage
          src="https://images.unsplash.com/photo-1727990435802-4d98b944c6d9"
          alt="Athletic male boxer in black training gear throwing powerful punch in dark gym with dramatic lighting"
          className="w-full h-full object-cover"
          priority />

        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"></div>
        <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent opacity-50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <h1 className="font-headline font-black text-6xl sm:text-7xl lg:text-8xl text-white tracking-tight">
              VICTOR <span className="text-primary">CUELLAR</span>
            </h1>
            <p className="font-accent font-bold text-xl sm:text-2xl lg:text-3xl text-muted-foreground uppercase tracking-wider">
              Preparación Física Aplicada al Rendimiento
            </p>
          </div>

          <p className="max-w-3xl mx-auto font-body text-lg sm:text-xl text-white/90 leading-relaxed">
            El único sistema integral de rendimiento en Salta que combina 25+ años de metodología comprobada con experiencia multidisciplinaria
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <button
              onClick={onWhatsAppClick}
              data-cta="hero-whatsapp"
              className="group w-full sm:w-auto flex items-center justify-center space-x-3 px-8 py-4 bg-primary hover:bg-primary/90 text-white font-cta font-bold text-lg rounded-lg transition-all duration-250 shadow-cta hover:shadow-none hover:border-2 hover:border-primary">

              <Icon name="ChatBubbleLeftRightIcon" size={24} variant="solid" />
              <span>Consulta WhatsApp</span>
            </button>
<a
  href="https://forms.gle/qtYAkNHNR8X5rrSx9"
  target="_blank"
  rel="noopener noreferrer"
  data-cta="hero-preregister"
  className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-cta font-bold text-lg rounded-lg border border-white/20 hover:border-primary transition-all duration-250 text-center">

  Pre-registro Gratuito
</a>

          </div>

          {isHydrated &&
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-16 max-w-4xl mx-auto">
              {counters.map((counter, index) =>
            <div
              key={counter.id}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6 hover:border-primary transition-all duration-250"
              style={{ animationDelay: `${index * 100}ms` }}>

                  <div className="font-headline font-black text-4xl sm:text-5xl text-primary">
                    {counter.value}
                    {counter.suffix}
                  </div>
                  <div className="font-body text-sm text-muted-foreground mt-2 uppercase tracking-wide">
                    {counter.label}
                  </div>
                </div>
            )}
            </div>
          }
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <Icon name="ChevronDownIcon" size={32} className="text-white/60" />
      </div>
    </section>);

};

export default HeroSection;
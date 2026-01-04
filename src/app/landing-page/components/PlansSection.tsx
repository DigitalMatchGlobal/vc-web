'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Plan {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  features: string[];
  targetAudience: string;
  icon: string;
}

const plans: Plan[] = [
  {
    id: 'fuerza-base',
    name: 'FUERZA BASE',
    subtitle: 'LA BASE DE TODO RENDIMIENTO',
    description: 'Construir un cuerpo más fuerte, estable y funcional.',
    features: [
      'Fuerza general',
      'Control corporal',
      'Movimientos seguros',
    ],
    targetAudience: 'Adultos y deportistas que quieren entrenar bien, sin improvisar.',
    icon: 'ShieldCheckIcon',
  },
  {
    id: 'combinado-hibrido',
    name: 'COMBINADO / HÍBRIDO',
    subtitle: 'FUERZA + CAMPO + JUEGO',
    description: 'Estímulos de fuerza combinados con dinámica real de campo (ej. fútbol 5).',
    features: [
      'Fuerza y Resistencia',
      'Coordinación',
      'Juego y toma de decisiones',
    ],
    targetAudience: 'Deportistas recreativos que buscan entrenar de manera completa.',
    icon: 'TrophyIcon',
  },
  {
    id: 'patrones',
    name: 'PATRONES DE MOVIMIENTO',
    subtitle: 'MOVERSE BIEN, RENDIR MEJOR',
    description: 'Enfoque técnico en los patrones fundamentales.',
    features: [
      'Técnica de carrera',
      'Cambios de dirección',
      'Coordinación y control',
    ],
    targetAudience: 'Niños, jóvenes y deportistas construyendo base sólida.',
    icon: 'ArrowPathIcon',
  },
];

const PlansSection = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
  };

  return (
    <section id="planes" className="relative py-24 bg-gradient-to-b from-black to-card overflow-hidden">
      {/* Estilos para la animación del texto (Ticker) */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-headline font-black text-4xl sm:text-5xl lg:text-6xl text-white">
            Planes de <span className="text-primary">Entrenamiento</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            Elige el formato que mejor se adapte a tus objetivos y estilo de juego
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className={`relative flex flex-col bg-white/5 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden transition-all duration-300 ease-out group 
                hover:border-primary hover:shadow-[0_0_40px_rgba(225,6,0,0.3)] hover:scale-105 hover:-translate-y-2 z-0 hover:z-10
                ${selectedPlan === plan.id ? 'ring-2 ring-primary' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              
              {/* BADGE "SELECCIONAR" */}
              <div className="absolute top-0 right-0 left-0 mx-auto w-fit bg-primary text-white font-cta font-bold text-xs px-6 py-1 rounded-b-lg uppercase tracking-wider shadow-lg transform -translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                SELECCIONAR
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col space-y-6">
                
                {/* Header */}
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 bg-white/10 border-2 border-transparent transition-all duration-300 group-hover:bg-primary/20 group-hover:border-primary">
                    <Icon name={plan.icon as any} size={28} className="text-white transition-colors duration-300 group-hover:text-primary" variant="solid" />
                  </div>

                  <div>
                    <h3 className="font-headline font-black text-2xl text-white uppercase leading-tight">{plan.name}</h3>
                    <p className="font-headline font-bold text-sm text-primary uppercase tracking-wide mt-2">{plan.subtitle}</p>
                  </div>

                  <p className="font-body text-sm text-gray-300 leading-relaxed border-b border-white/10 pb-4 min-h-[4.5rem] flex items-end">
                    {plan.description}
                  </p>
                </div>

                {/* SE TRABAJA */}
                <div className="space-y-3">
                  <p className="font-headline font-bold text-sm text-white uppercase">SE TRABAJA:</p>
                  <ul className="space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <Icon name="CheckCircleIcon" size={18} className="text-primary flex-shrink-0 mt-0.5" variant="solid" />
                        <span className="font-body text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* PARA QUIÉN */}
                <div className="mt-auto pt-4">
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4 group-hover:border-primary/30 transition-colors duration-300">
                    <p className="font-headline font-bold text-xs text-white uppercase mb-1">PARA QUIÉN:</p>
                    <p className="font-body text-sm text-gray-400">
                      {plan.targetAudience}
                    </p>
                  </div>
                </div>

                {/* INFO ENTRENAMIENTO + BOTÓN GOOGLE FORM */}
                <div className="space-y-4 pt-2">
                  <div className="bg-white/5 rounded-lg p-4 border border-white/5 space-y-3 group-hover:border-primary/30 transition-colors">
                    
                    {/* Frecuencia y Duración */}
                    <div className="flex items-start space-x-3 border-b border-white/10 pb-3">
                        <Icon name="ClockIcon" size={20} className="text-primary flex-shrink-0 mt-0.5" variant="solid" />
                        <div>
                          <p className="font-headline font-bold text-xs text-muted-foreground uppercase mb-0.5">
                             ELIGE TU ENTRENAMIENTO
                          </p>
                          <p className="font-headline font-bold text-white text-sm">
                             2, 3, 4 o 5 veces por semana
                          </p>
                          <p className="font-body text-xs text-gray-400 mt-1">
                             Duración: 60 minutos
                          </p>
                        </div>
                    </div>

                    {/* FRANJAS HORARIAS */}
                    <div>
                        <p className="font-headline font-bold text-xs text-muted-foreground uppercase mb-2">
                           FRANJAS HORARIAS
                        </p>
                        <div className="grid grid-cols-1 gap-1 text-xs text-gray-300 font-body">
                          <div className="flex items-center space-x-2">
                             <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                             <span>Mañana (8 a 12 hs)</span>
                          </div>
                          <div className="flex items-center space-x-2">
                             <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                             <span>Tarde (15 a 18 hs)</span>
                          </div>
                          <div className="flex items-center space-x-2">
                             <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                             <span>Noche (18 a 22 hs)</span>
                          </div>
                        </div>
                    </div>
                  </div>

                  {isHydrated && (
                    <a
                      href="https://forms.gle/qtYAkNHNR8X5rrSx9"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handlePlanSelect(plan.id)}
                      data-cta={`plan-${plan.id}`}
                      className="block w-full text-center py-3 rounded-lg font-cta font-bold text-sm uppercase tracking-wide transition-all duration-250 bg-transparent text-white border border-white/30 hover:border-primary hover:bg-primary hover:text-white group-hover:bg-primary group-hover:border-primary group-hover:shadow-cta cursor-pointer"
                    >
                      Pre-inscribirme
                    </a>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="font-body text-muted-foreground mb-4">
            ¿Buscas algo más personalizado o tienes dudas?
          </p>
          
          {/* BOTÓN WHATSAPP YA CONFIGURADO */}
          <a
            href="https://wa.me/5493876856439" 
            target="_blank" 
            rel="noopener noreferrer"
            data-cta="plans-contact"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white font-cta font-bold text-lg rounded-lg transition-all duration-250 shadow-cta hover:shadow-none uppercase"
          >
            <Icon name="ChatBubbleLeftRightIcon" size={24} variant="solid" />
            <span>Hablar con Victor</span>
          </a>

        </div>

        {/* --- NUEVA BARRA DINÁMICA (TICKER) --- */}
        <div className="mt-20 -mx-4 sm:-mx-6 lg:-mx-8 border-y border-white/10 bg-white/5 py-4 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10 pointer-events-none"></div>
          <div className="animate-marquee whitespace-nowrap flex items-center">
            {/* Contenido duplicado varias veces para crear el bucle infinito */}
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center">
                <span className="mx-6 font-headline font-black text-xl text-white uppercase tracking-widest italic">
                  ⚡️ CUPOS LIMITADOS
                </span>
                <span className="mx-6 font-cta font-bold text-sm text-primary uppercase tracking-widest">
                  RESERVA TU LUGAR
                </span>
                <span className="mx-6 font-headline font-black text-xl text-white uppercase tracking-widest italic">
                  ⚡️ PRE-INSCRIPCIONES ABIERTAS
                </span>
                <span className="mx-6 font-cta font-bold text-sm text-primary uppercase tracking-widest">
                  TU MEJOR VERSIÓN
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default PlansSection;
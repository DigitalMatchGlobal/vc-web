'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

// Actualizamos la interfaz para soportar los nuevos campos de la imagen
interface Plan {
  id: string;
  name: string;
  subtitle: string; // El texto rojo debajo del título (ej: LA BASE DE TODO RENDIMIENTO)
  description: string;
  features: string[];
  targetAudience: string; // El texto del recuadro "PARA QUIÉN"
  highlighted: boolean;
  badge?: string; // Para la etiqueta superior (ej: MÁS DINÁMICO)
  icon: string;
}

const plans: Plan[] = [
  {
    id: 'fuerza-base',
    name: 'FUERZA Y BASE',
    subtitle: 'LA BASE DE TODO RENDIMIENTO',
    description: 'Construir un cuerpo más fuerte, estable y funcional.',
    features: [
      'Fuerza general',
      'Control corporal',
      'Movimientos seguros',
    ],
    targetAudience: 'Adultos y deportistas que quieren entrenar bien, sin improvisar.',
    highlighted: false,
    icon: 'ShieldCheckIcon', // Icono sugerido de fuerza/seguridad
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
    highlighted: true,
    badge: 'MÁS DINÁMICO',
    icon: 'TrophyIcon', // Icono sugerido de juego/competencia
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
    highlighted: false,
    icon: 'ArrowPathIcon', // Icono sugerido de movimiento/técnica
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
    <section id="planes" className="relative py-24 bg-gradient-to-b from-black to-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-headline font-black text-4xl sm:text-5xl lg:text-6xl text-white">
            Planes de <span className="text-primary">Entrenamiento</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            Elige el formato que mejor se adapte a tus objetivos y estilo de juego
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className={`relative flex flex-col bg-white/5 backdrop-blur-md border rounded-lg overflow-hidden transition-all duration-250 ${
                plan.highlighted
                  ? 'border-primary shadow-[0_0_40px_rgba(225,6,0,0.4)] scale-105 md:scale-110 z-10'
                  : 'border-white/10 hover:border-primary/50'
              } ${selectedPlan === plan.id ? 'ring-2 ring-primary' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Badge superior (ej: MÁS DINÁMICO) */}
              {plan.badge && (
                <div className="absolute top-0 right-0 left-0 mx-auto w-fit bg-primary text-white font-cta font-bold text-xs px-4 py-1 rounded-b-lg uppercase tracking-wider">
                  {plan.badge}
                </div>
              )}

              <div className="p-6 sm:p-8 flex-1 flex flex-col space-y-6">
                
                {/* Header de la tarjeta */}
                <div className="space-y-4">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${
                    plan.highlighted ? 'bg-primary/20 border-2 border-primary' : 'bg-white/10'
                  }`}>
                    <Icon name={plan.icon as any} size={28} className={plan.highlighted ? 'text-primary' : 'text-white'} variant="solid" />
                  </div>

                  <div>
                    <h3 className="font-headline font-black text-2xl text-white uppercase leading-tight">{plan.name}</h3>
                    <p className="font-headline font-bold text-sm text-primary uppercase tracking-wide mt-2">{plan.subtitle}</p>
                  </div>

                  <p className="font-body text-sm text-gray-300 leading-relaxed border-b border-white/10 pb-4">
                    {plan.description}
                  </p>
                </div>

                {/* Sección SE TRABAJA */}
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

                {/* Sección PARA QUIÉN (Caja estilo imagen) */}
                <div className="mt-auto pt-4">
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <p className="font-headline font-bold text-xs text-white uppercase mb-1">PARA QUIÉN:</p>
                    <p className="font-body text-sm text-gray-400">
                      {plan.targetAudience}
                    </p>
                  </div>
                </div>

                {/* Precio y CTA */}
                <div className="pt-4 space-y-4">
                  <div className="text-center">
                    <p className="font-body text-sm text-muted-foreground">
                      Precio según frecuencia 
                      <span className="block text-white font-bold">2, 3, 4, 5 días</span>
                    </p>
                  </div>

                  {isHydrated && (
                    <button
                      onClick={() => handlePlanSelect(plan.id)}
                      data-cta={`plan-${plan.id}`}
                      className={`w-full py-3 rounded-lg font-cta font-bold text-sm uppercase tracking-wide transition-all duration-250 ${
                        plan.highlighted
                          ? 'bg-primary hover:bg-primary/90 text-white shadow-cta'
                          : 'bg-transparent text-white border border-white/30 hover:border-primary hover:text-primary'
                      }`}
                    >
                      Consultar Plan
                    </button>
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
          <button
            data-cta="plans-contact"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white font-cta font-bold text-lg rounded-lg transition-all duration-250 shadow-cta hover:shadow-none uppercase"
          >
            <Icon name="ChatBubbleLeftRightIcon" size={24} variant="solid" />
            <span>Hablar con Victor</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
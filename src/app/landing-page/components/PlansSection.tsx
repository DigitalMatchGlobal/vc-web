'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Plan {
  id: string;
  name: string;
  description: string;
  price: string;
  priceDetail: string;
  features: string[];
  highlighted: boolean;
  badge?: string;
  icon: string;
}

const plans: Plan[] = [
  {
    id: 'individual',
    name: 'Individual',
    description: 'Entrenamiento personalizado uno a uno',
    price: 'Consultar',
    priceDetail: 'Precio según frecuencia',
    features: [
      'Sesiones 100% personalizadas',
      'Atención exclusiva del preparador',
      'Flexibilidad de horarios',
      'Evaluación mensual detallada',
      'Plan nutricional incluido',
    ],
    highlighted: false,
    icon: 'UserIcon',
  },
  {
    id: 'combinado',
    name: 'Combinado/Híbrido',
    description: 'Lo mejor de ambos mundos',
    price: 'Consultar',
    priceDetail: 'Plan más elegido',
    features: [
      '2 sesiones individuales/semana',
      '2 sesiones grupales/semana',
      'Seguimiento personalizado',
      'Motivación grupal',
      'Plan nutricional incluido',
      'Acceso a comunidad privada',
    ],
    highlighted: true,
    badge: 'Más Popular',
    icon: 'UsersIcon',
  },
  {
    id: 'grupal',
    name: 'Grupal',
    description: 'Entrenamiento en grupos reducidos',
    price: 'Consultar',
    priceDetail: 'Máximo 6 personas',
    features: [
      'Grupos de nivel similar',
      'Ambiente motivador',
      'Supervisión constante',
      'Evaluación bimensual',
      'Asesoramiento nutricional',
    ],
    highlighted: false,
    icon: 'UserGroupIcon',
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
            Elige el formato que mejor se adapte a tus objetivos y estilo de vida
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className={`relative bg-white/5 backdrop-blur-md border rounded-lg overflow-hidden transition-all duration-250 ${
                plan.highlighted
                  ? 'border-primary shadow-[0_0_40px_rgba(225,6,0,0.4)] scale-105 md:scale-110'
                  : 'border-white/10 hover:border-primary/50'
              } ${selectedPlan === plan.id ? 'ring-2 ring-primary' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.badge && (
                <div className="absolute top-0 right-0 bg-primary text-white font-cta font-bold text-xs px-4 py-2 rounded-bl-lg">
                  {plan.badge}
                </div>
              )}

              <div className="p-8 space-y-6">
                <div className="space-y-4">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                    plan.highlighted ? 'bg-primary/20 border-2 border-primary' : 'bg-white/10'
                  }`}>
                    <Icon name={plan.icon as any} size={32} className={plan.highlighted ? 'text-primary' : 'text-white'} variant="solid" />
                  </div>

                  <div>
                    <h3 className="font-headline font-black text-2xl text-white mb-2">{plan.name}</h3>
                    <p className="font-body text-sm text-muted-foreground">{plan.description}</p>
                  </div>

                  <div>
                    <div className="font-headline font-black text-4xl text-primary">{plan.price}</div>
                    <div className="font-body text-sm text-muted-foreground mt-1">{plan.priceDetail}</div>
                  </div>
                </div>

                <div className="space-y-3 pt-6 border-t border-white/10">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <Icon name="CheckCircleIcon" size={20} className="text-primary flex-shrink-0 mt-0.5" variant="solid" />
                      <span className="font-body text-sm text-white">{feature}</span>
                    </div>
                  ))}
                </div>

                {isHydrated && (
                  <button
                    onClick={() => handlePlanSelect(plan.id)}
                    data-cta={`plan-${plan.id}`}
                    className={`w-full py-3 rounded-lg font-cta font-bold text-sm transition-all duration-250 ${
                      plan.highlighted
                        ? 'bg-primary hover:bg-primary/90 text-white shadow-cta'
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-primary'
                    }`}
                  >
                    Consultar Plan
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="font-body text-muted-foreground mb-4">
            ¿No estás seguro qué plan elegir? Agenda una evaluación gratuita
          </p>
          <button
            data-cta="plans-evaluation"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white font-cta font-bold text-lg rounded-lg transition-all duration-250 shadow-cta hover:shadow-none"
          >
            <Icon name="CalendarIcon" size={24} variant="solid" />
            <span>Agendar Evaluación Gratuita</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface PlanDetail {
  title: string;
  items: string[];
}

interface Plan {
  id: string;
  name: string;
  subtitle: string;
  // Front Content
  shortDescription: string;
  mainFeatures: string[];
  targetAudience: string;
  icon: string;
  // Back Content (Details)
  details: PlanDetail[];
  importantNote?: string;
}

const plans: Plan[] = [
  {
    id: 'fuerza-base',
    name: 'FUERZA BASE',
    subtitle: 'GIMNASIO & FUNDAMENTOS',
    shortDescription: 'Plan exclusivo de gimnasio enfocado en la salud musculoesquelética y la calidad de movimiento.',
    mainFeatures: [
      '100% Gimnasio (Sin campo)',
      'Fuerza y Estabilidad',
      'Supervisión Profesional',
    ],
    targetAudience: 'Ideal para quienes entrenan exclusivamente en gimnasio y buscan corregir técnica y ganar fuerza real.',
    icon: 'ShieldCheckIcon',
    // Detalles del dorso basados en el WhatsApp
    details: [
      {
        title: 'Qué trabajamos',
        items: ['Patrones fundamentales: Sentadilla, bisagra, empuje, tracción.', 'Mejora de fuerza y calidad de movimiento.', 'Individualidad biológica (Mike Boyle).']
      },
      {
        title: 'El Rol del PF',
        items: ['Ajuste según necesidades y limitaciones.', 'Corrección constante durante la sesión.', 'No todos hacen lo mismo, sino lo que necesitan.']
      }
    ],
    importantNote: 'Este plan NO incluye trabajo de campo ni fútbol.'
  },
  {
    id: 'combinado',
    name: 'COMBINADO',
    subtitle: 'GIMNASIO + CAMPO DE JUEGO',
    shortDescription: 'La experiencia completa de un club de fútbol. Transferencia inmediata de la fuerza al juego real.',
    mainFeatures: [
      '30\' Gimnasio + 30\' Campo',
      'Staff Completo (PF + DT + Coach)',
      'Dinámica de Grupo (8 a 16 px)',
    ],
    targetAudience: 'Para deportistas que quieren entrenar como profesionales con aplicación directa al juego.',
    icon: 'TrophyIcon',
    // Detalles del dorso basados en el WhatsApp
    details: [
      {
        title: 'Estructura de la Sesión',
        items: ['30 min de Fuerza en Gimnasio.', '30 min de Transferencia en Campo con pelota.', 'Lo que se entrena, se aplica.']
      },
      {
        title: 'Staff Profesional',
        items: ['Preparador Físico + Director Técnico.', 'Entrenador específico de Arqueros.', 'Mini charlas semanales de Coaching.']
      }
    ],
    importantNote: 'Entrenamiento en grupos (Óptimo 12-16 jugadores).'
  },
];

const PlansSection = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <section id="planes" className="relative py-24 bg-gradient-to-b from-black to-card overflow-hidden">
      
      {/* Estilos CSS para el efecto FLIP 3D */}
      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        /* Animación del Ticker */
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
            Dos caminos, un mismo objetivo: Tu máximo rendimiento.
          </p>
        </div>

        {/* CONTENEDOR DE PLANES - AHORA 2 COLUMNAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className="group perspective-1000 w-full h-[600px] cursor-pointer" // Altura fija necesaria para el flip
            >
              {/* Inner Container que gira */}
              <div className="relative w-full h-full transition-all duration-700 transform-style-3d group-hover:rotate-y-180 shadow-xl rounded-2xl">
                
                {/* === FRENTE DE LA TARJETA (FRONT) === */}
                <div className="absolute inset-0 w-full h-full backface-hidden bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 flex flex-col overflow-hidden">
                   {/* Fondo decorativo sutil */}
                   <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
                   
                   {/* Icono */}
                   <div className="w-16 h-16 rounded-full bg-black/40 border border-white/10 flex items-center justify-center mb-6 text-primary">
                      <Icon name={plan.icon as any} size={32} variant="solid" />
                   </div>

                   {/* Títulos */}
                   <h3 className="font-headline font-black text-3xl text-white uppercase mb-2">{plan.name}</h3>
                   <p className="font-accent font-bold text-sm text-primary uppercase tracking-widest mb-6">{plan.subtitle}</p>

                   {/* Descripción Corta */}
                   <p className="font-body text-gray-300 mb-8 text-lg leading-relaxed">
                     {plan.shortDescription}
                   </p>

                   {/* Features Principales */}
                   <ul className="space-y-4 mb-auto">
                      {plan.mainFeatures.map((feat, i) => (
                        <li key={i} className="flex items-center space-x-3">
                           <Icon name="CheckCircleIcon" size={20} className="text-primary" variant="solid" />
                           <span className="font-body text-white">{feat}</span>
                        </li>
                      ))}
                   </ul>

                   {/* Call to Action Visual (Indicador de giro) */}
                   <div className="mt-8 flex justify-center items-center text-muted-foreground text-sm font-body animate-pulse">
                      <Icon name="ArrowPathIcon" size={16} className="mr-2" />
                      <span>Pasá el mouse para ver detalles</span>
                   </div>
                </div>

                {/* === DORSO DE LA TARJETA (BACK) === */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-black border border-primary/30 rounded-2xl p-8 flex flex-col overflow-hidden shadow-[0_0_30px_rgba(220,38,38,0.15)]">
                    {/* Título Dorso */}
                    <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                       <h3 className="font-headline font-bold text-xl text-white">DETALLES TÉCNICOS</h3>
                       <Icon name={plan.icon as any} size={24} className="text-white/20" />
                    </div>

                    {/* Contenido Detallado */}
                    <div className="space-y-6 flex-1 overflow-y-auto custom-scrollbar">
                       {plan.details.map((detail, i) => (
                         <div key={i}>
                            <h4 className="font-cta font-bold text-primary text-sm uppercase mb-2">{detail.title}</h4>
                            <ul className="list-disc list-inside space-y-1">
                               {detail.items.map((item, j) => (
                                 <li key={j} className="font-body text-sm text-gray-300 leading-snug">
                                   {item}
                                 </li>
                               ))}
                            </ul>
                         </div>
                       ))}

                       {plan.importantNote && (
                         <div className="bg-primary/10 border border-primary/20 p-3 rounded-lg mt-4">
                           <p className="font-body text-xs text-white">
                             <span className="font-bold text-primary">⚠️ IMPORTANTE:</span> {plan.importantNote}
                           </p>
                         </div>
                       )}
                    </div>

                    {/* Botón de Acción Real */}
                    <div className="mt-6 pt-4 border-t border-white/10">
                        {isHydrated && (
                        <a
                            href="https://forms.gle/C9mtn3mPsS368UMFA" // Link actualizado
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full text-center py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-cta font-bold uppercase tracking-wider transition-all hover:scale-105 shadow-cta"
                        >
                            Solicitar este Plan
                        </a>
                        )}
                    </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Botón General de Contacto */}
        <div className="mt-20 text-center">
          <p className="font-body text-muted-foreground mb-4">
            ¿No sabés cuál elegir? Hablá con el equipo.
          </p>
          <a
            href="https://wa.me/5493876856439" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white text-white font-cta font-bold text-lg rounded-lg transition-all duration-250 uppercase"
          >
            <Icon name="ChatBubbleLeftRightIcon" size={24} variant="solid" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>

        {/* --- BARRA DINÁMICA (TICKER) --- */}
        <div className="mt-24 -mx-4 sm:-mx-6 lg:-mx-8 border-y border-white/10 bg-white/5 py-4 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10 pointer-events-none"></div>
          <div className="animate-marquee whitespace-nowrap flex items-center">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center">
                <span className="mx-6 font-headline font-black text-xl text-white uppercase tracking-widest italic">
                  ⚡️ CUPOS LIMITADOS
                </span>
                <span className="mx-6 font-cta font-bold text-sm text-primary uppercase tracking-widest">
                  RESERVA TU LUGAR
                </span>
                <span className="mx-6 font-headline font-black text-xl text-white uppercase tracking-widest italic">
                  ⚡️ SISTEMA VC
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
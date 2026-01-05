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
  // Contenido Frente
  shortDescription: string;
  mainFeatures: string[];
  icon: string;
  // Contenido Dorso (Detalles)
  targetAudience: string;
  details: PlanDetail[];
  importantNote?: string;
}

const plans: Plan[] = [
  {
    id: 'fuerza-base',
    name: 'FUERZA BASE',
    subtitle: 'GIMNASIO & FUNDAMENTOS',
    shortDescription: 'Plan exclusivo de gimnasio enfocado en la salud musculoesquelética, la fuerza real y la calidad de movimiento.',
    mainFeatures: [
      '100% Gimnasio (Sin campo)',
      'Patrones de Movimiento',
      'Atención a la Individualidad',
    ],
    icon: 'ShieldCheckIcon',
    targetAudience: 'Ideal para personas que entrenan exclusivamente en gimnasio y buscan corrección técnica profesional.',
    details: [
      {
        title: 'Qué trabajamos',
        items: [
            'Patrones fundamentales: Sentadilla, bisagra, empuje, tracción, estabilización.', 
            'Mejora de la fuerza y salud musculoesquelética.'
        ]
      },
      {
        title: 'Metodología (El Rol del PF)',
        items: [
            'Ajuste según necesidades y limitaciones (Individualidad biológica).', 
            'Corrección constante durante la sesión.', 
            'Filosofía Mike Boyle: No todos hacen lo mismo, sino lo que necesitan.'
        ]
      }
    ],
    importantNote: 'Este plan es exclusivo de gimnasio. NO incluye trabajo de campo ni fútbol.'
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
    icon: 'TrophyIcon',
    targetAudience: 'Deportistas recreativos que buscan entrenar de manera completa y aplicada.',
    details: [
      {
        title: 'Estructura de la Sesión',
        items: [
            '30 min de Fuerza en Gimnasio.', 
            '30 min de Transferencia en Campo con pelota.', 
            'Lo que se entrena en el gym, se aplica en la cancha.'
        ]
      },
      {
        title: 'Staff Profesional',
        items: [
            'Preparador Físico + Director Técnico.', 
            'Entrenador específico de Arqueros.', 
            'Mini charlas semanales de Coaching Deportivo.'
        ]
      }
    ],
    importantNote: 'Entrenamiento grupal. Mínimo 8 - Óptimo 12 a 16 jugadores.'
  },
];

const PlansSection = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  // Estado para controlar qué tarjeta está girada
  const [flippedCard, setFlippedCard] = useState<string | null>(null);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleCardClick = (id: string) => {
    // Si toco la misma que está abierta, la cierro. Si no, abro la nueva.
    setFlippedCard(prev => prev === id ? null : id);
  };

  return (
    <section id="planes" className="relative py-24 bg-gradient-to-b from-black to-card overflow-hidden">
      
      {/* Estilos CSS para el efecto FLIP 3D */}
      <style jsx>{`
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
            Dos caminos, un mismo objetivo. Tocá las tarjetas para ver el detalle.
          </p>
        </div>

        {/* CONTENEDOR DE PLANES - 2 COLUMNAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => {
            const isFlipped = flippedCard === plan.id;

            return (
              <div
                key={plan.id}
                className="perspective-1000 w-full h-[680px] cursor-pointer group" // Aumenté un poco la altura para los botones
                onClick={() => handleCardClick(plan.id)}
              >
                {/* Inner Container que gira */}
                <div 
                    className={`relative w-full h-full transition-all duration-700 transform-style-3d shadow-xl rounded-2xl ${isFlipped ? 'rotate-y-180' : ''}`}
                >
                  
                  {/* === FRENTE DE LA TARJETA (FRONT) === */}
                  <div className="absolute inset-0 w-full h-full backface-hidden bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 flex flex-col overflow-hidden hover:border-primary/50 transition-colors">
                     {/* Fondo decorativo sutil */}
                     <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
                     
                     {/* Icono */}
                     <div className="w-16 h-16 rounded-full bg-black/40 border border-white/10 flex items-center justify-center mb-6 text-primary">
                        <Icon name={plan.icon as any} size={32} variant="solid" />
                     </div>

                     {/* Títulos */}
                     <h3 className="font-headline font-black text-3xl text-white uppercase mb-2 leading-none">{plan.name}</h3>
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
                     <div className="mt-8 flex justify-center items-center text-white text-sm font-cta font-bold uppercase border border-white/20 rounded-full py-2 px-4 bg-white/5 group-hover:bg-primary group-hover:border-primary transition-all">
                        <span className="mr-2">Ver Detalle Completo</span>
                        <Icon name="ArrowRightIcon" size={16} />
                     </div>
                  </div>

                  {/* === DORSO DE LA TARJETA (BACK) === */}
                  <div className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-black border border-primary rounded-2xl p-8 flex flex-col overflow-hidden shadow-[0_0_30px_rgba(220,38,38,0.15)]`}>
                      {/* Título Dorso + Botón Cerrar Superior */}
                      <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-4">
                         <h3 className="font-headline font-bold text-xl text-white">INFORMACIÓN TÉCNICA</h3>
                         <button className="text-gray-400 hover:text-white p-1">
                            <span className="sr-only">Cerrar</span>
                            <Icon name="XMarkIcon" size={24} />
                         </button>
                      </div>

                      {/* Contenido Detallado Scrollable */}
                      <div className="space-y-6 flex-1 overflow-y-auto custom-scrollbar pr-2">
                         
                         {/* Para Quién */}
                         <div>
                            <h4 className="font-cta font-bold text-white text-xs uppercase mb-1 bg-white/10 inline-block px-2 py-1 rounded">Público Objetivo</h4>
                            <p className="font-body text-sm text-gray-300 leading-snug">
                                {plan.targetAudience}
                            </p>
                         </div>

                         {plan.details.map((detail, i) => (
                           <div key={i}>
                              <h4 className="font-cta font-bold text-primary text-sm uppercase mb-2">{detail.title}</h4>
                              <ul className="list-disc list-inside space-y-2">
                                 {detail.items.map((item, j) => (
                                   <li key={j} className="font-body text-sm text-gray-300 leading-snug pl-1">
                                     {item}
                                   </li>
                                 ))}
                              </ul>
                           </div>
                         ))}

                         {plan.importantNote && (
                           <div className="bg-primary/10 border border-primary/20 p-3 rounded-lg mt-2">
                             <p className="font-body text-xs text-white">
                               <span className="font-bold text-primary">⚠️ NOTA:</span> {plan.importantNote}
                             </p>
                           </div>
                         )}
                      </div>

                      {/* --- ZONA DE BOTONES INFERIOR --- */}
                      <div className="mt-4 pt-4 border-t border-white/10 z-20 bg-black flex flex-col-reverse sm:flex-row gap-3">
                          
                          {/* 1. Botón Volver (Secundario) */}
                          <button
                              // No necesita onClick porque el click se propaga al contenedor padre que cierra la tarjeta
                              className="w-full sm:w-auto px-4 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-cta font-bold uppercase tracking-wider transition-all text-sm flex items-center justify-center"
                          >
                              <Icon name="ArrowUturnLeftIcon" size={18} className="mr-2" /> {/* Asegúrate de tener este icono o usa ArrowLeftIcon */}
                              Volver
                          </button>

                          {/* 2. Botón Inscribirme (Principal) */}
                          {isHydrated && (
                          <a
                              href="https://forms.gle/C9mtn3mPsS368UMFA" 
                              target="_blank"
                              rel="noopener noreferrer"
                              // Detenemos la propagación para que el click en el enlace NO cierre la tarjeta
                              onClick={(e) => e.stopPropagation()} 
                              className="flex-1 block w-full text-center py-3 sm:py-4 bg-primary hover:bg-primary/90 text-white rounded-lg font-cta font-bold uppercase tracking-wider transition-all hover:scale-105 shadow-cta text-sm sm:text-base"
                          >
                              Inscribirme ahora
                          </a>
                          )}
                      </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Botón General de Contacto */}
        <div className="mt-20 text-center">
          <p className="font-body text-muted-foreground mb-4">
            ¿Tenés dudas sobre qué plan elegir?
          </p>
          <a
            href="https://wa.me/5493876856439" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white text-white font-cta font-bold text-lg rounded-lg transition-all duration-250 uppercase"
          >
            <Icon name="ChatBubbleLeftRightIcon" size={24} variant="solid" />
            <span>Consultar al Profe</span>
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
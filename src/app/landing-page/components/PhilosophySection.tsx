'use client';

import { useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

// Interfaz actualizada para Perfiles Genéricos
interface AthleteProfile {
  id: string;
  sportTitle: string; // Antes "name" (ej: FÚTBOL)
  focusLabel: string; // Antes "category" (ej: Alto Rendimiento)
  image: string;      
  imageAlt: string;
  keyResult: string;  // Antes "achievement"
  stats: {            
    label: string;
    value: number;
    displayValue: string;
  }[];
}

const profiles: AthleteProfile[] = [
  {
    id: 'futbol',
    sportTitle: 'FÚTBOL PROFESIONAL',
    focusLabel: 'Rendimiento & Potencia',
    // Usamos la imagen que creaste tipo ficha
    image: "/assets/images/ficha-futbol-lucas.png", 
    imageAlt: 'Futbolista en entrenamiento de alta intensidad',
    keyResult: 'Titularidad y Explosividad',
    stats: [
      { label: 'Potencia de Arranque', value: 90, displayValue: 'Elite' },
      { label: 'Prevención de Lesiones', value: 95, displayValue: 'Max' },
      { label: 'Resistencia de Juego', value: 88, displayValue: '+40%' },
    ]
  },
  {
    id: 'boxeo',
    sportTitle: 'DEPORTES DE COMBATE',
    focusLabel: 'Agilidad & Estrategia',
    // Usamos la foto de boxeo que ya tienes
    image: "/assets/images/alto-rendimiento.jpg",
    imageAlt: 'Boxeador concentrado en entrenamiento técnico',
    keyResult: 'Campeonato Provincial',
    stats: [
      { label: 'Fuerza Explosiva', value: 85, displayValue: '+25%' },
      { label: 'Gestión de Energía', value: 92, displayValue: 'Óptima' },
      { label: 'Enfoque Mental', value: 95, displayValue: '100%' },
    ]
  },
  {
    id: 'salud',
    sportTitle: 'FITNESS & SALUD',
    focusLabel: 'Longevidad Activa',
    // Usamos la foto del adulto mayor que ya tienes
    image: "/assets/images/salud-adultos.jpg",
    imageAlt: 'Entrenamiento de fuerza enfocado en salud y longevidad',
    keyResult: 'Movilidad sin Dolor',
    stats: [
      { label: 'Fuerza Funcional', value: 88, displayValue: '+50%' },
      { label: 'Salud Articular', value: 95, displayValue: 'Sana' },
      { label: 'Vitalidad Diaria', value: 90, displayValue: 'Alta' },
    ]
  }
];

const PhilosophySection = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prev) => prev === 0 ? profiles.length - 1 : prev - 1);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => prev === profiles.length - 1 ? 0 : prev + 1);
  };

  const currentProfile = profiles[currentIndex];

  return (
    <section className="relative py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* COLUMNA IZQUIERDA: TEXTO */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-headline font-black text-4xl sm:text-5xl lg:text-6xl text-white">
                No todos entrenan igual, <span className="text-primary"> ni deberían hacerlo.</span>
              </h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                Mi forma de trabajar parte de entender a la persona: su edad, su historia, su contexto y su objetivo. A partir de ahí, el entrenamiento se adapta.
                Trabajo desde una visión integral del rendimiento, donde el cuerpo, la mente y la disciplina van de la mano.
              </p>
            </div>

            <div className="bg-primary/10 border-l-4 border-primary rounded-lg p-6">
              <blockquote className="font-body text-xl text-white italic leading-relaxed">
                "El objetivo es formar bases sólidas. Entrenar como profesional, incluso cuando todavía no lo sos."
              </blockquote>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="UserIcon" size={24} className="text-primary" variant="solid" />
                </div>
                <div>
                  <h3 className="font-cta font-bold text-lg text-white mb-2">Evaluación Personalizada</h3>
                  <p className="font-body text-muted-foreground">
                    Análisis completo de tu condición física, objetivos y limitaciones para diseñar tu programa único.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="ChartBarIcon" size={24} className="text-primary" variant="solid" />
                </div>
                <div>
                  <h3 className="font-cta font-bold text-lg text-white mb-2">Progresión Medible</h3>
                  <p className="font-body text-muted-foreground">
                    Seguimiento constante con métricas objetivas que demuestran tu evolución semana a semana.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: FICHA TÉCNICA (Generic Profiles) */}
          <div className="relative">
            {isHydrated && (
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 sm:p-8 shadow-2xl relative overflow-hidden group">
                
                {/* Fondo decorativo */}
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>

                {/* Header de la tarjeta */}
                <div className="flex items-center justify-between mb-6 relative z-10">
                   <div>
                      {/* TÍTULO DEPORTE (Antes Nombre) */}
                      <h3 className="font-headline font-black text-2xl text-white uppercase">{currentProfile.sportTitle}</h3>
                      {/* SUBTÍTULO ENFOQUE (Antes Categoría) */}
                      <p className="font-body text-sm text-primary font-bold uppercase tracking-wider">
                        {currentProfile.focusLabel}
                      </p>
                    </div>
                    
                    {/* Controles */}
                    <div className="flex space-x-2">
                      <button
                        onClick={handlePrevious}
                        className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-250 border border-white/10 hover:border-primary group/btn"
                        aria-label="Anterior"
                      >
                        <Icon name="ChevronLeftIcon" size={20} className="text-white group-hover/btn:text-white" />
                      </button>
                      <button
                        onClick={handleNext}
                        className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-250 border border-white/10 hover:border-primary group/btn"
                        aria-label="Siguiente"
                      >
                        <Icon name="ChevronRightIcon" size={20} className="text-white group-hover/btn:text-white" />
                      </button>
                    </div>
                </div>

                {/* Imagen Principal */}
                <div className="relative aspect-video rounded-lg overflow-hidden mb-6 border border-white/10 shadow-inner bg-black/20">
                   <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-10"></div>
                   <AppImage
                      src={currentProfile.image}
                      alt={currentProfile.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    
                    {/* Badge de Resultado Clave */}
                    <div className="absolute bottom-4 left-4 z-20">
                       <span className="font-body text-[10px] text-primary uppercase font-bold tracking-widest bg-black/50 px-2 py-1 rounded backdrop-blur-md border border-primary/30">
                         OBJETIVO LOGRADO
                       </span>
                       <p className="font-headline font-black text-xl text-white italic mt-1 shadow-black drop-shadow-md">
                         {currentProfile.keyResult}
                       </p>
                    </div>
                </div>

                {/* Estadísticas */}
                <div className="space-y-5 relative z-10">
                  {currentProfile.stats.map((stat, idx) => (
                    <div key={idx} className="space-y-1.5">
                      <div className="flex justify-between items-end">
                        <span className="font-body text-xs text-gray-300 uppercase tracking-wide">{stat.label}</span>
                        <span className="font-cta font-bold text-sm text-primary">{stat.displayValue}</span>
                      </div>
                      <div className="h-2.5 w-full bg-black/40 rounded-full overflow-hidden border border-white/5">
                        <div 
                          className="h-full bg-gradient-to-r from-primary/80 to-primary rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(225,6,0,0.5)]"
                          style={{ width: `${stat.value}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Indicadores */}
                <div className="flex justify-center space-x-2 pt-8">
                  {profiles.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        index === currentIndex ? 'bg-primary w-8' : 'bg-white/20 w-2 hover:bg-white/40'
                      }`}
                      aria-label={`Ver perfil ${index + 1}`}
                    />
                  ))}
                </div>

              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
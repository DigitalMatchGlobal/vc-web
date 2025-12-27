'use client';

import { useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Transformation {
  id: string;
  name: string;
  age: number;
  category: string;
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
  achievement: string;
  timeframe: string;
}

const transformations: Transformation[] = [
{
  id: 'athlete1',
  name: 'Lucas Fernández',
  age: 22,
  category: 'Fútbol Profesional',
  before: "https://img.rocket.new/generatedImages/rocket_gen_img_1378b48f7-1765368690627.png",
  after: "https://img.rocket.new/generatedImages/rocket_gen_img_1378b48f7-1765368690627.png",
  beforeAlt: 'Young male soccer player in training gear on field before specialized training program',
  afterAlt: 'Athletic male soccer player in peak physical condition after 6 months elite training',
  achievement: 'Mejoró velocidad 30% y resistencia 40%',
  timeframe: '6 meses'
},
{
  id: 'athlete2',
  name: 'Martín Gómez',
  age: 28,
  category: 'Boxeo Amateur',
  before: "https://images.unsplash.com/photo-1575800542980-4753fe7fd72e",
  after: "https://images.unsplash.com/photo-1575800542980-4753fe7fd72e",
  beforeAlt: 'Male boxer in red gloves training in gym before performance optimization program',
  afterAlt: 'Muscular male boxer with defined physique after comprehensive training system',
  achievement: 'Ganó campeonato provincial',
  timeframe: '8 meses'
},
{
  id: 'athlete3',
  name: 'Carolina Ruiz',
  age: 35,
  category: 'Fitness & Salud',
  before: "https://img.rocket.new/generatedImages/rocket_gen_img_1ddd89c9a-1763295459288.png",
  after: "https://img.rocket.new/generatedImages/rocket_gen_img_1ddd89c9a-1763295459288.png",
  beforeAlt: 'Adult woman in athletic wear beginning fitness transformation journey',
  afterAlt: 'Fit woman in athletic wear showing results of structured training program',
  achievement: 'Transformación completa de estilo de vida',
  timeframe: '12 meses'
}];


const PhilosophySection = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prev) => prev === 0 ? transformations.length - 1 : prev - 1);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => prev === transformations.length - 1 ? 0 : prev + 1);
  };

  const currentTransformation = transformations[currentIndex];

  return (
    <section className="relative py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                "El objetivo es formar bases sólidas. Entrenar como profesional, incluso cuando todavía no lo sos"
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

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="AcademicCapIcon" size={24} className="text-primary" variant="solid" />
                </div>
                <div>
                  <h3 className="font-cta font-bold text-lg text-white mb-2">Educación Continua</h3>
                  <p className="font-body text-muted-foreground">
                    Aprenderás los fundamentos científicos detrás de cada ejercicio y estrategia nutricional.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            {isHydrated &&
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-cta font-bold text-2xl text-white">{currentTransformation.name}</h3>
                      <p className="font-body text-sm text-muted-foreground">
                        {currentTransformation.age} años • {currentTransformation.category}
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <button
                      onClick={handlePrevious}
                      className="w-10 h-10 bg-white/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors duration-250"
                      aria-label="Transformación anterior">

                        <Icon name="ChevronLeftIcon" size={20} className="text-white" />
                      </button>
                      <button
                      onClick={handleNext}
                      className="w-10 h-10 bg-white/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors duration-250"
                      aria-label="Siguiente transformación">

                        <Icon name="ChevronRightIcon" size={20} className="text-white" />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="font-body text-xs text-muted-foreground uppercase tracking-wide">Antes</div>
                      <div className="aspect-[3/4] rounded-lg overflow-hidden">
                        <AppImage
                        src={currentTransformation.before}
                        alt={currentTransformation.beforeAlt}
                        className="w-full h-full object-cover" />

                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="font-body text-xs text-muted-foreground uppercase tracking-wide">Después</div>
                      <div className="aspect-[3/4] rounded-lg overflow-hidden border-2 border-primary">
                        <AppImage
                        src={currentTransformation.after}
                        alt={currentTransformation.afterAlt}
                        className="w-full h-full object-cover" />

                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-body text-sm text-muted-foreground">Logro:</span>
                      <span className="font-cta font-bold text-sm text-primary">{currentTransformation.achievement}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-body text-sm text-muted-foreground">Tiempo:</span>
                      <span className="font-body text-sm text-white">{currentTransformation.timeframe}</span>
                    </div>
                  </div>

                  <div className="flex justify-center space-x-2 pt-4">
                    {transformations.map((_, index) =>
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-250 ${
                    index === currentIndex ? 'bg-primary w-8' : 'bg-white/20'}`
                    }
                    aria-label={`Ver transformación ${index + 1}`} />

                  )}
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </section>);

};

export default PhilosophySection;
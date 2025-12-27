'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    id: 'faq1',
    question: '¿Cuál es la diferencia entre tu metodología y un gimnasio tradicional?',
    answer: 'Mi sistema es integral y personalizado. No solo entreno tu cuerpo, sino que trabajo en conjunto con especialistas en nutrición, psicología deportiva y kinesiología. Cada programa se diseña específicamente para tus objetivos, no es una rutina genérica. Además, incluyo preparación mental y seguimiento nutricional, aspectos que los gimnasios tradicionales no abordan.',
  },
  {
    id: 'faq2',
    question: '¿Necesito experiencia previa en entrenamiento?',
    answer: 'No es necesario. Trabajo con personas de todos los niveles, desde principiantes absolutos hasta atletas de alto rendimiento. La evaluación inicial me permite diseñar un programa que se ajuste perfectamente a tu nivel actual y progrese de manera segura y efectiva.',
  },
  {
    id: 'faq3',
    question: '¿Cuánto tiempo toma ver resultados?',
    answer: 'Los primeros cambios físicos son visibles entre 4-6 semanas con adherencia constante. Sin embargo, las mejoras en energía, fuerza y bienestar general se notan desde las primeras 2 semanas. Los resultados dependen de tu compromiso, objetivos y punto de partida, pero mi metodología está diseñada para generar progreso medible y sostenible.',
  },
  {
    id: 'faq4',
    question: '¿Qué incluye el plan nutricional?',
    answer: 'El plan nutricional es diseñado por nuestro nutricionista deportivo según tus objetivos (pérdida de grasa, ganancia muscular, rendimiento deportivo). Incluye menús semanales, lista de compras, recetas, timing de comidas y suplementación estratégica si es necesaria. Se ajusta mensualmente según tu progreso.',
  },
  {
    id: 'faq5',
    question: '¿Puedo entrenar si tengo una lesión previa?',
    answer: 'Sí, de hecho es una de nuestras especialidades. Nuestra kinesióloga evalúa tu condición y diseñamos un programa que trabaje alrededor de la lesión, fortaleciendo áreas compensatorias y acelerando la recuperación. Muchos de nuestros atletas llegaron con lesiones y no solo se recuperaron, sino que mejoraron su rendimiento.',
  },
  {
    id: 'faq6',
    question: '¿Qué diferencia al plan Combinado/Híbrido?',
    answer: 'Es nuestro plan más completo y popular. Combina la atención personalizada de sesiones individuales (donde trabajo específicamente tus debilidades) con la motivación y energía de sesiones grupales. Obtienes lo mejor de ambos mundos: personalización + comunidad, resultando en mejor adherencia y resultados superiores.',
  },
];

const FAQSection = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-black to-card">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-headline font-black text-4xl sm:text-5xl lg:text-6xl text-white">
            Preguntas <span className="text-primary">Frecuentes</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Respuestas a las dudas más comunes sobre nuestra metodología
          </p>
        </div>

        {isHydrated && (
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-250"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-cta font-bold text-lg text-white pr-4">{faq.question}</span>
                  <Icon
                    name="ChevronDownIcon"
                    size={24}
                    className={`text-primary flex-shrink-0 transition-transform duration-250 ${
                      openFAQ === faq.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFAQ === faq.id && (
                  <div className="px-6 pb-6 animate-fade-in">
                    <p className="font-body text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <p className="font-body text-muted-foreground mb-4">¿Tienes más preguntas?</p>
          <button
            data-cta="faq-contact"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white font-cta font-bold text-lg rounded-lg transition-all duration-250 shadow-cta"
          >
            <Icon name="ChatBubbleLeftRightIcon" size={24} variant="solid" />
            <span>Contáctanos por WhatsApp</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
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
    question: '¿Qué diferencia esta metodología de un gimnasio tradicional?',
    answer:
      'No trabajo con rutinas genéricas ni entrenamientos improvisados. Cada persona pasa por una evaluación inicial y, a partir de ahí, se diseña un sistema de entrenamiento personalizado basado en ciencia del deporte, control de cargas y objetivos reales. Trabajo desde una visión integral del rendimiento: cuerpo, mente y planificación. No entreno personas en serie: entreno procesos.',
  },
  {
    id: 'faq2',
    question: '¿Cuánta experiencia tiene Victor Cuellar y en qué ámbitos ha trabajado?',
    answer:
      'Cuento con más de 20 años de experiencia profesional, trabajando de manera continua desde 2004 en fútbol formativo, profesional, alto rendimiento y gestión deportiva. He sido parte de procesos de ascenso y campeonatos nacionales e internacionales, incluyendo un ascenso a Primera RFEF en España. Actualmente me desempeño como Subsecretario de Deportes de la Provincia de Salta, liderando proyectos de desarrollo deportivo, evaluación con tecnología y alto rendimiento.',
  },
  {
    id: 'faq3',
    question: '¿Necesito experiencia previa o ser atleta para entrenar?',
    answer:
      'No. Trabajo con personas de todos los niveles: desde quienes recién empiezan hasta deportistas competitivos y de alto rendimiento. El entrenamiento se adapta a tu edad, historia, contexto y objetivo. El nivel no es un requisito; el compromiso sí.',
  },
  {
    id: 'faq4',
    question: '¿Cómo es la evaluación inicial y qué se analiza?',
    answer:
      'La evaluación inicial es un paso clave y tiene un costo adicional. Incluye una evaluación funcional y, según el caso, mediciones de fuerza, potencia, velocidad y control de carga utilizando tecnología (plataformas de fuerza, VBT, fotocélulas). Esto permite entrenar con datos reales y no con suposiciones.',
  },
  {
    id: 'faq5',
    question: '¿Puedo entrenar si tengo una lesión o vengo de una rehabilitación?',
    answer:
      'Sí. Trabajo en conjunto con profesionales (kinesiología y derivaciones cuando corresponde) para adaptar el entrenamiento, respetar la lesión, fortalecer zonas compensatorias y lograr una readaptación segura y progresiva. El objetivo no es solo volver a entrenar, sino volver mejor.',
  },
  {
    id: 'faq6',
    question: '¿Dónde entrenan, cuánto duran las clases y cómo me inscribo?',
    answer:
      'Las sesiones duran 60 minutos. Entrenamos en canchas de fútbol 5 del Club Central Norte (Av. Entre Ríos y Alte. Brown, Salta). Para comenzar, escribime por WhatsApp, consultá disponibilidad y completá la pre-inscripción. Los cupos son limitados para garantizar calidad y seguimiento real.',
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
            <span>Hablar con Victor</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
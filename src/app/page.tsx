import type { Metadata } from 'next';
import LandingPageInteractive from './landing-page/components/LandingPageInteractive';

export const metadata: Metadata = {
  title: 'Victor Cuellar | Preparación Física Aplicada al Rendimiento',
  description:
    'Entrenamiento personalizado enfocado en rendimiento: evaluación, planificación y seguimiento. Alto rendimiento, formación y salud integral. Cupos limitados. Contacto por WhatsApp.',

  openGraph: {
    title: 'Victor Cuellar | Preparación Física Aplicada al Rendimiento',
    description:
      'Entrenamiento personalizado enfocado en rendimiento: evaluación, planificación y seguimiento. Alto rendimiento, formación y salud integral.',
    url: 'https://victorcuellar.fit',
    siteName: 'Victor Cuellar',
    images: [
      {
        url: '/og-image-v2.png',
        width: 1200,
        height: 630,
        alt: 'Victor Cuellar – Preparación Física Aplicada al Rendimiento',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Victor Cuellar | Preparación Física Aplicada al Rendimiento',
    description:
      'Entrenamiento personalizado enfocado en rendimiento: evaluación, planificación y seguimiento.',
    images: ['/og-image-v2.png'],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué diferencia esta metodología de un gimnasio tradicional?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'No trabajo con rutinas genéricas ni entrenamientos improvisados. Cada persona pasa por una evaluación inicial y, a partir de ahí, se diseña un sistema de entrenamiento personalizado basado en ciencia del deporte, control de cargas y objetivos reales. Trabajo desde una visión integral del rendimiento: cuerpo, mente y planificación. No entreno personas en serie: entreno procesos.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánta experiencia tiene Victor Cuellar y en qué ámbitos ha trabajado?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Cuento con más de 20 años de experiencia profesional, trabajando de manera continua desde 2004 en fútbol formativo, profesional, alto rendimiento y gestión deportiva. He sido parte de procesos de ascenso y campeonatos nacionales e internacionales, incluyendo un ascenso a Primera RFEF en España. Actualmente me desempeño como Subsecretario de Deportes de la Provincia de Salta, liderando proyectos de desarrollo deportivo, evaluación con tecnología y alto rendimiento.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Necesito experiencia previa o ser atleta para entrenar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'No. Trabajo con personas de todos los niveles: desde quienes recién empiezan hasta deportistas competitivos y de alto rendimiento. El entrenamiento se adapta a tu edad, historia, contexto y objetivo. El nivel no es un requisito; el compromiso sí.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo es la evaluación inicial y qué se analiza?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'La evaluación inicial es un paso clave y tiene un costo adicional. Incluye una evaluación funcional y, según el caso, mediciones de fuerza, potencia, velocidad y control de carga utilizando tecnología (plataformas de fuerza, VBT, fotocélulas). Esto permite entrenar con datos reales y no con suposiciones.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo entrenar si tengo una lesión o vengo de una rehabilitación?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Sí. Trabajo en conjunto con profesionales para adaptar el entrenamiento, respetar la lesión, fortalecer zonas compensatorias y lograr una readaptación segura y progresiva. El objetivo no es solo volver a entrenar, sino volver mejor.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Dónde entrenan, cuánto duran las clases y cómo me inscribo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Las sesiones duran 60 minutos. Entrenamos en canchas de fútbol 5 del Club Central Norte (Av. Entre Ríos 1450, Salta). Para comenzar, escribime por WhatsApp, consultá disponibilidad y completá la pre-inscripción. Los cupos son limitados para garantizar calidad y seguimiento real.',
      },
    },
  ],
};

export default function Home() {
  return (
    <main>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <LandingPageInteractive />
    </main>
  );
}

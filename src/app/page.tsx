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
        url: '/og-image.png',
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
    images: ['/og-image.png'],
  },
};

export default function Home() {
  return (
    <main>
      <LandingPageInteractive />
    </main>
  );
}

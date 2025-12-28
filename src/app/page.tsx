import type { Metadata } from 'next';
import LandingPageInteractive from './landing-page/components/LandingPageInteractive';

export const metadata: Metadata = {
  title: 'Victor Cuellar | Preparación Física Aplicada al Rendimiento',
  description:
    'Entrenamiento personalizado enfocado en rendimiento: evaluación, planificación y seguimiento. Alto rendimiento, formación y salud integral. Cupos limitados. Contacto por WhatsApp.',
};

export default function Home() {
  return (
    <main>
      <LandingPageInteractive />
    </main>
  );
}

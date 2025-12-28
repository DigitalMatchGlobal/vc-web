import type { Metadata } from 'next';
import LandingPageInteractive from './components/LandingPageInteractive';

export const metadata: Metadata = {
  title: 'Victor Cuellar - Preparación Física Integral en Salta',
  description: 'Sistema integral de rendimiento deportivo con +25 años de experiencia. Entrenamiento personalizado, coaching mental y nutrición para atletas, adultos y niños en Salta, Argentina.'
};

export default function LandingPage() {
  return <LandingPageInteractive />;
}
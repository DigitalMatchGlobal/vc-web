'use client';

import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface ProofCard {
  id: string;
  icon: string;
  value: string;
  label: string;
  description: string;
}

const proofCards: ProofCard[] = [
  {
    id: 'experience',
    icon: 'TrophyIcon',
    value: '+20 Años',
    label: 'Trayectoria Profesional',
    description: 'Desde 2004 liderando procesos en fútbol profesional y alto rendimiento en Argentina y España.'
  },
  {
    id: 'education',
    icon: 'AcademicCapIcon',
    value: 'Formación Élite',
    label: 'Certificación Internacional',
    description: 'Prof. Universitario, EFAC, VBT y capacitación continua con referentes mundiales (EXOS, Boyle).'
  },
  {
    id: 'achievements',
    icon: 'StarIcon',
    value: 'Resultados',
    label: 'Ascensos y Campeonatos',
    description: 'Parte de procesos exitosos incluyendo el histórico ascenso a Primera RFEF con SD Tarazona.'
  },
  {
    id: 'management',
    icon: 'BuildingLibraryIcon',
    value: 'Gestión',
    label: 'Liderazgo Deportivo',
    description: 'Actual Subsecretario de Deportes de Salta, impulsando tecnología y desarrollo deportivo.'
  }
];

const AuthoritySection = () => {
  return (
    <section id="sobre-mi" className="relative py-24 bg-gradient-to-b from-black to-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-headline font-black text-4xl sm:text-5xl lg:text-6xl text-white">
            Autoridad <span className="text-primary">Comprobada</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            Una carrera dedicada a la excelencia, desde el campo de juego hasta la gestión deportiva de alto nivel.
          </p>
        </div>

        {/* GRID DE 4 TARJETAS SUPERIORES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {proofCards.map((card, index) => (
            <div
              key={card.id}
              className="group bg-card border border-white/10 rounded-lg p-8 hover:border-primary transition-all duration-250 hover:shadow-[0_0_30px_rgba(225,6,0,0.3)]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-250">
                  <Icon name={card.icon as any} size={32} className="text-primary" variant="solid" />
                </div>
                <div className="space-y-2">
                  <div className="font-headline font-black text-3xl text-primary">{card.value}</div>
                  <div className="font-cta font-bold text-lg text-white">{card.label}</div>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SECCIÓN INFERIOR: PERFIL DETALLADO */}
        <div className="mt-16 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            
            {/* COLUMNA IZQUIERDA
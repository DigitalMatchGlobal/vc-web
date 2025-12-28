'use client';

import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Service {
  id: string;
  title: string;
  categoryLabel: string;
  description: string;
  benefits: string[];
  testimonial: {
    name: string;
    role: string;
    quote: string;
    image: string;
    alt: string;
  };
  image: string;
  imageAlt: string;
  icon: string;
}

const services: Service[] = [
  {
    id: 'formacion',
    title: 'Formación y Desarrollo',
    categoryLabel: 'Iniciación Deportiva',
    description: 'Construcción de bases motoras sólidas, coordinación y técnica para futuros atletas.',
    benefits: [
      'Desarrollo de habilidades motoras básicas',
      'Prevención de lesiones desde temprana edad',
      'Construcción de disciplina y hábitos',
      'Preparación para la vida deportiva'
    ],
    testimonial: {
      name: 'María González',
      role: 'Madre de Tomás',
      quote: 'Mi hijo mejoró su coordinación y confianza. Ahora es titular en su equipo de fútbol.',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_10ca1ffd3-1763301127083.png",
      alt: 'Madre sonriendo orgullosa'
    },
    // FOTO 1: NIÑOS (formacion-ninos.jpg)
    image: "/assets/images/formacion-ninos.jpg",
    imageAlt: 'Grupo de niños entrenando fútbol en campo abierto con el entrenador Victor Cuellar',
    icon: 'AcademicCapIcon'
  },
  {
    id: 'salud',
    title: 'Fitness y Salud Integral',
    categoryLabel: 'Adultos & Calidad de Vida',
    description: 'Entrenamiento adaptado para recuperar vitalidad, fuerza y funcionalidad sin importar la edad.',
    benefits: [
      'Mejora de composición corporal y fuerza',
      'Movilidad y prevención de dolores',
      'Reducción de estrés y aumento de energía',
      'Longevidad y salud articular'
    ],
    testimonial: {
      name: 'Roberto Martínez',
      role: 'Alumno de Entrenamiento Personal',
      quote: 'Recuperé mi forma física y gané energía para mi día a día. El cambio fue total.',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_162cce8a5-1763296745331.png",
      alt: 'Hombre profesional sonriendo'
    },
    // FOTO 2: ADULTO MAYOR (salud-adultos.jpg)
    image: "/assets/images/salud-adultos.jpg",
    imageAlt: 'Adulto mayor realizando ejercicios de fuerza con kettlebell supervisado por el entrenador',
    icon: 'HeartIcon'
  },
  {
    id: 'rendimiento',
    title: 'Alto Rendimiento',
    categoryLabel: 'Tecnificación & Competencia',
    description: 'Preparación específica para atletas que buscan maximizar su potencial y ganar campeonatos.',
    benefits: [
      'Potencia, velocidad y explosividad',
      'Transferencia específica al deporte',
      'Preparación mental competitiva',
      'Optimización de la recuperación'
    ],
    testimonial: {
      name: 'Diego Romero',
      role: 'Boxeador Competitivo',
      quote: 'Gané mi primer campeonato provincial gracias al sistema integral de Victor.',
      image: "https://images.unsplash.com/photo-1606846633645-de485f56ef7e",
      alt: 'Boxeador con medalla'
    },
    // FOTO 3: BOXEADOR (alto-rendimiento.jpg)
    image: "/assets/images/alto-rendimiento.jpg",
    imageAlt: 'Boxeador profesional golpeando bolsa de entrenamiento con alta intensidad',
    icon: 'TrophyIcon'
  }
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="relative py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-headline font-black text-4xl sm:text-5xl lg:text-6xl text-white">
            Servicios <span className="text-primary">Especializados</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            Programas diseñados específicamente para cada etapa de desarrollo y nivel de exigencia
          </p>
        </div>

        <div className="space-y-12">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10 shadow-2xl">
                  <AppImage
                    src={service.image}
                    alt={service.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-16 h-16 bg-primary/90 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                      <Icon name={service.icon as any} size={32} className="text-white" variant="solid" />
                    </div>
                  </div>
                </div>
              </div>

              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="space-y-2">
                  <div className="font-accent text-sm text-primary uppercase tracking-wide font-bold">
                    {service.categoryLabel}
                  </div>
                  <h3 className="font-headline font-black text-3xl sm:text-4xl text-white">
                    {service.title}
                  </h3>
                  <p className="font-body text-lg text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-3">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <Icon name="CheckCircleIcon" size={20} className="text-primary flex-shrink-0 mt-1" variant="solid" />
                      <span className="font-body text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6 hover:border-primary/30 transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden border border-white/20">
                      <AppImage
                        src={service.testimonial.image}
                        alt={service.testimonial.alt}
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div className="flex-1">
                      <blockquote className="font-body text-white italic mb-2 text-sm leading-relaxed">
                        "{service.testimonial.quote}"
                      </blockquote>
                      <div>
                        <div className="font-cta font-bold text-sm text-primary">{service.testimonial.name}</div>
                        <div className="font-body text-xs text-muted-foreground">{service.testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
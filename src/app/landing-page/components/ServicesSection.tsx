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
    author: string;
    role: string;
    quote: string;
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
      author: 'Familia del Club',
      role: 'Programa de Iniciación',
      quote: 'Notamos una mejora increíble en la coordinación y la confianza dentro de la cancha en muy poco tiempo.'
    },
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
      author: 'Alumno VC',
      role: 'Entrenamiento Personalizado',
      quote: 'Recuperé mi forma física y gané energía para mi día a día. El enfoque en la salud es total.'
    },
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
      author: 'Atleta Competitivo',
      role: 'Preparación Física Pro',
      quote: 'La diferencia física en la competencia fue clave. Me sentí más fuerte y rápido que nunca.'
    },
    image: "/assets/images/alto-rendimiento.jpg",
    imageAlt: 'Boxeador profesional golpeando bolsa de entrenamiento con alta intensidad',
    icon: 'TrophyIcon'
  },
  // ✅ NUEVO SERVICIO: CORPORATIVO
  {
    id: 'corporativo',
    title: 'Bienestar Corporativo & In-Company',
    categoryLabel: 'Salud Laboral & Pausas Activas',
    description: 'Llevamos el sistema de entrenamiento a tu empresa. Programas de prevención de lesiones y pausas activas para equipos de alto rendimiento, desde oficinas hasta yacimientos mineros.',
    benefits: [
      'Prevención de lesiones laborales y ergonomía',
      'Pausas activas en planta u oficina',
      'Reducción de estrés y ausentismo',
      'Actividades de Team Building'
    ],
    testimonial: {
      author: 'Gerencia de RRHH',
      role: 'Sector Minería e Industria',
      quote: 'Implementar las pausas activas mejoró notablemente el clima laboral y la energía del equipo en planta.'
    },
    image: "/assets/images/bienestar-corporativo.jpg", // Asegúrate de guardar la foto con este nombre
    imageAlt: 'Equipo de trabajadores realizando ejercicios de estiramiento y pausa activa con Victor Cuellar',
    icon: 'BriefcaseIcon' // Usamos un maletín o edificio para representar empresas
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
                      {/* Si BriefcaseIcon no existe en tu set, cambiará a un default, pero suele estar */}
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

                {/* TARJETA DE RESEÑA */}
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6 hover:border-primary/30 transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                      <Icon name="StarIcon" size={24} className="text-primary" variant="solid" />
                    </div>
                    <div className="flex-1">
                      <blockquote className="font-body text-white italic mb-2 text-sm leading-relaxed">
                        "{service.testimonial.quote}"
                      </blockquote>
                      <div>
                        <div className="font-cta font-bold text-sm text-primary">{service.testimonial.author}</div>
                        <div className="font-body text-xs text-muted-foreground uppercase tracking-wide">{service.testimonial.role}</div>
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
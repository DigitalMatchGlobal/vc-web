'use client';

import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialization: string;
  credentials: string[];
  image: string;
  alt: string;
  icon: string;
}

const teamMembers: TeamMember[] = [
  // 1. VICTOR
  {
    id: 'victor',
    name: 'Victor Cuellar',
    role: 'Coordinador General',
    specialization: 'Dirección Técnica & Metodología',
    credentials: [
      '25+ años de experiencia',
      'Especialista en Alto Rendimiento',
      'Creador del Sistema VC'
    ],
    image: "/assets/images/victor-cuellar-team.jpg",
    alt: 'Victor Cuellar Coordinador General',
    icon: 'TrophyIcon' // 🏆 Liderazgo y Éxito
  },
  // 2. MARCELO
  {
    id: 'marcelo',
    name: 'Marcelo Bejarano',
    role: 'Entrenador & Coach',
    specialization: 'Arqueros & Coaching Deportivo',
    credentials: [
      'Entrenamiento específico de Arqueros',
      'Coaching y Liderazgo Deportivo',
      'Técnica Individual'
    ],
    image: "/assets/images/marcelo-bejarano.jpg",
    alt: 'Entrenador Marcelo Bejarano',
    icon: 'ShieldCheckIcon' // 🛡️ Defensa / Arqueros
  },
  // 3. AGUSTINA
  {
    id: 'agustina',
    name: 'Agustina Gutierrez',
    role: 'Profesora de Staff',
    specialization: 'Sala de Musculación & Salud',
    credentials: [
      'Supervisión y corrección técnica',
      'Seguimiento de rutinas',
      'Atención al alumno en sala'
    ],
    image: "/assets/images/agustina-gutierrez.jpg",
    alt: 'Profesora Agustina Gutierrez',
    icon: 'BoltIcon' // ⚡ Energía y Potencia (Reemplaza al corazón)
  },
  // 4. ENZO
  {
    id: 'enzo',
    name: 'Enzo Renfijes',
    role: 'Preparador Físico',
    specialization: 'Fuerza & Técnica en Campo',
    credentials: [
      'Transferencia de fuerza al juego',
      'Trabajos de coordinación',
      'Dinámica de campo con pelota'
    ],
    image: "/assets/images/enzo-renfijes.jpg",
    alt: 'Preparador Físico Enzo Renfijes',
    icon: 'ChartBarIcon' // 📈 Rendimiento y Mejora Física
  },
  // 5. FEDERICO
  {
    id: 'federico',
    name: 'Federico "Bocha" Rodriguez',
    role: 'Staff Técnico',
    specialization: 'Asistencia & Logística',
    credentials: [
      'Soporte en entrenamientos',
      'Coordinación de materiales',
      'Asistencia al cuerpo técnico'
    ],
    image: "/assets/images/federico-rodriguez.jpg",
    alt: 'Staff Federico Rodriguez',
    icon: 'ClipboardDocumentListIcon' // 📋 Organización y Planificación
  },
  // 6. CRISTINA
  {
    id: 'cristina',
    name: 'Cristina "Cris" Vera',
    role: 'Administración',
    specialization: 'Gestión & Atención al Alumno',
    credentials: [
      'Gestión de inscripciones y cupos',
      'Atención y dudas administrativas',
      'Coordinación de horarios'
    ],
    image: "/assets/images/cristina-admin.jpg",
    alt: 'Administradora Cristina',
    icon: 'ChatBubbleLeftRightIcon' // 💬 Atención y Comunicación
  }
];

const TeamSection = () => {
  return (
    <section id="equipo" className="relative py-24 bg-gradient-to-b from-card to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-headline font-black text-4xl sm:text-5xl lg:text-6xl text-white">
            Nuestro <span className="text-primary">Equipo</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            Profesionales apasionados trabajando en sincronía para potenciar tu rendimiento.
          </p>
        </div>

        {/* GRID ADAPTADO: 1 columna en móvil, 2 en tablet/pc */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden hover:border-primary transition-all duration-250 hover:shadow-[0_0_30px_rgba(225,6,0,0.3)]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col sm:flex-row h-full">
                
                {/* IMAGEN: Contenedor con Aspect Ratio fijo */}
                <div className="relative w-full sm:w-48 aspect-[3/4] sm:aspect-auto sm:h-auto flex-shrink-0 overflow-hidden">
                  <AppImage
                    src={member.image}
                    alt={member.alt}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-250" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 sm:opacity-100"></div>
                  
                  {/* Icono Flotante */}
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-primary/20 backdrop-blur-md rounded-full flex items-center justify-center border border-primary">
                      <Icon name={member.icon as any} size={24} className="text-primary" variant="solid" />
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 p-6 space-y-4 flex flex-col justify-center">
                  <div>
                    <h3 className="font-cta font-bold text-xl text-white mb-1">{member.name}</h3>
                    <div className="font-accent text-sm text-primary uppercase tracking-wide font-bold">{member.role}</div>
                    <div className="font-body text-sm text-muted-foreground mt-1">{member.specialization}</div>
                  </div>

                  <div className="space-y-2">
                    {member.credentials.map((credential, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <Icon name="CheckCircleIcon" size={16} className="text-primary flex-shrink-0 mt-1" variant="solid" />
                        <span className="font-body text-sm text-white leading-snug">{credential}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mensaje Final */}
        <div className="mt-12 bg-primary/10 border border-primary/20 rounded-lg p-8 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <Icon name="UsersIcon" size={48} className="text-primary mx-auto" variant="solid" />
            <h3 className="font-cta font-bold text-2xl text-white">Trabajo Interdisciplinario</h3>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Desde la administración hasta el campo de juego, cada miembro del Staff VC tiene un solo objetivo: brindarte la mejor experiencia de entrenamiento en Salta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
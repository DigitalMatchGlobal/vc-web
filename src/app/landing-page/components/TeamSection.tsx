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
{
  id: 'technical',
  name: 'Víctor Cuéllar',
  role: 'Dirección Técnica',
  specialization: 'Preparación Física & Metodología',
  credentials: [
  '25+ años de experiencia',
  'Especialista en alto rendimiento',
  'Metodología científica validada'],

  image: "https://img.rocket.new/generatedImages/rocket_gen_img_164e47c23-1766527579610.png",
  alt: 'Professional male fitness director in black athletic wear with confident expression in modern training facility',
  icon: 'UserCircleIcon'
},
{
  id: 'mental',
  name: 'Dra. Patricia Morales',
  role: 'Coaching Mental',
  specialization: 'Psicología Deportiva',
  credentials: [
  'Psicóloga deportiva certificada',
  'Especialista en rendimiento mental',
  'Técnicas de visualización y foco'],

  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d2544962-1763300714721.png",
  alt: 'Professional female psychologist in business attire with warm smile in consultation office',
  icon: 'SparklesIcon'
},
{
  id: 'nutrition',
  name: 'Lic. Marcos Díaz',
  role: 'Nutrición Deportiva',
  specialization: 'Planificación Nutricional',
  credentials: [
  'Nutricionista deportivo',
  'Planes personalizados por objetivo',
  'Suplementación estratégica'],

  image: "https://images.unsplash.com/photo-1675270714610-11a5cadcc7b3",
  alt: 'Male nutritionist in white coat reviewing dietary plans in modern consultation room',
  icon: 'BeakerIcon'
},
{
  id: 'kinesiology',
  name: 'Lic. Laura Sánchez',
  role: 'Kinesiología',
  specialization: 'Prevención & Recuperación',
  credentials: [
  'Kinesióloga especializada',
  'Prevención de lesiones',
  'Rehabilitación funcional'],

  image: "https://img.rocket.new/generatedImages/rocket_gen_img_16d985030-1766759072489.png",
  alt: 'Female kinesiologist in medical scrubs assisting patient with physical therapy in rehabilitation center',
  icon: 'HeartIcon'
}];


const TeamSection = () => {
  return (
    <section id="equipo" className="relative py-24 bg-gradient-to-b from-card to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-headline font-black text-4xl sm:text-5xl lg:text-6xl text-white">
            Sistema <span className="text-primary">Multidisciplinario</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            Un equipo de especialistas trabajando en conjunto para maximizar tu rendimiento desde todos los ángulos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {teamMembers.map((member, index) =>
          <div
            key={member.id}
            className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden hover:border-primary transition-all duration-250 hover:shadow-[0_0_30px_rgba(225,6,0,0.3)]"
            style={{ animationDelay: `${index * 100}ms` }}>

              <div className="flex flex-col sm:flex-row">
                <div className="relative w-full sm:w-48 h-64 sm:h-auto flex-shrink-0 overflow-hidden">
                  <AppImage
                  src={member.image}
                  alt={member.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-250" />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-primary/20 backdrop-blur-md rounded-full flex items-center justify-center border border-primary">
                      <Icon name={member.icon as any} size={24} className="text-primary" variant="solid" />
                    </div>
                  </div>
                </div>

                <div className="flex-1 p-6 space-y-4">
                  <div>
                    <h3 className="font-cta font-bold text-xl text-white mb-1">{member.name}</h3>
                    <div className="font-accent text-sm text-primary uppercase tracking-wide">{member.role}</div>
                    <div className="font-body text-sm text-muted-foreground mt-1">{member.specialization}</div>
                  </div>

                  <div className="space-y-2">
                    {member.credentials.map((credential, idx) =>
                  <div key={idx} className="flex items-start space-x-2">
                        <Icon name="CheckCircleIcon" size={16} className="text-primary flex-shrink-0 mt-1" variant="solid" />
                        <span className="font-body text-sm text-white">{credential}</span>
                      </div>
                  )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-12 bg-primary/10 border border-primary/20 rounded-lg p-8 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <Icon name="UsersIcon" size={48} className="text-primary mx-auto" variant="solid" />
            <h3 className="font-cta font-bold text-2xl text-white">Enfoque Integral</h3>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Nuestro equipo multidisciplinario trabaja en sincronía para abordar cada aspecto de tu rendimiento: físico, mental, nutricional y preventivo. Esta colaboración garantiza resultados superiores y sostenibles.
            </p>
          </div>
        </div>
      </div>
    </section>);

};

export default TeamSection;
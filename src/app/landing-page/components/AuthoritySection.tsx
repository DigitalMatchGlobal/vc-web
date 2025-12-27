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
  value: '+25 Años',
  label: 'Experiencia Comprobada',
  description: 'Más de dos décadas perfeccionando metodologías de entrenamiento de élite'
},
{
  id: 'athletes',
  icon: 'UserGroupIcon',
  value: '500+',
  label: 'Atletas Transformados',
  description: 'Desde niños de 8 años hasta atletas profesionales de alto rendimiento'
},
{
  id: 'success',
  icon: 'ChartBarIcon',
  value: '95%',
  label: 'Tasa de Éxito',
  description: 'Atletas que alcanzan y superan sus objetivos de rendimiento'
},
{
  id: 'methodology',
  icon: 'AcademicCapIcon',
  value: 'Validado',
  label: 'Metodología Científica',
  description: 'Sistema respaldado por ciencia del deporte y resultados medibles'
}];


const AuthoritySection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-black to-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-headline font-black text-4xl sm:text-5xl lg:text-6xl text-white">
            Autoridad <span className="text-primary">Comprobada</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            Números que respaldan un sistema de entrenamiento que transforma vidas y construye campeones
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {proofCards.map((card, index) =>
          <div
            key={card.id}
            className="group bg-card border border-white/10 rounded-lg p-8 hover:border-primary transition-all duration-250 hover:shadow-[0_0_30px_rgba(225,6,0,0.3)]"
            style={{ animationDelay: `${index * 100}ms` }}>

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
          )}
        </div>

        <div className="mt-16 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary">
                <AppImage
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_164e47c23-1766527579610.png"
                  alt="Professional male fitness coach in black athletic wear with confident expression in modern training facility"
                  className="w-full h-full object-cover" />

              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <blockquote className="font-body text-xl text-white italic leading-relaxed">
                "No entreno cuerpos, construyo sistemas de rendimiento. Cada atleta es único, y mi metodología se adapta a sus necesidades específicas para maximizar su potencial."
              </blockquote>
              <div className="mt-4">
                <div className="font-cta font-bold text-lg text-primary">Victor Cuellar</div>
                <div className="font-body text-sm text-muted-foreground">Director Técnico & Preparador Físico</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default AuthoritySection;
'use client';

import { useState, useEffect } from 'react';
// import AppImage from '@/components/ui/AppImage'; // Comentado ya que solo se usaba en testimonios
import Icon from '@/components/ui/AppIcon';

/* // SECCIÓN DE TESTIMONIOS COMENTADA
interface VideoTestimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  thumbnail: string;
  thumbnailAlt: string;
  linkedIn?: string;
}

const videoTestimonials: VideoTestimonial[] = [
{
  id: 'video1',
  name: 'Lucas Fernández',
  role: 'Futbolista Profesional',
  quote: 'El entrenamiento mental me dio la confianza para rendir bajo presión en momentos decisivos.',
  thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_15f406e26-1763293280165.png",
  thumbnailAlt: 'Professional male soccer player in team jersey with confident expression on stadium field',
  linkedIn: 'https://linkedin.com'
},
{
  id: 'video2',
  name: 'Martín Gómez',
  role: 'Boxeador Amateur',
  quote: 'Aprendí a controlar mis emociones y mantener el foco en el ring. Eso marcó la diferencia.',
  thumbnail: "https://images.unsplash.com/photo-1575800542980-4753fe7fd72e",
  thumbnailAlt: 'Male boxer in red gloves with determined expression during training session in boxing gym',
  linkedIn: 'https://linkedin.com'
}];
*/

const MindsetSection = () => {
  // const [isHydrated, setIsHydrated] = useState(false); // Ya no es necesario si quitamos la parte dinámica
  // const [activeVideo, setActiveVideo] = useState<string | null>(null);

  /*
  useEffect(() => {
    setIsHydrated(true);
  }, []);
  */

  return (
    <section className="relative py-24 bg-gradient-to-b from-card to-black overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(225,6,0,0.3),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full border-2 border-primary">
              <Icon name="SparklesIcon" size={40} className="text-primary" variant="solid" />
            </div>

            <h2 className="font-headline font-black text-4xl sm:text-5xl lg:text-6xl text-white">
              Mentalidad de <span className="text-primary">Campeón</span>
            </h2>

            <p className="font-body text-xl text-white leading-relaxed">
              El rendimiento físico es solo la mitad de la ecuación. La fortaleza mental determina quién gana cuando las capacidades físicas son iguales.
            </p>
          </div>

          <div className="bg-primary/10 border-l-4 border-primary rounded-lg p-8">
            <blockquote className="font-body text-2xl text-white italic leading-relaxed">
              "Un cuerpo fuerte sin una mente disciplinada es como un auto de carreras sin piloto. El entrenamiento mental no es opcional, es fundamental."
            </blockquote>
            <div className="mt-4 text-right">
              <div className="font-cta font-bold text-lg text-primary">Victor Cuellar</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6 space-y-4 hover:border-primary transition-all duration-250">
              <Icon name="BoltIcon" size={32} className="text-primary" variant="solid" />
              <h3 className="font-cta font-bold text-xl text-white">Foco Bajo Presión</h3>
              <p className="font-body text-sm text-muted-foreground">
                Técnicas para mantener la concentración en momentos críticos de competencia
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6 space-y-4 hover:border-primary transition-all duration-250">
              <Icon name="FireIcon" size={32} className="text-primary" variant="solid" />
              <h3 className="font-cta font-bold text-xl text-white">Resiliencia Mental</h3>
              <p className="font-body text-sm text-muted-foreground">
                Desarrollo de fortaleza psicológica para superar obstáculos y fracasos
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6 space-y-4 hover:border-primary transition-all duration-250">
              <Icon name="EyeIcon" size={32} className="text-primary" variant="solid" />
              <h3 className="font-cta font-bold text-xl text-white">Visualización</h3>
              <p className="font-body text-sm text-muted-foreground">
                Técnicas de visualización para mejorar rendimiento y confianza
              </p>
            </div>
          </div>

          {/* // SECCIÓN DE TESTIMONIOS EN VIDEO OCULTA 
          {isHydrated &&
          <div className="space-y-6">
              <h3 className="font-headline font-black text-3xl text-white">Testimonios en Video</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {videoTestimonials.map((video) =>
              <div
                key={video.id}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden hover:border-primary transition-all duration-250">

                    <div className="relative aspect-video cursor-pointer group" onClick={() => setActiveVideo(video.id)}>
                      <AppImage
                    src={video.thumbnail}
                    alt={video.thumbnailAlt}
                    className="w-full h-full object-cover" />

                      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-250"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-primary/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-250">
                          <Icon name="PlayIcon" size={32} className="text-white ml-1" variant="solid" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6 space-y-3">
                      <blockquote className="font-body text-white italic">"{video.quote}"</blockquote>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-cta font-bold text-sm text-primary">{video.name}</div>
                          <div className="font-body text-xs text-muted-foreground">{video.role}</div>
                        </div>
                        {video.linkedIn &&
                    <a
                      href={video.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors duration-250"
                      aria-label={`Ver perfil de LinkedIn de ${video.name}`}>

                            <Icon name="CheckBadgeIcon" size={24} variant="solid" />
                          </a>
                    }
                      </div>
                    </div>
                  </div>
              )}
              </div>
            </div>
          } 
          */}
        </div>
      </div>
    </section>
  );
};

export default MindsetSection;
'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Schedule {
  day: string;
  slots: string[];
}

const schedules: Schedule[] = [
  { day: 'Lunes', slots: ['08:00 - 12:00', '15:00 - 21:00'] },
  { day: 'Martes', slots: ['08:00 - 12:00', '15:00 - 21:00'] },
  { day: 'Miércoles', slots: ['08:00 - 12:00', '15:00 - 21:00'] },
  { day: 'Jueves', slots: ['08:00 - 12:00', '15:00 - 21:00'] },
  { day: 'Viernes', slots: ['08:00 - 12:00', '15:00 - 21:00'] },
];

const LocationSection = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // ✅ Coordenadas exactas según el link proporcionado
  // https://www.google.com/maps/place/24%C2%B046'48.7%22S+65%C2%B025'17.9%22W/@-24.780187,-65.42163,17z
const latitude = -24.7802736;
const longitude = -65.4217171;


  // ✅ URLs de mapas (embed + abrir en Maps)
  const mapsEmbedUrl = `https://www.google.com/maps?output=embed&q=${latitude},${longitude}&z=17`;
const mapsOpenUrl =
  'https://www.google.com/maps/place/Av.+Entre+R%C3%ADos+1450,+A4400BZP+Salta,+Argentina/@-24.7800137,-65.4222145,20z/data=!4m6!3m5!1s0x941bc3c9fc63c7db:0xbf78436d4614f6f2!8m2!3d-24.7802736!4d-65.4217171!16s%2Fg%2F11fm6z6bbv?entry=ttu';


  return (
    <section id="ubicacion" className="relative py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-headline font-black text-4xl sm:text-5xl lg:text-6xl text-white">
            Ubicación & <span className="text-primary">Horarios</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            Entrenamientos en Salta (Club Central Norte – canchas de fútbol 5)
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Info */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-8 space-y-6">
              {/* Dirección */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="MapPinIcon" size={24} className="text-primary" variant="solid" />
                </div>
                <div>
                  <h3 className="font-cta font-bold text-xl text-white mb-2">Dirección</h3>
                  <p className="font-body text-muted-foreground">
                    Av. Entre Ríos y Alte. Brown
                    <br />
                    Club Central Norte – canchas de fútbol 5
                    <br />
                    Salta, Salta, Argentina (4400)
                  </p>
                </div>
              </div>

              {/* Contacto (sin datos inventados) */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="PhoneIcon" size={24} className="text-primary" variant="solid" />
                </div>
                <div>
                  <h3 className="font-cta font-bold text-xl text-white mb-2">Contacto</h3>
                  <p className="font-body text-muted-foreground">
                    WhatsApp: a confirmar
                    <br />
                    Email: info@victorcuellar.fit
                  </p>
                </div>
              </div>

              {/* Horarios */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="ClockIcon" size={24} className="text-primary" variant="solid" />
                </div>
                <div className="flex-1">
                  <h3 className="font-cta font-bold text-xl text-white mb-4">Horarios</h3>
                  <div className="space-y-3">
                    {schedules.map((schedule) => (
                      <div key={schedule.day} className="flex items-center justify-between">
                        <span className="font-body text-sm text-white">{schedule.day}</span>
                        <div className="flex flex-wrap gap-2 justify-end">
                          {schedule.slots.map((slot, idx) => (
                            <span
                              key={idx}
                              className="font-body text-xs text-muted-foreground bg-white/5 px-2 py-1 rounded"
                            >
                              {slot}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA Cómo llegar */}
                  <div className="mt-6">
                    <a
                      href={mapsOpenUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full flex items-center justify-center space-x-3 px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-cta font-bold rounded-lg transition-all duration-250 border border-white/10"
                    >
                      <Icon name="MapPinIcon" size={22} variant="solid" />
                      <span>Cómo llegar</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA WhatsApp (solo si está hidratado, mantiene tu lógica actual) */}
{isHydrated && (
  <a
    href={PRE_REGISTER_URL}
    target="_blank"
    rel="noopener noreferrer"
    data-cta="location-preregister"
    className="w-full flex items-center justify-center space-x-3 px-8 py-4 bg-primary hover:bg-primary/90 text-white font-cta font-bold text-lg rounded-lg transition-all duration-300 shadow-cta focus:outline-none focus:ring-4 focus:ring-primary/40 hover:scale-[1.02]"
  >
    <Icon name="ChatBubbleLeftRightIcon" size={24} variant="solid" />
    <span>Pre-Inscripción Gratuita</span>
  </a>
)}
          </div>

          {/* Mapa */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden">
            <div className="aspect-[4/3] w-full h-full">
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                title="Ubicación Victor Cuellar"
                referrerPolicy="no-referrer-when-downgrade"
                src={mapsEmbedUrl}
                className="border-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;

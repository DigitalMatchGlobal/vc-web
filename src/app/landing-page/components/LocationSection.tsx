'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Schedule {
  day: string;
  slots: string[];
}

const PRE_REGISTER_URL = 'https://forms.gle/qtYAkNHNR8X5rrSx9';

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

  // Coordenadas del Club Central Norte
  const latitude = -24.7802736;
  const longitude = -65.4217171;

  // URLs corregidas para Google Maps
  const mapsEmbedUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&hl=es&z=17&output=embed`;
  const mapsOpenUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

  const handleWhatsAppClick = () => {
    const phoneNumber = '5493876856439';
    const message = encodeURIComponent(
      'Hola, estoy interesado en conocer más sobre el sistema de preparación física de Victor Cuellar.'
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

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
                    Av. Entre Ríos 1450
                    <br />
                    Club Central Norte – canchas de fútbol 5
                    <br />
                    Salta, Salta, Argentina (4400)
                  </p>
                </div>
              </div>

              {/* Contacto con WhatsApp Link */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="PhoneIcon" size={24} className="text-primary" variant="solid" />
                </div>
                <div>
                  <h3 className="font-cta font-bold text-xl text-white mb-2">Contacto</h3>
                  <div className="font-body text-muted-foreground space-y-1">
                    <button 
                      onClick={handleWhatsAppClick}
                      className="text-left hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      <span>WhatsApp: +54 9 3876 85-6439</span>
                      <Icon name="ChatBubbleLeftRightIcon" size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                    <p>Email: info@victorcuellar.fit</p>
                  </div>
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

            {/* CTA Pre-Inscripción */}
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
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden h-full min-h-[400px]">
            <iframe
              width="100%"
              height="100%"
              loading="lazy"
              title="Ubicación Victor Cuellar - Club Central Norte"
              referrerPolicy="no-referrer-when-downgrade"
              src={mapsEmbedUrl}
              className="border-0 w-full h-full"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
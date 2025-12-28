'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Schedule {
  day: string;
  slots: string[];
}

const schedules: Schedule[] = [
  { day: 'Lunes', slots: ['06:00 - 08:00', '18:00 - 21:00'] },
  { day: 'Martes', slots: ['06:00 - 08:00', '18:00 - 21:00'] },
  { day: 'Miércoles', slots: ['06:00 - 08:00', '18:00 - 21:00'] },
  { day: 'Jueves', slots: ['06:00 - 08:00', '18:00 - 21:00'] },
  { day: 'Viernes', slots: ['06:00 - 08:00', '18:00 - 21:00'] },
  { day: 'Sábado', slots: ['08:00 - 12:00'] },
];

const LocationSection = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const latitude = -24.7859;
  const longitude = -65.4117;

  return (
    // CAMBIO: id="ubicacion"
    <section id="ubicacion" className="relative py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-headline font-black text-4xl sm:text-5xl lg:text-6xl text-white">
            Ubicación & <span className="text-primary">Horarios</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            Visítanos en nuestras instalaciones de entrenamiento en Salta
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-8 space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="MapPinIcon" size={24} className="text-primary" variant="solid" />
                </div>
                <div>
                  <h3 className="font-cta font-bold text-xl text-white mb-2">Dirección</h3>
                  <p className="font-body text-muted-foreground">
                    Av. Entre Ríos 1234<br />
                    Salta Capital, Salta<br />
                    Argentina (4400)
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="PhoneIcon" size={24} className="text-primary" variant="solid" />
                </div>
                <div>
                  <h3 className="font-cta font-bold text-xl text-white mb-2">Contacto</h3>
                  <p className="font-body text-muted-foreground">
                    WhatsApp: +54 9 387 600-0000<br />
                    Email: info@victorcuellar.com
                  </p>
                </div>
              </div>

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
                            <span key={idx} className="font-body text-xs text-muted-foreground bg-white/5 px-2 py-1 rounded">
                              {slot}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {isHydrated && (
              <button
                data-cta="location-whatsapp"
                className="w-full flex items-center justify-center space-x-3 px-8 py-4 bg-primary hover:bg-primary/90 text-white font-cta font-bold text-lg rounded-lg transition-all duration-250 shadow-cta"
              >
                <Icon name="ChatBubbleLeftRightIcon" size={24} variant="solid" />
                <span>Consultar Disponibilidad</span>
              </button>
            )}
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden">
            <div className="aspect-[4/3] w-full h-full">
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                title="Ubicación Victor Cuellar"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`}
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
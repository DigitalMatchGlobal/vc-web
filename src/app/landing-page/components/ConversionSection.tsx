'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FormData {
  name: string;
  phone: string;
  email: string;
  interest: string;
  message: string;
}

const ConversionSection = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    interest: '',
    message: '',
  });
  const [slotsRemaining, setSlotsRemaining] = useState(3);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = '5493876000000';
    const message = encodeURIComponent(
      `Hola, soy ${formData.name}. Estoy interesado en ${formData.interest}. ${formData.message}`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleWhatsAppDirect = () => {
    const phoneNumber = '5493876000000';
    const message = encodeURIComponent('Hola, quiero agendar mi evaluación gratuita esta semana.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-card to-black">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(225,6,0,0.4),transparent_70%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-primary/20 border border-primary rounded-full px-6 py-3">
              <Icon name="ClockIcon" size={20} className="text-primary" variant="solid" />
              <span className="font-cta font-bold text-sm text-primary uppercase tracking-wide">
                Solo {slotsRemaining} Cupos Disponibles Esta Semana
              </span>
            </div>

            <h2 className="font-headline font-black text-4xl sm:text-5xl lg:text-6xl text-white">
              Evaluación <span className="text-primary">Gratuita</span>
            </h2>

            <p className="font-body text-xl text-muted-foreground leading-relaxed">
              Agenda tu evaluación sin compromiso y descubre cómo nuestro sistema puede transformar tu rendimiento
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-8">
              <h3 className="font-cta font-bold text-2xl text-white mb-6">Contacto Rápido</h3>

              {isHydrated && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block font-body text-sm text-muted-foreground mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-body focus:outline-none focus:border-primary transition-colors duration-250"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block font-body text-sm text-muted-foreground mb-2">
                      Teléfono/WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-body focus:outline-none focus:border-primary transition-colors duration-250"
                      placeholder="+54 9 387 600-0000"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block font-body text-sm text-muted-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-body focus:outline-none focus:border-primary transition-colors duration-250"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="interest" className="block font-body text-sm text-muted-foreground mb-2">
                      Interés Principal *
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-body focus:outline-none focus:border-primary transition-colors duration-250"
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="Entrenamiento Individual">Entrenamiento Individual</option>
                      <option value="Plan Combinado/Híbrido">Plan Combinado/Híbrido</option>
                      <option value="Entrenamiento Grupal">Entrenamiento Grupal</option>
                      <option value="Niños 8+">Programa para Niños 8+</option>
                      <option value="Atletas Competitivos">Preparación para Atletas</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-body text-sm text-muted-foreground mb-2">
                      Mensaje (Opcional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-body focus:outline-none focus:border-primary transition-colors duration-250 resize-none"
                      placeholder="Cuéntanos sobre tus objetivos..."
                    />
                  </div>

                  <button
                    type="submit"
                    data-cta="conversion-form"
                    className="w-full flex items-center justify-center space-x-3 px-8 py-4 bg-primary hover:bg-primary/90 text-white font-cta font-bold text-lg rounded-lg transition-all duration-250 shadow-cta"
                  >
                    <Icon name="PaperAirplaneIcon" size={24} variant="solid" />
                    <span>Enviar Consulta</span>
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-6">
              <div className="bg-primary/10 border border-primary rounded-lg p-8 space-y-6">
                <div className="text-center">
                  <Icon name="CheckBadgeIcon" size={48} className="text-primary mx-auto mb-4" variant="solid" />
                  <h3 className="font-cta font-bold text-2xl text-white mb-2">Evaluación Incluye</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircleIcon" size={20} className="text-primary flex-shrink-0 mt-1" variant="solid" />
                    <span className="font-body text-white">Análisis completo de composición corporal</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircleIcon" size={20} className="text-primary flex-shrink-0 mt-1" variant="solid" />
                    <span className="font-body text-white">Evaluación de capacidades físicas actuales</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircleIcon" size={20} className="text-primary flex-shrink-0 mt-1" variant="solid" />
                    <span className="font-body text-white">Diseño preliminar de programa personalizado</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircleIcon" size={20} className="text-primary flex-shrink-0 mt-1" variant="solid" />
                    <span className="font-body text-white">Consulta nutricional básica</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircleIcon" size={20} className="text-primary flex-shrink-0 mt-1" variant="solid" />
                    <span className="font-body text-white">Sesión de prueba sin compromiso</span>
                  </div>
                </div>
              </div>

              {isHydrated && (
                <button
                  onClick={handleWhatsAppDirect}
                  data-cta="conversion-whatsapp-direct"
                  className="w-full flex items-center justify-center space-x-3 px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-cta font-bold text-lg rounded-lg border border-white/20 hover:border-primary transition-all duration-250"
                >
                  <Icon name="ChatBubbleLeftRightIcon" size={24} variant="solid" />
                  <span>WhatsApp Directo</span>
                </button>
              )}

              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <Icon name="ShieldCheckIcon" size={32} className="text-primary flex-shrink-0" variant="solid" />
                  <div>
                    <h4 className="font-cta font-bold text-lg text-white mb-2">Garantía de Satisfacción</h4>
                    <p className="font-body text-sm text-muted-foreground">
                      Si después de la evaluación decides que nuestro sistema no es para ti, no hay ningún compromiso. Tu satisfacción es nuestra prioridad.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConversionSection;
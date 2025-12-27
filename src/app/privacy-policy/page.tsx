    'use client';

    import Link from 'next/link';
    import Icon from '@/components/ui/AppIcon';

    export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-black text-gray-300 font-body py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
            {/* Header con botón de volver */}
            <div className="flex items-center justify-between border-b border-white/10 pb-6">
            <h1 className="font-headline font-black text-3xl sm:text-4xl text-white">
                Política de <span className="text-primary">Privacidad</span>
            </h1>
            <Link href="/" className="flex items-center text-sm text-primary hover:text-white transition-colors">
                <Icon name="ArrowLeftIcon" size={16} className="mr-2" variant="solid" />
                Volver al Inicio
            </Link>
            </div>

            <div className="space-y-6 text-sm sm:text-base leading-relaxed">
            <p>Última actualización: {new Date().getFullYear()}</p>

            <section className="space-y-3">
                <h2 className="font-headline font-bold text-xl text-white">1. Introducción</h2>
                <p>
                En Victor Cuellar ("nosotros", "nuestro"), respetamos su privacidad y nos comprometemos a proteger sus datos personales. Esta política de privacidad explica cómo recopilamos, usamos y protegemos su información cuando visita nuestro sitio web o utiliza nuestros servicios de entrenamiento.
                </p>
            </section>

            <section className="space-y-3">
                <h2 className="font-headline font-bold text-xl text-white">2. Información que Recopilamos</h2>
                <p>Podemos recopilar los siguientes tipos de información:</p>
                <ul className="list-disc pl-5 space-y-2 marker:text-primary">
                <li><strong>Información Personal:</strong> Nombre, dirección de correo electrónico, número de teléfono y datos de contacto proporcionados voluntariamente en nuestros formularios.</li>
                <li><strong>Datos de Salud y Fitness:</strong> Información sobre su condición física, historial de lesiones y objetivos de entrenamiento necesaria para diseñar sus planes (solo si contrata nuestros servicios).</li>
                <li><strong>Datos de Navegación:</strong> Dirección IP, tipo de navegador y patrones de uso del sitio web a través de cookies para mejorar su experiencia.</li>
                </ul>
            </section>

            <section className="space-y-3">
                <h2 className="font-headline font-bold text-xl text-white">3. Uso de la Información</h2>
                <p>Utilizamos su información para:</p>
                <ul className="list-disc pl-5 space-y-2 marker:text-primary">
                <li>Proporcionar y gestionar sus planes de entrenamiento personalizados.</li>
                <li>Comunicarnos con usted vía WhatsApp o correo electrónico sobre sus consultas o evaluaciones.</li>
                <li>Mejorar nuestro sitio web y servicios.</li>
                <li>Cumplir con obligaciones legales.</li>
                </ul>
            </section>

            <section className="space-y-3">
                <h2 className="font-headline font-bold text-xl text-white">4. Protección de Datos</h2>
                <p>
                Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos personales contra el acceso no autorizado, la pérdida o la alteración. Sin embargo, ninguna transmisión por Internet es 100% segura.
                </p>
            </section>

            <section className="space-y-3">
                <h2 className="font-headline font-bold text-xl text-white">5. Compartir Información</h2>
                <p>
                No vendemos ni alquilamos sus datos personales a terceros. Solo compartimos información con proveedores de servicios de confianza que nos ayudan a operar nuestro negocio (por ejemplo, plataformas de alojamiento web), bajo estrictos acuerdos de confidencialidad.
                </p>
            </section>

            <section className="space-y-3">
                <h2 className="font-headline font-bold text-xl text-white">6. Contacto</h2>
                <p>
                Si tiene preguntas sobre esta política, puede contactarnos a través de nuestro botón de WhatsApp o enviando un mensaje directo.
                </p>
            </section>
            </div>
        </div>
        </div>
    );
    }
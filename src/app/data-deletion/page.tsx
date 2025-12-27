    'use client';

    import Link from 'next/link';
    import Icon from '@/components/ui/AppIcon';

    export default function DataDeletion() {
    return (
        <div className="min-h-screen bg-black text-gray-300 font-body py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex items-center justify-between border-b border-white/10 pb-6">
            <h1 className="font-headline font-black text-3xl sm:text-4xl text-white">
                Eliminación de <span className="text-primary">Datos</span>
            </h1>
            <Link href="/" className="flex items-center text-sm text-primary hover:text-white transition-colors">
                <Icon name="ArrowLeftIcon" size={16} className="mr-2" variant="solid" />
                Volver al Inicio
            </Link>
            </div>

            <div className="space-y-6 text-sm sm:text-base leading-relaxed">
            <section className="space-y-3">
                <h2 className="font-headline font-bold text-xl text-white">Instrucciones para la Eliminación de Datos</h2>
                <p>
                De acuerdo con las normas de privacidad y los requisitos de plataformas como Facebook/Meta, usted tiene derecho a solicitar la eliminación de sus datos personales almacenados en nuestros sistemas.
                </p>
            </section>

            <section className="space-y-3">
                <h2 className="font-headline font-bold text-xl text-white">¿Cómo solicitar la eliminación?</h2>
                <p>
                Si desea que eliminemos su información personal de nuestra base de datos, por favor siga uno de los siguientes pasos:
                </p>
                
                <div className="grid gap-4 mt-4">
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                    <h3 className="font-bold text-white mb-2">Opción 1: Correo Electrónico</h3>
                    <p>Envíe un correo electrónico a su contacto habitual o a través de nuestros canales oficiales con el asunto: <strong>"Solicitud de Eliminación de Datos - [Su Nombre]"</strong>.</p>
                </div>

                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                    <h3 className="font-bold text-white mb-2">Opción 2: WhatsApp</h3>
                    <p>Contáctenos directamente a través de nuestro botón de WhatsApp indicando que desea eliminar sus datos registrados.</p>
                </div>
                </div>
            </section>

            <section className="space-y-3 pt-4">
                <p className="text-sm text-gray-400">
                Una vez recibida la solicitud, procederemos a eliminar sus datos personales (nombre, teléfono, historial de medidas) en un plazo no mayor a 30 días, salvo aquellos que estemos obligados a conservar por razones legales o fiscales.
                </p>
            </section>
            </div>
        </div>
        </div>
    );
    }
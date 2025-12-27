    'use client';

    import Link from 'next/link';
    import Icon from '@/components/ui/AppIcon';

    export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-black text-gray-300 font-body py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex items-center justify-between border-b border-white/10 pb-6">
            <h1 className="font-headline font-black text-3xl sm:text-4xl text-white">
                Términos y <span className="text-primary">Condiciones</span>
            </h1>
            <Link href="/" className="flex items-center text-sm text-primary hover:text-white transition-colors">
                <Icon name="ArrowLeftIcon" size={16} className="mr-2" variant="solid" />
                Volver al Inicio
            </Link>
            </div>

            <div className="space-y-6 text-sm sm:text-base leading-relaxed">
            <p>Última actualización: {new Date().getFullYear()}</p>

            <section className="space-y-3">
                <h2 className="font-headline font-bold text-xl text-white">1. Aceptación de los Términos</h2>
                <p>
                Al acceder a este sitio web y contratar los servicios de entrenamiento de Victor Cuellar, usted acepta estar sujeto a estos Términos y Condiciones de uso, a todas las leyes y regulaciones aplicables, y acepta que es responsable del cumplimiento de las leyes locales aplicables.
                </p>
            </section>

            <section className="bg-white/5 border border-primary/30 p-4 rounded-lg space-y-3">
                <h2 className="font-headline font-bold text-xl text-primary">2. Exención de Responsabilidad Médica (Importante)</h2>
                <p className="font-bold text-white">
                Los servicios ofrecidos no sustituyen el consejo médico profesional.
                </p>
                <p>
                Antes de comenzar cualquier programa de ejercicios o nutrición, debe consultar a su médico. Victor Cuellar no es médico ni nutricionista registrado. Al utilizar nuestros servicios, usted reconoce que la participación en actividades físicas conlleva riesgos inherentes de lesiones y asume plena responsabilidad por dichos riesgos. Usted libera a Victor Cuellar de cualquier reclamación por lesiones o daños derivados del uso de nuestros programas.
                </p>
            </section>

            <section className="space-y-3">
                <h2 className="font-headline font-bold text-xl text-white">3. Servicios y Pagos</h2>
                <p>
                Los planes de entrenamiento se detallan en el sitio web. Los precios están sujetos a cambios y se confirmarán antes del pago. Los pagos por servicios de entrenamiento personalizados generalmente no son reembolsables una vez que se ha entregado el plan, debido a la naturaleza intelectual del servicio.
                </p>
            </section>

            <section className="space-y-3">
                <h2 className="font-headline font-bold text-xl text-white">4. Propiedad Intelectual</h2>
                <p>
                Los materiales contenidos en este sitio web y los planes de entrenamiento entregados están protegidos por leyes de derechos de autor y marcas comerciales. Se le concede una licencia limitada solo para su uso personal y no comercial. No puede distribuir, modificar o vender los planes de entrenamiento proporcionados.
                </p>
            </section>

            <section className="space-y-3">
                <h2 className="font-headline font-bold text-xl text-white">5. Modificaciones</h2>
                <p>
                Victor Cuellar puede revisar estos términos de servicio para su sitio web en cualquier momento sin previo aviso. Al utilizar este sitio web, usted acepta estar sujeto a la versión actual de estos términos de servicio.
                </p>
            </section>
            </div>
        </div>
        </div>
    );
    }
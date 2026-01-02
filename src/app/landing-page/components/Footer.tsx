    'use client';

    import Icon from '@/components/ui/AppIcon';
    import Link from 'next/link';

    const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="footer" className="bg-black border-t border-white/10 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Sección Superior: Información Principal */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Columna 1: Marca y Descripción */}
            <div className="col-span-1 lg:col-span-2 space-y-4">
                <h2 className="font-headline font-black text-3xl text-white">
                VICTOR <span className="text-primary">CUELLAR</span>
                </h2>
                <p className="font-body text-muted-foreground max-w-sm leading-relaxed">
                Preparación física basada en metodología profesional para desarrollar rendimiento, juego y mentalidad.
                </p>
                
                {/* Redes Sociales */}
                <div className="flex items-center space-x-4 pt-2">
                <a href="https://www.instagram.com/vc_estudio/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white text-gray-400 transition-all duration-300">
                    {/* Icono Instagram (CORREGIDO: Versión Oficial) */}
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.047 1.407-.06 4.123-.06h.08v.001zm0 2.162c-2.603 0-2.917.01-3.947.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.947s.01 2.917.058 3.947c.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.947-.058.975-.045 1.504-.207 1.857-.344.467-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.047-1.023.058-1.351.058-3.947s-.01-2.917-.058-3.947c-.045-.975-.207-1.504-.344-1.857-.182-.466-.399-.8-.748-1.15-.35-.35-.683-.566-1.15-.748-.353-.137-.882-.3-1.857-.344-1.02-.049-1.355-.06-3.947-.06h-.081zm6.268 5.62v-.025c.006.113.01.228.01.344a5.855 5.855 0 01-5.855 5.855 5.855 5.855 0 01-5.856-5.855 5.855 5.855 0 015.856-5.855c.116 0 .23.004.343.01h.026a6.11 6.11 0 00-6.225 6.095 6.11 6.11 0 006.108 6.108 6.11 6.11 0 006.108-6.108c0-3.15-2.408-5.74-5.46-6.07l-.053-.005zm1.586-2.185a1.44 1.44 0 110 2.88 1.44 1.44 0 010-2.88z" clipRule="evenodd" />
                    </svg>
                </a>
                
                <a href="https://www.facebook.com/vc.estudio.gym/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white text-gray-400 transition-all duration-300">
                    {/* Icono Facebook */}
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                </a>

                <a href="https://wa.me/5493876000000" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white text-gray-400 transition-all duration-300">
                    {/* Icono WhatsApp */}
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                </a>
                </div>
            </div>

            {/* Columna 2: Contacto Directo */}
            <div className="col-span-1 space-y-4">
                <h3 className="font-cta font-bold text-white text-lg">Contacto</h3>
                <ul className="space-y-3">
                <li className="flex items-start space-x-3 text-muted-foreground">
                    <Icon name="MapPinIcon" size={20} className="text-primary mt-0.5 flex-shrink-0" variant="solid" />
                    {/* Enlace a Google Maps */}
                    <a 
                    href="https://www.google.com/maps/search/?api=1&query=Salta,+Argentina" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-body text-sm hover:text-white hover:underline transition-all"
                    >
                    Salta, Argentina
                    </a>
                </li>
                <li className="flex items-center space-x-3 text-muted-foreground">
                    <Icon name="DevicePhoneMobileIcon" size={20} className="text-primary flex-shrink-0" variant="solid" />
                    <span className="font-body text-sm">+54 9 3876856439</span>
                </li>
                </ul>
            </div>

            {/* Columna 3: Legal */}
            <div className="col-span-1 space-y-4">
                <h3 className="font-cta font-bold text-white text-lg">Legal</h3>
                <ul className="space-y-2">
                <li>
                    <Link href="/privacy-policy" className="font-body text-sm text-muted-foreground hover:text-white transition-colors">
                    Privacy Policy
                    </Link>
                </li>
                <li>
                    <Link href="/terms-of-service" className="font-body text-sm text-muted-foreground hover:text-white transition-colors">
                    Terms of Service
                    </Link>
                </li>
                <li>
                    <Link href="/data-deletion" className="font-body text-sm text-muted-foreground hover:text-white transition-colors">
                    Data Deletion
                    </Link>
                </li>
                </ul>
            </div>
            </div>

            {/* Barra Inferior */}
            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-sm text-muted-foreground text-center md:text-left">
                © {currentYear} <a href="https://www.digitalmatchglobal.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors font-bold">Digital Match Global</a>. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-2 opacity-50 hover:opacity-100 transition-opacity">
                <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Powered by DMG</span>
            </div>
            </div>
        </div>
        </footer>
    );
    };

    export default Footer;
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function ContactSection() {
    return (
        <section id="contacto" className="bg-background-alt">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Columna de Información */}
                    <div className="p-8 md:p-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                            Ponete en Contacto
                        </h2>
                        <p className="text-lg text-light-text mb-12">
                            Nuestro equipo está listo para asesorarte.
                        </p>

                        <ul className="space-y-8">
                            <li className="flex items-start gap-4">
                                <MapPin size={24} className="text-primary mt-1 shrink-0" />
                                <div>
                                    <h3 className="font-bold text-lg">Dirección</h3>
                                    <p className="text-light-text">Uruguay 5058 – CP 1643<br/>Beccar, Buenos Aires, Argentina</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <Phone size={24} className="text-primary mt-1 shrink-0" />
                                <div>
                                    <h3 className="font-bold text-lg">Teléfono</h3>
                                    <a href="tel:+54901121953790" className="text-light-text hover:text-primary">+54 9 (011) 2195-3790</a>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <Mail size={24} className="text-primary mt-1 shrink-0" />
                                <div>
                                    <h3 className="font-bold text-lg">Email</h3>
                                    <a href="mailto:info@cafu.com.ar" className="text-light-text hover:text-primary">info@cafu.com.ar</a>
                                </div>
                            </li>
                             <li className="flex items-start gap-4">
                                <Clock size={24} className="text-primary mt-1 shrink-0" />
                                <div>
                                    <h3 className="font-bold text-lg">Horario de Atención</h3>
                                    <p className="text-light-text">Lunes a Viernes de 9:00 a 17:00 hs</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Columna del Mapa */}
                    <div className="w-full h-80 lg:h-full min-h-[400px]">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d26312.867278879512!2d-58.573102!3d-34.474774!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbab4f310cf09%3A0x2faeb539562f86fe!2sUruguay%205058%2C%20B1609%20B%C3%A9ccar%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1756698090419!5m2!1ses!2sar" 
                            width="100%" 
                            height="100%" 
                            style={{ border:0 }} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}

import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Instagram, Linkedin } from 'lucide-react';

// CAMBIO: Se elimina Facebook
const socialLinks = [
  { icon: <Instagram size={20} />, href: '#' },
  { icon: <Linkedin size={20} />, href: '#' },
];

const productLines = [
    { name: 'Volare', href: '/productos/volare' },
    { name: 'CafuFlex', href: '/productos/cafuflex' },
    { name: 'CafuVal', href: '/productos/cafuval' },
    { name: 'CafuPlas', href: '/productos/cafuplas' },
    { name: 'CafuPlus', href: '/productos/cafuplus' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-base-text text-white/70">
      <div className="container mx-auto px-6 py-16">
        {/* CAMBIO: Se usa un grid de 3 columnas para un mejor control */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Columna 1: Logo y Redes */}
          <div className="flex flex-col">
            <Link href="/" className="font-heading font-bold text-3xl text-white mb-4">
              CAFU
            </Link>
            <p className="text-sm max-w-xs mb-6">
              Más de 35 años proporcionando soluciones sanitarias de calidad para profesionales.
            </p>
            <div className="flex gap-4 mt-auto">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} className="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Columna 2: Lineas de Productos (Centro) */}
          <div className="md:text-center">
            <h3 className="font-heading font-bold text-lg text-white mb-4">Líneas de Productos</h3>
            <ul className="space-y-3">
              {productLines.map((line) => (
                <li key={line.name}>
                  <Link href={line.href} className="hover:text-white transition-colors">
                    {line.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Contacto (Derecha) */}
          <div>
            <h3 className="font-heading font-bold text-lg text-white mb-4">Contacto</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-white/50 shrink-0" />
                <span>Uruguay 5058 – CP 1643, Beccar, Buenos Aires</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-white/50 shrink-0" />
                <a href="tel:+54901121953790" className="hover:text-white">+54 9 (011) 2195-3790</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-white/50 shrink-0" />
                <a href="mailto:info@cafu.com.ar" className="hover:text-white">info@cafu.com.ar</a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={16} className="text-white/50 shrink-0" />
                <span>Lunes a Viernes: 9:00 - 17:00</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/10">
          <div className="container mx-auto px-6 py-6 text-center text-sm">
            <p>&copy; {currentYear} CAFU Conexiones Sanitarias. Todos los derechos reservados.</p>
          </div>
      </div>
    </footer>
  );
}


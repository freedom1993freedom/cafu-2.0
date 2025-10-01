import Link from 'next/link';
import Image from 'next/image';
import { novedades } from '@/app/lib/data'; // Leemos los datos de nuestro archivo

export function NovedadesSection() {
  // Tomamos solo las 2 novedades más recientes para mostrar en la home
  const ultimasNovedades = novedades.slice(0, 2);

  return (
    <section id="novedades" className="bg-background-alt py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Novedades y Promociones
          </h2>
          <p className="text-lg text-light-text mt-4 max-w-3xl mx-auto">
            Enterate de nuestros últimos lanzamientos, ofertas especiales y eventos del mes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {ultimasNovedades.map((novedad) => (
            <Link key={novedad.id} href={novedad.link} className="block border rounded-lg overflow-hidden group shadow-sm hover:shadow-xl transition-shadow duration-300 bg-white">
              <div className="relative w-full h-64 bg-gray-200">
                <Image 
                  src={novedad.image} 
                  alt={novedad.title}
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="absolute top-4 left-4 bg-secondary text-white text-xs font-bold uppercase px-3 py-1 rounded-full">{novedad.tag}</div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-base-text mb-2 group-hover:text-primary transition-colors">{novedad.title}</h3>
                <p className="text-sm text-light-text mb-4">{novedad.description}</p>
                <span className="font-bold text-primary">Ver más →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

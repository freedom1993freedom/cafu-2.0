import Image from 'next/image';
import Link from 'next/link';

export function SomosCafuSection() {
  return (
    <section id="somos-cafu" className="bg-background-alt py-20 md:py-32">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Columna de la Imagen */}
        <div className="relative w-full h-80 md:h-full rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/hero/placeholder.jpg" // Usaremos el mismo placeholder por ahora
            alt="Equipo y depósito de Cafu"
            fill
            className="object-cover"
          />
        </div>

        {/* Columna de Texto */}
        <div className="text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Tu Socio Estratégico en Conexiones Sanitarias
          </h2>
          <p className="text-lg text-base-text mb-4">
            Somos una compañía argentina con una trayectoria consolidada, líder en la comercialización y distribución de insumos de calidad certificada para el mercado sanitario.
          </p>
          <p className="text-lg text-light-text mb-8">
            Nuestro objetivo es claro: fortalecer y expandir nuestra Red de Distribuidores en todo el país, brindando productos confiables, respaldo permanente y soluciones logísticas eficientes que les permitan crecer junto a nosotros.
          </p>
          <Link
            href="/productos"
            className="bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-primary-dark transition-all transform hover:scale-105"
          >
            Explorar Productos
          </Link>
        </div>
      </div>
    </section>
  );
}

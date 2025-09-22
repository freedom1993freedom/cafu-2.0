import Link from 'next/link';
import Image from 'next/image';
import { getAllLineas } from '@/app/lib/data'; // Esta importación ahora funcionará

// Componente para la tarjeta de cada línea
function LineaCard({ linea }) {
  return (
    <Link href={`/productos/${linea.id}`} className="block border rounded-lg overflow-hidden group shadow-sm hover:shadow-xl transition-shadow duration-300">
        <div className="relative w-full h-60 bg-gray-200">
            <Image src={linea.heroImage} alt={linea.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
        </div>
        <div className="p-4 bg-white">
            <h3 className="font-bold text-2xl text-primary">{linea.name}</h3>
            <p className="text-sm text-light-text mt-1">{linea.description}</p>
        </div>
    </Link>
  )
}

// La página que se mostrará en /productos
export default function ProductosPage() {
    const lineas = getAllLineas();
    
    return (
        <div className="bg-background-alt">
            <header className="pt-32 pb-16 text-center">
                <h1 className="text-5xl font-bold text-primary">Nuestras Líneas de Productos</h1>
                <p className="text-lg text-light-text mt-4 max-w-2xl mx-auto">
                    Soluciones de calidad certificada para cada necesidad del mercado sanitario.
                </p>
            </header>
            <main className="container mx-auto px-6 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {lineas.map(linea => (
                        <LineaCard key={linea.id} linea={linea} />
                    ))}
                </div>
            </main>
        </div>
    );
}

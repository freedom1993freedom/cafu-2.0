"use client"; // Necesario para el scroll suave

import { getLineaById } from '@/app/lib/data';
import Link from 'next/link';
import Image from 'next/image';

// Componente para la tarjeta de previsualización de cada producto
function ProductCard({ lineaId, sublineaId, producto }) {
    return (
        <div className="border rounded-lg overflow-hidden group shadow-sm hover:shadow-xl transition-shadow duration-300 bg-white">
            <div className="relative w-full h-60 bg-gray-200">
                <Image src={producto.image} alt={producto.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{producto.name}</h3>
                <p className="text-sm text-light-text mb-4 h-10">{producto.shortDescription}</p>
                <Link href={`/productos/${lineaId}/${sublineaId}/${producto.id}`} className="font-bold text-primary hover:underline">
                    Ver Detalles →
                </Link>
            </div>
        </div>
    )
}

export default function LineaPage({ params }) {
    const linea = getLineaById(params.linea);

    // Función para el scroll suave a la sección de la sublínea
    const handleScrollToSubline = (sublineaId) => {
        const element = document.getElementById(sublineaId);
        if (element) {
            const headerOffset = 80; // Altura del header
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    if (!linea) {
        return <div className="text-center py-40">Línea de producto no encontrada.</div>;
    }

    return (
        <div>
            {/* --- HERO REDISEÑADO --- */}
            <section className="relative h-screen w-full bg-gray-900 text-white overflow-hidden">
                <Image src={linea.heroImage} alt={linea.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/50"></div>
                
                <div className="relative z-10 h-full w-full flex flex-col pt-20">
                    <div className="flex-grow flex items-center justify-center">
                        <div className="w-[90%] md:w-1/2 p-6 text-center">
                            <h1 className="text-7xl font-extrabold tracking-tighter">{linea.name}</h1>
                            <p className="mt-4 text-xl text-white/80">{linea.description}</p>
                             <a href="#" className="mt-8 inline-block bg-white text-base-text font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors">
                                Descargar Catálogo
                            </a>
                        </div>
                    </div>

                    {/* Thumbnails de Sublíneas */}
                    <div className="w-full p-4 flex justify-center items-center gap-4 overflow-x-auto">
                        {linea.sublineas.map((sublinea) => (
                        <div
                            key={sublinea.id}
                            onClick={() => handleScrollToSubline(sublinea.id)}
                            className="relative w-1/3 md:w-1/5 h-24 md:h-32 max-w-[200px] rounded-md overflow-hidden cursor-pointer group shrink-0"
                        >
                            <Image
                                src={sublinea.productos[0]?.image || '/images/hero/placeholder.jpg'}
                                alt={sublinea.name}
                                fill
                                className="w-full h-full object-cover transition-all duration-300 ease-in-out group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
                            <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/60 rounded">
                                <h3 className="font-bold text-sm">{sublinea.name}</h3>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CONTENIDO PRINCIPAL --- */}
            <main className="container mx-auto px-6 py-20 bg-background-alt">
                {linea.sublineas.map(sublinea => (
                    // Se añade un id a cada sección para el scroll
                    <div key={sublinea.id} id={sublinea.id} className="mb-16 scroll-mt-24">
                        <h2 className="text-3xl font-bold text-primary border-b-2 border-primary/20 pb-2 mb-8">
                            {sublinea.name}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                           {sublinea.productos.map(producto => (
                               <ProductCard key={producto.id} lineaId={linea.id} sublineaId={sublinea.id} producto={producto} />
                           ))}
                        </div>
                    </div>
                ))}
            </main>
        </div>
    );
}


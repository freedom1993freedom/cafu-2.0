import { client } from '@/sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url';
import Link from 'next/link';
import Image from 'next/image';

// Creamos una función para obtener las URLs de las imágenes de Sanity
const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

// Componente para la tarjeta de producto
function ProductCard({ lineaId, sublinea, producto }) {
    return (
        <div className="border rounded-lg overflow-hidden group shadow-sm hover:shadow-xl transition-shadow duration-300 bg-white">
            <div className="relative w-full h-60 bg-gray-200">
                {producto.image && (
                    <Image 
                        src={urlFor(producto.image).width(400).height(300).url()}
                        alt={producto.name} 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-300" 
                    />
                )}
            </div>
            <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{producto.name}</h3>
                <p className="text-sm text-light-text mb-4 h-10">{producto.shortDescription}</p>
                <Link href={`/productos/${lineaId}/${sublinea.id.current}/${producto.id.current}`} className="font-bold text-primary hover:underline">
                    Ver Detalles →
                </Link>
            </div>
        </div>
    )
}

// La página ahora es asíncrona para poder pedir los datos
export default async function LineaPage({ params }) {
    // Esta es una consulta en lenguaje GROQ para pedir los datos a Sanity
    const query = `*[_type == "linea" && id.current == $lineaId][0]{
      name,
      description,
      heroImage,
      "sublineas": sublineas[]->{
        name,
        id,
        "productos": productos[]->{
          name,
          id,
          shortDescription,
          image
        }
      }
    }`;
    
    const linea = await client.fetch(query, { lineaId: params.linea });

    if (!linea) {
        return <div className="text-center py-40">Línea de producto no encontrada.</div>;
    }

    return (
        <div className="bg-background-alt">
            <section className="relative h-[60vh] flex items-center justify-center text-white pt-20">
                {linea.heroImage && (
                    <Image 
                        src={urlFor(linea.heroImage).url()} 
                        alt={linea.name} 
                        fill 
                        className="object-cover"
                        priority 
                    />
                )}
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative z-10 text-center p-4">
                    <h1 className="text-7xl font-extrabold">{linea.name}</h1>
                    <p className="text-xl mt-4 max-w-2xl">{linea.description}</p>
                    <a href="#" className="mt-8 inline-block bg-white text-base-text font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors">
                        Descargar Catálogo
                    </a>
                </div>
            </section>

            <main className="container mx-auto px-6 py-20">
                {linea.sublineas?.map(sublinea => (
                    <div key={sublinea.id.current} className="mb-16">
                        <h2 className="text-3xl font-bold text-primary border-b-2 border-primary/20 pb-2 mb-8">
                            {sublinea.name}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                           {sublinea.productos?.map(producto => (
                               <ProductCard key={producto.id.current} lineaId={params.linea} sublinea={sublinea} producto={producto} />
                           ))}
                        </div>
                    </div>
                ))}
            </main>
        </div>
    );
}



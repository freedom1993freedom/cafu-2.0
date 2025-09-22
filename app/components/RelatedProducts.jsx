import Link from 'next/link';
import Image from 'next/image';

export function RelatedProducts({ currentProductId, sublinea }) {
  // Filtramos para obtener hasta 3 productos de la misma sublínea, excluyendo el actual.
  const related = sublinea.productos
    .filter(p => p.id !== currentProductId)
    .slice(0, 3);

  if (related.length === 0) {
    return null; // No mostramos nada si no hay productos relacionados
  }

  return (
    <div className="mt-20 border-t pt-10">
      <h2 className="text-3xl font-bold text-center text-base-text mb-8">
        También te puede interesar
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {related.map(producto => (
          <Link 
            key={producto.id}
            href={`/productos/${sublinea.lineaId}/${sublinea.id}/${producto.id}`}
            className="block border rounded-lg overflow-hidden group shadow-sm hover:shadow-xl transition-shadow duration-300 bg-white"
          >
            <div className="relative w-full h-52 bg-gray-200">
              <Image 
                src={producto.image} 
                alt={producto.name} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-1">{producto.name}</h3>
              <p className="text-sm text-primary font-semibold">Ver producto →</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
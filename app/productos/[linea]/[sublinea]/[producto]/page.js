import { getProductoByIds, getLineaById } from '@/app/lib/data';
import Link from 'next/link';
import { ImageZoom } from '@/app/components/ImageZoom';
import { CheckCircle } from 'lucide-react';
import { RelatedProducts } from '@/app/components/RelatedProducts';

export default function ProductoPage({ params }) {
    const producto = getProductoByIds(params.linea, params.sublinea, params.producto);

    if (!producto) {
        return <div className="text-center py-40">Producto no encontrado.</div>;
    }
    
    // Pasamos el ID de la línea a la sublínea para construir los links correctamente
    const sublineaConLineaId = {
        ...producto.sublinea,
        lineaId: producto.linea.id,
    };

    const hasSpecs = producto.specs && Object.keys(producto.specs).length > 0;
    const hasKeyFeatures = producto.keyFeatures && producto.keyFeatures.length > 0;

    return (
        <div className="bg-white pt-28 pb-20">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-sm mb-4 text-center">
                    <Link href={`/productos/${producto.linea.id}`} className="text-primary hover:underline">{producto.linea.name}</Link>
                    {' / '}
                    <span className="text-light-text">{producto.sublinea.name}</span>
                </div>

                <h1 className="text-4xl lg:text-6xl font-extrabold text-primary mb-12 text-center">{producto.name}</h1>

                <div className="w-full h-96 md:h-[550px] mb-12">
                     <ImageZoom src={producto.image} alt={producto.name} />
                </div>
                
                {producto.longDescription && (
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <p className="text-lg text-base-text leading-relaxed">{producto.longDescription}</p>
                    </div>
                )}

                {hasKeyFeatures && (
                    <div className="mb-16">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {producto.keyFeatures.map((feature, index) => (
                                <div key={index} className="bg-background-alt p-6 rounded-lg text-center">
                                    <CheckCircle className="mx-auto text-primary mb-4" size={32} />
                                    <h3 className="font-bold text-lg text-base-text mb-2">{feature.title}</h3>
                                    <p className="text-sm text-light-text">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                
                {hasSpecs && (
                    <div className="border-t pt-10">
                        <h3 className="font-bold text-2xl mb-6 text-center text-base-text">Especificaciones Técnicas</h3>
                        <div className="max-w-2xl mx-auto">
                            <table className="w-full text-left">
                                <tbody>
                                    {Object.entries(producto.specs).map(([key, value]) => (
                                        <tr key={key} className="border-b last:border-none">
                                            <td className="py-3 pr-4 font-semibold bg-gray-50 w-1/3 rounded-l-md">{key}</td>
                                            <td className="py-3 px-4 rounded-r-md">{value}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {/* --- SECCIÓN DE PRODUCTOS RELACIONADOS --- */}
                <RelatedProducts currentProductId={producto.id} sublinea={sublineaConLineaId} />

            </div>
        </div>
    );
}


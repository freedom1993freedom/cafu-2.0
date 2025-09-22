"use client";

import { useState, useMemo } from 'react';
import { lineas } from '@/app/lib/data';
import Link from 'next/link';
import Image from 'next/image';
import { Search } from 'lucide-react';

// Aplanamos toda la data para facilitar la búsqueda
const todosLosProductos = lineas.flatMap(linea =>
  linea.sublineas.flatMap(sublinea =>
    sublinea.productos.map(producto => ({
      ...producto,
      lineaId: linea.id,
      lineaName: linea.name,
      sublineaId: sublinea.id,
      sublineaName: sublinea.name,
    }))
  )
);

function ProductCard({ producto }) {
    return (
        <div className="border rounded-lg overflow-hidden group shadow-sm hover:shadow-xl transition-shadow duration-300 bg-white">
            <Link href={`/productos/${producto.lineaId}/${producto.sublineaId}/${producto.id}`} className="block">
                <div className="relative w-full h-52 bg-gray-200">
                    <Image src={producto.image} alt={producto.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-4">
                    <p className="text-xs text-primary font-semibold">{producto.lineaName} / {producto.sublineaName}</p>
                    <h3 className="font-bold text-md mt-1">{producto.name}</h3>
                </div>
            </Link>
        </div>
    )
}

export default function BuscarPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filtroLinea, setFiltroLinea] = useState('');
    const [filtroSublinea, setFiltroSublinea] = useState('');

    const sublineasDisponibles = useMemo(() => {
        if (!filtroLinea) return [];
        const lineaSeleccionada = lineas.find(l => l.id === filtroLinea);
        return lineaSeleccionada ? lineaSeleccionada.sublineas : [];
    }, [filtroLinea]);
    
    const productosFiltrados = useMemo(() => {
        return todosLosProductos.filter(producto => {
            const matchSearch = searchTerm === '' || producto.name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchLinea = filtroLinea === '' || producto.lineaId === filtroLinea;
            const matchSublinea = filtroSublinea === '' || producto.sublineaId === filtroSublinea;
            return matchSearch && matchLinea && matchSublinea;
        });
    }, [searchTerm, filtroLinea, filtroSublinea]);

    return (
        <div className="bg-background-alt min-h-screen">
            <header className="pt-32 pb-16 bg-white">
                <div className="container mx-auto px-6">
                    <h1 className="text-5xl font-bold text-primary text-center mb-8">Buscador de Productos</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Buscador por texto */}
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Escribí el nombre del producto..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full p-3 pl-10 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                            />
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        </div>
                        {/* Filtro por Línea */}
                        <select
                            value={filtroLinea}
                            onChange={(e) => { setFiltroLinea(e.target.value); setFiltroSublinea(''); }}
                            className="w-full p-3 border rounded-lg bg-white focus:ring-2 focus:ring-primary focus:outline-none"
                        >
                            <option value="">Todas las Líneas</option>
                            {lineas.map(linea => <option key={linea.id} value={linea.id}>{linea.name}</option>)}
                        </select>
                        {/* Filtro por Sublínea */}
                        <select
                            value={filtroSublinea}
                            onChange={(e) => setFiltroSublinea(e.target.value)}
                            disabled={!filtroLinea}
                            className="w-full p-3 border rounded-lg bg-white focus:ring-2 focus:ring-primary focus:outline-none disabled:bg-gray-100"
                        >
                            <option value="">Todas las Sublíneas</option>
                            {sublineasDisponibles.map(sub => <option key={sub.id} value={sub.id}>{sub.name}</option>)}
                        </select>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-6 py-12">
                <p className="text-light-text mb-6">{productosFiltrados.length} producto(s) encontrado(s)</p>
                {productosFiltrados.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {productosFiltrados.map(producto => (
                            <ProductCard key={producto.id + producto.sublineaId} producto={producto} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <h3 className="text-2xl font-bold">Sin resultados</h3>
                        <p className="text-light-text mt-2">Intentá cambiar los filtros o el término de búsqueda.</p>
                    </div>
                )}
            </main>
        </div>
    );
}

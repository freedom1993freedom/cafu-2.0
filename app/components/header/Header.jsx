"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Search } from 'lucide-react';
import { client } from '@/sanity/lib/client';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lineas, setLineas] = useState([]);

  useEffect(() => {
    const fetchLineas = async () => {
      const query = `*[_type == "linea"]{name, "id": id.current}`;
      const data = await client.fetch(query);
      setLineas(data);
    };

    fetchLineas();
  }, []);

  const navLinks = [
    { href: '/#somos-cafu', label: 'Somos Cafu' },
    { href: '/#logistica', label: 'Logística' },
    { href: '/#contacto', label: 'Contacto' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-sm shadow-md z-50 h-20">
      <div className="container mx-auto px-6 h-full flex justify-between items-center">
        <Link href="/" className="font-heading font-bold text-3xl text-primary">
          CAFU
        </Link>

        <nav className="hidden md:flex items-center gap-8 h-full">
          {navLinks.map(link => (
             <Link key={link.href} href={link.href} className="text-base-text hover:text-primary transition-colors">{link.label}</Link>
          ))}
          
          <div className="relative group h-full flex items-center">
             <Link href="/productos" className="text-base-text hover:text-primary transition-colors">Productos</Link>
             <div className="absolute top-full left-0 w-56 bg-white shadow-lg rounded-b-lg p-4
                           opacity-0 invisible group-hover:opacity-100 group-hover:visible
                           transition-all duration-300 transform group-hover:translate-y-0 -translate-y-2">
                <ul className="space-y-2">
                    {lineas.map(linea => (
                        <li key={linea.id}>
                            <Link href={`/productos/${linea.id}`} className="block px-3 py-2 rounded hover:bg-gray-100">
                                {linea.name}
                            </Link>
                        </li>
                    ))}
                </ul>
             </div>
          </div>
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/buscar"
            className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-light-text px-6 py-3 rounded-full transition-colors duration-300"
          >
            <Search size={20} />
            <span className="text-base italic">Buscar productos...</span>
          </Link>
          
          <Link
            href="https://sistema.cliente.com/login"
            target="_blank"
            className="bg-secondary text-white font-bold py-3 px-6 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105"
          >
            Área de Clientes
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Panel de Menú Móvil - CORRECCIÓN AQUI */}
      <div className={`md:hidden absolute top-20 left-0 w-full bg-white shadow-lg transition-transform duration-300 ease-in-out ${isMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}>
        <nav className="flex flex-col p-6 space-y-4">
          {navLinks.map(link => (
             <Link key={link.href} href={link.href} className="text-lg" onClick={() => setIsMenuOpen(false)}>{link.label}</Link>
          ))}
          <Link href="/productos" className="text-lg" onClick={() => setIsMenuOpen(false)}>Productos</Link>
          <hr/>
           <Link href="/buscar" className="text-lg" onClick={() => setIsMenuOpen(false)}>Buscador</Link>
          <Link
            href="https://sistema.cliente.com/login"
            target="_blank"
            className="bg-secondary text-white text-center font-bold py-3 px-6 rounded-full mt-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Área de Clientes
          </Link>
        </nav>
      </div>
    </header>
  );
}


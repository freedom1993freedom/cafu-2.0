"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

export function ProductLinesSummary() {
  const [lineas, setLineas] = useState([]);

  useEffect(() => {
    const fetchLineas = async () => {
      // Pedimos los datos de todas las líneas a Sanity
      const query = `*[_type == "linea"]{
        _id, 
        name, 
        "id": id.current, 
        description, 
        heroImage, 
        color
      }`;
      const data = await client.fetch(query);
      setLineas(data);
    };

    fetchLineas();
  }, []);

  return (
    <section id="productos" className="bg-white pt-12 pb-20 md:pt-16 md:pb-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Un Universo de Soluciones
          </h2>
          <p className="text-lg text-light-text mt-4 max-w-3xl mx-auto">
            Cada una de nuestras líneas está diseñada para ofrecer un rendimiento superior y una confianza inigualable, cubriendo todas las necesidades del profesional.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lineas.map((linea) => (
            <div key={linea._id} className="border rounded-lg overflow-hidden group shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="relative w-full h-60 bg-gray-200">
                {linea.heroImage && (
                  <Image 
                    src={urlFor(linea.heroImage).width(400).url()}
                    alt={`Línea ${linea.name}`} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                )}
              </div>
              <div className="p-6 bg-white flex flex-col items-center text-center">
                <h3 className="font-bold text-2xl text-primary mb-2">{linea.name}</h3>
                <p className="text-sm text-light-text mb-6 h-12">{linea.description}</p>
                <Link 
                  href={`/productos/${linea.id}`} 
                  className="font-bold text-white py-2 px-6 rounded-full transition-all transform hover:scale-105"
                  style={{ backgroundColor: linea.color || '#065d28' }}
                >
                  Ver Línea
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


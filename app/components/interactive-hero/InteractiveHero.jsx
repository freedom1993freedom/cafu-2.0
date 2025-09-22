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

export function InteractiveHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lineas, setLineas] = useState([]);

  useEffect(() => {
    const fetchLineas = async () => {
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

  // Mostramos un estado de carga mientras los datos llegan de Sanity
  if (lineas.length === 0) {
    return (
      <section className="h-screen w-full flex items-center justify-center bg-gray-100">
        <p>Cargando...</p>
      </section>
    );
  }

  const activeLine = lineas[activeIndex];

  return (
    <section className="relative h-screen w-full bg-gray-900 text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        {lineas.map((line, index) => (
          line.heroImage && (
            <Image
              key={line._id}
              src={urlFor(line.heroImage).url()}
              alt={line.description}
              fill
              priority={index === 0}
              className={`w-full h-full object-cover transition-opacity duration-700 ease-in-out ${activeIndex === index ? 'opacity-100' : 'opacity-0'}`}
            />
          )
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
      </div>

      <div className="relative z-10 h-full w-full flex flex-col pt-20">
        <div className="flex-grow flex items-center justify-center">
          <div className="w-[90%] md:w-1/2 p-6 bg-black/50 backdrop-blur-sm rounded-lg text-center">
            <h1 className="text-5xl font-extrabold tracking-tighter">{activeLine.name}</h1>
            <p className="mt-2 text-lg text-white/80">{activeLine.description}</p>
            <Link
              href={`/productos/${activeLine.id}`}
              className="mt-4 inline-block text-white font-bold py-2 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              style={{ backgroundColor: activeLine.color || '#e9741f' }}
            >
              Conocer más
            </Link>
          </div>
        </div>

        <div className="w-full p-4 flex justify-start md:justify-center items-center gap-4 overflow-x-auto">
          {lineas.map((line, index) => (
            <div
              key={line._id}
              onClick={() => setActiveIndex(index)}
              className="relative w-1/3 md:w-1/5 h-24 md:h-32 max-w-[200px] rounded-md overflow-hidden cursor-pointer group shrink-0"
            >
              {line.heroImage && (
                <Image
                  src={urlFor(line.heroImage).width(200).height(128).url()}
                  alt={line.name}
                  fill
                  className={`w-full h-full object-cover transition-all duration-300 ease-in-out group-hover:scale-110 ${activeIndex === index ? 'opacity-100' : 'opacity-50 group-hover:opacity-80'}`}
                />
              )}
              <div className={`absolute inset-0 border-2 transition-colors duration-300 ${activeIndex === index ? 'border-white' : 'border-transparent group-hover:border-white/50'}`}></div>
              <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/60 rounded">
                <h3 className="font-bold text-sm">{line.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


"use client";
import Image from 'next/image';

// This component creates the hover-to-zoom effect on an image.
export function ImageZoom({ src, alt }) {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg shadow-lg group">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-125"
      />
    </div>
  );
}

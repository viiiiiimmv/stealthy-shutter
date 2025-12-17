import React from 'react';
import images from '../assets/data/randomData.js'

export default function RandomCorner() {

  return (
    <section className="min-h-screen bg-linear-to-tr from-[#181818] to-[#101010] px-1 md:px-6 py-10">
      <div className="max-w-400 mx-auto">
        <div className="mb-12 text-center">
          <h1 className="whitespace-nowrap text-6xl md:text-7xl lg:text-8xl font-galant tracking-wide text-white">
            An Open Archive
          </h1>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-3 space-y-4">
          {images.map((image) => (
            <div key={image.id} className="break-inside-avoid rounded-xl border border-white/20 overflow-hidden">
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

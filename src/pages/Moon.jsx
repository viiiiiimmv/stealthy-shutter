import React from "react";
import images from "../assets/data/moonData.js";

const LunarQuietMoments = () => {

  return (
    <section className="bg-black min-h-screen py-16 px-6 md:px-16">
      
      <h1 className="font-galant text-center text-5xl md:text-7xl font-light tracking-wider text-white mb-16">
        Lunar Quiet Moments
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {images.map((img, i) => (
          <div
            key={i}
            className="group relative h-[800px] rounded-2xl overflow-hidden border border-white/20 "
          >
            <img
              src={img.url}
              alt={img.alt}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {img.caption && (
              <p className="absolute bottom-6 left-6 right-6 text-sm tracking-wide text-white/90 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                {img.caption}
              </p>
            )}
          </div>
        ))}
      </div>

    </section>
  );
};

export default LunarQuietMoments;

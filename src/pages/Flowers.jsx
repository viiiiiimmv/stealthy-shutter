import React from "react";
import images from "../assets/data/flowersData.js";

export default function BloomGallery() {

  return (
    <section className="min-h-screen bg-[#fbfaf7] px-12 py-16 overflow-x-auto">
      {/* Always 4 columns */}
      <div className="grid grid-cols-4 gap-6 min-w-300">

        {/* FIRST CELL — TEXT ONLY */}
        <div className="flex items-start">
          <h1 className="font-galant text-[100px] leading-[1.1] text-black">
            Bloom
            <br />
            and
            <br />
            Stillness
          </h1>
        </div>

        {/* REST OF THE CELLS — IMAGES */}
        {images.map((img, i) => (
  <div
    key={i}
    className="group relative aspect-square overflow-hidden bg-neutral-100"
  >
    {/* Image */}
    <img
      src={img.src}
      alt={img.caption}
      loading="lazy"
      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
    />

    {/* Bottom vignette */}
    <div
      className="
        pointer-events-none
        absolute inset-x-0 bottom-0 h-2/5
        bg-gradient-to-t from-black/55 via-black/25 to-transparent
        opacity-0 group-hover:opacity-100
        transition-opacity duration-400
      "
    />

    {/* Caption */}
    <p
      className="
        pointer-events-none
        absolute bottom-4 left-4 right-4
        text-sm text-white/90
        opacity-0 translate-y-2
        group-hover:opacity-100 group-hover:translate-y-0
        transition-all duration-400
        font-dm-sans
        font-bold
      "
    >
      {img.caption}
    </p>
  </div>
))}

      </div>
    </section>
  );
}

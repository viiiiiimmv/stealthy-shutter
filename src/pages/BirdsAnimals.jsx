import React, { useEffect, useRef, useState } from "react";
import images from "../assets/data/animalsData";

const AnimalMoments = () => {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const IMAGE_WIDTH = 400;
  const GAP = 32;
  const TOTAL_WIDTH = images.length * IMAGE_WIDTH + (images.length - 1) * GAP;

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const scrollable = sectionRef.current.offsetHeight - vh;

      if (scrollable <= 0) return;

      const scrolled = Math.min(Math.max(-rect.top, 0), scrollable);
      setProgress(scrolled / scrollable);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const maxTranslate = TOTAL_WIDTH - window.innerWidth;
  const translateX = -progress * Math.max(maxTranslate, 0);

  return (
    <section ref={sectionRef} className="bg-linear-to-tr from-[#EFEDE9] to-[#F9F9F8] h-[180vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <h1 className="font-galant absolute top-12 left-1/2 -translate-x-1/2 whitespace-nowrap text-5xl md:text-7xl font-light tracking-wider text-black">
            OBSERVED LIVING FORMS
        </h1>

        <div
          className="absolute top-40 left-0 flex gap-8 px-16"
          style={{ transform: `translateX(${translateX}px)` }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="group relative w-[400px] h-[750px] flex-shrink-0 rounded-2xl overflow-hidden"
            >
              <img
                src={img.url}
                alt={img.caption || img.alt}
                className="w-full h-full object-cover"
              />

              <div
                className="
                  pointer-events-none
                  absolute inset-x-0 bottom-0 h-1/3
                  bg-gradient-to-t from-black/60 via-black/30 to-transparent
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                "
              />

              {img.caption && (
                <p
                  className="
                    pointer-events-none
                    absolute bottom-4 left-4 right-4
                    text-sm tracking-wide text-white/90
                    opacity-0 translate-y-2
                    group-hover:opacity-100 group-hover:translate-y-0
                    transition-all duration-300
                  "
                >
                  {img.caption}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimalMoments;

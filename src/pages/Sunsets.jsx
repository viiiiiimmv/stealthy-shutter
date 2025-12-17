import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import images from "../assets/data/sunsetData.js";

const SunsetCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setPrevIndex(currentIndex);
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  const goToIndex = (index) => {
    setPrevIndex(currentIndex);
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setPrevIndex(currentIndex);
    setCurrentIndex(
      (prev) => (prev - 1 + images.length) % images.length
    );
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setPrevIndex(currentIndex);
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <div className="absolute inset-0">
        <img
          src={images[prevIndex].image}
          className="absolute inset-0 w-full h-full object-cover opacity-0"
          alt=""
        />

        <img
          src={images[currentIndex].image}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[1200ms] ease-in-out opacity-100"
          alt={images[currentIndex].caption}
        />

        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative h-full flex flex-col justify-between p-8 md:p-12 lg:p-16">
        <h1 className="font-galant text-5xl md:text-7xl lg:text-8xl text-white tracking-wider">
          SUNSETS
        </h1>

        <div className="flex flex-col items-center gap-8 pb-4">
          <p className="font-dm-sans text-white text-xl md:text-2xl lg:text-3xl font-light text-center tracking-wide transition-opacity duration-700">
            {images[currentIndex].caption}
          </p>

          <div className="flex gap-3 items-center">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToIndex(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-3 h-3 bg-white"
                    : "w-2.5 h-2.5 bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={goToPrevious}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 rounded-full p-2 md:p-3 backdrop-blur-sm"
      >
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 rounded-full p-2 md:p-3 backdrop-blur-sm"
      >
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
      </button>
    </div>
  );
};

export default SunsetCarousel;

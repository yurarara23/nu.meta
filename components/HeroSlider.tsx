"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const images = ["/mizmelon/DG/dimmgate_top.webp", "/1.png", "/3.png"];

const HeroSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-h-[75vh] aspect-[16/10] overflow-hidden">
      {images.map((img, i) => (
        <Image
          key={i}
          src={img}
          alt={`Slide ${i + 1}`}
          fill
          className={`
            absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000
            ${i === index ? "opacity-100 z-10" : "opacity-0 z-0"}
          `}
        />
      ))}
    </div>
  );
};

export default HeroSlider;

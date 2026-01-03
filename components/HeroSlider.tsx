"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";

const images = [
  "/yurarara/IVRC/ivrc5.jpg",
  "/mizmelon/DG/dimmgate_top.webp",
  "/ogp/member.png",
];

const HeroSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[75vh] overflow-hidden">
      {/* 背景スライド */}
      {images.map((img, i) => (
        <Image
          key={i}
          src={img}
          alt={`Slide ${i + 1}`}
          fill
          priority={i === 0}
          className={`
            absolute inset-0 object-cover
            transition-opacity duration-1000 ease-in-out
            ${i === index ? "opacity-100 z-10" : "opacity-0 z-0"}
          `}
        />
      ))}

      {/* ダークオーバーレイ */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-20" />

      {/* Hero コンテンツ */}
      <div className="absolute inset-0 z-30 flex items-center justify-between px-8">
        {/* 左：キャッチコピー + CTA */}
        <div className="max-w-xl space-y-6">
          <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
            Creating immersive
            <br />
            <span className="text-blue-400">Digital Creations</span>
          </h1>

          <p className="text-gray-300 text-base md:text-lg">
            We bring imagination to life through interactive media and immersive
            experiences.
          </p>

          <div className="flex gap-4">
            <a
              href="#blog"
              className="
                inline-flex items-center justify-center
                px-6 py-3
                border border-white/30
                text-white
                rounded-md
                hover:bg-white/10
                transition
              "
            >
              About Us
            </a>
            <a
              href="#join"
              className="
                inline-flex items-center justify-center
                px-6 py-3
                border border-white/30
                text-white
                rounded-md
                hover:bg-white/10
                transition
              "
            >
              Join Us
            </a>
            <Link
              href="/blog"
              className="
                inline-flex items-center justify-center
                px-6 py-3
                border border-white/30
                text-white
                rounded-md
                hover:bg-white/10
                transition
              "
            >
              Blog
            </Link>
          </div>
        </div>

        {/* 右下：X タイムライン */}
        <div className="hidden md:block absolute bottom-6 right-6 z-40">
          <div
            className="
            w-[320px] h-[480px]
            bg-black/40 backdrop-blur
            border border-gray-700
            rounded-md
            shadow-lg
            overflow-hidden
          "
          >
            <a
              className="twitter-timeline"
              data-theme="dark"
              data-height="480"
              href="https://twitter.com/nuMetasou"
            >
              Tweets by nuMetasou
            </a>
          </div>
        </div>
      </div>

      {/* X widget script */}
      <Script
        async
        src="https://platform.twitter.com/widgets.js"
        strategy="afterInteractive"
      />
    </div>
  );
};

export default HeroSlider;

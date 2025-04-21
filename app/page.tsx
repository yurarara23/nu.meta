import HeroSlider from "@/components/HeroSlider";
import NewSection from "@/components/NewSection";
import BlogSection from "@/components/BlogSection";
import WhatNumSection from "@/components/WhatNumSection";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSlider />

      <NewSection />

      <WhatNumSection />

      <BlogSection />
    </main>
  );
}

import HeroSlider from "@/components/HeroSlider";
import NewSection from "@/components/NewSection";
import BlogSection from "@/components/BlogSection";
import WhatNumSection from "@/components/WhatNumSection";
import Project from "@/components/Project";
import Join from "@/components/Join";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSlider />

      <NewSection />

      <WhatNumSection />

      <Project />

      <Join />

      <BlogSection />
    </main>
  );
}

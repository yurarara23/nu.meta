import HeroSlider from "@/components/HeroSlider";
import BlogSection from "@/components/BlogSection";
import AboutUs from "@/components/AboutUs";
import Project from "@/components/Project";
import Join from "@/components/Join";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSlider />

      <section id="blog">
        <BlogSection />
      </section>

      <section id="AboutUs">
        <AboutUs />
      </section>

      <section id="project">
        <Project />
      </section>

      <section id="join">
        <Join />
      </section>
    </main>
  );
}

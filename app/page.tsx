import Hero from "@/components/sections/Hero/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Technologies from "@/components/sections/Technologies";
import About from "@/components/sections/About/About";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact/Contact";

export default function HomePage() {
  return (
    <main>

      <Hero />
      <FeaturedProjects />
      <Technologies />
      <About />
      <Experience />
      <Contact/>

    </main>
  );
}
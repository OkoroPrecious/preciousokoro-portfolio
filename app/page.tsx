import Hero from "@/components/sections/Hero/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Technologies from "@/components/sections/Technologies";
import Stats from "@/components/sections/Stats";

export default function HomePage() {
  return (
    <main>

      <Hero />
      <FeaturedProjects />
      <Technologies />
      <Stats />

    </main>
  );
}
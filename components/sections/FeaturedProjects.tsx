import Container from "@/components/layout/Container";

import SectionHeading from "@/components/shared/SectionHeading";
import ProjectCard from "@/components/cards/ProjectCard";

import { featuredProjects } from "@/data/featuredProjects";
import SlideUp from "../animations/SlideUp";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-28">

      <Container>

        <SectionHeading
          eyebrow="Portfolio"
          title="Featured Projects"
          description="A selection of products I've worked on, focusing on scalable frontend architecture, enterprise applications and excellent user experiences."
        />

      <div className="mt-16 space-y-10">
  {featuredProjects.map((project, index) => (
    <SlideUp
      key={project.title}
      delay={index * 0.15}
    >
      <ProjectCard {...project} />
    </SlideUp>
  ))}
</div>

      </Container>
    </section>
  );
}
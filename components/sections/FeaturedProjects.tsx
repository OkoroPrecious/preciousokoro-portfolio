import Container from "@/components/layout/Container";

import SectionHeading from "@/components/shared/SectionHeading";
import ProjectCard from "@/components/cards/ProjectCard";

import { featuredProjects } from "@/data/featuredProjects";

export default function FeaturedProjects() {
  return (
    <section className="py-28">

      <Container>

        <SectionHeading
          eyebrow="Portfolio"
          title="Featured Projects"
          description="A selection of products I've worked on, focusing on scalable frontend architecture, enterprise applications and excellent user experiences."
        />

        <div className="grid gap-8 lg:grid-cols-2">

          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}
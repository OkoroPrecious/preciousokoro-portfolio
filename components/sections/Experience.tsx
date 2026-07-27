import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import ExperienceCard from "@/components/cards/ExperienceCard";

import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Career"
          title="Professional Experience"
          description="A snapshot of my journey building modern web applications and enterprise software."
        />

        <div className="mt-16 space-y-8">
          {experience.map((job) => (
            <ExperienceCard
              key={`${job.company}-${job.period}`}
              {...job}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
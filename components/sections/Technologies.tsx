import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";

import { skills } from "@/data/skills";

export default function Technologies() {
  return (
    <section className="py-28">
      <Container>
        <SectionHeading
          eyebrow="Tech Stack"
          title="Technologies I Work With"
          description="The tools I use every day to design, build and deploy modern web applications."
        />

        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.name}
                className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-amber-500 hover:shadow-xl"
              >
                <Icon
                  size={42}
                  className="mb-5 text-amber-400 transition-transform duration-300 group-hover:scale-110"
                />

                <h3 className="font-semibold text-white">
                  {skill.name}
                </h3>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
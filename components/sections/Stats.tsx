import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import StatCard from "@/components/cards/StatCard";
import { stats } from "@/data/stats";

export default function Stats() {
  return (
    <section className="py-28">
      <Container>
        <SectionHeading
          eyebrow="Impact"
          title="Numbers That Reflect My Work"
          description="A snapshot of my experience, the projects I've contributed to, and the value I aim to deliver."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
              description={stat.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
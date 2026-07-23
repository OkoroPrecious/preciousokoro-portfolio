import { hero } from "@/data/hero";

export default function TechBadges() {
  return (
    <div className="mt-10 flex flex-wrap gap-3">

      {hero.technologies.map((tech) => (
        <span
          key={tech}
          className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300"
        >
          {tech}
        </span>
      ))}

    </div>
  );
}
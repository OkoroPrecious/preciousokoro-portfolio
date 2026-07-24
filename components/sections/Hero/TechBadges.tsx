import { hero } from "@/data/hero";

export default function TechBadges() {
  return (
    <div className="mt-8 flex flex-wrap gap-2 sm:mt-10 sm:gap-3">

      {hero.technologies.map((tech) => (
        <span
          key={tech}
          className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs text-slate-300 sm:px-4 sm:py-2 sm:text-sm"
        >
          {tech}
        </span>
      ))}

    </div>
  );
}
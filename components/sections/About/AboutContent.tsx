import { CheckCircle2 } from "lucide-react";
import { about } from "@/data/about";

export default function AboutContent() {
  return (
    <div>
      <p className="font-semibold uppercase tracking-[0.3em] text-amber-400">
        {about.heading}
      </p>

      <h2 className="mt-4 text-5xl font-bold">
        {about.subHeading}
      </h2>

      <p className="mt-8 text-lg leading-8 text-slate-400">
        {about.description}
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {about.highlights.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3"
          >
            <CheckCircle2
              size={18}
              className="text-amber-400"
            />

            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
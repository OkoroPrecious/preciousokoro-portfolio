interface ExperienceCardProps {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export default function ExperienceCard({
  company,
  role,
  period,
  description,
}: ExperienceCardProps) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:border-amber-500/40 hover:shadow-xl">
      <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">
        {period}
      </p>

      <h3 className="mt-3 text-2xl font-bold text-white">
        {role}
      </h3>

      <p className="mt-1 text-lg text-slate-300">
        {company}
      </p>

      <ul className="mt-6 space-y-3">
        {description.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-slate-400"
          >
            <span className="mt-2 h-2 w-2 rounded-full bg-amber-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
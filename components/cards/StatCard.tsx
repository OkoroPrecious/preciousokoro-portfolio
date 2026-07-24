interface StatCardProps {
  value: string;
  label: string;
  description: string;
}

export default function StatCard({
  value,
  label,
  description,
}: StatCardProps) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-amber-500/40 hover:shadow-xl">
      <h3 className="text-5xl font-extrabold text-amber-400">
        {value}
      </h3>

      <h4 className="mt-4 text-xl font-semibold text-white">
        {label}
      </h4>

      <p className="mt-3 text-sm leading-6 text-slate-400">
        {description}
      </p>
    </div>
  );
}
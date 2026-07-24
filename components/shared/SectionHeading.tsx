interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-14 text-center">
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
          {eyebrow}
        </p>
      )}

      <h2 className="text-4xl font-bold tracking-tight text-white lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}
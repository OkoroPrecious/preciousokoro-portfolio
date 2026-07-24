interface TagProps {
  label: string;
}

export default function Tag({ label }: TagProps) {
  return (
    <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-medium text-slate-300">
      {label}
    </span>
  );
}
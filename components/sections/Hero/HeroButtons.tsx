import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { hero } from "@/data/hero";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap gap-4">

      <Link
        href={hero.buttons.primary.href}
        className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3 font-semibold text-slate-900 transition hover:bg-amber-400"
      >
        {hero.buttons.primary.text}
        <ArrowRight size={18} />
      </Link>

      <Link
        href={hero.buttons.secondary.href}
        className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-6 py-3 text-white transition hover:border-slate-500"
      >
        <Download size={18} />
        {hero.buttons.secondary.text}
      </Link>

    </div>
  );
}
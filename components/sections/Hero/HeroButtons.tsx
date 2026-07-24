import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { hero } from "@/data/hero";

export default function HeroButtons() {
  return (
    <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">

      <Link
        href={hero.buttons.primary.href}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500 px-6 py-3 font-semibold text-slate-900 transition hover:bg-amber-400 sm:w-auto"
      >
        {hero.buttons.primary.text}
        <ArrowRight size={18} />
      </Link>

      <Link
        href={hero.buttons.secondary.href}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-700 px-6 py-3 text-white transition hover:border-slate-500 sm:w-auto"
      >
        <Download size={18} />
        {hero.buttons.secondary.text}
      </Link>

    </div>
  );
}
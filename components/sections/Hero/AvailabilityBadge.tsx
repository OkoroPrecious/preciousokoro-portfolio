import { Sparkles } from "lucide-react";
import { hero } from "@/data/hero";

export default function AvailabilityBadge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-2 text-xs font-medium text-amber-400 sm:px-4 sm:text-sm">
      <Sparkles size={16} className="shrink-0" />
      {hero.badge}
    </div>
  );
}
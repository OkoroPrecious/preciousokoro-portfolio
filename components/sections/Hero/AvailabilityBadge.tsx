import { Sparkles } from "lucide-react";

export default function AvailabilityBadge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-400">
      <Sparkles size={16} />
      Available for International Opportunities
    </div>
  );
}
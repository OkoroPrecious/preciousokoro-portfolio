import { hero } from "@/data/hero";

import AvailabilityBadge from "./AvailabilityBadge";
import HeroButtons from "./HeroButtons";
import TechBadges from "./TechBadges";

export default function HeroContent() {
  return (
    <div>
      <AvailabilityBadge />

      <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:mt-8 sm:text-5xl lg:text-7xl">
        Hi, I&apos;m
        <br />
        <span className="text-amber-400">
          {hero.name}
        </span>
      </h1>

      <h2 className="mt-4 text-xl font-semibold text-slate-300 sm:mt-6 sm:text-2xl">
        {hero.role}
      </h2>

      <p className="mt-4 max-w-xl text-base leading-7 text-slate-400 sm:mt-6 sm:text-lg sm:leading-8">
        {hero.description}
      </p>

      <HeroButtons />

      <TechBadges />
    </div>
  );
}
import { hero } from "@/data/hero";

import AvailabilityBadge from "./AvailabilityBadge";
import HeroButtons from "./HeroButtons";
import TechBadges from "./TechBadges";

export default function HeroContent() {
  return (
    <>
      <AvailabilityBadge />

      <h1 className="mt-8 text-5xl font-extrabold leading-tight lg:text-7xl">
        Hi, I&apos;m
        <br />
        <span className="text-amber-400">
          {hero.name}
        </span>
      </h1>

      <h2 className="mt-6 text-2xl font-semibold text-slate-300">
        {hero.role}
      </h2>

      <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
        {hero.description}
      </p>

      <HeroButtons />

      <TechBadges />
    </>
  );
}
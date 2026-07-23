import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="relative flex justify-center lg:justify-end">
      <div className="absolute h-[420px] w-[420px] rounded-full bg-amber-500/10 blur-3xl" />

      <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-2 shadow-2xl">
        <Image
          src="/images/profile.png"
          alt="Precious Okoro"
          width={430}
          height={430}
          priority
          className="rounded-2xl object-cover"
        />
      </div>
    </div>
  );
}
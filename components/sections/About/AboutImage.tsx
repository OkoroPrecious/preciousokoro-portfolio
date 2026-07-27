import Image from "next/image";

export default function AboutImage() {
  return (
    <div className="relative">
      <div className="absolute inset-0 rounded-3xl bg-amber-500/10 blur-3xl" />

      <Image
        src="/images/about.png"
        alt="Precious Okoro"
        width={500}
        height={650}
        className="relative rounded-3xl border border-slate-800"
      />
    </div>
  );
}
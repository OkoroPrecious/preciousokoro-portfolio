import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="text-xl font-bold tracking-tight"
    >
      Precious<span className="text-blue-500"></span>
    </Link>
  );
}
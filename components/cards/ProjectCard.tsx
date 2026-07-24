import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Globe } from "lucide-react";
import Tag from "../shared/Tag";



interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string | null;
  live: string | null;
  caseStudy: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  github,
  live,
  caseStudy,
}: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 transition-all duration-300 hover:-translate-y-2 hover:border-amber-500/40 hover:shadow-2xl">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="space-y-5 p-8">
        <h3 className="text-2xl font-bold text-white">{title}</h3>

        <p className="leading-7 text-slate-400">{description}</p>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Tag key={tech} label={tech} />
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-6 pt-3">
          <Link
            href={caseStudy}
            className="inline-flex items-center gap-2 font-medium text-amber-400 transition hover:text-amber-300"
          >
            View Case Study
            <ArrowUpRight size={18} />
          </Link>

          {live && (
            <Link
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-400 transition hover:text-white"
            >
              <Globe size={18} />
              Live Demo
            </Link>
          )}

          {github && (
            <Link
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-300 transition hover:text-white"
            >
              {/* <Github size={18} /> */}
              GitHub
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
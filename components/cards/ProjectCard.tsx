 "use client"
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Globe,
  // Github,
} from "lucide-react";
import Tag from "../shared/Tag";



interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;

  technologies: string[];

  responsibilities: string[];

  features: string[];

  results: string[];

  github: string | null;

  live: string | null;
}

export default function ProjectCard({
  title,
  subtitle,
  description,
  image,
  technologies,
  responsibilities,
  features,
  results,
  github,
  live,
}: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 transition-all duration-300 hover:border-amber-500/40 hover:shadow-2xl">

      {/* Project Image */}

      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 hover:scale-105"
        />
      </div>

      {/* Content */}

      <div className="space-y-6 p-8">

        <div>
          <h3 className="text-3xl font-bold text-white">
            {title}
          </h3>

          <p className="mt-2 text-amber-400">
            {subtitle}
          </p>
        </div>

        <p className="leading-8 text-slate-400">
          {description}
        </p>

        {/* Technologies */}

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Tag
              key={tech}
              label={tech}
            />
          ))}
        </div>

        {/* Buttons */}

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-800 pt-6">

          {/* Left */}

          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-2 font-semibold text-amber-400 transition hover:text-amber-300"
          >
            {expanded ? "Hide Case Study" : "View Case Study"}

            {expanded ? (
              <ChevronUp size={18} />
            ) : (
              <ChevronDown size={18} />
            )}
          </button>

          {/* Right */}

          <div className="flex flex-wrap items-center gap-3">

            {live && (
              <Link
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-5 py-3 font-semibold text-black transition hover:bg-amber-300"
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
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 text-slate-200 transition hover:border-amber-400"
              >
                {/* <Github size={18} /> */}

                GitHub
              </Link>
            )}

          </div>

        </div>

        {/* Expandable Section */}

        {expanded && (
          <div className="space-y-8 border-t border-slate-800 pt-8">

            {/* Responsibilities */}

            <div>

              <h4 className="mb-4 text-xl font-semibold text-white">
                My Responsibilities
              </h4>

              <ul className="space-y-3">
                {responsibilities.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-1 text-amber-400"
                    />

                    <span className="text-slate-400">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

            </div>

            {/* Features */}

            <div>

              <h4 className="mb-4 text-xl font-semibold text-white">
                Key Features
              </h4>

              <ul className="space-y-3">
                {features.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-1 text-amber-400"
                    />

                    <span className="text-slate-400">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

            </div>

            {/* Results */}

            <div>

              <h4 className="mb-4 text-xl font-semibold text-white">
                Results
              </h4>

              <ul className="space-y-3">
                {results.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-1 text-amber-400"
                    />

                    <span className="text-slate-400">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

            </div>

          </div>
        )}

      </div>

    </article>
  );
}
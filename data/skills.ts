import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiWordpress,
  SiGit,
  SiGithub,
  SiVercel,
  SiPostman,
  SiFigma,
  SiHtml5,
  
} from "react-icons/si";

import { IconType } from "react-icons";

export interface Skill {
  name: string;
  icon: IconType;
}

export const skills: Skill[] = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiTailwindcss },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "WordPress", icon: SiWordpress },
  { name: "Vercel", icon: SiVercel },
  { name: "Postman", icon: SiPostman },
  { name: "Figma", icon: SiFigma },
];
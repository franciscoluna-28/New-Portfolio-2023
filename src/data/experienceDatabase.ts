import { Icon } from "@fortawesome/fontawesome-svg-core";
import { FaHtml5, FaCss3, FaReact, FaJsSquare, FaGithub, FaFigma } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiSass,
  SiNextdotjs,
  SiFirebase,
  SiInsomnia,
  SiAstro,
} from "react-icons/si";
import { SiDaisyui, SiVite } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNpm } from "react-icons/fa";



interface TechnologyList {
  name: string;
  icon: Icon | any;
  id: number;
}

export interface Technology {
  bannerName: string;
  id: number;
  technologies: TechnologyList[];
}

export const experienceAndSkills: Technology[] = [
  {
    bannerName: "Front End Development",
    id: 1,
    technologies: [
      {
        name: "HTML",
        icon: FaHtml5,
        id: 1,
      },
      {
        name: "CSS",
        icon: FaCss3,
        id: 2,
      },
      {
        name: "React",
        icon: FaReact,
        id: 3,
      },
      {
        name: "JavaScript",
        icon: FaJsSquare,
        id: 4,
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        id: 5,
      },
      {
        name: "Tailwind",
        icon: SiTailwindcss,
        id: 6,
      },
      {
        name: "Sass",
        icon: SiSass,
        id: 7,
      },
      {
        name: "Github",
        icon: FaGithub,
        id: 8,
      },
      {
        name: "Figma",
        icon: FaFigma,
        id: 9,
      },
      {
        name: "Vite",
        icon: SiVite,
        id: 10,
      },
      {
        name: "Astro",
        icon: SiAstro,
        id: 11,
      },
      {
        name: "NextJS",
        icon: SiNextdotjs,
        id: 12,
      },
    ],
  },
  {
    bannerName: "Backend Development",
    id: 2,
    technologies: [
      {
        name: "Prisma",
        icon: SiPrisma,
        id: 1,
      },
      {
        name: "Node.js",
        icon: SiNodedotjs,
        id: 2,
      },
      {
        name: "MySQL",
        icon: SiMysql,
        id: 3,
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        id: 4,
      },
      {
        name: "Express",
        icon: SiExpress,
        id: 5,
      },
      {
        name: "NPM",
        icon: FaNpm,
        id: 6,
      },
      {
        name: "Firebase",
        icon: SiFirebase,
        id: 7,
      },
      {
        name: "Insomnia",
        icon: SiInsomnia,
        id: 8,

      }
    ],
  },
];

import { Icon } from "@fortawesome/fontawesome-svg-core";
import { FaHtml5, FaCss3, FaReact, FaJsSquare, FaGithub, FaFigma } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiSass,
  SiNextdotjs,
} from "react-icons/si";
import { SiDaisyui, SiVite } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNpm } from "react-icons/fa";


enum ExperienceLevels {
  Experienced = "Experienced",
  Intermediate = "Intermediate",
  Beginner = "Beginner",
}

interface TechnologyList {
  name: string;
  level: ExperienceLevels;
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
        level: ExperienceLevels.Experienced,
        icon: FaHtml5,
        id: 1,
      },
      {
        name: "CSS",
        level: ExperienceLevels.Experienced,
        icon: FaCss3,
        id: 2,
      },
      {
        name: "React",
        level: ExperienceLevels.Intermediate,
        icon: FaReact,
        id: 3,
      },
      {
        name: "JavaScript",
        level: ExperienceLevels.Experienced,
        icon: FaJsSquare,
        id: 4,
      },
      {
        name: "TypeScript",
        level: ExperienceLevels.Intermediate,
        icon: SiTypescript,
        id: 5,
      },
      {
        name: "Tailwind",
        level: ExperienceLevels.Intermediate,
        icon: SiTailwindcss,
        id: 6,
      },
      {
        name: "Sass",
        level: ExperienceLevels.Intermediate,
        icon: SiSass,
        id: 7,
      },
      {
        name: "Github",
        level: ExperienceLevels.Intermediate,
        icon: FaGithub,
        id: 8,
      },
      {
        name: "Figma",
        level: ExperienceLevels.Intermediate,
        icon: FaFigma,
        id: 9,
      },
      {
        name: "Vite",
        level: ExperienceLevels.Experienced,
        icon: SiVite,
        id: 10,
      },
      {
        name: "DaisyUI",
        level: ExperienceLevels.Intermediate,
        icon: SiDaisyui,
        id: 11,
      },
      {
        name: "NextJS",
        level: ExperienceLevels.Beginner,
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
        level: ExperienceLevels.Beginner,
        icon: SiPrisma,
        id: 1,
      },
      {
        name: "Node.js",
        level: ExperienceLevels.Intermediate,
        icon: SiNodedotjs,
        id: 2,
      },
      {
        name: "MySQL",
        level: ExperienceLevels.Beginner,
        icon: SiMysql,
        id: 3,
      },
      {
        name: "MongoDB",
        level: ExperienceLevels.Intermediate,
        icon: SiMongodb,
        id: 4,
      },
      {
        name: "Express",
        level: ExperienceLevels.Intermediate,
        icon: SiExpress,
        id: 5,
      },
      {
        name: "NPM",
        level: ExperienceLevels.Intermediate,
        icon: FaNpm,
        id: 6,
      },
    ],
  },
];

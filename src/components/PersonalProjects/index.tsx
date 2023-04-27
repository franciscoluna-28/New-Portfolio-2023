import { createdProjects } from "./data";
import ProjectCard, { project } from "../ProjectCard";
import { useContext } from 'react';
import { MainTechnologyContext } from '../../context/MainTechnologyContext';
import { motion } from "framer-motion";

export default function PersonalProjects() {
  const { selectedTechnology } = useContext(MainTechnologyContext);

  // Filtering projects according to the selected technology
  const filteredProjects: Array<project> = selectedTechnology
    ? createdProjects.filter((project) => project.mainTechnology === selectedTechnology)
    : createdProjects;

  return (
    <motion.div
    viewport={{once: false}}
      initial={{opacity: 0, x: 50}}
      whileInView={{opacity: 1, x:0}}
      transition={{type: "spring", duration: 1, delay: .15}}
      >
    <div className="flex flex-col justify-center items-center py-12">
    <h3
            className="font-bold text-4xl lex text-left max-639:justify-center max-639:text-4xl main
     text-mainDarkCyan dark:text-white lg:text-5xl"
          >
            Projects
          </h3>
          <h4 className="text-mainDarkBlue text-2xl dark:text-mainCyan font-bold text-left 
flex py-2 max-639:justify-center lg:text-3xl">
            That I've created
          </h4>
          <p className="dark:text-mainSilver/80 md:text-xl">See what I'm able to do</p>
          </div>
    <div className="flex gap-4 lg:gap-10 justify-center flex-wrap">
      
      {filteredProjects.map((project) => (
        <ProjectCard {...project} />
      ))}
    </div>
    </motion.div>

  );
}
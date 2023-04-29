import { createdProjects } from "./data";
import ProjectCard, { project } from "../ProjectCard";
import { useContext } from "react";
import { MainTechnologyContext } from "../../context/MainTechnologyContext";
import { motion } from "framer-motion";

export default function PersonalProjects() {
  const { selectedTechnology } = useContext(MainTechnologyContext);

  // Filtering projects according to the selected technology
  const filteredProjects: Array<project> = selectedTechnology
    ? createdProjects.filter(
        (project) => project.mainTechnology === selectedTechnology
      )
    : createdProjects;

  return (
    <motion.div
      viewport={{ once: false }}
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", duration: 1, delay: 0.15 }}
    >
      <div className="flex gap-4 lg:gap-10 justify-center flex-wrap mt-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </motion.div>
  );
}

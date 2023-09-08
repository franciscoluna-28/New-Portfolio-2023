import { createdProjects } from "../../data/projectDatabase";
import ProjectCard, { project } from "../ProjectCard";
import { useContext } from "react";
import { MainTechnologyContext } from "../../context/MainTechnologyContext";

export default function PersonalProjects() {
  const { selectedTechnology } = useContext(MainTechnologyContext);

  // Filtering projects according to the selected technology
  const filteredProjects: Array<project> = selectedTechnology
    ? createdProjects.filter(
        (project) => project.mainTechnology === selectedTechnology
      )
    : createdProjects;



  return (
    <div className="m-auto w-full flex gap-4 lg:gap-10 justify-center flex-wrap mt-6">
        {filteredProjects.map((project) => (          

            <ProjectCard {...project} key={project.id} />
        ))}

    </div>
  );
}

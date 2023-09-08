// Projects.tsx
import { motion } from 'framer-motion';
import { FilterByMainTechnology } from '../components/FilterByMainTechnologyDropdown';
import PersonalProjects from '../components/PersonalProjects';
import { MainTechnologyProvider } from '../context/MainTechnologyContext'
import { useContext } from "react";
import { RefContext } from "../context/ScrollContext";


export default function Projects() {
  const { portfolioRef } = useContext(RefContext);
  
  return (
    <>
    <MainTechnologyProvider>
    <div className="flex flex-col justify-center items-center pb-4 pt-12" ref={portfolioRef}>
    <h3
            className="font-bold text-4xl lex text-left max-639:justify-center max-639:text-4xl main
     text-mainExtraDarkBlue dark:text-white lg:text-5xl"
          >
            Finished
          </h3>
          <h4 className="text-mainDarkCyan text-2xl dark:text-mainCyan font-bold text-left 
flex py-2 max-639:justify-center lg:text-3xl mb-2">
            Projects
          </h4>
          <p className="dark:text-mainSilver/80 text-lg text-center text-mainExtraDarkBlue/70 leading-loose">Showcase of side projects and websites made for clients.</p>
          </div>
    <FilterByMainTechnology/>
    
          <PersonalProjects />
          
    </MainTechnologyProvider>
    </>
  )
}
// Projects.tsx
import { motion } from 'framer-motion';
import { FilterByMainTechnology } from '../components/FilterByMainTechnologyDropdown';
import PersonalProjects from '../components/PersonalProjects';
import { MainTechnologyProvider } from '../context/MainTechnologyContext'

export default function Projects() {
  
  return (
    <>
    <MainTechnologyProvider>
    <div className="flex flex-col justify-center items-center pb-4 pt-12">
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
    <FilterByMainTechnology/>
    
          <PersonalProjects />
          
    </MainTechnologyProvider>
    </>
  )
}
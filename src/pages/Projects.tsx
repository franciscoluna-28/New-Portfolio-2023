// Projects.tsx
import { motion } from 'framer-motion';
import { FilterByMainTechnology } from '../components/FilterByMainTechnologyDropdown';
import PersonalProjects from '../components/PersonalProjects';
import { MainTechnologyProvider } from '../context/MainTechnologyContext'

export default function Projects() {
  
  return (
    <>
    <MainTechnologyProvider>
    <div className="flex flex-col justify-center items-center pb-4 pt-12" id='projects'>
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
          <p className="dark:text-mainSilver/80 md:text-xl text-center leading-loose">Showcase of my personal finished projects. I explain the
          problem I wanted to solve and the technologies and concepts I applied</p>
          </div>
    <FilterByMainTechnology/>
    
          <PersonalProjects />
          
    </MainTechnologyProvider>
    </>
  )
}
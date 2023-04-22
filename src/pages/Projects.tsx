// Projects.tsx
import { motion } from 'framer-motion';
import { FilterByMainTechnology } from '../components/FilterByMainTechnologyDropdown';
import PersonalProjects from '../components/PersonalProjects';
import { MainTechnologyProvider } from '../context/MainTechnologyContext'

export default function Projects() {
  return (
    <MainTechnologyProvider>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}>
        <section className='p-4 lg:p-4 flex items-center flex-col justify-center min-h-screen'>
          <div className='flex items-center flex-col'>
          <h1 className="font-bold text-4xl flex text-left max-639:justify-center max-639:text-4xl main text-mainDarkCyan dark:text-white lg:text-5xl py-2 pt-8 pl-3 relative dark:main-title">
            My Projects
          </h1>
          <h2 className='text-mainDarkBlue py-2 dark:text-mainCyan font-bold text-3xl text-left 
      flex max-639:justify-center lg:text-4xl'>See what I'm able to do</h2>
          <p className='text-center text-mainExtraDarkBlue/70 pt-2 dark:text-mainSilver mb-4 max-w-7xl leading-loose'>Check out my showcase of front-end development projects! From sleek and modern web designs to interactive user interfaces, I've worked on a variety of projects to bring your vision to life. Browse through my portfolio to see examples of my work and how I can help you take your online presence to the next level. Let's turn your ideas into reality!</p>
          <FilterByMainTechnology/>
          </div>
          <PersonalProjects />
        </section>
      </motion.div>
    </MainTechnologyProvider>
  )
}
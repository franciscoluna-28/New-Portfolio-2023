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
          <h1 className="font-bold text-4xl flex text-left max-639:justify-center max-639:text-4xl main text-mainDarkCyan dark:text-white lg:text-5xl my-12 pl-3 relative dark:main-title">
            My Projects
          </h1>
          <FilterByMainTechnology/>
          <PersonalProjects />
        </section>
      </motion.div>
    </MainTechnologyProvider>
  )
}
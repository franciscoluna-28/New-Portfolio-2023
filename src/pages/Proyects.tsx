import { motion } from 'framer-motion';

export default function Projects(){
    return(
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}>
        <section className="p-8">
        <h1 className='font-bold text-4xl flex py-2 justify-center max-639:text-4xl main
           text-mainDarkCyan dark:text-white lg:text-5xl'>My projects</h1>
        </section>
        </motion.div>
    )
}
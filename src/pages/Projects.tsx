import { motion } from 'framer-motion';
import blogImage from "../assets/projects/blog.png"
import weatherImage from "../assets/projects/weather-app.png"
import { FaGithub } from 'react-icons/fa';
import { SiNetlify } from 'react-icons/si';

export default function Projects() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}>
            <section className='p-4 lg:p-4 flex items-center flex-col justify-center min-h-screen'>
            <h1 className="font-bold text-4xl flex text-left max-639:justify-center max-639:text-4xl main
           text-mainDarkCyan dark:text-white lg:text-5xl my-12 pl-3 relative dark:main-title">
   My Projects
</h1>

                <div className='flex gap-8 justify-center flex-wrap'>

            
                    
                    <div className="card w-auto max-w-2xl shadow-xl dark:bg-gradient-to-r dark:from-mainDarkBlue/50 dark:to-mainDarkBlue/30 hover:scale-105 duration-300">
                        <figure><img className='' src={blogImage} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title dark:text-white text-black font-bol">
                                Personal Blog
                                <div className="badge dark:bg-mainCyan dark:text-mainExtraDarkBlue/70 bg-mainDarkCyan outline-none border-transparent text-white">TypeScript</div>
                            </h2>
                            <p className='my-2'>Project made as a hobbie
                                using TypeScript, SASS,
                                JavaScript, Gulp and
                                ES6. Learned a lot making this one</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline glow-main">Components</div>
                                <div className="badge badge-outline">SASS</div>
                                <FaGithub className='text-xl dark:text-white' />
                                <SiNetlify className='text-xl dark:text-mainCyan' />
                            </div>
                        </div>
                    </div>
                    <div className="card w-auto max-w-2xl shadow-xl dark:bg-gradient-to-r dark:from-mainDarkBlue/50 dark:to-mainDarkBlue/30 hover:scale-105 duration-300">
                        <figure><img className='' src={weatherImage} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title dark:text-white text-black font-bol">
                                Weather App
                                <div className="badge dark:bg-mainCyan dark:text-mainExtraDarkBlue/70 bg-mainDarkCyan outline-none border-transparent text-white">React</div>
                            </h2>
                            <p className='my-2'>Project made as a hobbie
                                using TypeScript, SASS,
                                JavaScript, Gulp and
                                ES6. Learned a lot making this one</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline glow-main">Headless UI</div>
                                <div className="badge badge-outline">React Hooks</div>
                                <FaGithub className='text-xl' />
                                <SiNetlify className='text-xl' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>

    )
}
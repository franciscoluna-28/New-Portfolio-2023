import { BsCheck } from "react-icons/bs"
import { motion } from "framer-motion"


export default function Services() {
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
     text-mainExtraDarkBlue dark:text-white lg:text-5xl"
          >
            Services
          </h3>
          <h4 className="text-mainDarkCyan text-2xl dark:text-mainCyan font-bold text-left 
flex py-2 max-639:justify-center lg:text-3xl">
            I offer
          </h4>
          <p className="dark:text-mainSilver/80 md:text-xl">As a Front - End developer</p>
          </div>



          

      <div className="grid grid-flow-row gap-8 lg:grid-cols-3">
        <article className="service dark:bg-mainDarkBlue/50 rounded-b-lg w-full
h-fit dark:hover:bg-mainDarkBlue/40
border-2 p-1 dark:hover:border-mainCyan min-h-full duration-300 bg-white hover:border-mainDarkCyan dark:border-mainCyan/50 shadow-xl dark:hover:shadow-mainCyan/10">
          <div className="dark:bg-mainCyan dark:text-mainExtraDarkBlue overflow-hidden p-8 rounded-b-lg shadow-lg 
dark:hover:bg-mainDarkCyan duration-300 bg-mainDarkCyan text-white font-semibold">
            <h3 className="">UI/UX Design</h3>
          </div>
          <ul className="p-8">
            <li className="flex flex-row gap-4 mb-3">
            <div className="w-10">
                <BsCheck className="dark:text-mainCyan text-mainDarkCyan text-start text-lg" />
              </div>
              <p className="dark:text-mainSilver font-semibold text-mainExtraDarkBlue/90 text-left">Custom website design with a focus on user experience and interface, utilizing Figma to bring your ideas to life.</p>
            </li>
            <li className="flex flex-row gap-4 mb-3">
              
            <div className="w-10">
                <BsCheck className="dark:text-mainCyan text-mainDarkCyan text-start text-lg" />
              </div>
              <p className="dark:text-mainSilver font-semibold text-mainExtraDarkBlue/90 text-left">Responsive designs for both desktop and mobile devices, including landing pages, blogs, and more.</p>
            </li>
            <li className="flex flex-row gap-4 mb-3">
            <div className="w-10">
                <BsCheck className="dark:text-mainCyan text-mainDarkCyan text-start text-lg" />
              </div>
              <p className="dark:text-mainSilver font-semibold text-mainExtraDarkBlue/90 text-left">Regular sharing of prototypes for easy tracking of progress and modifications.</p>
            </li>


          </ul>
        </article>

        <article className="service dark:bg-mainDarkBlue/50 rounded-b-lg w-full
h-fit dark:hover:bg-mainDarkBlue/40 min-h-full
border-2 p-1 dark:hover:border-mainCyan duration-300 bg-white hover:border-mainDarkCyan dark:border-mainCyan/50 shadow-xl dark:hover:shadow-mainCyan/10">
          <div className="dark:bg-mainCyan dark:text-mainExtraDarkBlue overflow-hidden p-8 rounded-b-lg shadow-lg 
dark:hover:bg-mainDarkCyan duration-300 bg-mainDarkCyan text-white font-semibold">
            <h3 className="">Front End Development</h3>
          </div>
          <ul className="p-8">
          <li className="flex flex-row gap-4 mb-3">
              <div className="w-10">
                <BsCheck className="dark:text-mainCyan text-mainDarkCyan text-start text-lg" />
              </div>
              <p className="dark:text-mainSilver text-mainExtraDarkBlue/90 text-left font-semibold">Creation of fully responsive websites with Flexbox and CSS Grid.</p>
            </li>
            <li className="flex flex-row gap-4 mb-3">
              <div className="w-10">
                <BsCheck className="dark:text-mainCyan text-mainDarkCyan text-start text-lg" />
              </div>
              <p className="dark:text-mainSilver text-mainExtraDarkBlue/90 text-left font-semibold">I use modern technologies like React, TypeScript, SASS, Tailwind and Express for creating a professional website.</p>
            </li>
            <li className="flex flex-row gap-4 mb-3">
              <div className="w-10">
                <BsCheck className="dark:text-mainCyan text-mainDarkCyan text-start text-lg" />
              </div>
              <p className="dark:text-mainSilver text-mainExtraDarkBlue/90 text-left font-semibold">API integrations, component creation, organized stylesheets, and various frontend functionalities like forms and authentication are implemented to ensure your website is tailored to your needs.</p>
            </li>
          </ul>
        </article>


        <article className="service dark:bg-mainDarkBlue/50 rounded-b-lg w-full
h-fit dark:hover:bg-mainDarkBlue/40 min-h-full
border-2 p-1 dark:hover:border-mainCyan duration-300 bg-white hover:border-mainDarkCyan dark:border-mainCyan/50 shadow-xl dark:hover:shadow-mainCyan/10">
          <div className="dark:bg-mainCyan dark:text-mainExtraDarkBlue overflow-hidden p-8 rounded-b-lg shadow-lg 
dark:hover:bg-mainDarkCyan duration-300 bg-mainDarkCyan text-white font-semibold">
            <h3 className="">Basic Backend Development</h3>
          </div>
          <ul className="p-8">
            <li className="flex flex-row gap-4 mb-3">
            <div className="w-10">
                <BsCheck className="dark:text-mainCyan text-mainDarkCyan text-start text-lg" />
              </div>
              <p className="dark:text-mainSilver font-semibold text-mainExtraDarkBlue/90 text-left">Creation of custom API routes and basic authentication with NodeJS, Express, and Firebase.</p>
            </li>
            <li className="flex flex-row gap-4 mb-3">
            <div className="w-10">
                <BsCheck className="dark:text-mainCyan text-mainDarkCyan text-start text-lg" />
              </div>
              <p className="dark:text-mainSilver font-semibold text-mainExtraDarkBlue/90 text-left">Database entity and table creation using MySQL and Prisma, including complex relationship handling.</p>
            </li>

            <li className="flex flex-row gap-4 mb-3">
            <div className="w-10">
                <BsCheck className="dark:text-mainCyan font-semibold text-mainDarkCyan text-start text-lg" />
              </div>
              <p className="dark:text-mainSilver font-semibold text-mainExtraDarkBlue/90 text-left">Deployment of websites and applications using Vercel, Netlify, or custom hosting.</p>
            </li>
            <li className="flex flex-row gap-4 mb-3">
            <div className="w-10">
                <BsCheck className="dark:text-mainCyan font-semibold text-mainDarkCyan text-start text-lg" />
              </div>
              <p className="dark:text-mainSilver font-semibold text-mainExtraDarkBlue/90 text-left">Creation of NoSQL databases using MongoDB and Mongoose.</p>
            </li>

          </ul>
        </article>
      </div>
      </motion.div>

  )
}


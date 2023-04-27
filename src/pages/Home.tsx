import personalImage from "../assets/testImage.jpg";
import NavigationButton from "../components/Buttons/NavigationButton";
import SkillsIcons from "../components/Icons/SkillIscons";
import { motion } from 'framer-motion';
import { AiOutlineMail } from "react-icons/ai"
import { FaWhatsapp } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";





import "../utils/glowStyles.css";

import ProjectsCarousel from "../components/ProjectsCarousel";
import Services from "../components/Services";
import PersonalProjects from "../components/PersonalProjects";


export default function Home() {





  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}>
      <section className="p-8 lg:p-16 flex items-center flex-col justify-center min-h-screen">
        <article className="flex items-center flex-col text-center">
          <div className="flex flex-col items-center lg:grid lg:grid-flow-col lg:gap-12 lg:justify-center lg:px-8 py-24">
            <figure className="py-4">
              <img
                className="h-52 w-52 z-40 rounded-full border-white animate border-2 border-double main-image p-1 
            floating glow-main lg:h-72 lg:w-72"
                src={personalImage}
                alt="Francisco Luna"
              ></img>
            </figure>
            <div className="px-auto lg:px-16">
              <article className="py-4">
                <h1
                  className="font-bold text-4xl flex text-left py-2 max-639:justify-center max-639:text-4xl main
           text-mainDarkCyan dark:text-white lg:text-5xl"
                >
                  Hi! I'm Francisco Luna
                </h1>
                <h2 className="text-mainDarkBlue dark:text-mainCyan font-bold text-3xl text-left 
      flex py-2 max-639:justify-center lg:text-4xl">
                  Front End Developer
                </h2>
                <p
                  className="text-silver leading-loose py-2 text-left w-auto max-639:w-72 max-639:m-auto max-639:text-center text-xl dark:text-mainSilver
            text-mainDarkBlue/70"
                >
                  Welcome to my portfolio! I'm Francisco, 18 years old Front End Developer from Venezuela. I'm currently
                  studying Systems Engineering at the university. My main job is creating web applications
                  for the web, whether you need to grow your business, personal brand or want to create your dream
                  project. Here you'll be able to see my projects and reach me,  I'll be glad to help.
                </p>
              </article>

              <div className="w-full flex gap-4 flex-col md:flex-row">
                <NavigationButton
                  text={"Contact"}
                  route={"/contact"}
                  styleClass={"primary-button"}
                />
                <div className="w-full">
                  <a href="/public/Francisco Luna 2023 Resume EN.pdf" download="">
                    <button className={"secondary-button"}>My CV in English</button>
                  </a>
                </div>


              </div>
              <motion.div
                animate={{
                  opacity: [0, 1, 0],
                  transition: { duration: 4, times: [0, 0.5, 1], repeat: Infinity }
                }}
              >
                <SkillsIcons />
              </motion.div>

            </div>

          </div>

          <div className="flex flex-col justify-center items-center py-12">
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
          <NavigationButton text={"My Projects"} route={"/projects"} styleClass={"primary-button my-4"}/>
          </div>

          <ProjectsCarousel />
          <Services />
          <PersonalProjects />

        </article>











        <div className="py-20 w-1/2">
          <h2
            className="font-bold text-4xl flex justify-center text-left max-639:justify-center max-639:text-4xl main
           text-mainDarkCyan dark:text-white lg:text-5xl py-8"
          >
            Where I'm



          </h2>


          <p className="text-center text-mainSilver/50 py-2"></p>
          <div className="flex gap-4 py-4 w-full flex-col">

            <section className="h-fit dark:bg-mainDarkBlue/40 rounded-xl p-8 w-full dark:hover:bg-transparent
            border-2 border-transparent dark:hover:border-mainCyan duration-300 bg-white hover:border-mainDarkCyan shadow-lg">
              <div className="flex flex-col items-center">
                <AiOutlineMail className="text-xl mb-2 dark:text-white" />
                <h5 className="dark:text-white font-semibold text-mainExtraDarkBlue/90">Email</h5>
                <p className="dark:text-white font-semibold py-2 text-mainExtraDarkBlue/90">franciscoluna2004@gmail.com</p>
                <a href="#"><span className="block dark:text-mainCyan text-mainDarkCyan">Send a message</span></a>
              </div>
            </section>
            <section className="h-fit dark:bg-mainDarkBlue/40 rounded-xl p-8 w-full dark:hover:bg-transparent
            border-2 border-transparent dark:hover:border-mainCyan duration-300 bg-white hover:border-mainDarkCyan shadow-lg">
              <div className="flex flex-col items-center">
                <FaWhatsapp className="text-xl mb-2 dark:text-white" />
                <h5 className="dark:text-white font-semibold text-mainExtraDarkBlue/90">Whatsapp</h5>
                <p className="dark:text-white font-semibold py-2 text-mainExtraDarkBlue/90">+58 4243772811</p>
                <a href="#"><span className="block dark:text-mainCyan text-mainDarkCyan">Send a message</span></a>
              </div>
            </section>
            <section className="h-fit dark:bg-mainDarkBlue/40 rounded-xl p-8 w-full dark:hover:bg-transparent
            border-2 border-transparent dark:hover:border-mainCyan duration-300 bg-white hover:border-mainDarkCyan shadow-lg">
              <div className="flex flex-col items-center">
                <FaDiscord className="text-xl mb-2 dark:text-white" />
                <h5 className="dark:text-white font-semibold text-mainExtraDarkBlue/90">Discord</h5>
                <p className="dark:text-white font-semibold py-2 text-mainExtraDarkBlue/90">xFran#3250</p>
                <a href="#"><span className="block dark:text-mainCyan text-mainDarkCyan">Send a message</span></a>
              </div>
            </section>

          </div>
          <NavigationButton
            text={"Or send me an email"}
            route={"/contact"}
            styleClass={"primary-button w-full"}
          />
        </div>
      </section>

    </motion.div>
  );

}

import personalImage from "../assets/testImage.jpg";
import NavigationButton from "../components/Buttons/NavigationButton";
import SkillsIcons from "../components/Icons/SkillIscons";
import { motion } from "framer-motion";
import { AiOutlineMail } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";
import Footer from "../components/Footer";
import { BsChevronDoubleDown } from "react-icons/bs";
import { useRef } from "react"

import "../utils/glowStyles.css";

import ProjectsCarousel from "../components/ProjectsCarousel";
import Services from "../components/Services";
import Experience from "../components/Experience";
import Projects from "./Projects";
import Contact from "../components/Contact";





export default function Home() {
  // Scrolling views

type RefType = HTMLDivElement | null;

  // Crea la referencia y especifica el tipo
  const contactRef = useRef<RefType>(null);
  const projectsRef = useRef<RefType>(null);


  const handleClick = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleClick2 = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section className="p-8 lg:p-16 flex items-center flex-col justify-center min-h-screen">
        <article className="flex items-center flex-col text-center">
          <div className="flex flex-col items-center lg:grid lg:grid-flow-col lg:gap-12 lg:justify-center lg:px-8 py-24">
            <figure className="py-4">
              <img
                className="h-52 w-52 z-40 rounded-full border-white animate border-2 border-double main-image p-1 floating glow-main lg:h-72 lg:w-72"
                src={personalImage}
                alt="Francisco Luna"
                loading="lazy"
              ></img>
            </figure>

            <div className="px-auto lg:px-16">
              <motion.div>
                <article className="py-4">
                  <div className="flex items-center">
                  <button onClick={handleClick} className="dark:text-white font-bold flex items-center gap-4"><BsChevronDoubleDown/>Go to contact</button>
                  <Footer />
                  </div>
                  <h1
                    className="font-bold text-4xl flex text-left py-2 max-639:justify-center max-639:text-4xl main
           text-mainDarkCyan dark:text-white lg:text-5xl"
                  >
                    Hello! I'm Francisco Luna
                  </h1>
                  <h2
                    className="text-mainDarkBlue dark:text-mainCyan font-bold text-3xl text-left 
      flex py-2 max-639:justify-center lg:text-4xl"
                  >
                    Front End Developer
                  </h2>
                  <p
                    className="text-silver leading-loose py-2 text-left w-auto max-639:w-72 max-639:m-auto max-639:text-center text-xl dark:text-mainSilver
            text-mainDarkBlue/70"
                  >
                    Welcome to my portfolio! I'm Francisco, 18 years old Front
                    End Developer from Venezuela. I'm currently studying Systems
                    Engineering at Bicentenary University of Aragua. My main job is creating web
                    applications for the web, whether you need to grow your
                    business, personal brand or want to create your dream
                    project. Here you'll be able to see my projects and reach
                    me, I'll be glad to help.
                  </p>
                </article>
              </motion.div>

              <div className="w-full flex gap-4 flex-col md:flex-row">
                <NavigationButton
                  text={"Contact"}
                  route={"/contact"}
                  styleClass={"primary-button"}
                />
                <div className="w-full">
                  <a
                    href="https://drive.google.com/uc?export=download&id=1dyDveL2OwgV9bIb7XbXJsJUGvZedIhcO"
                    download=""
                  >
                    <button className={"secondary-button"}>
                      My CV in English
                    </button>
                  </a>
                </div>
              </div>

              <motion.div
                animate={{
                  opacity: [0, 1, 0],
                  transition: {
                    duration: 4,
                    times: [0, 0.5, 1],
                    repeat: Infinity,
                  },
                }}
              >
                <SkillsIcons />
              </motion.div>
            </div>
          </div>

          <motion.div
            viewport={{ once: false }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", duration: 1, delay: 0.15 }}
          >
            <Experience />
            <button onClick={handleClick2}
          className={"primary-button mt-12 w-full"}
        >See my projects</button>
            <ProjectsCarousel />
          </motion.div>

          <Services />
          <div ref={projectsRef}>
          <Projects />
          </div>

        </article>

         
                <div className="w-full" ref={contactRef}>
                <Contact/>
                </div>


      </section>
    </motion.div>
  );
}


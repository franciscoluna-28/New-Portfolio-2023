import personalImage from "../assets/franciscoluna.jpg";
import NavigationButton from "../components/Buttons/NavigationButton";
import SkillsIcons from "../components/Icons/SkillIscons";
import { motion } from "framer-motion";
import { useContext } from "react";
import { RefContext } from "../context/ScrollContext";

import "../utils/glowStyles.css";

import ProjectsCarousel from "../components/ProjectsCarousel";
import Services from "../components/Services";
import Experience from "../components/Experience";
import Projects from "./Projects";
import Contact from "../components/Contact";
import MainSocialMedia from "../components/MediaLinks";
import UIUXDesign from "../components/About";
import { ScrollToComponent } from "../hooks/ScrollToComponent";
import Testimonial from "../components/testimonials/testimonial";

export default function Home() {
  const { contactRef, portfolioRef, homeRef } = useContext(RefContext);

  const scrollToContactRef = ScrollToComponent({ rootRef: contactRef });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section
        className="p-4 min-w-full lg:p-16 lg:mt-0 mt-16 flex items-center flex-col justify-center min-h-screen overflow-x-hidden"
        ref={homeRef}
      >
        <article className="flex items-center flex-col text-center w-full">
          <div className="flex flex-col items-center lg:grid lg:grid-flow-col lg:gap-12 lg:justify-center lg:px-8 lg:12 py-4">
            <figure className="py-4">
              <img
                className="h-52 w-52 z-40 rounded-full border-white animate border-2 border-double main-image p-1 floating glow-main lg:h-72 lg:w-72"
                src={personalImage}
                alt="Francisco Luna"
                loading="lazy"
              ></img>
            </figure>

            <div className="px-auto lg:px-16">
              <article className="py-4">
                <div className="flex items-center">
                  <button
                    onClick={scrollToContactRef}
                    className="dark:text-white text-mainExtraDarkBlue font-bold flex items-center gap-4"
                  >
                    Go to contact
                  </button>
                  <MainSocialMedia />
                </div>
                <h1
                  className="font-bold text-4xl flex text-left py-2 max-639:justify-center max-639:text-4xl main
           text-mainExtraDarkBlue dark:text-white lg:text-5xl"
                >
                  Hello! I'm Francisco Luna
                </h1>
                <h2
                  className="text-mainDarkCyan dark:text-mainCyan font-bold text-3xl text-left 
      flex py-2 max-639:justify-center lg:text-4xl"
                >
                  Front End Developer
                </h2>
                <p className="text-silver leading-loose py-2 text-left w-auto max-639:w-72 max-639:m-auto max-639:text-center text-sm dark:text-mainSilver text-mainExtraDarkBlue/70">
                  Greetings! I'm Francisco, a 19-year-old Front End Developer
                  from Venezuela, currently advancing my studies in Systems
                  Engineering at Bicentenary University of Aragua. I bring
                  expertise in crafting custom web applications, including
                  e-commerce platforms and informational websites. Feel free to
                  explore my portfolio to see my work. If you're interested in
                  discussing how I can contribute to your objectives, let's
                  connect and explore the possibilities together.
                </p>
              </article>

              <div className="w-full flex gap-4 flex-col md:flex-row">
                <button onClick={scrollToContactRef} className="primary-button">
                  Contact
                </button>
                <div className="w-full">
                  <a
                    href="https://drive.google.com/uc?export=download&id=1dyDveL2OwgV9bIb7XbXJsJUGvZedIhcO"
                    download=""
                  >
                    <button className={"secondary-button"}>English CV</button>
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
              <a
                href="https://drive.google.com/uc?export=download&id=1Ce8DzNarxyxFFP174BPCq-3tpYOP8oqU"
                download=""
              >
                <button className="lg:hidden m-auto dark:text-white pt-8 font-semibold text-mainExtraDarkblue/80 w-full text-left flex justify-center">
                  CV in Spanish
                </button>
              </a>
            </div>
          </div>

          <UIUXDesign />
          <ProjectsCarousel />

          <Experience />

          <Services />
          <div ref={portfolioRef}>
            <Projects />
          </div>
        </article>

        <section className="m-auto mt-16">
          <div className="m-auto flex flex-col items-center">
            <h3 className="text-white font-bold text-5xl">Testimonials</h3>
            <h4
              className="text-mainDarkCyan text-2xl dark:text-mainCyan font-bold text-left 
flex py-2 max-639:justify-center lg:text-3xl mb-2"
            >
              From clients
            </h4>
          </div>
          <div className="!flex !justify-center mt-4">
            <Testimonial
              name={"PlvgueDxctxr"}
              text={
                `"Fran has taken my online presence to the next level. I struggled to have a place to promote my music and thanks to him now people can see my music and download it. He was really receptive, detail oriented and he always brought new ideas to the table. If you want to establish your online presence, then he's the right person. I'd also like to say Fran is an amazing friend and human."`
              }
              title="Fran's Web Solutions: Flawless"
              role="Musician"
              profilePicture="https://plvguedxctxr.netlify.app/plaguedoctors-logo-white-no-transparent.png"
            />
          </div>
        </section>

        <div className="w-full" ref={contactRef}>
          <Contact />
        </div>
      </section>
    </motion.div>
  );
}

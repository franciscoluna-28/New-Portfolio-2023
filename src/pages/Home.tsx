import personalImage from "../assets/testImage.jpg";
import NavigationButton from "../components/Buttons/NavigationButton";
import SkillsIcons from "../components/Icons/SkillIscons";
import { motion } from "framer-motion";
import { useContext } from "react";
import { RefContext } from "../context/ScrollContext";
import Me from "../assets/me.png"


import "../utils/glowStyles.css";

import ProjectsCarousel from "../components/ProjectsCarousel";
import Services from "../components/Services";
import Experience from "../components/Experience";
import Projects from "./Projects";
import Contact from "../components/Contact";
import MainSocialMedia from "../components/MediaLinks";
import UIUXDesign from "../components/About";
import { ScrollToComponent } from "../hooks/ScrollToComponent";

export default function Home() {
  const { contactRef, portfolioRef, homeRef } = useContext(RefContext);
  
  const scrollToContactRef = ScrollToComponent({ rootRef: contactRef });
  const scrollToPortfolioRef = ScrollToComponent({ rootRef: portfolioRef });
  
  


  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}>
      <section className="p-8 min-w-full lg:p-16 flex items-center flex-col justify-center min-h-screen overflow-x-hidden" ref={homeRef}>
        <article className="flex items-center flex-col text-center w-full">
          <div className="flex flex-col items-center lg:grid lg:grid-flow-col lg:gap-12 lg:justify-center lg:px-8 lg:12 py-6">
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
                  <p
                    className="text-silver leading-loose py-2 text-left w-auto max-639:w-72 max-639:m-auto max-639:text-center text-xl dark:text-mainSilver
            text-mainDarkBlue/70"
                  >
                    Welcome to my portfolio! I'm Francisco, 18 years old Front
                    End Developer from Venezuela. I'm currently studying Systems
                    Engineering at Bicentenary University of Aragua. If you're looking to establish an online presence for your business or personal brand, I can help you achieve that through the creation of custom web applications tailored to your specific needs. Whether you need an e-commerce store, an informational website, or anything else, I'm here to assist. View my previous projects and contact me for personalized consultation. I'm ready to help you grow your online presence and reach your goals.
                  </p>
                </article>

              <div className="w-full flex gap-4 flex-col md:flex-row">
<button onClick={scrollToContactRef} className="primary-button">Contact
    
</button>
                <div className="w-full">
                  <a
                    href="https://drive.google.com/uc?export=download&id=1dyDveL2OwgV9bIb7XbXJsJUGvZedIhcO"
                    download=""
                  >
                    <button className={"secondary-button"}>
                      English CV
                    </button>
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


            <img className="bg-cover rounded-full h-72 mt-20 w-72 glow-main animate border-2 border-double main-image p-1 floating !z-0" src={Me}></img>
            <UIUXDesign />
            <Experience />
            <ProjectsCarousel />


          <Services />
          <div ref={portfolioRef}>
            <Projects />
          </div>
        </article>

        <div className="w-full" ref={contactRef}>
          <Contact />
        </div>
      </section>
      </motion.div>

  );
}

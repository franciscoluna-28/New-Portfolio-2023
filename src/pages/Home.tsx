import personalImage from "../assets/testImage.jpg";
import NavigationButton from "../components/NavigationButton";
import Footer from "../components/Footer";
import SkillsIcons from "../components/SkillIscons";
import { motion, AnimatePresence } from 'framer-motion';

import "../utils/glowStyles.css";

export default function Home() {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}>
    <section className="p-8 lg:p-16 flex items-center flex-col justify-center min-h-screen">
      <article className="flex items-center flex-col text-center">
        <div className="flex flex-col items-center lg:grid lg:grid-flow-col lg:gap-12 lg:justify-center lg:px-8">
        <figure className="py-4">
      <img
        className="h-64 w-64 rounded-full max-1279:h-48 max-1279:w-48 border-white animate border-2 border-double main-image p-1 
            floating max-767:h-32 max-767:w-32 glow-main lg:h-72 lg:w-72"
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
            text-mainDarkBlue"
      >
        18 years old Front End Developer from Venezuela. Currently
        studying a Computer Science Major and working on personal
        projects.
      </p>
      </article>
      
      <div className="w-full flex gap-4 flex-col md:flex-row">
      <NavigationButton
        text={"Contact"}
        route={"/contact"}
        styleClass={"primary-button"}
      />
      <NavigationButton
        text={"My projects"}
        route={"/projects"}
        styleClass={"secondary-button"}
      />
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
      </article>
      
      
    </section>
    <Footer></Footer>
    </motion.div>
  );

}

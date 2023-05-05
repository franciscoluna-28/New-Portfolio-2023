import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import "../../styles/navbar.css";
import { Toggle } from "../Switches/DarkModeSwitch";
import "../../utils/glowStyles.css";
import { RefObject } from "react";
import Logo from "../../assets/dibujo-min.svg"
import "../../index.css"
import { useContext } from "react";
import { RefContext } from "../../context/ScrollContext";
import { ScrollToComponent } from "../../hooks/ScrollToComponent";



export default function Navbar() {

  const {
    homeRef,
    aboutRef,
    experienceRef,
    projectsRef,
    servicesRef,
    portfolioRef,
    contactRef,
  } = useContext(RefContext);
  const scrollToHomeRef = ScrollToComponent({ rootRef: homeRef });
  const scrollToAboutRef = ScrollToComponent({ rootRef: aboutRef });
  const scrollToExperienceRef = ScrollToComponent({ rootRef: experienceRef });
  const scrollToProjectsRef = ScrollToComponent({ rootRef: projectsRef });
  const scrollToServicesRef = ScrollToComponent({ rootRef: servicesRef });
  const scrollToContactRef = ScrollToComponent({ rootRef: contactRef });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function handleMobileScroll(scrollFunction: Function){
    toggleMenu();
    scrollFunction();
  }

  return (
    <>
      <header className="p-8 lg:p-6 sticky top-0 z-50 dark:bg-mainExtraDarkBlue/90 bg-white/90 shadow-lg">
        <nav className="flex lg:justify-center items-center justify-between">
          <FaBars className="bars" onClick={toggleMenu} />
          <div className="p-4 lg:hidden">
                    <Toggle />
                  </div>

          <AnimatePresence>
            {isMenuOpen && (
              <>
                <motion.div
                  className="dark-bar-div"
                  onClick={toggleMenu}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.section
                  key="menu"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="hamburguer-bar"
                >
                  <NavLink
                    className="hamburguer-bar-link w-full"
                    to="/"
                    onClick={() => handleMobileScroll(scrollToHomeRef)}
                  >
                    Home
                  </NavLink>
                  <NavLink
                    className="hamburguer-bar-link w-full"
                    to="/"
                    onClick={() => handleMobileScroll(scrollToAboutRef)}
                  >
                    About
                  </NavLink>
                  <NavLink
                    className="hamburguer-bar-link w-full"
                    to="/"
                    onClick={() => handleMobileScroll(scrollToExperienceRef)}
                  >
                    Skills & Experience
                  </NavLink>
                  <NavLink
                    className="hamburguer-bar-link w-full"
                    to="/"
                    onClick={() => handleMobileScroll(scrollToProjectsRef)}
                  >
                    Projects
                  </NavLink>

                  <NavLink
                    className="hamburguer-bar-link w-full"
                    to="/"
                    onClick={() => handleMobileScroll(scrollToContactRef)}
                  >
                    Contact
                  </NavLink>


                  <div className="w-full" onClick={toggleMenu}>
                    <a
                      href="https://drive.google.com/uc?export=download&id=1Ce8DzNarxyxFFP174BPCq-3tpYOP8oqU"
                      download=""
                    >
                      <button className="hamburguer-bar-link w-full text-left flex justify-center">
                        Spanish CV
                      </button>
                    </a>
                  </div>
                  <div className="w-full" onClick={toggleMenu}>
                    <a
                      href="https://drive.google.com/uc?export=download&id=1dyDveL2OwgV9bIb7XbXJsJUGvZedIhcO"
                      download=""
                    >
                      <button className="hamburguer-bar-link w-full text-left flex justify-center">
                        English CV
                      </button>
                    </a>
                  </div>
                </motion.section>
              </>
            )}
          </AnimatePresence>
          <section className="hidden lg:flex gap-20 font-medium items-center">
            <NavLink className="nav-link" to="/" onClick={scrollToHomeRef}>
              Home
            </NavLink>
            <NavLink className="nav-link" to="/" onClick={scrollToAboutRef}>
              About
            </NavLink>
                        <NavLink className="nav-link" onClick={scrollToExperienceRef} to="/">
              Skills
            </NavLink>
            <NavLink className="nav-link" onClick={scrollToProjectsRef} to="/">
              Projects
            </NavLink>

            <NavLink className="nav-link" onClick={scrollToServicesRef} to="/">
              Services
            </NavLink>

            <Toggle />
            <div className="w-full">
              <a
                href="https://drive.google.com/uc?export=download&id=1Ce8DzNarxyxFFP174BPCq-3tpYOP8oqU"
                download=""
              >
                
                <button className={"primary-button px-8 py-4"}>Spanish CV</button>
              </a>
              
            </div>

              <img onClick={scrollToHomeRef} className="max-h-64 w-12 cursor-pointer" alt="Francisco Luna Logo" src={Logo}></img>

          </section>
        </nav>
      </header>
    </>
  );
}

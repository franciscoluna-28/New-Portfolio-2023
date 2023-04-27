import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import "../../styles/navbar.css"
import { Toggle } from '../Switches/DarkModeSwitch';
import "../../utils/glowStyles.css"


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <header className="p-8 lg:p-6 sticky top-0 z-50 dark:bg-mainExtraDarkBlue/90 bg-white/90 shadow-lg">
        <nav className="flex lg:justify-center">



          <FaBars
            className="bars"
            onClick={toggleMenu}
          />


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
                    className="hamburguer-bar-link"
                    to="/"
                    onClick={toggleMenu}
                  >
                    Home
                  </NavLink>
                  <NavLink
                    className="hamburguer-bar-link"
                    to="/about"
                    onClick={toggleMenu}
                  >
                    About
                  </NavLink>
                  <NavLink
                    className="hamburguer-bar-link"
                    to="/projects"
                    onClick={toggleMenu}
                  >
                    Projects
                  </NavLink>
                  <NavLink
                    className="hamburguer-bar-link"
                    to="/tech-stack"
                    onClick={toggleMenu}
                  >
                    Tech Stack
                  </NavLink>
                  <NavLink
                    className="hamburguer-bar-link"
                    to="/contact"
                    onClick={toggleMenu}
                  >
                    Contact
                  </NavLink>

                  <div className='w-full' onClick={toggleMenu}>
                    <a href="https://drive.google.com/uc?export=download&id=1Ce8DzNarxyxFFP174BPCq-3tpYOP8oqU" download="">
                      <button className='hamburguer-bar-link w-full text-left'>
                        My CV in Spanish
                      </button>
                    </a>
                  </div>
                  <div className='p-4'>
                    <Toggle />
                  </div>

                </motion.section>
              </>
            )}
          </AnimatePresence>
          <section className="hidden lg:flex gap-20 font-medium items-center">

            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className=" nav-link" to="/about">
              About
            </NavLink>
            <NavLink className="nav-link" to="/projects">
              Projects
            </NavLink>
            <NavLink className="nav-link" to="/tech-stack">
              Tech Stack
            </NavLink>
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
            <Toggle />
            <div className="w-full">
              <a href="https://drive.google.com/uc?export=download&id=1Ce8DzNarxyxFFP174BPCq-3tpYOP8oqU" download="">
                <button className={"primary-button"}>My CV in Spanish</button>
              </a>
            </div>
          </section>

        </nav>

      </header>
    </>
  );
}
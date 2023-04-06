import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Logo from './Logo';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className="bg-transparent p-8 lg:p-6">
      <nav className="flex lg:justify-center">
        <FaBars
          className="text-white text-3xl lg:hidden"
          onClick={toggleMenu}
        />
        <AnimatePresence>
          {isMenuOpen && (
            <motion.section
              key="menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden absolute top-16 left-0 right-0 z-50 bg-white"
            >
              <NavLink
                className="block px-4 py-2 dark:text-mainSilver dark:hover:text-white text-gray-800 hover:bg-gray-200"
                to="/"
                onClick={toggleMenu}
              >
                Home
              </NavLink>
              <NavLink
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                to="/about"
                onClick={toggleMenu}
              >
                About
              </NavLink>
              <NavLink
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                to="/projects"
                onClick={toggleMenu}
              >
                Projects
              </NavLink>
              <NavLink
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                to="/tech-stack"
                onClick={toggleMenu}
              >
                Tech Stack
              </NavLink>
              <NavLink
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                to="/contact"
                onClick={toggleMenu}
              >
                Contact
              </NavLink>
            </motion.section>
          )}
        </AnimatePresence>
        <section className="hidden lg:flex gap-20 font-medium">
        <Logo/>
          <NavLink className="dark:text-mainSilver dark:hover:text-white text-gray-800 border-l-4 p-2 duration-200 border-transparent dark:hover:border-l-mainCyan" to="/">
            Home
          </NavLink>
          <NavLink className=" dark:text-mainSilver dark:hover:text-white text-gray-800 border-l-4 p-2 duration-200 border-transparent dark:hover:border-l-mainCyan" to="/about">
            About
          </NavLink>
          <NavLink className=" dark:text-mainSilver dark:hover:text-white text-gray-800 border-l-4 p-2 duration-200 border-transparent dark:hover:border-l-mainCyan" to="/projects">
            Projects
          </NavLink>
          <NavLink className=" dark:text-mainSilver dark:hover:text-white text-gray-800 border-l-4 p-2 duration-200 border-transparent dark:hover:border-l-mainCyan" to="/tech-stack">
            Tech Stack
          </NavLink>
          <NavLink className=" dark:text-mainSilver dark:hover:text-white text-gray-800 border-l-4 p-2 duration-200 border-transparent dark:hover:border-l-mainCyan" to="/contact">
            Contact
          </NavLink>
        </section>
      </nav>
    </header>
  );
}

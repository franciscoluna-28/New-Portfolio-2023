import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiBuymeacoffee } from "react-icons/si";
import { useContext } from "react";
import { RefContext } from "../../context/ScrollContext";
import { ScrollToComponent } from "../../hooks/ScrollToComponent";

export default function Footer() {
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
  const scrollToPortfolioRef = ScrollToComponent({ rootRef: portfolioRef });
  const scrollToContactRef = ScrollToComponent({ rootRef: contactRef });

  return (
    <footer className="flex flex-col w-full h-auto shadow-xl bg-mainDarkCyan px-8 py-8 dark:bg-mainDarkBlue/40">
      <h5 className="text-white font-semibold text-2xl m-auto mb-4 dark:hover:text-mainCyan hover:text-mainExtraDarkBlue/80 duration-500 cursor-pointer">
        Francisco Luna
      </h5>

      <ul className="flex flex-col m-auto md:flex-row gap-6 text-center dark:text-mainSilver text-base flex-wrap justify-center mb-6">
        <li>
          <button
            className="dark:text-mainSilver dark:hover:text-white
          dark:hover:underline decoration-white 
          underline-offset-2 dark:decoration-mainCyan text-white hover:underline"
            onClick={scrollToHomeRef}
          >
            Home
          </button>
        </li>
        <li>
          <button
            className="dark:text-mainSilver dark:hover:text-white
          dark:hover:underline decoration-white 
          underline-offset-2 dark:decoration-mainCyan text-white hover:underline"
            onClick={scrollToAboutRef}
          >
            About
          </button>
        </li>
        <li>
          <button
            className="dark:text-mainSilver dark:hover:text-white
          dark:hover:underline decoration-white 
          underline-offset-2 dark:decoration-mainCyan text-white hover:underline"
            onClick={scrollToExperienceRef}
          >
            Experience
          </button>
        </li>
        <li>
          <button
            className="dark:text-mainSilver dark:hover:text-white
          dark:hover:underline decoration-white 
          underline-offset-2 dark:decoration-mainCyan text-white hover:underline"
            onClick={scrollToProjectsRef}
          >
            Projects
          </button>
        </li>
        <li>
          <button
            className="dark:text-mainSilver dark:hover:text-white
          dark:hover:underline decoration-white 
          underline-offset-2 dark:decoration-mainCyan text-white hover:underline"
            onClick={scrollToServicesRef}
          >
            Services
          </button>
        </li>
        <li>
          <button
            className="dark:text-mainSilver dark:hover:text-white
          dark:hover:underline decoration-white 
          underline-offset-2 dark:decoration-mainCyan text-white hover:underline"
            onClick={scrollToPortfolioRef}
          >
            Portfolio
          </button>
        </li>
        <li>
          <button
            className="dark:text-mainSilver dark:hover:text-white
          dark:hover:underline decoration-white 
          underline-offset-2 dark:decoration-mainCyan text-white hover:underline"
            onClick={scrollToContactRef}
          >
            Contact
          </button>
        </li>
      </ul>

      <ul className="flex gap-4 items-center justify-center m-auto mb-4">
        <a href="https://twitter.com/CodingWithFran">
          <li className="">
            <div
              className="dark:bg-mainDarkBlue cursor-pointer
              dark:hover:border-mainCyan dark:hover:bg-transparent text-mainDarkCyan flex justify-center 
              items-center border-transparent shadow-lg rounded-xl 
              w-12 h-12 border-2
              duration-300 dark:hover:!text-mainCyan hover:border-white bg-white"
            >
              <FaTwitter className="dark:text-white text-lg dark:hover:text-mainCyan" />
            </div>
          </li>
        </a>
        <a href="https://www.instagram.com/franciscolunaofficial/">
          <li className="">
            <div
              className="dark:bg-mainDarkBlue cursor-pointer
              dark:hover:border-mainCyan dark:hover:bg-transparent text-mainDarkCyan flex justify-center 
              items-center border-transparent shadow-lg rounded-xl 
              w-12 h-12 border-2
              duration-300 dark:hover:!text-mainCyan hover:border-white bg-white"
            >
              <FaInstagram className="dark:text-white text-lg dark:hover:text-mainCyan" />
            </div>
          </li>
        </a>
        <a href="https://www.buymeacoffee.com/FranLunDev">
          <li className="">
            <div
              className="dark:bg-mainDarkBlue cursor-pointer
                    dark:hover:border-mainCyan dark:hover:bg-transparent text-mainDarkCyan flex justify-center 
                    items-center border-transparent shadow-lg rounded-xl 
                    w-12 h-12 border-2
                    duration-300 dark:hover:!text-mainCyan hover:border-white bg-white"
            >
              <SiBuymeacoffee className="dark:text-white text-lg dark:hover:text-mainCyan" />
            </div>
          </li>
        </a>
      </ul>
      <span className="m-auto text-sm mt-4 text-center dark:text-mainSilver text-white">
        © Francisco Luna All rights reserved 2023
      </span>
    </footer>
  );
}

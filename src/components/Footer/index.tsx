import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiBuymeacoffee } from "react-icons/si";
import { RefObject } from "react";


type FooterProps = {
  homeRef: RefObject<HTMLDivElement>;
}

export default function Footer({homeRef}: FooterProps) {

  // No hay DRY aqui
   const handleScroll = () => {
    homeRef.current?.scrollIntoView({
      behavior: "smooth"
    });
  };
  
  return (
    <footer className="flex flex-col w-full h-auto shadow-xl bg-mainDarkCyan px-8 py-8 dark:bg-mainDarkBlue/50">

<h5 className="text-white font-semibold text-2xl m-auto mb-4 hover:text-mainCyan duration-500 cursor-pointer">Francisco Luna</h5>


      <ul className="flex flex-col m-auto md:flex-row gap-6 text-center dark:text-mainSilver text-base flex-wrap justify-center mb-6">
        <li>
          <button className="dark:text-mainSilver dark:hover:text-white
          dark:hover:underline underline-offset-2 decoration-mainCyan" onClick={handleScroll}>Home</button>
        </li>
        <li>
          <button>About</button>
        </li>
        <li>
          <button>Experience</button>
        </li>
        <li>
          <button>Services</button>
        </li>
        <li>
          <button>Portfolio</button>
        </li>
        <li>
          <button>UI / UX Design</button>
        </li>
        <li>
          <button>Contact</button>
        </li>
      </ul>

      <ul className="flex gap-4 items-center justify-center m-auto mb-4">
        <a href="https://twitter.com/FranLunDev">
          <li className="">
            <div
              className="dark:bg-mainDarkBlue cursor-pointer
                    dark:hover:border-mainCyan dark:hover:bg-transparent bg-mainExtraDarkBlue flex justify-center 
                    items-center border-transparent shadow-lg rounded-xl 
                    w-12 h-12 border-2
                    duration-300 dark:hover:!text-mainCyan hover:bg-transparent hover:border-white"
            >
              <FaTwitter className="dark:text-white text-lg dark:hover:text-mainCyan" />
            </div>
          </li>
        </a>
        <a href="https://www.instagram.com/franciscolunaofficial/">
          <li className="">
            <div
              className="dark:bg-mainDarkBlue cursor-pointer
                    dark:hover:border-mainCyan dark:hover:bg-transparent bg-mainExtraDarkBlue flex justify-center 
                    items-center border-transparent shadow-lg rounded-xl 
                    w-12 h-12 border-2
                    duration-300 dark:hover:!text-mainCyan hover:bg-transparent hover:border-white"
            >
              <FaInstagram className="dark:text-white text-lg dark:hover:text-mainCyan" />
            </div>
          </li>
        </a>
        <a href="https://www.buymeacoffee.com/FranLunDev">
          <li className="">
            <div
              className="dark:bg-mainDarkBlue cursor-pointer
                    dark:hover:border-mainCyan dark:hover:bg-transparent bg-mainExtraDarkBlue flex justify-center 
                    items-center border-transparent shadow-lg rounded-xl 
                    w-12 h-12 border-2
                    duration-300 dark:hover:!text-mainCyan hover:bg-transparent hover:border-white"
            >
              <SiBuymeacoffee className="dark:text-white text-lg dark:hover:text-mainCyan" />
            </div>
          </li>
        </a>
      </ul>
      <span className="m-auto text-sm mt-4 text-center">© Francisco Luna All rights reserved 2023</span>
    </footer>
  );
}

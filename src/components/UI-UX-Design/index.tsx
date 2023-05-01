import { motion } from "framer-motion"
import PortfolioUX from "../../assets/UI-UX/Portfolio design UX.png"

export default function UIUXDesign() {
    return(
        <div className="py-20 w-full">
          <div className="flex flex-col justify-center items-center pt-12 pb-6">
            <h3
              className="font-bold text-4xl lex text-left max-639:justify-center max-639:text-4xl main
   text-mainExtraDarkBlue dark:text-white lg:text-5xl"
            >
              About Me
            </h3>
            <h4
              className="text-mainDarkCyan text-2xl dark:text-mainCyan font-bold text-left 
flex py-2 max-639:justify-center lg:text-3xl"
            >
              Who am I?
            </h4>
            <p className="dark:text-mainSilver/80 md:text-xl text-center">
              Get to know me better
            </p>
          </div>
          <p className="text-center text-mainSilver/50 py-2"></p>
          <div className="w-full m-auto">
        <p className="text-left text-lg leading-loose dark:text-mainSilver text-mainExtraDarkBlue/70">My name is Francisco Luna, and I am an 18-year-old aspiring full-stack software engineer from Venezuela. I am currently studying Systems Engineering at Bicentenary University of Aragua. Although I began coding with Python, I soon discovered my passion for JavaScript and front-end development. I enjoy diving into new topics, which is why I am mostly self-taught. I find great motivation in problem-solving and creating innovative products and applications.

In addition to coding, I have a love for music production and design. Currently, I am working on various side projects to refine my skills in both front-end and back-end development. These include an E-Commerce Platform and the website you are currently viewing. Ultimately, my goal is to become a senior MERN Stack Developer. Stay tuned for my upcoming blog, where I will share my insights and experiences on social media.
        </p>
            <a href="https://twitter.com/FranLunDev"><button className="primary-button mt-8">Follow my journey on Twitter</button></a>
            <div>

            </div>

            </div>
            </div>

            
    )
}
import { useContext } from "react";
import { RefContext } from "../../context/ScrollContext";

export default function About() {
  const { aboutRef } = useContext(RefContext);
  return (
    <div className="py-12 w-full" ref={aboutRef}>
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
        <p className="dark:text-mainSilver/80 text-mainExtraDarkBlue/70 md:text-xl">
          Get to know me better
        </p>
      </div>
      <p className="text-center text-mainSilver/50 py-2"></p>
      <div className="w-full m-auto">
        <p className="text-center text-sm leading-loose dark:text-mainSilver text-mainExtraDarkBlue/70">
          My name is Francisco Luna, and I am an 19-year-old full-stack
          software engineer from Venezuela. I am a undergraduate student at
          Bicentenary University of Aragua. Although I began coding with Python,
          I soon discovered my passion for JavaScript and front-end development.
          I enjoy diving into new topics, which is why I am mostly self-taught.
          I find great motivation in problem-solving and creating innovative
          products and applications. In addition to coding, I have a love for
          music production and design. Currently, I am working on my application Hobby Explore to refine my skills in both front-end and back-end
          development.
        </p>
        <button className="primary-button px-8 m-auto mt-8 shadow-2xl shadow-mainCyan !w-auto">Follow my Journey on Twitter
        <a href="https://twitter.com/CodingWithFran">

        </a>
        </button>
      </div>
    </div>
  );
}

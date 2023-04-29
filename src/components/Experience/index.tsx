import { AiOutlineCheckCircle as AiOutlineCheck } from "react-icons/ai";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <motion.div
      viewport={{ once: false }}
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", duration: 1, delay: 0.15 }}
    >
      <div className="flex flex-col justify-center items-center py-12">
        <h3
          className="font-bold text-4xl lex text-left max-639:justify-center max-639:text-4xl main
         text-mainDarkCyan dark:text-white lg:text-5xl"
        >
          My Experience
        </h3>
        <h4
          className="text-mainDarkBlue text-2xl dark:text-mainCyan font-bold text-left 
    flex py-2 max-639:justify-center lg:text-3xl"
        >
          And Knowledge
        </h4>
        <p className="dark:text-mainSilver/80 md:text-xl text-center">
                Learn about my tech stack and the tools that I use
              </p>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <ul>
          <div
            className="h-fit dark:bg-mainDarkBlue/40 rounded-xl p-8 w-full dark:hover:bg-transparent
            border-2 border-transparent md:col-span-2 dark:hover:border-mainCyan duration-300 bg-white hover:border-mainDarkCyan shadow-lg"
          >
            <h4 className="font-bold dark:text-mainCyan text-mainDarkCyan text-xl">
              Front End Development
            </h4>
            <ul className="grid grid-flow-col grid-rows-6 gap-12 py-6">
              <li>
                <div>
                  <div className="uppercase text-white font-bold flex justify-center items-center gap-2">
                    html
                    <AiOutlineCheck className="dark:text-mainCyan text-mainDarkCyan" />
                  </div>
                  Experienced
                </div>
              </li>
              <li>
                <div>
                  <div className="uppercase text-white font-bold flex justify-center items-center gap-2">
                    css
                    <AiOutlineCheck className="dark:text-mainCyan text-mainDarkCyan" />
                  </div>
                  Experienced
                </div>
              </li>
              <li>
                <div>
                  <div className="text-white font-bold flex justify-center items-center gap-2">
                    React
                    <AiOutlineCheck className="dark:text-mainCyan text-mainDarkCyan" />
                  </div>
                  Intermediate
                </div>
              </li>
              <li>
                <div>
                  <div className="text-white font-bold flex justify-center items-center gap-2">
                    Typescript
                    <AiOutlineCheck className="dark:text-mainCyan text-mainDarkCyan" />
                  </div>
                  Intermediate
                </div>
              </li>
              <li>
                <div>
                  <div className="text-white font-bold flex justify-center items-center gap-2">
                    Tailwind
                    <AiOutlineCheck className="dark:text-mainCyan text-mainDarkCyan" />
                  </div>
                  Intermediate
                </div>
              </li>
              <li>
                <div>
                  <div className="text-white font-bold flex justify-center items-center gap-2">
                    Figma
                    <AiOutlineCheck className="dark:text-mainCyan text-mainDarkCyan" />
                  </div>
                  Intermediate
                </div>
              </li>
              <li>
                <div>
                  <div className="text-white font-bold flex justify-center items-center gap-2">
                    Javascript
                    <AiOutlineCheck className="dark:text-mainCyan text-mainDarkCyan" />
                  </div>
                  Experienced
                </div>
              </li>
              <li>
                <div>
                  <div className="text-white font-bold flex justify-center items-center gap-2">
                    SASS
                    <AiOutlineCheck className="dark:text-mainCyan text-mainDarkCyan" />
                  </div>
                  Intermediate
                </div>
              </li>
              <li>
                <div>
                  <div className="text-white font-bold flex justify-center items-center gap-2">
                    Github
                    <AiOutlineCheck className="dark:text-mainCyan text-mainDarkCyan" />
                  </div>
                  Intermediate
                </div>
              </li>
              <li>
                <div>
                  <div className="text-white font-bold flex justify-center items-center gap-2">
                    Vite
                    <AiOutlineCheck className="dark:text-mainCyan text-mainDarkCyan" />
                  </div>
                  Experienced
                </div>
              </li>
              <li>
                <div>
                  <div className="text-white font-bold flex justify-center items-center gap-2">
                    DaisyUI
                    <AiOutlineCheck className="dark:text-mainCyan text-mainDarkCyan" />
                  </div>
                  Intermediate
                </div>
              </li>
              <li>
                <div>
                  <div className="text-white font-bold flex justify-center items-center gap-2">
                    NextJS
                    <AiOutlineCheck className="dark:text-mainCyan text-mainDarkCyan" />
                  </div>
                  Beginner
                </div>
              </li>
            </ul>
          </div>
        </ul>

        <ul>
          <div
            className="h-fit dark:bg-mainDarkBlue/40 rounded-xl p-8 w-full dark:hover:bg-transparent
            border-2 border-transparent md:col-span-2 dark:hover:border-mainCyan duration-300 
            bg-white hover:border-mainDarkCyan shadow-lg dark:hover:shadow-mainCyan/10"
          >
            <h4 className="font-bold dark:text-mainCyan text-mainDarkCyan text-xl">
              Back End Development
            </h4>
            <ul className="grid grid-flow-col grid-rows-6 gap-12 py-6">
              <li>
                <div>
                  <div className="text-white font-bold flex justify-center items-center gap-2">
                    Prisma
                    <AiOutlineCheck className="dark:text-mainCyan text-mainDarkCyan" />
                  </div>
                  Beginner
                </div>
              </li>
              <li>
                <div>
                  <div className="text-white font-bold flex justify-center items-center gap-2">
                    Node.js
                    <AiOutlineCheck className="dark:text-mainCyan text-mainDarkCyan" />
                  </div>
                  Intermediate
                </div>
              </li>
              <li>
                <div>
                  <div className="text-white font-bold flex justify-center items-center gap-2">
                    MySQL
                    <AiOutlineCheck className="dark:text-mainCyan text-mainDarkCyan" />
                  </div>
                  Intermediate
                </div>
              </li>
              <li>
                <div>
                  <div className="text-white font-bold flex justify-center items-center gap-2">
                    MongoDB
                    <AiOutlineCheck className="dark:text-mainCyan text-mainDarkCyan" />
                  </div>
                  Experienced
                </div>
              </li>
              <li>
                <div>
                  <div className="text-white font-bold flex justify-center items-center gap-2">
                    Express
                    <AiOutlineCheck className="dark:text-mainCyan text-mainDarkCyan" />
                  </div>
                  Intermediate
                </div>
              </li>
              <li>
                <div>
                  <div className="text-white font-bold flex justify-center items-center gap-2">
                    NPM
                    <AiOutlineCheck className="dark:text-mainCyan text-mainDarkCyan" />
                  </div>
                  Intermediate
                </div>
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </motion.div>
  );
}

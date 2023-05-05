import { useContext } from "react";
import { RefContext } from "../../context/ScrollContext";
import { experienceAndSkills } from "../../data/experienceDatabase";
import Cards from "./card";


export default function Experience() {
  const { experienceRef } = useContext(RefContext);
  return (
    <>
      <div className="flex flex-col justify-center items-center py-12" ref={experienceRef}>
        <h3
          className="font-bold text-4xl lex text-left max-639:justify-center max-639:text-4xl main
         text-mainExtraDarkBlue dark:text-white lg:text-5xl"
        >
          My Experience
        </h3>
        <h4
          className="text-mainDarkCyan text-2xl dark:text-mainCyan font-bold text-left 
    flex py-2 max-639:justify-center lg:text-3xl"
        >
          And Knowledge
        </h4>
        <p className="dark:text-mainSilver/80 text-mainExtraDarkBlue/70 md:text-xl">
          Learn about my tech stack and the tools I use
        </p>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 w-full">

        {experienceAndSkills.map((contact) => (
          <Cards {...contact} key={contact.id} />
        ))}

            </div>
            </>
  );
}

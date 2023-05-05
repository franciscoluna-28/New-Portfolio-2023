import { BsCheck } from "react-icons/bs"
import { motion } from "framer-motion"
import { useContext } from "react";
import { RefContext } from "../../context/ScrollContext";
import { servicesInformation } from "../../data/servicesData";
import Card from "./template";


export default function Services() {
  const { servicesRef} = useContext(RefContext);
  return (
<>   
    <div className="flex flex-col justify-center items-center py-12" ref={servicesRef}>
    <h3
            className="font-bold text-4xl lex text-left max-639:justify-center max-639:text-4xl main
     text-mainExtraDarkBlue dark:text-white lg:text-5xl"
          >
            Services
          </h3>
          <h4 className="text-mainDarkCyan text-2xl dark:text-mainCyan font-bold text-left 
flex py-2 max-639:justify-center lg:text-3xl">
            I offer
          </h4>
          <p className="dark:text-mainSilver/80 md:text-xl">As a Front - End developer</p>
          </div>
      <div className="grid grid-flow-row gap-8 lg:grid-cols-3">
      {servicesInformation.map((service) => (
          <Card {...service} key={service.id} />
        ))}
      

        </div>      


</>

  )
}


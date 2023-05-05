import { ContactSection, contactSections } from "../../data/contactData";
import ContactForm from "../ContactForm"
import { useContext } from "react";
import { RefContext } from "../../context/ScrollContext";
import Card from "./card"


export default function Contact() {
  const { contactRef } = useContext(RefContext);
    const mailerServiceID = import.meta.env.VITE_SERVICE_ID;
    const mailerTemplateID = import.meta.env.VITE_TEMPLATE_ID;
    const mailerUserID = import.meta.env.VITE_USER_ID;

    return(
        <div className="py-20 w-full" ref={contactRef}>

            <div className="flex flex-col justify-center items-center py-12">
              <h3
                className="font-bold text-4xl lex text-left max-639:justify-center max-639:text-4xl main
     text-mainExtraDarkBlue dark:text-white lg:text-5xl"
              >
                Contact Me
              </h3>
              <h4
                className="text-mainDarkCyan text-2xl dark:text-mainCyan font-bold text-left 
flex py-2 max-639:justify-center lg:text-3xl"
              >
                In my Social Media
              </h4>
              <p className="dark:text-mainSilver/80 md:text-xl text-center">
                Let's connect and create something together!
              </p>
            </div>
            <p className="text-center text-mainSilver/50 py-2"></p>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            {contactSections.map((contact) => (
          <Card {...contact} key={contact.id} />
        ))}
            </div>
            <ContactForm
          serviceId={mailerServiceID}
          templateId={mailerTemplateID}
          userId={mailerUserID}
        />
        </div>
    )
}
import { ContactSection, contactSections } from "../../data/contactData";
import ContactForm from "../ContactForm"
import { useContext } from "react";
import { RefContext } from "../../context/ScrollContext";
import Card from "./card"
import { ScrollToComponent } from "../../hooks/ScrollToComponent";



export default function Contact() {
  const { emailRef } = useContext(RefContext);
    const mailerServiceID = import.meta.env.VITE_SERVICE_ID;
    const mailerTemplateID = import.meta.env.VITE_TEMPLATE_ID;
    const mailerUserID = import.meta.env.VITE_USER_ID;

    const scrollToMailerRef = ScrollToComponent({ rootRef: emailRef });

    return(
        <div className="py-12 w-full">

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
              <p className="dark:text-mainSilver/80 md:text-xl text-mainExtraDarkBlue/70 text-center">
                Let's connect and create something together!
              </p>
              <button
                      onClick={scrollToMailerRef}
                      className="dark:text-white py-4 text-mainExtraDarkBlue/70 font-bold flex items-center gap-4"
                    >
                      Send me an email
                    </button>
            </div>

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
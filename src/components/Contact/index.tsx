import { motion } from "framer-motion"
import { AiOutlineMail } from "react-icons/ai"
import { FaWhatsapp } from "react-icons/fa"
import { FaDiscord } from "react-icons/fa"
import { BsFillBriefcaseFill } from "react-icons/bs"
import ContactForm from "../ContactForm"

export default function Contact() {
    const mailerServiceID = import.meta.env.VITE_SERVICE_ID;
    const mailerTemplateID = import.meta.env.VITE_TEMPLATE_ID;
    const mailerUserID = import.meta.env.VITE_USER_ID;
    return(
        <div className="py-20 w-full">
          <motion.div
            viewport={{ once: false }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", duration: 1, delay: 0.15 }}
          >
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

              <section
                className="h-fit dark:bg-mainDarkBlue/40 rounded-xl p-8 w-auto dark:hover:bg-transparent
            border-2 border-transparent dark:hover:border-mainCyan duration-300 bg-white hover:border-mainDarkCyan shadow-lg"
              >
                <div className="flex flex-col items-center">
                  <AiOutlineMail className="text-xl mb-2 dark:text-white" />
                  <h5 className="dark:text-white font-semibold text-mainExtraDarkBlue/90">
                    Email
                  </h5>
                  <p className="dark:text-white font-semibold py-2 text-mainExtraDarkBlue/90">
                    franciscoluna2004@gmail.com
                  </p>
                  <a href="#">
                    <span className="block dark:text-mainCyan text-mainDarkCyan">
                      Send a message
                    </span>
                  </a>
                </div>
              </section>
              <section
                className="h-fit dark:bg-mainDarkBlue/40 rounded-xl p-8 w-full dark:hover:bg-transparent
            border-2 border-transparent dark:hover:border-mainCyan duration-300 bg-white hover:border-mainDarkCyan shadow-lg"
              >
                <div className="flex flex-col items-center">
                  <FaWhatsapp className="text-xl mb-2 dark:text-white" />
                  <h5 className="dark:text-white font-semibold text-mainExtraDarkBlue/90">
                    Whatsapp
                  </h5>
                  <p className="dark:text-white font-semibold py-2 text-mainExtraDarkBlue/90">
                    +58 4243772811
                  </p>
                  <a href="#">
                    <span className="block dark:text-mainCyan text-mainDarkCyan">
                      Send a message
                    </span>
                  </a>
                </div>
              </section>
              <section
                className="h-fit dark:bg-mainDarkBlue/40 rounded-xl p-8 w-full dark:hover:bg-transparent
            border-2 border-transparent dark:hover:border-mainCyan duration-300 bg-white hover:border-mainDarkCyan shadow-lg"
              >
                <div className="flex flex-col items-center">
                  <FaDiscord className="text-xl mb-2 dark:text-white" />
                  <h5 className="dark:text-white font-semibold text-mainExtraDarkBlue/90">
                    Discord
                  </h5>
                  <p className="dark:text-white font-semibold py-2 text-mainExtraDarkBlue/90">
                    xFran#3250
                  </p>
                  <a href="#">
                    <span className="block dark:text-mainCyan text-mainDarkCyan">
                      Send a message
                    </span>
                  </a>
                </div>
              </section>
              <section
                className="h-fit dark:bg-mainDarkBlue/40 rounded-xl p-8 w-full dark:hover:bg-transparent
            border-2 border-transparent dark:hover:border-mainCyan duration-300 bg-white hover:border-mainDarkCyan shadow-lg"
              >
                <div className="flex flex-col items-center">
                  <BsFillBriefcaseFill className="text-xl mb-2 dark:text-white" />
                  <h5 className="dark:text-white font-semibold text-mainExtraDarkBlue/90">
                    Fiverr
                  </h5>
                  <p className="dark:text-white font-semibold py-2 text-mainExtraDarkBlue/90">
                    @itsxfran
                  </p>
                  <a href="#">
                    <span className="block dark:text-mainCyan text-mainDarkCyan">
                      Send a message
                    </span>
                  </a>
                </div>
              </section>
              
        

            </div>
            <ContactForm
          serviceId={mailerServiceID}
          templateId={mailerTemplateID}
          userId={mailerUserID}
        />
          </motion.div>
        </div>
    )
}
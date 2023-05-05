import { ContactSection } from "../../data/contactData";

export default function Card({id, icon, title, text, link}: ContactSection){
    const Icon = icon;
    return(
        <section key={id}
        className="h-fit dark:bg-mainDarkBlue/40 rounded-xl p-8 w-auto dark:hover:bg-transparent
    border-2 border-transparent dark:hover:border-mainCyan duration-300 bg-white hover:border-mainDarkCyan shadow-lg"
      >
        <div className="flex flex-col items-center">
          <Icon className="text-xl mb-2 dark:text-white" />
          <h5 className="dark:text-white font-semibold text-mainExtraDarkBlue/90">
            {title}
          </h5>
          <p className="dark:text-white font-semibold py-2 text-mainExtraDarkBlue/90">
            {text}
          </p>
          <a href={link}>
            <span className="block dark:text-mainCyan text-mainDarkCyan">
              Send a message
            </span>
          </a>
        </div>
      </section>
    )
}
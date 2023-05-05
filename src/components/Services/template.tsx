
import { BsCheck } from "react-icons/bs"
import { Service } from "../../data/servicesData";

export default function ServiceCard ({title, id, features}: Service) {
    return (
      <article key={id} className="service dark:bg-mainDarkBlue/50 rounded-lg w-full
        h-fit dark:hover:bg-mainDarkBlue/40
        border-2 p-1 dark:hover:border-mainCyan min-h-full duration-300 bg-white hover:border-mainDarkCyan dark:border-mainCyan/50 shadow-xl dark:hover:shadow-mainCyan/10"
      >
        <div className="dark:bg-mainCyan dark:text-mainExtraDarkBlue overflow-hidden p-8 rounded-lg shadow-lg 
          dark:hover:bg-mainDarkCyan duration-300 bg-mainDarkCyan w-full text-white font-semibold">
          <h3>{title}</h3>
        </div>
        <ul className="p-8">
          {features.map((feature) => (
            <li key={feature.id} className="flex flex-row gap-4 mb-3">
              <div className="w-10">
                <BsCheck className="dark:text-mainCyan text-mainDarkCyan text-start text-lg" />
              </div>
              <p className="dark:text-mainSilver font-semibold text-mainExtraDarkBlue/90 text-left">
                {feature.description}
              </p>
            </li>
          ))}
        </ul>
      </article>
    );
  };



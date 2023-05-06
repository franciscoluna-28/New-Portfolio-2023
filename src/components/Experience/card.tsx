import { Icon } from "@fortawesome/fontawesome-svg-core";
import { Technology } from "../../data/experienceDatabase";




export default function Cards({ bannerName, id, technologies }: Technology) {
    return (
      <ul key={id} className="w-full m-auto">
        <div
          className="h-fit dark:bg-mainDarkBlue/40 rounded-xl p-8 w-full dark:hover:bg-transparent
            border-2 border-transparent dark:hover:border-mainCyan duration-300 bg-white hover:border-mainDarkCyan shadow-lg"
        >
          <h4 className="font-bold dark:text-mainCyan text-mainDarkCyan text-xl">
            {bannerName}
          </h4>
          <ul className="grid grid-flow-col grid-rows-6 gap-12 py-6">
            {technologies.map((technology) => {
                const Icon = technology.icon
              return (
                
                <li key={technology.id} className="flex flex-row gap-4 mb-3 justify-center">
                  <div>
                    <p className="text-mainExtraDarkBlue/80 dark:text-white font-semibold text-lg mb-2">{technology.name}</p>
                    <div className="text-mainExtraDarkBlue/70 dark:text-white font-bold flex justify-center items-center gap-2">
                      
                      <Icon className="text-mainDarkCyan dark:text-mainCyan text-3xl" />
                    </div>
                    <p className="dark:text-mainSilver font-semibold text-mainExtraDarkBlue/70 pt-2">{technology.level}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </ul>
    );
  }













































































































































































































  
  
  
  

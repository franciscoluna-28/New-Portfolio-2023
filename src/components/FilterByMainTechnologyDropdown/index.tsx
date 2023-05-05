// FilterByMainTechnologyDropdown.tsx
import { useContext } from "react";
import { MainTechnologyContext } from "../../context/MainTechnologyContext";
import { useState } from "react";
import "./styles.css";
import "../../utils/glowStyles.css";

export function FilterByMainTechnology() {
  const [isOpen, setIsOpen] = useState(false);
  const { setSelectedTechnology } = useContext(MainTechnologyContext);

  function handleTechnologyChange(technology: string) {
    setSelectedTechnology(technology);
    setIsOpen(false);
  }

  return (
    <div className="relative inline-block text-left z-40">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full px-4 text-sm text-mainExtraDarkBlue dark:bg-mainDarkBlue/50 dark:text-white font-semibold
           rounded-md shadow-md dark:hover:bg-mainDarkBlue/20 focus:outline-none h-16 items-center focus:ring-2 ring-mainExtraDarkBlue/50"
          id="filter-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={() => setIsOpen(!isOpen)}
        >
          Filter By Technology
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg dark:bg-mainDarkBlue bg-white ring-1 ring-black ring-opacity-5 p-4">
          <div className="py-1" role="none">
            <button
              className="text-mainExtraDarkBlue/70 hover:text-white dark:text-mainSilver block px-4 py-2 text-sm w-full text-left dark:hover:text-white 
              dark:hover:bg-mainExtraDarkBlue/50 rounded-md hover:text-mainExtraDarkBlue/70 hover:bg-mainDarkCyan"
              onClick={() => handleTechnologyChange("")}
              role="menuitem"
            >
              All
            </button>
            <button
              className="text-mainExtraDarkBlue/70 hover:text-white dark:text-mainSilver block px-4 py-2 text-sm w-full text-left dark:hover:text-white 
              dark:hover:bg-mainExtraDarkBlue/50 rounded-md hover:text-mainExtraDarkBlue/70 hover:bg-mainDarkCyan"
              onClick={() => handleTechnologyChange("TypeScript")}
              role="menuitem"
            >
              TypeScript
            </button>
            <button
              className="text-mainExtraDarkBlue/70 dark:text-mainSilver hover:text-white block px-4 py-2 text-sm w-full text-left dark:hover:text-white 
              dark:hover:bg-mainExtraDarkBlue/50 rounded-md hover:text-mainExtraDarkBlue/70 hover:bg-mainDarkCyan"
              onClick={() => handleTechnologyChange("React")}
              role="menuitem"
            >
              React
            </button>
            <button
              className="text-mainExtraDarkBlue/70 hover:text-white dark:text-mainSilver block px-4 py-2 text-sm w-full text-left dark:hover:text-white 
              dark:hover:bg-mainExtraDarkBlue/50 rounded-md hover:text-mainExtraDarkBlue/70 hover:bg-mainDarkCyan"
              onClick={() => handleTechnologyChange("NodeJS")}
              role="menuitem"
            >
              NodeJS
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

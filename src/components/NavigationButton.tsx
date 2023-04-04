import { useNavigate } from "react-router";
import { NavigationButtonProps as Navigation } from "../Interfaces/NavigationButtonProps";

export default function NavigationButton({ text, route }: Navigation) {
  const navigate = useNavigate();

  const navigateToPage = (route: string) => {
    navigate(route);
  };

  return (
    <button
      className="bg-mainDarkCyan flex justify-items-start
          justify-center items-center duration-300 ease-in h-14 text-silver font-regular
          hover:text-main-extra-dark-blue w-64 hover:border-transparent 
          rounded glow-secondary border-none text-white 
          dark:bg-mainCyan dark:text-mainExtraDarkBlue"
      onClick={() => navigateToPage(route)}
    >
      {text}
    </button>
  );
}

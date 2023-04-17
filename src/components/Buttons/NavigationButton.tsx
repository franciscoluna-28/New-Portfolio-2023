import { useNavigate } from "react-router";
import { NavigationButtonProps as Navigation } from "../../Interfaces/NavigationButtonProps";
import "../../directives/buttons.css"

export default function NavigationButton({ text, route, styleClass }: Navigation) {
  const navigate = useNavigate();

  const navigateToPage = (route: string) => {
    navigate(route);
  };

  return (
    <button
      className={styleClass}
      onClick={() => navigateToPage(route)}>
      {text}
    </button>
  );
}

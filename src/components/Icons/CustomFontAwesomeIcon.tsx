import { icon as faIcon, IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../directives/icons.css"

interface iconTypes{
  icon: IconDefinition;
  id: number
}

export default function CustomFontAwesomeIcon({icon, id}: iconTypes) {
    return (
      <FontAwesomeIcon key={id}
        className="custom-icon"
        icon={faIcon(icon)}
      />
    );
}
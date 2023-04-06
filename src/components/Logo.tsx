import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

import "../utils/glowStyles.css";



const Logo = () => {
    return ( 
        <div className="p-2 glow-text">
            <span className="dark:text-white font-extrabold">Francisco </span>
            <span className=" dark:text-mainCyan font-extrabold">Luna </span>
<FontAwesomeIcon icon={faCode} className="dark:text-mainCyan font-semibold" />
        </div>
     );
}
 
export default Logo;
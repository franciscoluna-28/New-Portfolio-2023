import { IconType } from 'react-icons';
import "../../directives/icons.css"


interface CustomIconProps {
  IconComponent: IconType,
  id: number;
}

export default function CustomIcon({ IconComponent, id }: CustomIconProps) {
    return (
      <IconComponent key={id} className="custom-icon" />
    );
  }
  

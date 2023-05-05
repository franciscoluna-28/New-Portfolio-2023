import { AiOutlineMail } from "react-icons/ai";
import { FaWhatsapp, FaDiscord } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { Icon } from "@fortawesome/fontawesome-svg-core";

export interface ContactSection {
    id: number;
    icon: React.ElementType | Icon | any;
    title: string;
    text: string;
    link: string;
  }
  

export const contactSections: ContactSection[] = [
    {
      id: 1,
      icon: AiOutlineMail,
      title: "Email",
      text: "franciscoluna2004@gmail.com",
      link: "mailto:franciscoluna2004@gmail.com",
    },
    {
      id: 2,
      icon: FaWhatsapp,
      title: "Whatsapp",
      text: "+58 4243772811",
      link: "https://wa.me/584243772811",
    },
    {
      id: 3,
      icon: FaDiscord,
      title: "Discord",
      text: "xFran#3250",
      link: "https://discordapp.com/users/478965957650546728",
    },
    {
      id: 4,
      icon: BsFillBriefcaseFill,
      title: "Fiverr",
      text: "@itsxfran",
      link: "https://es.fiverr.com/itsxfran",
    },
  ];
  
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter, faWhatsapp, faGithub } from "@fortawesome/free-brands-svg-icons";
import FooterCard from "./FooterCard";
import "../../directives/cards.css"

const socialMedia = [
/*   {
    id: 1,
    link: "https://www.linkedin.com/in/franciscoluna28",
    icon: faLinkedin
  },
  {
    id: 2,
    link: "https://twitter.com/FranLunDev",
    icon: faTwitter
  }, */
  {
    id: 3,
    link: "https://www.linkedin.com/in/franciscoluna28",
    icon: faLinkedin
  },
  {
    id: 4,
    link: "https://github.com/franciscoluna-28",
    icon: faGithub
  }
];

const Footer = () => {
  return (
    <footer className="flex justify-start gap-4 m-4 text-xl ">
      {socialMedia.map((socialMediaCard) => (
        <FooterCard key={socialMediaCard.id} icon={<FontAwesomeIcon icon={socialMediaCard.icon} />} socialLink={socialMediaCard.link} styleClass="dark:text-white text-mainExtraDarkBlue" />
        
      ))}
 
    </footer>
    
  );
};

export default Footer;
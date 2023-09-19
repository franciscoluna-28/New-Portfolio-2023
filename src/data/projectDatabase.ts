import BlogProject from "../assets/projects/blog.png";
import WeatherAppProject from "../assets/projects/weather-app.png";
import QRCodeApp from "../assets/projects/qr-code-app.png";
import PlagueDcotor from "../assets/projects/plaguedoctor.png";
import { project } from "../components/ProjectCard";

export const createdProjects: Array<project> = [
  {
    image: BlogProject,
    title: "Personal Blog",
    description:
      "Dive into the world of music on my blog! Discover fun facts with TypeScript and SASS in action. This project helped me master TypeScript and efficient SASS styling. Immerse yourself in music with my Spotify playlist while reading. Join me on this journey of discovery!",
    githubLink: "https://github.com/franciscoluna-28/Song-Blog-Beta",
    deploymentLink: "https://music-blog-beta-ts-sass.netlify.app",
    tags: ["SASS", "Components and Mixins"],
    mainTechnology: "TypeScript",
    id: 1,
  },
  {
    image: WeatherAppProject,
    title: "Weather App",
    description:
      "Always be ready for the weather with this React app! Get real-time updates and a user-friendly interface. Built with the latest React technology for top-notch performance and reliability like Headless UI and the hooks of React. Weather the storm with us!",
    githubLink:
      "https://github.com/franciscoluna-28/Weather-App-React-and-TailwindCSS",
    deploymentLink: "https://weather-app-tailwind-react.netlify.app",
    tags: ["Hooks", "TailwindCSS", "Rest API"],
    mainTechnology: "React",
    id: 2,
  },
  {
    image: QRCodeApp,
    title: "QR Code Generator",
    description:
      "Generate QR codes effortlessly with my NodeJS-powered QR Code Generator! Create QR codes for business promotions or personal use. Make QR codes for websites, products, or fun in just a few clicks!",
    githubLink: "https://github.com/franciscoluna-28/QR-Code-Generator-Node-JS",
    deploymentLink: "https://qr-code-application-node-js.onrender.com",
    tags: ["NodeJS", "Express", "Middleware"],
    mainTechnology: "NodeJS",
    id: 3,
  },

  {
    image: PlagueDcotor,
    title: "Music Website",
    description:
      "Designed and developed a dynamic music artist website for a client offering track downloads. Utilized the YouTube API for seamless integration and created a custom backend to ensure a smooth and tailored user experience.",
    tags: ["Astro", "Express", "Youtube API"],
    mainTechnology: "Astro",
    deploymentLink: "https://plvguedxctxr.netlify.app/",
    githubLink: "Private",
    id: 4,
  },
];

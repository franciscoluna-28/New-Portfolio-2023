import BlogProject from "../assets/projects/blog.png";
import WeatherAppProject from "../assets/projects/weather-app.png";
import QRCodeApp from "../assets/projects/qr-code-app.png";
import { project } from "../components/ProjectCard";

export const createdProjects: Array<project> = [
  {
    image: BlogProject,
    title: "Personal Blog",
    description:
      "Explore the world of music through my personal blog! Learn fun facts while seeing TypeScript and SASS in action. This project helped me grasp TypeScript fundamentals and master efficient styling with SASS. Listen to my official Spotify playlist while reading to fully immerse yourself in the musical experience. Join me on this journey of discovery and learn something new today!",
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
      "Stay ahead of the weather with this user-friendly app built with React! No more guessing what to wear or if you need an umbrella. With real-time weather data and intuitive interface, you'll always be prepared for whatever mother nature throws your way. And the best part? This app is built with the latest React technology, ensuring top-notch performance and reliability. Let's weather the storm together with this innovative app.",
    githubLink:
      "https://github.com/franciscoluna-28/Weather-App-React-and-TailwindCSS",
    deploymentLink: "https://weather-app-tailwind-react.netlify.app",
    tags: ["Hooks", "TaiwlindCSS", "API"],
    mainTechnology: "React",
    id: 2,
  },
  {
    image: QRCodeApp,
    title: "QR Code Generator",
    description:
      "Create QR codes on-the-go with my QR Code Generator project! Built with NodeJS and Express, this app allows you to easily generate QR codes for any purpose, from promoting your business to sharing personal information. With the power of middleware, the app ensures that your data is secure and only accessible to authorized users. Whether you need to create a QR code for a website, a product, or simply for fun, this project has got you covered. Try it out now and see how easy it is to create your own QR codes with just a few clicks!",
    githubLink: "https://github.com/franciscoluna-28/QR-Code-Generator-Node-JS",
    deploymentLink: "https://qr-code-application-node-js.onrender.com",
    tags: ["NodeJS", "Express", "Middleware"],
    mainTechnology: "NodeJS",
    id: 3,
  },
];

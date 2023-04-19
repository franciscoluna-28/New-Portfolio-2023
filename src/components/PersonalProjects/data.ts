import BlogProject from "../../assets/projects/blog.png"
import WeatherAppProject from "../../assets/projects/weather-app.png"
import QRCodeApp from "../../assets/projects/qr-code-app.png"
import { project } from "../ProjectCard"

export const createdProjects: Array<project> = [
    {
        image: BlogProject,
        title: "Personal Blog",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at turpis odio. Ut sodales velit ac tincidunt pretium. Vestibulum ante eros, ultrices quis laoreet id, iaculis at ligula. Curabitur dapibus sapien mi. Donec in ullamcorper tortor, nec auctor elit. In at tellus libero. Morbi viverra, odio ut laoreet consequat, lacus quam dapibus ante, sed imperdiet ipsum purus et felis. Cras eu sollicitudin nisl, eget tincidunt augue. Nunc nec augue a velit vestibulum tincidunt vitae at magna.",
        githubLink: "https://github.com/franciscoluna-28/Song-Blog-Beta",
        deploymentLink:"https://music-blog-beta-ts-sass.netlify.app",
        tags: ["SASS", "Components and Mixins"],
        mainTechnology: "TypeScript"
    },
    {
        image: WeatherAppProject,
        title: "Weather App",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at turpis odio. Ut sodales velit ac tincidunt pretium. Vestibulum ante eros, ultrices quis laoreet id, iaculis at ligula. Curabitur dapibus sapien mi. Donec in ullamcorper tortor, nec auctor elit. In at tellus libero. Morbi viverra, odio ut laoreet consequat, lacus quam dapibus ante, sed imperdiet ipsum purus et felis. Cras eu sollicitudin nisl, eget tincidunt augue. Nunc nec augue a velit vestibulum tincidunt vitae at magna.",
        githubLink: "https://github.com/franciscoluna-28/Weather-App-React-and-TailwindCSS",
        deploymentLink: "https://weather-app-tailwind-react.netlify.app",
        tags: ["Hooks", "TaiwlindCSS", "API"],
        mainTechnology: "React"
    },
    {
        image: QRCodeApp,
        title: "QR COode Generator",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at turpis odio. Ut sodales velit ac tincidunt pretium. Vestibulum ante eros, ultrices quis laoreet id, iaculis at ligula. Curabitur dapibus sapien mi. Donec in ullamcorper tortor, nec auctor elit. In at tellus libero. Morbi viverra, odio ut laoreet consequat, lacus quam dapibus ante, sed imperdiet ipsum purus et felis. Cras eu sollicitudin nisl, eget tincidunt augue. Nunc nec augue a velit vestibulum tincidunt vitae at magna.",
        githubLink: "https://github.com/franciscoluna-28/QR-Code-Generator-Node-JS",
        deploymentLink: "https://qr-code-application-node-js.onrender.com",
        tags: ["NodeJS", "Express", "Middleware"],
        mainTechnology: "NodeJS"
    }
]


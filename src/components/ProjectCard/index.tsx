import NavigationButton from "../../components/Buttons/NavigationButton";

// importing icons
import { FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";

// Regex to verify valid urls and directories
export const linkRegex = /(?:\.{2}\/)*[\w-]+(?:\/[\w-]+)*\.(?:jpg|jpeg|png|gif)/i;

// Regex to check if the title contains only letters
export const titleRegex = /^[a-zA-Z]+$/;

// Checking Github, Netlify and other platforms links 
const githubLinkRegex = /^(https?:\/\/)?(www\.)?github\.com\/[\w-]+(\/[\w-]+)*\/?$/i;
const netlifyLinkRegex = /^(https?:\/\/)?(www\.)?netlify\.com\/[\w-]+(\/[\w-]+)*\/?$|^((?!netlify\.com).)*$/i;

// Interface for the card component
export interface project {
    image: string
    title: string
    description: string
    githubLink: string
    deploymentLink: string
    tags: Array<string>
    mainTechnology: string
    id: number
}

// Component template 

// Component template 
export default function ProjectCard({ image, title, description, githubLink, deploymentLink,  tags, mainTechnology }: project) {
    const isValidGithubLink = githubLinkRegex.test(githubLink);
    const isValidNetlifyLink = netlifyLinkRegex.test(deploymentLink);

    return (
        <div className="card w-auto h-fit max-w-xl shadow-xl dark:bg-gradient-to-r dark:hover:border-mainCyan border-4 dark:hover:shadow-mainCyan/10 dark:border-mainDarkBlue/10 border-transparent dark:from-mainDarkBlue/50 dark:to-mainDarkBlue/30 lg:hover:scale-105 duration-300">
            <figure><img className='' src={image} alt="Project" /></figure>
            <div className="card-body">
                <h2 className="card-title dark:text-white text-black font-bol">
                    {title}
                    <div className="badge glow-secondary dark:bg-mainCyan dark:text-mainExtraDarkBlue/70 bg-mainDarkCyan outline-none border-transparent text-white">{mainTechnology}</div>
                </h2>
                <p className='my-2 leading-loose dark:text-mainSilver/50 text-mainExtraDarkBlue/50 text-left'>{description}</p>
                <div className="card-actions justify-end flex-col w-full">
                    <div className="flex gap-4 w-full">
                    {tags.map((tag) => (
                        <div className="badge badge-outline" key={tag}>{tag}</div>
                    ))}
                    </div>
                    <div className="flex w-full gap-4 py-4">
                    {isValidGithubLink && (
                        <a href={githubLink} target="_blank" rel="noopener noreferrer">
                            <button className="primary-button px-4 w-full dark:text-mainExtraDarkBlue text-white">Github Link</button>
                        </a>
                    )}
                    {isValidNetlifyLink && (
                        <a href={deploymentLink} target="_blank" rel="noopener noreferrer">
                            <button className='secondary-button px-4 w-full dark:text-white text-mainDarkCyan'>Live Demo</button>
                        </a>
                    )}
                    </div>
                </div>
            </div>
        </div>
    );
}






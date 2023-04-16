// importing icons
import { FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";

// Regex to verify valid urls and directories
export const linkRegex = /(?:\.{2}\/)*[\w-]+(?:\/[\w-]+)*\.(?:jpg|jpeg|png|gif)/i;

// Regex to check if the title contains only letters
export const titleRegex = /^[a-zA-Z]+$/;

// Checking Github, Netlify and other platforms links 
const githubLinkRegex: RegExp = /^(https?:\/\/)?(www\.)?github\.com\/[\w-]+(\/[\w-]+)*\/?$/i;
const netlifyLinkRegex: RegExp = /^(https?:\/\/)?(www\.)?netlify\.com\/[\w-]+(\/[\w-]+)*\/?$|^((?!netlify\.com).)*$/i;

// Interface for the card component
export interface project {
    image: string
    title: string
    description: string
    link: [string, string]
    tags: Array<string>
    mainTechnology: string
}

// Component template 
export default function ProjectCard({ image, title, description, link, tags, mainTechnology }: project) {
    const [githubLink, netlifyLink] = link;
    const isValidGithubLink = githubLinkRegex.test(githubLink);
    const isValidNetlifyLink = netlifyLinkRegex.test(netlifyLink);

    return (
        <div className="card w-auto max-w-2xl shadow-xl dark:bg-gradient-to-r dark:from-mainDarkBlue/50 dark:to-mainDarkBlue/30 hover:scale-105 duration-300">
            <figure><img className='' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title dark:text-white text-black font-bol">
                    {title}
                    <div className="badge dark:bg-mainCyan dark:text-mainExtraDarkBlue/70 bg-mainDarkCyan outline-none border-transparent text-white">{mainTechnology}</div>
                </h2>
                <p className='my-2'>{description}</p>
                <div className="card-actions justify-end">
                    {tags.map((tag) => (
                        <div className="badge badge-outline" key={tag}>{tag}</div>
                    ))}
                    {isValidGithubLink && (
                        <a href={githubLink} target="_blank" rel="noopener noreferrer">
                            <FaGithub className='text-xl dark:text-white' />
                        </a>
                    )}
                    {isValidNetlifyLink && (
                        <a href={netlifyLink} target="_blank" rel="noopener noreferrer">
                            <SiNetlify className='text-xl dark:text-mainCyan' />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}






{/* <div className="card w-auto max-w-2xl shadow-xl dark:bg-gradient-to-r dark:from-mainDarkBlue/50 dark:to-mainDarkBlue/30 hover:scale-105 duration-300">
<figure><img className='' src={blogImage} alt="Shoes" /></figure>
<div className="card-body">
    <h2 className="card-title dark:text-white text-black font-bol">
        Personal Blog
        <div className="badge dark:bg-mainCyan dark:text-mainExtraDarkBlue/70 bg-mainDarkCyan outline-none border-transparent text-white">TypeScript</div>
    </h2>
    <p className='my-2'>Project made as a hobbie
        using TypeScript, SASS,
        JavaScript, Gulp and
        ES6. Learned a lot making this one</p>
    <div className="card-actions justify-end">
        <div className="badge badge-outline glow-main">Components</div>
        <div className="badge badge-outline">SASS</div>
        <FaGithub className='text-xl dark:text-white' />
        <SiNetlify className='text-xl dark:text-mainCyan' />
    </div>
</div>
</div> */}
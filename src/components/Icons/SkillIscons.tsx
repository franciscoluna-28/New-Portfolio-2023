import {
    faReact,
    faNodeJs,
    faNpm,
    faFigma,
    faGithubAlt,
    faCss3,
    faHtml5,
} from "@fortawesome/free-brands-svg-icons";
import {
    SiVisualstudiocode,
    SiMongodb,
    SiExpress,
    SiTypescript,
    SiTailwindcss,
    SiSass,
    SiVite,
    SiNotion,
    SiMysql
} from "react-icons/si";


import CustomFontAwesomeIcon from "./CustomFontAwesomeIcon";
import ReactIcon from "./ReactIcon"

const FontAwesomeIcons = [{
    icon: faReact,
    id: 1
}, {
    icon: faNodeJs,
    id: 2
},
{
    icon: faNpm,
    id: 3
},
{
    icon: faFigma,
    id: 4
},
{
    icon: faGithubAlt,
    id: 5
},
{
    icon: faCss3,
    id: 6
},
{
    icon: faHtml5,
    id: 7
}

]
const siliconIcons = [{
    icon: SiVisualstudiocode,
    id: 1
},
{
    icon: SiMongodb,
    id: 2
},
{
    icon: SiExpress,
    id: 3
},
{
    icon: SiTypescript,
    id: 4
},
{
    icon: SiTailwindcss,
    id: 5
},
{
    icon: SiSass,
    id: 6
},
{
    icon: SiVite,
    id: 7
},
{
    icon: SiNotion,
    id: 8
}, 
{
    icon: SiMysql,
    id: 9
}
]



export default function SkillsIcons() {
    return (
        <div className="sm:flex gap-4 flex-wrap py-6 justify-center hidden">
            {FontAwesomeIcons.map((icon) => (
                <CustomFontAwesomeIcon key={icon.id} icon={icon.icon} id={icon.id} />
            ))}
            {siliconIcons.map((icon) => (
                <ReactIcon key={icon.id} IconComponent={icon.icon} id={icon.id} />
            ))}
        </div>
    );
};


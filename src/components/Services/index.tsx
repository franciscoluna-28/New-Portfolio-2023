import { BsCheck2Circle as BsCheck } from "react-icons/bs"


export default function Services() {
    return(
        <>
        <h2 className="font-bold text-4xl flex text-left max-639:justify-center max-639:text-4xl main
text-mainDarkCyan dark:text-white lg:text-5xl py-8">My Services</h2>
<div className="grid grid-flow-col gap-8 py-16">

{/* UI UX Design */}




<article className="service dark:bg-mainDarkBlue/20 rounded-b-lg w-full
h-fit dark:hover:bg-mainDarkBlue/10 border-mainDarkCyan
border-2 p-1 dark:border-mainCyan duration-300 bg-white dark:hover:border-mainDarkCyan shadow-lg">
<div className="dark:bg-mainCyan dark:text-mainExtraDarkBlue overflow-hidden p-8 rounded-b-lg shadow-lg 
dark:hover:bg-mainDarkCyan duration-300 bg-mainDarkCyan text-white font-semibold">
 <h3 className="">UI/UX Design</h3>
</div>
<ul className="p-8">
 <li className="flex flex-row gap-4 mb-3">
 <BsCheck className="dark:text-mainCyan text-3xl text-mainDarkCyan"/>
   <p className="dark:text-mainSilver text-mainExtraDarkBlue/90 text-left">Custom website design with a focus on user experience and interface, utilizing Figma to bring your ideas to life.</p>
 </li>
 <li className="flex flex-row gap-4 mb-3">
 <BsCheck className="dark:text-mainCyan text-3xl text-mainDarkCyan"/>
   <p className="dark:text-mainSilver text-mainExtraDarkBlue/90 text-left">Responsive designs for both desktop and mobile devices, including landing pages, blogs, and more.</p>
</li>
 <li className="flex flex-row gap-4 mb-3">
     <BsCheck className="dark:text-mainCyan text-3xl text-mainDarkCyan"/>
   <p className="dark:text-mainSilver text-mainExtraDarkBlue/90 text-left">Regular sharing of prototypes for easy tracking of progress and modifications.</p>
 </li>


</ul>
</article>

<article className="service dark:bg-mainDarkBlue/20 rounded-b-lg w-full
h-fit dark:hover:bg-mainDarkBlue/10 border-mainDarkCyan
border-2 p-1 dark:border-mainCyan duration-300 bg-white dark:hover:border-mainDarkCyan shadow-lg">
<div className="dark:bg-mainCyan dark:text-mainExtraDarkBlue overflow-hidden p-8 rounded-b-lg shadow-lg 
dark:hover:bg-mainDarkCyan duration-300 bg-mainDarkCyan text-white font-semibold">
 <h3 className="">Front End Development</h3>
</div>
<ul className="p-8">
 <li className="flex flex-row gap-4 mb-3">
    <div className="w-10">
     <BsCheck className="dark:text-mainCyan text-mainDarkCyan text-start text-lg"/>
     </div>
   <p className="dark:text-mainSilver text-mainExtraDarkBlue/90 text-left">Creation of fully responsive websites with Flexbox and CSS Grid.</p>
 </li>
 <li className="flex flex-row gap-4 mb-3">
 <div className="w-10">
     <BsCheck className="dark:text-mainCyan text-mainDarkCyan text-start text-lg"/>
     </div>
   <p className="dark:text-mainSilver text-mainExtraDarkBlue/90 text-left">I use modern technologies like React, TypeScript, SASS, Tailwind and Express for creating a professional website.</p>
 </li>
 <li className="flex flex-row gap-4 mb-3">
 <div className="w-10">
     <BsCheck className="dark:text-mainCyan text-mainDarkCyan text-start text-lg"/>
     </div>
   <p className="dark:text-mainSilver text-mainExtraDarkBlue/90 text-left">API integrations, component creation, organized stylesheets, and various frontend functionalities like forms and authentication are implemented to ensure your website is tailored to your needs.</p>
 </li>
</ul>
</article>


<article className="service dark:bg-mainDarkBlue/20 rounded-b-lg w-full
h-fit dark:hover:bg-mainDarkBlue/10 border-mainDarkCyan
border-2 p-1 dark:border-mainCyan duration-300 bg-white dark:hover:border-mainDarkCyan shadow-lg">
<div className="dark:bg-mainCyan dark:text-mainExtraDarkBlue overflow-hidden p-8 rounded-b-lg shadow-lg 
dark:hover:bg-mainDarkCyan duration-300 bg-mainDarkCyan text-white font-semibold">
 <h3 className="">Basic Backend Development</h3>
</div>
<ul className="p-8">
 <li className="flex flex-row gap-4 mb-3">
     <BsCheck className="dark:text-mainCyan text-mainDarkCyan text-3xl"/>
   <p className="dark:text-mainSilver text-mainExtraDarkBlue/90 text-left">Creation of custom API routes and basic authentication with NodeJS, Express, and Firebase.</p>
 </li>
 <li className="flex flex-row gap-4 mb-3">
     <BsCheck className="dark:text-mainCyan text-3xl text-mainDarkCyan"/>
   <p className="dark:text-mainSilver text-mainExtraDarkBlue/90 text-left">Database entity and table creation using MySQL and Prisma, including complex relationship handling.</p>
 </li>

 <li className="flex flex-row gap-4 mb-3">
     <BsCheck className="dark:text-mainCyan text-mainDarkCyan text-3xl"/>
   <p className="dark:text-mainSilver text-mainExtraDarkBlue/90 text-left">Deployment of websites and applications using Vercel, Netlify, or custom hosting.</p>
 </li>
 <li className="flex flex-row gap-4 mb-3">
     <BsCheck className="dark:text-mainCyan text-mainDarkCyan text-3xl"/>
   <p className="dark:text-mainSilver text-mainExtraDarkBlue/90 text-left">Creation of NoSQL databases using MongoDB and Mongoose.</p>
 </li>

</ul>
</article>
</div>
</>
    )
}


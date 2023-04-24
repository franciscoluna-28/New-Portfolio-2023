import personalImage from "../assets/testImage.jpg";
import NavigationButton from "../components/Buttons/NavigationButton";
import SkillsIcons from "../components/Icons/SkillIscons";
import { motion } from 'framer-motion';
import Footer from "../components/Footer";
import Coffee from "../assets/services/coffee.jpg"
import ServiceCard from "../components/ServiceCard";
import Rocket from "../assets/services/growth.jpg"
import Responsive from "../assets/services/responsive.jpg"
import Customization from "../assets/services/customization.jpg"
import BlogProject from "../assets/projects/blog.png"
import WeatherAppProject from "../assets/projects/weather-app.png"


import "../utils/glowStyles.css";
import BuyMeACoffee from "../components/BuyMeACoffee";


export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}>
      <section className="p-8 lg:p-16 flex items-center flex-col justify-center min-h-screen">
        <article className="flex items-center flex-col text-center">
          <div className="flex flex-col items-center lg:grid lg:grid-flow-col lg:gap-12 lg:justify-center lg:px-8 py-24">
            <figure className="py-4">
              <img
                className="h-52 w-52 z-40 rounded-full border-white animate border-2 border-double main-image p-1 
            floating glow-main lg:h-72 lg:w-72"
                src={personalImage}
                alt="Francisco Luna"
              ></img>
            </figure>
            <div className="px-auto lg:px-16">
              <article className="py-4">
                <h1
                  className="font-bold text-4xl flex text-left py-2 max-639:justify-center max-639:text-4xl main
           text-mainDarkCyan dark:text-white lg:text-5xl"
                >
                  Hi! I'm Francisco Luna
                </h1>
                <h2 className="text-mainDarkBlue dark:text-mainCyan font-bold text-3xl text-left 
      flex py-2 max-639:justify-center lg:text-4xl">
                  Front End Developer
                </h2>
                <p
                  className="text-silver leading-loose py-2 text-left w-auto max-639:w-72 max-639:m-auto max-639:text-center text-xl dark:text-mainSilver
            text-mainDarkBlue/70"
                >
                  Welcome to my portfolio! I'm Francisco, 18 years old Front End Developer from Venezuela. I'm currently
                  studying Systems Engineering at the university. My main job is creating web applications
                  for the web, whether you need to grow your business, personal brand or want to create your dream
                  project. Here you'll be able to see my projects and reach me,  I'll be glad to help.  
                </p>
              </article>

              <div className="w-full flex gap-4 flex-col md:flex-row">
                <NavigationButton
                  text={"Contact"}
                  route={"/contact"}
                  styleClass={"primary-button"}
                />
                <NavigationButton
                  text={"My projects"}
                  route={"/projects"}
                  styleClass={"secondary-button"}
                />
              </div>
              <motion.div
                animate={{
                  opacity: [0, 1, 0],
                  transition: { duration: 4, times: [0, 0.5, 1], repeat: Infinity }
                }}
              >
                <SkillsIcons />
              </motion.div>

            </div>

          </div>


          <div id="indicators-carousel" className="relative w-full" data-carousel="static">

    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">

        <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
            <img src="https://scontent.fccs3-2.fna.fbcdn.net/v/t1.6435-9/67262464_722163731572759_6822103246690058240_n.jpg?stp=cp0_dst-jpg_e15_q65_s320x320&_nc_cat=100&ccb=1-7&_nc_sid=8024bb&_nc_ohc=klS53OWsN_IAX88JDww&_nc_ht=scontent.fccs3-2.fna&oh=00_AfC6lnymmavtQLiBCe28Qb-kgykq23Hrvzu8WjHYN8YdwA&oe=646E5B5D" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>

        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={BlogProject} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>

        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={WeatherAppProject} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>

        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={BlogProject} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>

        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={WeatherAppProject} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
    </div>

    <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>

    <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
</div>




        </article>
        <h2 className="font-bold text-4xl flex text-left max-639:justify-center max-639:text-4xl main
           text-mainDarkCyan dark:text-white lg:text-5xl py-16">My Services</h2>
        <div className="grid grid-flow-col gap-8 py-16">

          <ServiceCard title={"Grow your business or brand"} description={"As a software developer, I offer services to help you grow your business or brand. I specialize in developing custom websites to meet your specific needs, whether it's a landing page, blog or business, we could take care of that. With my expertise in programming languages and technologies such as TypeScript, MySQL, NodeJS, Express, MongoDB, ReactJS and Prisma, I can create efficient and effective software that will help you streamline your business operations, reach more customers, and stand out in your industry. Let's work together to take your business to the next level!"}
            image={Rocket} />
          <ServiceCard title={"Responsive Design"} description={"I offer responsive design services to help you grow your business or brand. With the increasing number of mobile users, having a website that adapts to different screen sizes is crucial. I specialize in creating custom websites that are optimized for mobile devices and desktops alike, ensuring that your website looks great and functions flawlessly on any device"}
            image={Responsive} />
          <ServiceCard title={"Customization"} description={"I offer customization services to help you make your website unique and tailored to your brand. Whether it's changing the color scheme, font choices, or layout, I can work with you to create a design that aligns with your vision and stands out from the competition. Additionally, I can help you integrate custom features and functionalities to enhance the user experience and improve the functionality of your website. Let's work together to create a customized website that will elevate your online presence and attract more visitors."}
            image={Customization} />
        </div>
        <div className="py-20">
          <h2
            className="font-bold text-4xl flex justify-center text-left max-639:justify-center max-639:text-4xl main
           text-mainDarkCyan dark:text-white lg:text-5xl py-8"
          >
            Where I'm

            

          </h2>
          
<BuyMeACoffee/>

          <p className="text-center text-mainSilver/50 py-2"></p>
          <div className="flex gap-4 py-4">
            <button className="btn gap-2 bg-mainDarkBlue h-16">
              <svg className="h-6 fill-white" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
              GitHub
            </button>
            <button className="btn gap-2 bg-mainDarkBlue h-16">
              <svg className="h-6 fill-white" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
              Twitter
            </button>
            <button className="btn gap-2 bg-mainDarkBlue h-16">
              <svg className="h-6 fill-white" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
              Whatsapp
            </button>
            <button className="btn gap-2 bg-mainDarkBlue h-16">
              <svg className="h-6 fill-white" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              Linkedin
            </button>

          </div>
          <NavigationButton
            text={"Or send me an email"}
            route={"/contact"}
            styleClass={"primary-button"}
          />
        </div>
      </section>

    </motion.div>
  );

}

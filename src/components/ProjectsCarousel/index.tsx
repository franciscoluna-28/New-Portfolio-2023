import { FaGithub } from 'react-icons/fa';
import { SiNetlify } from 'react-icons/si';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectCards } from 'swiper';
import { createdProjects } from '../PersonalProjects/data';
import 'swiper/swiper-bundle.css';
import "../../utils/glowStyles.css";

import 'swiper/css';
import 'swiper/css/effect-fade';
import NavigationButton from '../Buttons/NavigationButton';

export default function ProjectsCarousel () { 
    return(
        <div className="shadow-md">

<Swiper
        effect={"coverflow"}
        grabCursor={true}
        spaceBetween={30}
        pagination={{
            type: "progressbar",

          }}
        
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
          
        }}
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >



  {createdProjects.map((project) => {
    return (
<SwiperSlide key={project.id}>
  <div className="relative">
    <img className='w-full h-fit rounded-md overflow-hidden pt-4 filter brightness-75 hover:blur-sm duration-300 ease-in' src={project.image} alt={project.title} />
    <div className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div className="bg-gray-700 bg-opacity-75 rounded-full p-2 mr-4">
          <a href={project.githubLink} target="_blank" rel="noreferrer">
            <FaGithub className='text-white text-xl'/>
          </a>
        </div>
        <div className="bg-gray-700 bg-opacity-75 rounded-full p-2">
          <a href={project.deploymentLink} target="_blank" rel="noreferrer">
            <SiNetlify className='text-white text-xl'/>
          </a>
        </div>
      </div>
    <div className="absolute bottom-0 w-full bg-black/80 p-4">
      <h3 className='text-white font-bold mb-2'>{project.title}</h3>
      <p className='text-gray-400'>{project.description}</p>

    </div>
  </div>
</SwiperSlide>
    );
  })}
</Swiper>
</div>
    )
} 
    

         



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
        <div className="shadow-md max-w-fit max-h-fit">

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
            delay: 8000,
            disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >



  {createdProjects.map((project) => {
    return (
<SwiperSlide key={project.id}>
  <div className="relative">
    <img className='w-full h-fit rounded-md overflow-hidden pt-4 filter brightness-75 duration-300 ease-in blur-sm' src={project.image} alt={project.title} />
    <div className="absolute inset-0 bg-black/70 flex items-center justify-center p-32">
      <div className="text-white text-center">
        <h3 className='font-bold text-6xl mb-4'>{project.title}</h3>
        <p className='text-mainSilver leading-loose text-center text-xl font-medium'>{project.description}</p>
        <a href='/projects'><span className='text-xl font-bold dark:text-mainCyan text-mainDarkCyan py-2'>Learn More</span></a>
      </div>
    </div>
  </div>
</SwiperSlide>


    );
  })}
</Swiper>
</div>
    )
} 
    

         



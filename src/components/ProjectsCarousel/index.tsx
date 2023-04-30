import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectCards } from "swiper";
import { createdProjects } from "../PersonalProjects/data";
import "swiper/swiper-bundle.css";
import "../../utils/glowStyles.css";
import NavigationButton from "../Buttons/NavigationButton";


import "swiper/css";
import "swiper/css/effect-fade";



export default function ProjectsCarousel() {
  return (
    <>
      <div className="flex flex-col justify-center items-center py-12">
        <h3
          className="font-bold text-4xl lex text-left max-639:justify-center max-639:text-4xl main
       text-mainExtraDarkBlue dark:text-white lg:text-5xl"
        >
          Projects
        </h3>
        <h4
          className="text-mainDarkCyan text-2xl dark:text-mainCyan font-bold text-left 
  flex py-2 max-639:justify-center lg:text-3xl"
        >
          That I've created
        </h4>
        <p className="dark:text-mainSilver/80 md:text-xl">
          See what I'm able to do
        </p>

      </div>

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
                <div className="relative bg-center">
                  <img
                    loading="lazy"
                    className="w-full h-full cover-full min-w-min rounded-md overflow-hidden pt-4 filter object-cover brightness-75 duration-300 ease-in blur-sm"
                    src={project.image}
                    alt={project.title}
                  />
                  <div className="absolute inset-0 bg-black/70 flex items-center justify-center p-32">
                    <div className="text-white text-center">
                      <h3 className="font-bold text-3xl lg:text-6xl lg:mb-4">
                        {project.title}
                      </h3>
                      <p className="text-mainSilver hidden leading-loose sm:block text-center text-base font-medium">
                        {project.description}
                      </p>
                      <a href="/projects">
                        <span className="text-xl font-bold dark:text-mainCyan text-mainDarkCyan py-2">
                          Learn More
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}

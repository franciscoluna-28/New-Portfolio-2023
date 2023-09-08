import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectCards } from "swiper";
import { createdProjects } from "../../data/projectDatabase";
import "swiper/swiper-bundle.css";
import "../../utils/glowStyles.css";
import { useContext } from "react";
import { RefContext } from "../../context/ScrollContext";
import { ScrollToComponent } from "../../hooks/ScrollToComponent";

import "swiper/css";
import "swiper/css/effect-fade";

export default function ProjectsCarousel() {
  const { projectsRef, portfolioRef } = useContext(RefContext);
  const scrollToPortfolioRef = ScrollToComponent({ rootRef: portfolioRef });
  return (
    <>
      <div
        className="flex flex-col justify-center items-center py-12"
        ref={projectsRef}
      >
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
        <p className="dark:text-mainSilver/80 text-mainExtraDarkBlue/70 md:text-lg">
          See what I'm able to create
        </p>
      </div>
      <button
        onClick={scrollToPortfolioRef}
        className={"primary-button mb-4 px-8 !w-auto"}
      >
        See my projects
      </button>

      <div className="shadow-md w-full mt-8">
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
              <SwiperSlide key={project.id} className="h-full w-full">
                <div
                  style={{ backgroundImage: `url(${project.image})` }}
                  className="w-full bg-no-repeat min-h-screen bg-cover bg-center bg-fixed"
                >
                  <div className="absolute inset-0 md:bg-black/70 backdrop-blur-sm bg-black/80 flex items-center justify-center p-32">
                    <div className="text-white text-center">
                      <h3 className="font-bold text-3xl lg:text-6xl lg:mb-4">
                        {project.title}
                      </h3>
                      <p className="text-mainSilver hidden leading-loose sm:block text-center text-base">
                        {project.description}
                      </p>

                      <div className="mt-4">
                        <span
                          onClick={scrollToPortfolioRef}
                          className="text-xl font-bold dark:text-mainCyan text-mainDarkCyan"
                        >
                          Learn More
                        </span>
                      </div>
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

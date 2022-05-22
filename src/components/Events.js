import React from "react";
import { Link } from "react-router-dom";
import WorkshopImg from "../assets/workshop-class.jpg";
import GlobalForumImg from "../assets/global-forum.jpg";
import FinalProject from "../assets/final-project.jpg";
import EventsImg from "../assets/event-mentoring.jpg";
import "../App.css";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/effect-flip";
import "swiper/css/effect-cube";
import "swiper/css/effect-creative";
import ArrowNext from "../assets/icons/arrow-next.svg";
import ArrowPrev from "../assets/icons/arrow-prev.svg";

function Events() {
  const eventsData = [
    {
      id: 1,
      imgUrl: WorkshopImg,
      description: "Workshop Class",
    },
    {
      id: 2,
      imgUrl: GlobalForumImg,
      description: "Global Forum",
    },
    {
      id: 3,
      imgUrl: EventsImg,
      description: "Individual Development Plan (IDP)",
    },
    {
      id: 4,
      imgUrl: FinalProject,
      description: "Final Project",
    },
  ];

  return (
    <section
      id="events"
      className="w-full h-full flex justify-center shadow-md"
    >
      <div className="max-w-screen-2xl w-full xs:px-2 sm:px-4 md:px-10 xs:py-16 md:py-24">
        <div className="w-full text-center xs:mb-10 md:mb-14">
          <h2 className="xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 xs:mb-4 md:mb-8">
            Our Programs
          </h2>
          <p className="lg:text-lg md:text-base xs:text-sm text-gray-600 leading-relaxed">
            What we provide you?
          </p>
        </div>
        {/* START: CAROUSEL EVENTS */}
        <Swiper
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            Autoplay,
            EffectFade,
          ]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay
          pagination={{ clickable: true }}
          effect="fade"
        >
          <div className="swiper-button-prev">
            <img
              src={ArrowPrev}
              alt="Arrow Prev"
              className="w-full object-cover object-center"
            />
          </div>
          <div className="swiper-button-next">
            <img
              src={ArrowNext}
              alt="Arrow Next"
              className="w-full object-cover object-center"
            />
          </div>

          {eventsData.map((data) => {
            return (
              <SwiperSlide
                className="w-full h-full flex justify-center mb-14"
                key={data.id}
              >
                <div className="w-9/12 h-full relative">
                  <img
                    src={data.imgUrl}
                    alt={data.description}
                    className="w-full xs:h-52 sm:h-72 md:h-88 lg:h-100 object-cover object-center rounded-xl shadow-xl"
                  />
                  <h3 className="w-1/2 xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white absolute top-10 left-10 xs:leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                    {data.description}
                  </h3>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* END: CAROUSEL EVENTS */}
        <div className="w-full h-full mt-8 text-center">
          <Link
            to="/programs"
            className="xs:w-32 sm:w-40 md:w-48 xs:py-2 md:py-3 rounded-md xs:text-base sm:text-lg md:text-xl font-semibold text-white bg-yellow-500 transition-all duration-500 hover:bg-yellow-600 text-center inline-block"
          >
            Read more
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Events;

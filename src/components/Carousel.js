import React from "react";
import "../App.css";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
  EffectCube,
  EffectCreative,
  EffectFlip,
  EffectCards,
  EffectCoverflow,
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

function Carousel({ sPerView, carouselData }) {
  //   console.log(props);
  return (
    <Swiper
      modules={[
        Navigation,
        Pagination,
        Scrollbar,
        A11y,
        Autoplay,
        EffectFade,
        EffectCube,
        EffectFlip,
        EffectCreative,
        EffectCards,
        EffectCoverflow,
      ]}
      spaceBetween={50}
      slidesPerView={sPerView}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      autoplay
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("Slide Changed")}
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

      {carouselData.map((data) => {
        return (
          <SwiperSlide
            className="w-full h-full flex justify-center mb-14"
            key={data.id}
          >
            <div className="xs:w-4/6 md:w-5/6 h-full relative">
              <img
                src={data.imgUrl}
                alt={data.description}
                className="w-full xs:h-52 sm:h-72 md:h-88 lg:h-100 object-cover object-center rounded-xl shadow-xl"
              />
              <h3 className="xs:w-1/3 md:w-1/4 xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white absolute top-10 left-10 xs:leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                {data.description}
              </h3>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Carousel;

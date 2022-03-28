import React from "react";
import Testimonial1 from "../assets/marsha-dhita.jpg";
import Testimonial2 from "../assets/teams/anathan-pham.jpg";
import Testimonial3 from "../assets/teams/clement-ivanov.jpg";
import Testimonial4 from "../assets/teams/kuro-salehi.jpg";
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

function Testimonials() {
  const testimonialsData = [
    {
      id: 1,
      name: "Marsha Dhita",
      batch: 3,
      class: "Social Project",
      imgUrl: Testimonial1,
      testimony:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis.",
    },
    {
      id: 2,
      name: "Anathan Pham",
      batch: 1,
      class: "Public Speaking",
      imgUrl: Testimonial2,
      testimony:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis.",
    },
    {
      id: 3,
      name: "Clement Ivanov",
      batch: 4,
      class: "Public Speaking",
      imgUrl: Testimonial3,
      testimony:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis.",
    },
    {
      id: 4,
      name: "Kuro Salehi",
      batch: 5,
      class: "Scholarship",
      imgUrl: Testimonial4,
      testimony:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis.",
    },
  ];

  return (
    <section id="testimonials" className="w-full h-full flex justify-center">
      <div className="max-w-screen-2xl w-full px-10 py-16">
        <div className="w-full text-center xs:mb-10 md:mb-14">
          <h2 className="xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 xs:mb-4 md:mb-8">
            What Do They Say
          </h2>
        </div>
        {/* START: TESTIMONIAL */}
        <Swiper
          modules={[Navigation, Pagination, EffectFade, Autoplay, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          Autoplay
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("Slides Changed!")}
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

          <div className="w-full h-full">
            {testimonialsData.map((testimonial, idx) => {
              return (
                <SwiperSlide className="w-full h-full flex justify-center mb-14">
                  <div className="xs:w-4/6 md:w-5/6 h-full">
                    <div className="xs:p-6 sm:p-8 md:p-12 lg:p-20 bg-white shadow-lg rounded-xl flex xs:flex-col md:flex-row justify-center xs:items-start md:items-center xs:gap-4 sm:gap-8">
                      <div className="xs:w-full md:w-1/3 flex xs:justify-start md:justify-center">
                        <div className="xs:w-28 xs:h-28 sm:w-36 sm:h-36 md:w-48 md:h-48">
                          <img
                            src={testimonial.imgUrl}
                            alt={`Testimonial ${idx} Img`}
                            className="w-full h-full rounded-full object-cover object center"
                          />
                        </div>
                      </div>
                      <div className="xs:w-full md:w-2/3">
                        <h4 className="xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900">
                          {testimonial.name}
                        </h4>
                        <h5 className="xs:text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-900 xs:mt-2 md:mt-4 xs:mb-4 md:mb-8">
                          Alumni of Batch {testimonial.batch} -{" "}
                          {testimonial.class} Mentee
                        </h5>
                        <p className="xs:text-sm sm:text-base md:text-lg text-gray-400 text-justify">
                          {testimonial.testimony}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </div>
      {/* END: TESTIMONIAL */}
    </section>
  );
}

export default Testimonials;

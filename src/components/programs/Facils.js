import React from "react";
// import Facils1 from "../../assets/marsha-dhita.jpg";
import "../../App.css";
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
import ArrowNext from "../../assets/icons/arrow-next.svg";
import ArrowPrev from "../../assets/icons/arrow-prev.svg";
import LinkedinIcon from "../../assets/icons/linkedin-icon-white.png";

function Facils({ facils }) {
  // console.log(facils);
  return (
    <section
      id="facils"
      className="w-full h-full flex justify-center shadow-md"
    >
      <div className="max-w-screen-2xl w-full xs:px-2 md:px-4 lg:px-10 xs:py-16 md:py-24">
        <div className="w-full text-center xs:mb-10 md:mb-14">
          <h2 className="xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 xs:mb-4 md:mb-8">
            Our Facilitators
          </h2>
          <p className="xs:text-base md:text-lg text-gray-500">
            Ready to learn directly from them?
          </p>
        </div>

        {/* START: FACILS CAROUSEL */}
        <div className="w-full flex justify-center items-center">
          <Swiper
            modules={[Navigation, Autoplay, Pagination, A11y, EffectFade]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
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
              {facils.map((facil) => {
                return (
                  <SwiperSlide
                    className="w-full h-full flex justify-center mb-14"
                    key={facil.id}
                  >
                    <div className="w-9/12 h-full">
                      <div className="xs:p-4 sm:p-6 md:p-10 xs:h-110 sm:h-100 md:h-98 lg:h-96 shadow-lg bg-gray-100 rounded-xl flex xs:flex-col md:flex-row xs:justify-center md:justify-between items-center xs:text-center md:text-left xs:gap-2 sm:gap-4 md:gap-6 lg:gap-10">
                        {/* START: CARD LEFT */}
                        <div className="xs:w-full md:w-1/3 flex justify-center">
                          <div className="xs:w-36 xs:h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-60 lg:h-60">
                            <img
                              src={facil.imgUrl}
                              alt={`Facil ${facil.id + 1} Img`}
                              className="w-full h-full object-cover object-center rounded-full custom-shadow"
                            />
                          </div>
                        </div>
                        {/* END: CARD LEFT */}

                        {/* START: CARD RIGHT */}
                        <div className="xs:w-full md:w-2/3 flex flex-col xs:items-center md:items-start">
                          <h4 className="xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-yellow-500 ">
                            {facil.name}
                          </h4>
                          <h5 className="xs:text-sm md:text-base text-gray-700 font-semibold mt-2 mb-4 ">
                            Facilitator of {facil.class} Class
                          </h5>
                          <ul className="xs:mb-2 md:mb-3">
                            {facil.description.map((desc, idx) => {
                              return (
                                <li
                                  className="xs:text-sm md:text-base text-gray-500 mb-2 ml-4 xs:text-center md:text-left xs:list-none md:list-disc"
                                  key={idx}
                                >
                                  {desc}
                                </li>
                              );
                            })}
                          </ul>
                          <div className="inline-block">
                            <a
                              href={facil.linkedin}
                              target="_blank"
                              className="px-4 py-2 rounded-sm bg-purple-700 text-white flex gap-2 items-center justify-center transition-all duration-500 hover:bg-purple-800"
                            >
                              <img
                                src={LinkedinIcon}
                                alt="linkedin icon"
                                className="w-6 h-6 object-cover"
                              />
                              <span className="xs:text-sm md:text-base">
                                Linkedin
                              </span>
                            </a>
                          </div>
                        </div>
                        {/* END: CARD RIGHT */}
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>
        </div>
        {/* END: FACILS CAROUSEL */}
      </div>
    </section>
  );
}

export default Facils;

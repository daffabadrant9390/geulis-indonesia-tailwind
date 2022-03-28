import React from "react";
import Facils1 from "../../assets/marsha-dhita.jpg";
import Facils2 from "../../assets/teams/anathan-pham.jpg";
import Facils3 from "../../assets/teams/clement-ivanov.jpg";
import Facils4 from "../../assets/teams/kuro-salehi.jpg";
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

function Facils() {
  const facilsData = [
    {
      id: 1,
      name: "Marsha Dhita",
      role: "Software Engineer",
      company: "Tokopedia",
      imgUrl: Facils1,
      testimony1:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio.",
      testimony2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio.",
    },
    {
      id: 2,
      name: "Anathan Pham",
      role: "Business Intelligence",
      company: "Shopee",
      imgUrl: Facils2,
      testimony1:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio.",
      testimony2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio.",
    },
    {
      id: 3,
      name: "Clement Ivanov",
      role: "Project Manager",
      company: "Gojek",
      imgUrl: Facils3,
      testimony1:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio.",
      testimony2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio.",
    },
    {
      id: 4,
      name: "Kuro Salehi",
      role: "Senior Talent Acquisition",
      company: "Traveloka",
      imgUrl: Facils4,
      testimony1:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio.",
      testimony2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio.",
    },
  ];

  return (
    <section id="facils" className="w-full h-full flex justify-center">
      <div className="max-w-screen-2xl w-full px-10 py-16">
        <div className="w-full text-center xs:mb-10 md:mb-14">
          <h2 className="xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 xs:mb-4 md:mb-8">
            Our Facilitators
          </h2>
          <p className="xs:text-base md:text-lg text-gray-500">
            Ready to learn directly from them?
          </p>
        </div>
        {/* START: FACILS CAROUSEL */}
        <div className="w-full h-full">
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
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("Slides Changed!")}
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
              {facilsData.map((facil) => {
                return (
                  <SwiperSlide className="w-full h-full flex justify-center mb-14">
                    <div className="xs:w-4/6 md:w-5/6 h-full">
                      <div
                        className="xs:p-6 sm:p-8 md:p-14 shadow-lg bg-white rounded-xl flex xs:flex-col md:flex-row xs:justify-center md:justify-between xs:items-start md:items-center gap-10"
                        key={facil.id}
                      >
                        <div className="xs:w-full md:w-1/2 flex justify-center">
                          <div className="xs:w-40 xs:h-40 sm:w-48 sm:h-48 md:w-88 md:h-88">
                            <img
                              src={facil.imgUrl}
                              alt={`Facil ${facil.id + 1} Img`}
                              className="w-full h-full object-cover object-center rounded-full shadow-md"
                            />
                          </div>
                        </div>
                        <div className="xs:w-full md:w-1/2">
                          <h4 className="xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900">
                            {facil.name}
                          </h4>
                          <h5 className="xs:text-sm sm:text-base md:text-lg text-gray-700 mt-3 xs:mb-3 md:mb-6">
                            {facil.role} at {facil.company}
                          </h5>
                          <div className="text-justify">
                            <p className="text-base xs:leading-normal sm:leading-normal md:leading-normal lg:leading-nromal text-gray-700 xs:mb-2 md:mb-4">
                              {facil.testimony1}
                            </p>
                            <p className="text-base xs:leading-normal sm:leading-normal md:leading-normal lg:leading-nromal text-gray-700">
                              {facil.testimony2}
                            </p>
                          </div>
                        </div>
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

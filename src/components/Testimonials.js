import React from "react";
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
      name: "Sheilla Ramadhina",
      batch: "IV",
      class: "Scholarship",
      experiences: [
        "OeAD Ernst Mach Grant Awardee",
        "Student Exchange at University of Applied Sciences Upper Austria",
      ],
      imgUrl: "images/testimonials/sheilla-ramadhina.jpg",
      testimony:
        "Pengalaman saya selama jadi mentee di Geulis Indonesia itu exciting and knowledgeable banget! The community gives me a great impact until now. Saya mendapatkan beasiswa pertukaran pelajar ke Austria dan hal-hal yang sudah saya pelajari di Geulis Indonesia sangat memberikan dampak nyata.",
    },
    {
      id: 2,
      name: "Ula Rizki Ramadhia",
      batch: "IV",
      class: "Scholarship",
      experiences: [
        "Local Head of Product Development and Initiative at AIESEC in Universitas Sriwijaya",
      ],
      imgUrl: "images/testimonials/ula-rizki-ramadhia.jpg",
      testimony:
        "It was fun yet enlightening. Aku belajar banyak tentang beasiswa, bikin individual personal plan yang sampe sekarang masih aku gunain hehe. Walaupun aku dari kelas scholarship, aku juga berkesempatan ngebuat final project berbentuk webinar sama mentee-mentee dari kelas lain!",
    },
    {
      id: 3,
      name: "Anggina Putri",
      batch: "II",
      class: "Public Speaker",
      experiences: [
        "Public Relations Intern of The House of Representatives (DPR RI)",
      ],
      imgUrl: "images/testimonials/anggina-putri.jpg",
      testimony:
        "Being Geulisius was a life-changing experience for me. I got all the tools that I needed to execute my idea for my goals. I grew so much, having the courage to take a new step, and more brave for facing failures. Even in this place, I meet a lot of inspiring people to learn something new and gain so much positive energy. ",
    },
    {
      id: 4,
      name: "Rian Alto Belly",
      batch: "II",
      class: "Public Speaker",
      experiences: [
        "The Runner Up Most Oustanding Student of Universitas Sriwijaya 2022",
      ],
      imgUrl: "images/testimonials/rian-alto-belly.jpg",
      testimony:
        "Geulis berhasil buat aku tau dunia debat which is itu jadi salah satu hobi aku sekarang, padahal sebelumnya kepikiran buat jadi mahasiswa kupu kupu. Mereka kasih aku kesempatan untuk berkembang di tempat yang tepat dan suportif serta ngajarin aku buat set up my goals dengan segala stakeholder yang aku perlu. ",
    },
    {
      id: 5,
      name: "Fikri Ariansyah Pratama",
      batch: "IV",
      class: "Social Project",
      experiences: ["CEO of Aurroom", "XL Future Leaders Awardee Batch 10"],
      imgUrl: "images/testimonials/fikri-ariansyah.jpg",
      testimony:
        "Ikut program mentoring Geulis adalah salah satu keputusan paling tepat yang aku ambil. Dari sini, aku belajar soal cara memanajemen dan mengelola project yang mau aku kembangkan. Jujur, komunitas yang sedang aku rintis, yakni Aurroom pun juga banyak dapat insights dari mentoring bersama Geulis! ",
    },
  ];

  return (
    <section
      id="testimonials"
      className="w-full h-full flex justify-center shadow-md"
    >
      <div className="max-w-screen-2xl w-full xs:px-2 md:px-4 lg:px-10 xs:py-16 md:py-24">
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
                <SwiperSlide
                  className="w-full h-full flex justify-center mb-14"
                  key={testimonial.id}
                >
                  <div className="w-9/12 h-full">
                    <div className="xs:p-4 sm:p-6 md:p-10 xs:h-115 md:h-110 lg:h-100 bg-gray-100 shadow-lg rounded-xl flex xs:flex-col lg:flex-row justify-center xs:items-start lg:items-center xs:gap-6 lg:gap-10">
                      <div className="xs:w-full lg:w-1/3 flex xs:justify-start lg:justify-center items-center">
                        <div className="xs:w-28 xs:h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-56 lg:h-56">
                          <img
                            src={testimonial.imgUrl}
                            alt={`Testimonial ${idx} Img`}
                            className="w-full h-full rounded-full object-cover object center custom-shadow"
                          />
                        </div>
                      </div>
                      <div className="xs:w-full lg:w-2/3">
                        <p className="xs:text-sm sm:text-base md:text-lg lg:text-xl text-gray-900 text-justify mb-8 sm:leading-relaxed md:leading-relaxed lg:leading-relaxed font-semibold">
                          <q>{testimonial.testimony}</q>
                        </p>
                        <h4 className="xs:text-base sm:text-lg md:text-xl font-semibold text-yellow-500 mb-2">
                          {testimonial.name}
                        </h4>
                        <p className="xs:text-sm text-gray-700 mb-2 font-semibold">
                          Alumni of Batch {testimonial.batch} -{" "}
                          {testimonial.class} Class
                        </p>
                        {/* <p className="xs:text-sm sm:text-base text-justify text-gray-900">
                          {testimonial.experiences.join(", ")}
                        </p> */}
                        <ul className="pl-4 text-justify">
                          {testimonial.experiences.map((experience, idx) => {
                            return (
                              <li
                                className="list-disc xs:text-sm text-gray-400 font-semibold"
                                key={idx}
                              >
                                {experience}
                              </li>
                            );
                          })}
                        </ul>
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

import React from "react";
import Benefit1 from "../assets/icons/learn-from-the-best.svg";
import Benefit2 from "../assets/icons/wider-network.svg";
import Benefit3 from "../assets/icons/build-portfolio.svg";
import Benefit4 from "../assets/icons/exclusive-materials.svg";

function Benefit() {
  const benefitsData = [
    {
      id: 1,
      title: "Learn from The Best",
      description:
        "Learn directly with our amazing facils and speakers that are ready to help you",
      imgUrl: Benefit1,
    },
    {
      id: 2,
      title: "Wider Network",
      description:
        "Chance to collaborate and network with fellow highly motivated South Sumatra students.",
      imgUrl: Benefit2,
    },
    {
      id: 3,
      title: "Build Portfolio",
      description:
        "Apply your learnings into the final project and develop your own portfolio.",
      imgUrl: Benefit3,
    },
    {
      id: 4,
      title: "Exclusive Materials",
      description:
        "Get the materials and templates to ace your career and development!",
      imgUrl: Benefit4,
    },
  ];

  return (
    <section
      id="benefit"
      className="w-full h-full flex justify-center items-center"
    >
      <div className="max-w-screen-2xl px-10 pt-32 pb-16 flex lg:flex-row xs:flex-col items-center lg:gap-20 xs:gap-10">
        <div
          className="lg:w-1/2 xs:w-full grid xs:grid-cols-1 sm:grid-cols-2 gap-4 items-center justify-between lg:order-1 xs:order-2"
          data-aos="fade-up"
        >
          {benefitsData.map((benefit) => {
            return (
              <div
                className="h-full xs:p-4 md:p-6 bg-white rounded-lg custom-shadow"
                key={benefit.id}
              >
                <img
                  className="xs:w-10 xs:h-10 md:w-16 md:h-16 object-cover"
                  src={benefit.imgUrl}
                  alt={benefit.title}
                />
                <h4 className="text-xl font-semibold text-gray-900 my-3">
                  {benefit.title}
                </h4>
                <p className="xs:text-sm md:text-base text-gray-600 text-justify">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
        <div className="lg:w-1/2 xs:w-full lg:order-2 xs:order-1 xs:text-center lg:text-left flex flex-col xs:items-center lg:items-start">
          <div className="xs:w-full sm:w-100 xl:w-110">
            <h2 className="xs:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 xs:mb-5 lg:mb-10">
              Why Join Us?
            </h2>
            <p className="lg:text-lg md:text-base xs:text-sm text-gray-600 leading-relaxed">
              We provide you a safe and engaging platform to unfold your brand
              new-self and turn your goals into real actions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefit;

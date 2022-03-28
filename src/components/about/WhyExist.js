import React from "react";
import WhyDoWeExistImg from "../../assets/why-do-we-exist.jpg";

function WhyExist() {
  return (
    <section id="why-do-we-exist" className="w-full h-full flex justify-center">
      <div className="max-w-screen-2xl w-full xs:px-14 md:px-10 pt-28 pb-16 flex justify-between items-center gap-20 xs:text-center md:text-left">
        <div className="xs:w-full md:w-1/2 h-full flex flex-col justify-center xs:items-center md:items-start order-2">
          <h2 className="xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xs:mb-5 md:mb-10 font-semibold text-gray-900">
            Why Do We Exist?
          </h2>
          <p className="first-letter:text-2xl xs:text-sm md:text-base text-gray-900 mb-6 xs:leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed text-justify">
            Geulis Indonesia was established on{" "}
            <span className="font-semibold text-black">January 17th 2019</span>,
            was founded by{" "}
            <span className="font-semibold text-black">
              Diki Wahyudi as founder
            </span>{" "}
            and{" "}
            <span className="font-semibold text-black">
              Sinta Windasari as Co-founder
            </span>
            . There are 2 reasons why they created Geulis Indonesia:
          </p>
          <ol className="pl-4">
            <li className="list-disc xs:text-sm md:text-base text-gray-900 mb-4 xs:leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed text-justify">
              They found that a lot of students in their campus are afraid to
              speak English because of the limited opportunity and platform to
              develop it.
            </li>
            <li className="list-disc xs:text-sm md:text-base text-gray-900 mb-2 xs:leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed text-justify">
              They wanted to give a feedback for their campus which have given
              them opportunity for joining national and international
              competitions.
            </li>
          </ol>
        </div>
        <div className="xs:hidden md:block w-1/2 order-1">
          <div className="flex justify-start items-center">
            <img
              src={WhyDoWeExistImg}
              className="w-full h-100 rounded-lg object-cover"
              alt="Why Do We Exist Img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default WhyExist;

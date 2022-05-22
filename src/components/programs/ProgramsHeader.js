import React from "react";
import ProgramsHeaderImg from "../../assets/programs-header-img.jpg";

function ProgramsHeader() {
  return (
    <section id="programs-header" className="w-full h-full flex justify-center">
      <div className="max-w-screen-2xl w-full xs:px-14 md:px-0 pt-32 xs:pb-16 md:pb-24 flex justify-between items-center gap-20">
        <div className="xs:w-full md:w-1/2 md:pl-10 xs:text-center md:text-left flex flex-col xs:items-center md:items-start">
          <h2 className="xs:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-gray-900 xs:mb-10 md:mb-14">
            Programs
          </h2>
          <p className="xs:text-sm md:text-base text-gray-900 xs:leading-relaxed sm:leading-relaxed md:leading-relaxed">
            Our programs are designed with curriculum and activities that are
            developed to escalate Geulisius in their college journeys and
            support their aspirations.
          </p>
        </div>
        <div className="xs:hidden md:block w-1/2">
          <div className="flex justify-end items-center">
            <img
              src={ProgramsHeaderImg}
              alt="Programs Header Img"
              className="w-full h-100 rounded-l-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProgramsHeader;

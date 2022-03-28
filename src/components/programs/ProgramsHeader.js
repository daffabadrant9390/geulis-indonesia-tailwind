import React from "react";
import ProgramsHeaderImg from "../../assets/programs-header-img.jpg";

function ProgramsHeader() {
  return (
    <section id="programs-header" className="w-full h-full flex justify-center">
      <div className="max-w-screen-2xl w-full xs:px-14 md:px-0 pt-32 pb-16 flex justify-between items-center gap-20">
        <div className="xs:w-full md:w-1/2 md:pl-10 xs:text-center md:text-left flex flex-col xs:items-center md:items-start">
          <h2 className="xs:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-gray-900 xs:mb-10 md:mb-14">
            Programs
          </h2>
          <p className="w-3/4 xs:text-sm md:text-base text-gray-900 xs:leading-relaxed sm:leading-relaxed md:leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio.
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

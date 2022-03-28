import React from "react";
import FaqHeaderImg from "../../assets/faq-header-img.jpg";

function FaqHeader() {
  return (
    <section id="faq-header" className="w-full h-full flex justify-center">
      <div className="max-w-screen-2xl w-full xs:px-10 md:px-0 pt-32 pb-16 flex justify-between items-center gap-12 xs:text-center md:text-left">
        <div className="xs:w-full md:w-1/2 h-full flex flex-col justify-center xs:items-center md:items-start md:pl-10">
          <h2 className="xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold xs:mb-5 md:mb-10 text-gray-900">
            Frequently Asked Question
          </h2>
          <p className="w-3/4 xs:text-sm md:text-base text-gray-900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio.
          </p>
        </div>
        <div className="xs:hidden md:block w-1/2">
          <div className="flex justify-end items-center">
            <img
              src={FaqHeaderImg}
              className="w-full h-100 rounded-l-xl object-cover"
              alt="Frequently Asked Question"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqHeader;

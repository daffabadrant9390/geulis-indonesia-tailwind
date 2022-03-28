import React from "react";
import ScholarShipImg from "../../assets/scholarship-class.jpg";
import SocialProjectImg from "../../assets/social-project-class.jpg";
import PublicSpeakingImg from "../../assets/public-speaking-class.jpg";

function Classes() {
  return (
    <section id="our-classes" className="w-full h-full flex justify-center">
      <div className="max-w-screen-2xl w-full px-10 py-16">
        <div className="w-full text-center xs:mb-10 md:mb-14">
          <h2 className="xs:text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-semibold text-gray-900 xs:mb-5 md:mb-10">
            Classes
          </h2>
          <p className="xs:text-sm md:text-base text-gray-900">
            Which class fit you the most?
          </p>
        </div>
        {/* START: SCHOLARSHIP CLASS */}
        <div
          className="w-full xs:p-8 md:p-0 xs:py-10 md:py-16 xs:mb-10 md:mb-14 rounded-xl flex xs:flex-col md:flex-row items-center xs:justify-center md:justify-between xs:gap-10 md:gap-20 xs:custom-shadow md:shadow-none"
          data-aos="fade-up"
        >
          <div className="xs:w-full md:w-1/2 xs:text-center md:text-left order-1">
            <h3 className="xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 xs:mb-5 md:mb-10">
              Scholarship Class
            </h3>
            <p className="xs:text-sm sm:text-base md:text-lg text-gray-900 text-justify xs:mb-3 md:mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio.
            </p>
            <p className="xs:text-sm sm:text-base md:text-lg text-gray-900 text-justify xs:mb-3 md:mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio.
            </p>
          </div>
          <div className="xs:w-full md:w-1/2 order-2">
            <div className="flex justify-end items-center custom-shadow">
              <img
                src={ScholarShipImg}
                alt="Scholarship Class Img"
                className="w-full xs:h-80 md:h-96 rounded-lg object-cover object-center"
              />
            </div>
          </div>
        </div>
        {/* END: SCHOLARSHIP CLASS */}

        {/* START: PUBLIC SPEAKING CLASS */}
        <div
          className="w-full xs:p-8 md:p-0 xs:py-10 md:py-16 xs:mb-10 md:mb-14 rounded-xl flex xs:flex-col md:flex-row items-center xs:justify-center md:justify-between xs:gap-10 md:gap-20 xs:custom-shadow md:shadow-none"
          data-aos="fade-up"
        >
          <div className="xs:w-full md:w-1/2 xs:text-center md:text-left xs:order-1 md:order-2">
            <h3 className="xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 xs:mb-5 md:mb-10">
              Public Speaking Class
            </h3>
            <p className="xs:text-sm sm:text-base md:text-lg text-gray-900 text-justify xs:mb-3 md:mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio.
            </p>
            <p className="xs:text-sm sm:text-base md:text-lg text-gray-900 text-justify xs:mb-3 md:mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio.
            </p>
          </div>
          <div className="xs:w-full md:w-1/2 xs:order-2 md:order-1">
            <div className="flex justify-end items-center custom-shadow">
              <img
                src={PublicSpeakingImg}
                alt="Scholarship Class Img"
                className="w-full xs:h-80 md:h-96 rounded-lg object-cover object-center"
              />
            </div>
          </div>
        </div>
        {/* END: PUBLIC SPEAKING CLASS */}

        {/* START: SOCIAL PROJECT CLASS */}
        <div
          className="w-full xs:p-8 md:p-0 xs:py-10 md:py-16 xs:mb-10 md:mb-14 rounded-xl flex xs:flex-col md:flex-row items-center xs:justify-center md:justify-between xs:gap-10 md:gap-20 xs:custom-shadow md:shadow-none"
          data-aos="fade-up"
        >
          <div className="xs:w-full md:w-1/2 xs:text-center md:text-left order-1">
            <h3 className="xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 xs:mb-5 md:mb-10">
              Social Project Class
            </h3>
            <p className="xs:text-sm sm:text-base md:text-lg text-gray-900 text-justify xs:mb-3 md:mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio.
            </p>
            <p className="xs:text-sm sm:text-base md:text-lg text-gray-900 text-justify xs:mb-3 md:mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio.
            </p>
          </div>
          <div className="xs:w-full md:w-1/2 order-2">
            <div className="flex justify-end items-center custom-shadow">
              <img
                src={SocialProjectImg}
                alt="Scholarship Class Img"
                className="w-full xs:h-80 md:h-96 rounded-lg object-cover object-center"
              />
            </div>
          </div>
        </div>
        {/* END: SOCIAL PROJECT CLASS */}
      </div>
    </section>
  );
}

export default Classes;

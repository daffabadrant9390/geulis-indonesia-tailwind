import React from "react";
import WorkshopImg from "../../assets/workshop-class.jpg";
import GlobalForumImg from "../../assets/global-forum.jpg";
import IDPImg from "../../assets/idp.jpg";
import FinalProject from "../../assets/final-project.jpg";

function Activities() {
  return (
    <section id="activities" className="w-full h-full flex justify-center">
      <div className="max-w-screen-2xl w-full px-10 py-16">
        <div className="w-full text-center xs:mb-10 md:mb-14">
          <h2 className="xs:text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-semibold text-gray-900 mb-10">
            Activities
          </h2>
          <p className="xs:text-sm md:text-base text-gray-900">
            The Activities provided for the mentees
          </p>
        </div>
        {/* START: WORKSHOP CLASS */}
        <div
          className="w-full xs:p-8 md:p-0 xs:py-10 md:py-16 xs:mb-10 md:mb-14 rounded-xl flex xs:flex-col md:flex-row items-center xs:justify-center md:justify-between xs:gap-10 md:gap-20 xs:custom-shadow md:shadow-none"
          data-aos="fade-up"
        >
          <div className="xs:w-full md:w-1/2 xs:text-center md:text-left order-1">
            <h3 className="xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-10">
              Workshop Class
            </h3>
            <p className="xs:text-sm sm:text-base md:text-lg text-gray-900 text-justify xs:mb-3 md:mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio.
            </p>
            <p className="xs:text-sm sm:text-base md:text-lg text-gray-900 text-justify xs:mb-3 md:mb-6 xs:leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio.
            </p>
          </div>
          <div className="xs:w-full md:w-1/2 order-2">
            <div className="flex justify-end items-center">
              <img
                src={WorkshopImg}
                alt="Workshop Class Activity"
                className="w-full xs:h-80 md:h-96 rounded-lg object-cover object-center shadow-xl"
              />
            </div>
          </div>
        </div>
        {/* END: WORKSHOP CLASS */}

        {/* START: GLOBAL FORUM */}
        <div
          className="w-full xs:p-8 md:p-0 xs:py-10 md:py-16 xs:mb-10 md:mb-14 rounded-xl flex xs:flex-col md:flex-row items-center xs:justify-center md:justify-between xs:gap-10 md:gap-20 xs:custom-shadow md:shadow-none"
          data-aos="fade-up"
        >
          <div className="xs:w-full md:w-1/2 xs:text-center md:text-left xs:order-1 md:order-2">
            <h3 className="xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-10">
              Global Forum
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
            <div className="flex justify-end items-center">
              <img
                src={GlobalForumImg}
                alt="Global Forum Activity"
                className="w-full xs:h-80 md:h-96 rounded-lg object-cover object-center shadow-xl overflow-hidden"
              />
            </div>
          </div>
        </div>
        {/* END: GLOBAL FORUM */}

        {/* START: IDP (INDIVIDUAL DEVELOPMENT PLAN) */}
        <div
          className="w-full xs:p-8 md:p-0 xs:py-10 md:py-16 xs:mb-10 md:mb-14 rounded-xl flex xs:flex-col md:flex-row items-center xs:justify-center md:justify-between xs:gap-10 md:gap-20 xs:custom-shadow md:shadow-none"
          data-aos="fade-up"
        >
          <div className="xs:w-full md:w-1/2 xs:text-center md:text-left order-1">
            <h3 className="xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-10">
              Individual Development Plan
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
            <div className="flex justify-end items-center">
              <img
                src={IDPImg}
                alt="Individual Development Plan Activity"
                className="w-full xs:h-80 md:h-96 rounded-lg object-cover object-center shadow-xl"
              />
            </div>
          </div>
        </div>
        {/* END: IDP (INDIVIDUAL DEVELOPMENT PLAN) */}

        {/* START: FINAL PROJECT */}
        <div
          className="w-full xs:p-8 md:p-0 xs:py-10 md:py-16 xs:mb-10 md:mb-14 rounded-xl flex xs:flex-col md:flex-row items-center xs:justify-center md:justify-between xs:gap-10 md:gap-20 xs:custom-shadow md:shadow-none"
          data-aos="fade-up"
        >
          <div className="xs:w-full md:w-1/2 xs:text-center md:text-left xs:order-1 md:order-2">
            <h3 className="xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-10">
              Final Project
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
            <div className="flex justify-start items-center">
              <img
                src={FinalProject}
                alt="Individual Development Plan Activity"
                className="w-full xs:h-80 md:h-96 rounded-lg object-cover object-center shadow-xl"
              />
            </div>
          </div>
        </div>
        {/* END: FINAL PROJECT */}
      </div>
    </section>
  );
}

export default Activities;

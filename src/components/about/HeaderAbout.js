import React from "react";
import AboutUsImg from "../../assets/about-us-img.jpg";

function HeaderAbout() {
  return (
    <section id="about-header" className="w-full h-full flex justify-center">
      <div className="max-w-screen-2xl w-full xs:px-14 md:px-0 pt-32 pb-16 flex justify-between items-center gap-20">
        <div className="xs:w-full md:w-1/2 md:pl-10 xs:text-center md:text-left">
          <h2 className="xs:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900">
            About Us
          </h2>
          <p className="w-3/4 xs:text-sm md:text-base text-gray-900 xs:my-6 md:my-14 xs:leading-relaxed sm:leading-relaxed md:leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio.
          </p>
          <div className="flex gap-4 xs:justify-center md:justify-start">
            <a
              href="#why-do-we-exist"
              className="xs:w-32 md:w-40 py-2 rounded-md xs:text-base md:text-xl font-semibold text-white bg-yellow-500 transition-all duration-500 hover:bg-yellow-600 text-center inline-block"
            >
              Background
            </a>
            <a
              href="#our-team"
              className="xs:w-32 md:w-40 py-2 rounded-md xs:text-base md:text-xl font-semibold text-white bg-yellow-500 transition-all duration-500 hover:bg-yellow-600 text-center inline-block"
            >
              Teams
            </a>
          </div>
        </div>
        <div className="xs:hidden md:block w-1/2">
          <div className="flex justify-end items-center">
            <img
              src={AboutUsImg}
              className="w-full h-100 rounded-l-lg object-cover"
              alt="About Us Img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeaderAbout;

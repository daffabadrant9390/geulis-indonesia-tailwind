import React from "react";
import RegisterImg from "../../assets/register-img.png";
import FAQRegisterImg from "../../assets/faq-img-2.jpg";
import FAQRegisterBg from "../../assets/faq-register-bg.png";

function RegisterHeader() {
  return (
    <section id="register-header" className="w-full h-full flex justify-center">
      <div className="max-w-screen-2xl w-full px-10 pt-36 pb-16">
        <h2 className="xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 xs:mb-10 md:mb-14 text-center">
          Register Now
        </h2>
        <div className="relative shadow-xl">
          <img
            src={RegisterImg}
            className="relative w-full xs:h-100 lg:h-120 object-cover object-center xs:rounded-lg md:rounded-xl overflow-hidden"
            alt="Register Now Mentees"
          />
          <div className="absolute top-1/4 left-8 xs:right-8 md:right-1/2 xs:text-center md:text-left">
            <h3 className="xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-semibold xs:leading-normal md:leading-tight lg:leading-normal">
              Choose Your Class!
            </h3>
            <p className="my-6 xs:text-sm sm:text-base md:text-lg text-gray-300 leading-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </p>
            <a
              href="#"
              className="xs:text-base md:text-xl font-semibold xs:w-32 md:w-40 text-center py-2 rounded-md bg-yellow-500 text-white hover:bg-yellow-600 transition-all duration-500 inline-block"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisterHeader;

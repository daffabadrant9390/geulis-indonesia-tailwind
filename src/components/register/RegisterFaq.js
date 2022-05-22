import React from "react";
import { Link } from "react-router-dom";
import FaqRegisterImg from "../../assets/faq-img-2.jpg";
// import FaqRegisterBg from "../../assets/faq-register-bg.png";
import FaqRegisterBg2 from "../../assets/bg-faq-register.png";

function RegisterFaq() {
  return (
    <section
      id="ready-to-escalate"
      className="w-full h-full flex justify-center shadow-md"
    >
      <div className="max-w-screen-2xl w-full xs:px-4 md:px-0 xs:py-16 md:py-24 flex justify-between items-center gap-12">
        <div className="relative xs:w-full md:w-1/2 h-full md:pl-10 flex flex-col justify-center xs:items-center md:items-start">
          <h2 className="xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-10 xs:leading-snug lg:leading-snug md:text-left xs:text-center">
            Need any helps? <br />
            Let's answer your curiousity!
          </h2>
          <Link
            to="/faq"
            className="xs:w-32 sm:w-36 md:w-48 xs:py-2 md:py-3 rounded-md xs:text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white bg-yellow-500 transition-all duration-500 hover:bg-yellow-600 text-center inline-block"
          >
            To the FAQ
          </Link>
          <div className="xs:w-80 xs:h-72 sm:w-96 sm:h-80 md:w-100 md:h-96 lg:w-120 lg:h-100 -z-10 absolute md:top-10 lg:top-0 xs:left-50 md:left-0">
            <img
              src={FaqRegisterBg2}
              className="w-full h-full object-cover object-top"
              alt="Register Background"
            />
          </div>
        </div>
        <div className="xs:hidden md:block w-1/2">
          <div className="flex justify-end items-center">
            <img
              src={FaqRegisterImg}
              className="w-120 h-100 rounded-l-xl object-cover"
              alt="Ready To Escalate"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisterFaq;

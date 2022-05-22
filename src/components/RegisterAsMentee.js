import React from "react";
import { Link } from "react-router-dom";
import ReadyImg from "../assets/ready-to-escalate.jpg";

function RegisterAsMentee() {
  return (
    <section
      id="ready-to-escalate"
      className="w-full h-full flex justify-center shadow-md"
      data-aos="zoom-in-up"
    >
      <div className="max-w-screen-2xl w-full xs:px-10 md:px-0 xs:py-16 md:py-24 flex justify-between items-center gap-12">
        <div className="xs:w-full md:w-1/2 md:pl-10 xs:text-center md:text-left">
          <h2 className="xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-10 xs:leading-snug lg:leading-snug">
            Ready to escalate your college journey? <br />
            Join us as mentee!
          </h2>
          <Link
            to="/register"
            className="xs:w-40 md:w-48 xs:py-2 md:py-3 rounded-md xs:text-base md:text-lg lg:text-xl font-semibold text-white bg-yellow-500 transition-all duration-500 hover:bg-yellow-600 text-center inline-block"
          >
            Register Now
          </Link>
        </div>
        <div className="xs:hidden md:block w-1/2">
          <div className="flex justify-end items-center">
            <img
              src={ReadyImg}
              className="w-120 h-100 rounded-l-xl object-cover"
              alt="Ready To Escalate"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisterAsMentee;

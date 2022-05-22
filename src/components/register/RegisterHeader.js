import React from "react";
import RegisterImg from "../../assets/register-img.png";

function RegisterHeader() {
  return (
    <section id="register-header" className="w-full h-full flex justify-center">
      <div className="max-w-screen-2xl w-full xs:px-4 md:px-10 pt-32 xs:pb-16 md:pb-24">
        <h2 className="xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 xs:mb-10 md:mb-14 text-center">
          Register Now
        </h2>
        <div className="relative shadow-xl">
          <img
            src={RegisterImg}
            className="relative w-full xs:h-100 lg:h-120 object-cover object-center xs:rounded-lg md:rounded-xl overflow-hidden"
            alt="Register Now Mentees"
          />
          <div className="absolute top-1/4 left-8 xs:right-10 md:right-1/2 lg:right-2/3 xs:text-center md:text-left">
            <h3 className="xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-semibold xs:leading-normal md:leading-tight lg:leading-normal">
              Choose Your Class!
            </h3>
            <p className="mt-6 mb-8 xs:text-sm sm:text-base md:text-lg text-gray-300 leading-normal">
              What’s your aspiration? A public speaker? Getting a scholarship?
              Initiate a project? Make sure you pick a class that is for you!
            </p>
            <div className="flex gap-4 items-center xs:justify-center md:justify-start">
              <a
                href="http://bit.ly/GI-MenteeRegistrationForm"
                target="_blank"
                className="xs:text-sm sm:text-base md:text-lg font-semibold xs:w-32 md:w-40 text-center py-2 rounded-md bg-yellow-500 text-white hover:bg-yellow-600 transition-all duration-500 inline-block"
              >
                Register Now
              </a>
              <a
                href="http://bit.ly/GI-MenteeRegistrationGuidebook"
                target="_blank"
                className="xs:text-sm sm:text-base md:text-lg font-semibold xs:w-40 md:w-48 text-center py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-all duration-500 inline-block"
              >
                Check Guidebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisterHeader;

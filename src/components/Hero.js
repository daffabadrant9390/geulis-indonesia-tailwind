import React from "react";

function Hero() {
  return (
    <section className="w-full xs:h-full md:h-screen bg-hero-img bg-cover bg-no-repeat bg-center shadow-md flex justify-center items-center">
      <div className="max-w-screen-2xl w-full px-10 py-32" data-aos="fade-up">
        <h1 className="xs:text-3xl sm:text-4xl md:text-5xl text-black font-semibold xs:leading-normal md:leading-tight lg:leading-normal">
          Grow your Wish <br />
          with Geulis <br />
          Indonesia
        </h1>
        <p className="xs:w-full sm:w-100 md:w-110 my-6 xs:text-sm sm:text-base md:text-lg text-gray-900 xs:leading-relaxed">
          Geulis Indonesia is a community that facilitates self-development
          programs to unlock student’s potential, prepare for professional
          career and building character
        </p>
        <a
          href="#benefit"
          className="xs:text-sm sm:text-base md:text-xl font-semibold xs:w-28 sm:w-32 md:w-40 text-center py-2 rounded-md bg-yellow-500 text-white hover:bg-yellow-600 transition-all duration-500 inline-block"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}

export default Hero;

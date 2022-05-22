import React from "react";
import CustomLayout from "./CustomLayout.js";

function Classes({ classes }) {
  // console.log(classes);

  return (
    <section id="our-classes" className="w-full h-full flex justify-center">
      <div className="max-w-screen-2xl w-full xs:px-6 md:px-10 xs:py-16 md:py-24">
        <div className="w-full text-center xs:mb-10 md:mb-14">
          <h2 className="xs:text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-semibold text-gray-900 xs:mb-5 md:mb-10">
            Classes
          </h2>
          <p className="lg:text-lg md:text-base xs:text-sm text-gray-600 leading-relaxed">
            Which class fit you the most?
          </p>
        </div>

        {classes && <CustomLayout data={classes} />}
      </div>
    </section>
  );
}

export default Classes;

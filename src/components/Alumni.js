import React from "react";

function AlumniCompany({ alumniComp }) {
  return (
    <section
      id="alumni"
      className="w-full h-full flex justify-center shadow-md"
    >
      <div className="max-w-screen-lg w-full px-10 xs:py-16 md:py-24 flex flex-col items-center justify-center">
        <div className="xs:w-full md:w-120 xs:mb-12 md:mb-24 text-center">
          <h2 className="xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 lg:leading-snug">
            Where are Our Alumni?
          </h2>
        </div>
        <div
          className="grid xs:grid-cols-3 md:grid-cols-4 justify-center justify-items-center items-center xs:gap-4 md:gap-6"
          data-aos="fade-up"
        >
          {alumniComp.map((alumni) => {
            return (
              <img
                className="w-1/2"
                src={alumni.imgUrl}
                alt="Alumni Company Logo"
                key={alumni.id}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AlumniCompany;

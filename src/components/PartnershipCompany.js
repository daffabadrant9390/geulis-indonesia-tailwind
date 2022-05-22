import React from "react";

function PartnershipCompany({ partnershipComp }) {
  return (
    <section
      id="partnership"
      className="w-full h-full flex justify-center items-center shadow-md "
    >
      <div className="max-w-screen-lg w-full px-10 xs:py-16 md:py-24 flex flex-col justify-center items-center">
        <div className="xs:w-full md:w-120 xs:mb-12 md:mb-24 text-center">
          <h2 className="xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 lg:leading-snug">
            Where Do Our Facils & Speakers Come from?
          </h2>
        </div>
        <div
          className="grid xs:grid-cols-3 md:grid-cols-4 justify-center justify-items-center items-center xs:gap-4 md:gap-6"
          data-aos="fade-up"
        >
          {partnershipComp.map((partner) => {
            return (
              <img
                className="w-1/2"
                src={partner.imgUrl}
                alt="Partnership Logo"
                key={partner.id}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PartnershipCompany;

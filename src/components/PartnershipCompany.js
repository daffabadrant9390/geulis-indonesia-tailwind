import React from "react";

function PartnershipCompany() {
  const partnerData = [
    {
      id: 1,
      imgUrl: "images/partnership/unilever-logo.png",
    },
    {
      id: 2,
      imgUrl: "images/partnership/xlfl-logo.png",
    },
    {
      id: 3,
      imgUrl: "images/partnership/glints-logo.png",
    },
    {
      id: 4,
      imgUrl: "images/partnership/link-aja-logo.png",
    },
    {
      id: 5,
      imgUrl: "images/partnership/shopee-logo.png",
    },
    {
      id: 6,
      imgUrl: "images/partnership/zenius-logo.png",
    },
    {
      id: 7,
      imgUrl: "images/partnership/iisma-logo.png",
    },
    {
      id: 8,
      imgUrl: "images/partnership/young-leader-indonesia-logo.png",
    },
    {
      id: 9,
      imgUrl: "images/partnership/bytedance-logo.png",
    },
    {
      id: 10,
      imgUrl: "images/partnership/ovo-logo.png",
    },
    {
      id: 11,
      imgUrl: "images/partnership/apple-dev-academy.png",
    },
  ];

  return (
    <section
      id="partnership"
      className="w-full h-full flex justify-center items-center shadow-md "
    >
      <div className="max-w-screen-xl w-full px-10 py-16 flex flex-col justify-center items-center">
        <div className="xs:w-full md:w-120 xs:mb-12 md:mb-24 text-center">
          <h2 className="xs:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 lg:leading-snug">
            Where Do Our Facils & Speakers Come from?
          </h2>
        </div>
        <div
          className="grid grid-cols-5 justify-center justify-items-center items-center xs:gap-4 md:gap-8 lg:gap-12"
          data-aos="fade-up"
        >
          {partnerData.map((partner) => {
            return (
              <img
                className="xs:w-3/4 md:w-1/2"
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

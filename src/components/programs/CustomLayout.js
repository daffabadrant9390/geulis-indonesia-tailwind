import React from "react";

function CustomLayout({ data }) {
  //   console.log(data);
  return (
    <div data-aos="fade-up">
      {data.map((el) => {
        return (
          <div
            className="w-full xs:p-4 md:p-10 xs:mb-14 md:mb-20 rounded-md flex xs:flex-col md:flex-row items-center xs:justify-center md:justify-between xs:gap-4 md:gap-10 lg:gap-16 xs:shadow-md md:shadow-none transition-all duration-500 hover:bg-gray-100 hover:shadow-lg hover:scale-100 hover:-translate-y-1"
            key={el.id}
          >
            {/* START: LEFT SIDE */}
            <div
              className={[
                "xs:w-full md:w-1/2 xs:text-center md:text-left",
                el.reversed ? "xs:order-1 md:order-2" : "order-1",
              ].join(" ")}
            >
              <h3 className="xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 xs:mb-5 md:mb-10">
                {el.name}
              </h3>
              <p className="xs:text-sm sm:text-base md:text-lg text-gray-900 text-justify xs:mb-3 md:mb-4 first-letter:text-3xl">
                {el.firstP}
              </p>
              <p className="xs:text-sm sm:text-base md:text-lg text-gray-900 text-justify xs:mb-3 md:mb-6">
                {el.secondP}
              </p>
            </div>
            {/* END: LEFT SIDE */}

            {/* START: RIGHT SIDE */}
            <div
              className={[
                "xs:w-full md:w-1/2",
                el.reversed ? "xs:order-2 md:order-1" : "order-2",
              ].join(" ")}
            >
              <div className="flex justify-end items-center">
                <img
                  src={el.imgUrl}
                  alt={el.name}
                  className="w-full xs:h-80 md:h-96 rounded-lg object-cover object-center"
                />
              </div>
            </div>
            {/* END: RIGHT SIDE */}
          </div>
        );
      })}
    </div>
  );
}

export default CustomLayout;

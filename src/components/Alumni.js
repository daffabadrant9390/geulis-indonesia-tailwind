import React from "react";
// import InstagramIcon from "../assets/icons/instagram-icon.svg";
// import TwitterIcon from "../assets/icons/twitter-icon.svg";
// import FacebookIcon from "../assets/icons/facebook-icon.svg";
// import SnapchatIcon from "../assets/icons/snapchat-icon.svg";
// import TelegramIcon from "../assets/icons/telegram-icon.svg";

function AlumniCompany() {
  const alumniCompanies = [
    {
      id: 1,
      imgData: "images/partnership/bhineka-logo.png",
    },
    {
      id: 2,
      imgData: "images/partnership/aisec-logo.png",
    },
    {
      id: 3,
      imgData: "images/partnership/aksel-logo.png",
    },
    {
      id: 4,
      imgData: "images/partnership/hult-prize-logo.png",
    },
    {
      id: 5,
      imgData: "images/partnership/xlfl-logo.png",
    },
    {
      id: 6,
      imgData: "images/partnership/genbi-logo.png",
    },
  ];

  return (
    <section
      id="alumni"
      className="w-full h-full flex justify-center shadow-md"
    >
      <div className="max-w-screen-2xl w-full px-10 py-16 flex flex-col items-center justify-center">
        <div className="xs:w-full md:w-120 xs:mb-12 md:mb-24 text-center">
          <h2 className="xs:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 lg:leading-snug">
            Where are Our Alumni?
          </h2>
        </div>
        <div className="w-full h-full flex justify-center">
          <div
            className="max-w-screen-md w-full grid grid-cols-3 justify-center justify-items-center items-center xs:gap-4 sm:gap-8 md:gap-14"
            data-aos="fade-up"
          >
            {alumniCompanies.map((alumni) => {
              return (
                <img
                  className="w-1/2"
                  src={alumni.imgData}
                  alt="Alumni Company Logo"
                  key={alumni.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AlumniCompany;

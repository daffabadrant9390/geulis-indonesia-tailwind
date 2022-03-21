import React from "react";
import InstagramIcon from "../assets/icons/instagram-icon.svg";
import TwitterIcon from "../assets/icons/twitter-icon.svg";
import FacebookIcon from "../assets/icons/facebook-icon.svg";
import SnapchatIcon from "../assets/icons/snapchat-icon.svg";
import TelegramIcon from "../assets/icons/telegram-icon.svg";

function AlumniCompany() {
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
        <div
          className="grid grid-cols-5 justify-center justify-items-center xs:gap-8 md:gap-14"
          data-aos="fade-up"
        >
          <img
            className="xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-16 md:h-16"
            src={InstagramIcon}
            alt="Instagram Logo"
          />
          <img
            className="xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-16 md:h-16"
            src={TwitterIcon}
            alt="Twitter Logo"
          />
          <img
            className="xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-16 md:h-16"
            src={FacebookIcon}
            alt="Facebook Logo"
          />
          <img
            className="xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-16 md:h-16"
            src={SnapchatIcon}
            alt="Snapchat Logo"
          />
          <img
            className="xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-16 md:h-16"
            src={TelegramIcon}
            alt="Telegram Logo"
          />
          <img
            className="xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-16 md:h-16"
            src={InstagramIcon}
            alt="Instagram Logo"
          />
          <img
            className="xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-16 md:h-16"
            src={TwitterIcon}
            alt="Twitter Logo"
          />
          <img
            className="xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-16 md:h-16"
            src={FacebookIcon}
            alt="Facebook Logo"
          />
          <img
            className="xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-16 md:h-16"
            src={SnapchatIcon}
            alt="Snapchat Logo"
          />
          <img
            className="xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-16 md:h-16"
            src={TelegramIcon}
            alt="Telegram Logo"
          />
        </div>
      </div>
    </section>
  );
}

export default AlumniCompany;

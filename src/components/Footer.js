import React from "react";
import Logo from "../assets/logo-geulis.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer id="footer" className="w-full h-full flex flex-row justify-center">
      <div className="max-w-screen-2xl w-full px-10 xs:py-10 md:py-16 grid xs:grid-cols-1 md:grid-cols-3 gap-x-20 xs:gap-y-8 md:gap-y-12 justify-between">
        {/* START: GEULIS INDONESIA LOGO */}
        <div className="w-20 h-20 xs:row-start-1 md:col-start-1 md:col-end-4">
          <img
            src={Logo}
            className="w-full h-full object-cover"
            alt="Logo Geulis Indonesia"
          />
        </div>
        {/* END: GEULIS INDONESIA LOGO */}

        {/* START: GEULIS DESCRIPTION*/}
        <p className="xs:text-sm md:text-base font-normal text-gray-600 leading-snug row-start-2">
          We are looking forward for a collaboration in any forms that matches
          our community and activities. Please contact us below!
        </p>
        {/* END: GEULIS DESCRIPTION */}

        {/* START: INFO NAVIGATION */}
        <div className="flex flex-col xs:gap-2 md:gap-4 xs:row-start-3 md:row-start-2 md:justify-self-center">
          <h4 className="xs:text-xl md:text-2xl font-bold text-gray-900 xs:pb-1 md:pb-2 xs:w-20 md:w-24 border-b border-gray-300">
            Info
          </h4>
          <Link
            to="/about"
            className="xs:text-sm sm:text-base md:text-lg font-semibold text-gray-700 hover:text-yellow-500 transition-all duration-500"
          >
            About Us
          </Link>
          <Link
            to="/programs"
            className="xs:text-sm sm:text-base md:text-lg font-semibold text-gray-700 hover:text-yellow-500 transition-all duration-500"
          >
            Programs
          </Link>
        </div>
        {/* END: INFO NAVIGATION */}

        {/* START: SOCIAL MEDIA NAVIGATION */}
        <div className="flex flex-col gap-4 xs:row-start-6 md:row-start-2">
          <h4 className="xs:text-xl md:text-2xl font-bold text-gray-900">
            Follow Us!
          </h4>
          <div className="flex flex-row gap-x-4">
            <a
              href="https://www.instagram.com/geulis_indonesia/"
              className="no-underline social-media-icon w-10 h-10"
              target="_blank"
            >
              <svg
                width="46"
                height="46"
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.7479 15.3879C18.6164 15.3879 15.2448 18.7596 15.2448 22.8911C15.2448 27.0227 18.6164 30.3943 22.7479 30.3943C26.8793 30.3943 30.2509 27.0227 30.2509 22.8911C30.2509 18.7596 26.8793 15.3879 22.7479 15.3879ZM45.2514 22.8911C45.2514 19.784 45.2795 16.7051 45.105 13.6036C44.9306 10.0012 44.1088 6.80399 41.4745 4.16971C38.8347 1.52981 35.6432 0.713629 32.0408 0.539136C28.9338 0.364643 25.8549 0.392788 22.7535 0.392788C19.6464 0.392788 16.5675 0.364643 13.4661 0.539136C9.86377 0.713629 6.66667 1.53543 4.03244 4.16971C1.39258 6.80962 0.576416 10.0012 0.401927 13.6036C0.227437 16.7107 0.25558 19.7896 0.25558 22.8911C0.25558 25.9926 0.227437 29.0772 0.401927 32.1786C0.576416 35.7811 1.39821 38.9782 4.03244 41.6125C6.6723 44.2524 9.86377 45.0686 13.4661 45.2431C16.5732 45.4176 19.6521 45.3894 22.7535 45.3894C25.8605 45.3894 28.9394 45.4176 32.0408 45.2431C35.6432 45.0686 38.8403 44.2468 41.4745 41.6125C44.1144 38.9726 44.9306 35.7811 45.105 32.1786C45.2852 29.0772 45.2514 25.9982 45.2514 22.8911ZM22.7479 34.4358C16.3593 34.4358 11.2034 29.2798 11.2034 22.8911C11.2034 16.5024 16.3593 11.3464 22.7479 11.3464C29.1364 11.3464 34.2923 16.5024 34.2923 22.8911C34.2923 29.2798 29.1364 34.4358 22.7479 34.4358ZM34.7651 13.5698C33.2735 13.5698 32.069 12.3653 32.069 10.8736C32.069 9.38199 33.2735 8.17742 34.7651 8.17742C36.2567 8.17742 37.4613 9.38199 37.4613 10.8736C37.4617 11.2278 37.3923 11.5786 37.257 11.9059C37.1216 12.2333 36.923 12.5307 36.6726 12.7811C36.4221 13.0316 36.1247 13.2301 35.7974 13.3655C35.4701 13.5008 35.1193 13.5703 34.7651 13.5698Z"
                  fill="#333333"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/geulis-indonesia/mycompany/"
              className="no-underline social-media-icon w-10 h-10"
              target="_blank"
            >
              <svg
                width="46"
                height="46"
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.85348 0.0412598C4.00409 0.0412598 0.0351562 4.0101 0.0351562 8.85958V36.2244C0.0351562 41.0738 4.004 45.0413 8.85348 45.0413H36.2183C41.0677 45.0413 45.0352 41.0738 45.0352 36.2244V8.85958C45.0352 4.01019 41.0677 0.0412598 36.2183 0.0412598H8.85348ZM11.0714 7.46717C13.3966 7.46717 14.8288 8.9936 14.873 11.0001C14.873 12.9623 13.3965 14.5316 11.0264 14.5316H10.9828C8.70189 14.5316 7.22763 12.9624 7.22763 11.0001C7.22763 8.99365 8.74651 7.46717 11.0714 7.46717H11.0714ZM31.1088 16.8452C35.5805 16.8452 38.9327 19.768 38.9327 26.0489V37.7742H32.1369V26.835C32.1369 24.0861 31.1533 22.2107 28.694 22.2107C26.8165 22.2107 25.6974 23.4747 25.206 24.6958C25.0265 25.1327 24.9824 25.7429 24.9824 26.354V37.7742H18.1865C18.1865 37.7742 18.2757 19.2435 18.1865 17.3248H24.9838V20.2206C25.8869 18.8273 27.5023 16.8452 31.1088 16.8452V16.8452ZM7.62849 17.3262H14.4243V37.7743H7.62849V17.3262V17.3262Z"
                  fill="#333333"
                />
              </svg>
            </a>
          </div>
        </div>
        {/* END: SOCIAL MEDIA NAVIGATION */}

        {/* START: CONTACT */}
        <div className="flex flex-col gap-4 xs:row-start-5 md:row-start-3">
          <h4 className="xs:text-xl md:text-2xl font-bold text-gray-900">
            Contact
          </h4>
          <p className="xs:text-sm md:text-base font-normal text-gray-600">
            Email: : geulisindonesia01@gmail.com
          </p>
        </div>
        {/* END: CONTACT */}

        {/* START: HELP NAVIGATION */}
        <div className="flex flex-col gap-4 xs:row-start-4 md:row-start-3 md:justify-self-center">
          <h4 className="xs:text-xl md:text-2xl font-bold text-gray-900 xs:pb-1 md:pb-2 border-b border-gray-300 xs:w-20 md:w-24">
            Help
          </h4>
          <Link
            to="/faq"
            className="xs:text-sm sm:text-base md:text-lg font-semibold text-gray-700 hover:text-yellow-500 no-underline transition-all duration-500"
          >
            FAQ
          </Link>
        </div>
        {/* END: HELP NAVIGATION */}
        <p className="xs:text-sm md:text-base text-gray-600 font-normal leading-snug xs:row-start-7 md:row-start-3 xs:pt-4 md:pt-0">
          Copyrights ©2022 Geulis Indonesia. All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;

import React, { useState, useEffect } from "react";
import logo from "../assets/logo-geulis.svg";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(menuOpen);

  let { pathname } = useLocation();
  console.log(pathname);

  return (
    <nav className="fixed z-50 w-full h-20 flex justify-center bg-white shadow-lg">
      <div className="max-w-screen-2xl w-full px-10 flex justify-between items-center">
        <div className="grow-3">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <img
              className="w-12 h-12 object-cover"
              src={logo}
              alt="Logo Geulis Indonesia"
            />
          </Link>
        </div>

        {/* START: HAMBURGER MENU */}
        <div
          className="xs:block md:hidden w-6 h-6 relative cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={[
              "w-full h-1 rounded-sm absolute left-0 opacity-100 transition-all duration-300",
              menuOpen
                ? "top-2 rotate-[135deg] bg-red-500"
                : "top-0 bg-gray-900",
            ].join(" ")}
          ></span>
          <span
            className={[
              "w-full h-1 rounded-sm bg-gray-900 absolute left-0 top-2 opacity-100 transition-all duration-300",
              menuOpen ? "-left-4 opacity-0" : "left-0 opacity-100",
            ].join(" ")}
          ></span>
          <span
            className={[
              "w-full h-1 rounded-sm absolute left-0 opacity-100 transition-all duration-300",
              menuOpen
                ? "top-2 rotate-[-135deg] bg-red-500"
                : "top-4 bg-gray-900",
            ].join(" ")}
          ></span>
        </div>
        {/* END: HAMBURGER MENU */}

        {/* START: NAVIGATION LINKS */}
        <ul
          className={[
            "flex justify-between items-center grow xs:h-72 md:h-full xs:flex-col md:flex-row xs:absolute md:static xs:top-20 xs:left-0 xs:right-0 xs:p-6 md:p-0 md:translate-x-0 transition-all duration-700",
            menuOpen
              ? "xs:translate-x-0 bg-white shadow-lg"
              : "xs:translate-x-full bg-transparent",
          ].join(" ")}
        >
          <li>
            <Link
              to="/about"
              className={
                pathname === "/about"
                  ? "xs:text-base md:text-lg font-semibold text-yellow-500 no-underline"
                  : "xs:text-base md:text-lg font-semibold text-gray-500 hover:text-gray-900 no-underline transition-all duration-500"
              }
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/programs"
              className={
                pathname === "/programs"
                  ? "xs:text-base md:text-lg font-semibold text-yellow-500 no-underline"
                  : "xs:text-base md:text-lg font-semibold text-gray-500 hover:text-gray-900 no-underline transition-all duration-500"
              }
              onClick={() => setMenuOpen(false)}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              to="/faq"
              className={
                pathname === "/faq"
                  ? "xs:text-base md:text-lg font-semibold text-yellow-500 no-underline"
                  : "xs:text-base md:text-lg font-semibold text-gray-500 hover:text-gray-900 no-underline transition-all duration-500"
              }
              onClick={() => setMenuOpen(false)}
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              className="xs:text-base md:text-lg px-6 py-2 inline-block rounded-md bg-yellow-500 text-white hover:bg-yellow-600 transition-all duration-500"
              onClick={() => setMenuOpen(false)}
            >
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;

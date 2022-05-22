import React, { useState, useEffect } from "react";
import useFetch from "../../helpers/hooks/useFetch.js";

function OurTeams() {
  const [activeRoles, setActiveRoles] = useState("All");
  const [teamsData, setTeamsData] = useState(null);

  useEffect(() => {
    fetch("data/ourTeamsData.json")
      .then((res) => res.json())
      .then((data) => {
        if (activeRoles === "All") {
          setTeamsData(data);
          return;
        }
        let filteredData = data.filter((x) => x.department === activeRoles);
        setTeamsData(filteredData);
      });
  }, [activeRoles]);

  const roles = [
    "All",
    "Operation",
    "Marketing",
    "Human Capital",
    "Finance & Partnership",
  ];

  const presVP = [
    {
      id: 1,
      imgUrl: "images/teams/Nehemia Irel Bua.jpg",
      name: "Nehemia Irel",
      position: "President",
      department: "President and VP",
    },
    {
      id: 2,
      imgUrl: "images/teams/Adila Madani Fatihah.jpg",
      name: "Adila Madani Fatihah",
      position: "Vice President",
      department: "President and VP",
    },
  ];

  return (
    <section
      id="our-teams"
      className="w-full h-full flex justify-center shadow-md"
    >
      <div className="max-w-screen-2xl w-full xs:px-4 md:px-10 xs:py-24 md:py-28 text-center">
        <h2 className="font-sans xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 xs:mb-12 md:mb-20">
          Our Management Teams
        </h2>

        {/* START: PRESIDENT AND VP */}
        <div
          className="grid grid-cols-4 justify-items-center xs:gap-2 sm:gap-4 md:gap-6 lg:gap-8 xs:mb-12 md:mb-20 xs:px-0 sm:px-16 md:px-32 lg:px-0"
          data-aos="fade-up"
        >
          {presVP.map((x) => {
            return (
              <div
                className={[
                  "xs:col-span-2 lg:col-span-1 shadow-lg xs:px-2 md:px-3 xs:py-4 md:py-8 lg:py-14 w-full xs:h-64 sm:h-72 md:h-96 flex flex-col items-center justify-evenly rounded-xl bg-white gap-4 hover:shadow-xl hover:scale-100 hover:-translate-y-1 hover:bg-gray-100 transition-all duration-500 cursor-default",
                  x.id === 1 ? "xs:col-start-1 lg:col-start-2" : "col-start-3",
                ].join(" ")}
                key={x.id}
              >
                <div className="border-2 border-gray-400 rounded-full border-dashed">
                  <img
                    src={x.imgUrl}
                    className="p-2 rounded-full xs:w-20 xs:h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-36 lg:h-36 shadow-lg object-cover"
                    alt={x.name}
                  />
                </div>
                <h3 className="xs:text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-900">
                  {x.name}
                </h3>
                <p className="xs:text-sm sm:text-base md:text-lg text-gray-600">
                  {x.position}
                </p>
              </div>
            );
          })}
        </div>
        {/* END: PRESIDENT AND VP */}

        {/* START: DEPARTMENT FILTER */}
        <ul className="flex xs:gap-3 md:gap-10 items-center xs:mb-8 md:mb-12">
          {roles.map((role, idx) => {
            return (
              <li
                className={[
                  "xs:text-sm sm:text-base md:text-lg lg:text-lg cursor-pointer",
                  activeRoles == role
                    ? "text-yellow-500 font-semibold"
                    : "text-gray-400",
                ].join(" ")}
                key={idx}
                onClick={() => setActiveRoles(role)}
              >
                {role}
              </li>
            );
          })}
        </ul>
        {/* END: DEPARTMENT FILTER */}

        {/* START: MANAGEMENT TEAM */}
        <div
          className="grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center xs:gap-2  sm:gap-4 md:gap-6 lg:gap-8"
          data-aos="fade-up"
        >
          {teamsData &&
            teamsData.map((team) => {
              return (
                <div
                  className="shadow-lg xs:px-2 md:px-3 xs:py-4 md:py-8 lg:py-14 w-full xs:h-64 sm:h-80 md:h-96  flex flex-col items-center justify-evenly rounded-xl bg-white gap-4 hover:shadow-xl hover:scale-100 hover:-translate-y-1 hover:bg-gray-100 transition-all duration-500 cursor-default"
                  key={team.id}
                >
                  <div className="border-2 border-yellow-500 rounded-full border-dashed">
                    <img
                      src={team.imgUrl}
                      className="p-2 rounded-full xs:w-20 xs:h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 shadow-lg object-cover"
                      alt={team.name}
                    />
                  </div>
                  <h3 className="xs:text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-900">
                    {team.name}
                  </h3>
                  <p className="xs:text-sm sm:text-base md:text-lg text-gray-600">
                    {team.position}
                  </p>
                </div>
              );
            })}
        </div>
        {/* END: MANAGEMENT TEAM */}
      </div>
    </section>
  );
}
export default OurTeams;

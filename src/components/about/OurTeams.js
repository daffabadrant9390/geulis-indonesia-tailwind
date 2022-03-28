import React from "react";

function OurTeams() {
  const teamsData = [
    {
      id: 1,
      imgData: "images/teams/sebastien-felix.jpg",
      name: "Sébastien Félix Albert Debs",
      role: "Offlaner & Coach",
    },
    {
      id: 2,
      imgData: "images/teams/anathan-pham.jpg",
      name: "Anathan Pham",
      role: "Offlaner & Coach",
    },
    {
      id: 3,
      imgData: "images/teams/kuro-salehi.jpg",
      name: "Kuro Salehi Takhasomi",
      role: "Offlaner & Coach",
    },
    {
      id: 4,
      imgData: "images/teams/zhang-ruida.jpg",
      name: "Zhang Ruida",
      role: "Offlaner",
    },
    {
      id: 5,
      imgData: "images/teams/damien-sau-jing-chok.jpg",
      name: "Damien Sau-jing Chok",
      role: "Offlaner & Carry",
    },
    {
      id: 6,
      imgData: "images/teams/johan-sundstein.jpg",
      name: "Johan Sundstein",
      role: "Support & Captain",
    },
    {
      id: 7,
      imgData: "images/teams/clement-ivanov.jpg",
      name: "Clement Ivanov",
      role: "Support & Captain",
    },
    {
      id: 8,
      imgData: "images/teams/michael-vu.jpg",
      name: "Michael Vu",
      role: "Solo Middle & Carry",
    },
    {
      id: 9,
      imgData: "images/teams/danil-ishutin.jpg",
      name: "Danil Ishutin",
      role: "Solo Middle & Captain",
    },
  ];

  return (
    <section id="our-teams" className="w-full h-full flex justify-center">
      <div className="max-w-screen-2xl w-full px-10 py-16 text-center">
        <h2 className="xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 xs:mb-8 md:mb-14">
          Our Management Teams
        </h2>
        <div className="grid xs:grid-cols-2 md:grid-cols-3 justify-items-center xs:gap-4 md:gap-6 lg:gap-10">
          {teamsData.map((team) => {
            return (
              <div
                className="custom-shadow px-4 xs:py-4 md:py-8 w-full xs:h-64 md:h-96 lg:h-100 flex flex-col items-center justify-evenly rounded-xl bg-white gap-4"
                key={team.id}
                data-aos="fade-up"
              >
                <img
                  src={team.imgData}
                  className="rounded-full xs:w-32 xs:h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 custom-shadow-lg object-cover"
                  alt={team.name}
                />
                <h3 className="xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900">
                  {team.name}
                </h3>
                <p className="xs:text-base sm:text-lg md:text-xl text-gray-900">
                  {team.role}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default OurTeams;

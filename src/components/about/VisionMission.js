import React from "react";
import Mission1 from "../../assets/icons/mission-1.svg";
import Mission2 from "../../assets/icons/mission-2.svg";
import Mission3 from "../../assets/icons/mission-3.svg";

function VisionMission() {
  const missionsData = [
    {
      id: 1,
      imgData: Mission1,
      description: "Creating a positive individual and supportive circle",
    },
    {
      id: 2,
      imgData: Mission2,
      description:
        "Increasing the awareness and giving education about self-development, and career preparation",
    },
    {
      id: 3,
      imgData: Mission3,
      description:
        "Providing self-development program to unlocking student’s potential (Public Speaker, Founder Class, Scholarship Hunter)",
    },
  ];

  return (
    <section id="vision-mission" className="w-full h-full flex justify-center">
      <div className="max-w-screen-2xl w-full xs:px-14 md:px-10 py-16 text-center">
        {/* START: VISION */}
        <div className="flex justify-center mb-16">
          <div className="xs:w-full md:w-120">
            <h2 className="xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 xs:mb-5 md:mb-10">
              Vision
            </h2>
            <p className="xs:text-sm sm:text-base md:text-lg text-gray-900 xs:leading-relaxed sm:leading-relaxed md:leading-relaxed">
              Improving self-development for unlocking student’s potential,
              prepare professional career and building character.
            </p>
          </div>
        </div>
        {/* END: VISION */}

        {/* START: MISSION */}
        <div className="w-full h-full">
          <h2 className="xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 xs:mb-5 md:mb-10">
            Missions
          </h2>
          <p className="xs:text-sm sm:text-base md:text-lg text-gray-900 xs:mb-8 md:mb-14">
            Our missions are
          </p>
          <div className="w-full flex justify-center">
            <div className="max-w-screen-xl w-full grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center xs:gap-4 sm:gap-6 md:gap-10">
              {missionsData.map((mission) => {
                return (
                  <div
                    className="custom-shadow p-5 py-8 flex flex-col justify-center items-center gap-8 rounded-lg"
                    key={mission.id}
                    data-aos="fade-up"
                  >
                    <img
                      src={mission.imgData}
                      className="xs:w-10 xs:h-10 md:w-16 md:h-16 object-cover"
                      alt={`Mission - ${mission.id} Img`}
                    />
                    <p className="xs:text-sm md:text-base text-gray-600">
                      {mission.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* END: MISSION */}
      </div>
    </section>
  );
}

export default VisionMission;

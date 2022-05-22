import React from "react";

function Achievement() {
  const achievementsData = [
    {
      id: 1,
      achievementNum: "200+",
      description: "Mentees Accepted",
    },
    {
      id: 2,
      achievementNum: "20+",
      description: "Facilitators & Speakers",
    },
    {
      id: 3,
      achievementNum: "5",
      description: "Batches",
    },
  ];

  return (
    <section
      id="achievement"
      className="w-full h-full flex flex-row justify-center items-center"
    >
      <div className="max-w-screen-2xl w-full px-10 xs:py-16 md:py-24 text-center">
        <div className="xs:mb-12 md:mb-24 flex justify-center">
          <div className="xs:w-full md:w-120">
            <h2 className="xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 font-semibold xs:mb-5 lg:mb-10">
              What Have We Achieved?
            </h2>
            <p className="lg:text-lg md:text-base xs:text-sm text-gray-600 leading-relaxed">
              After 3 years of journey empowering youths in Universitas
              Sriwijaya, we continue to multiply the impacts to South Sumatra
              level in this batch
            </p>
          </div>
        </div>
        <div
          className="grid xs:grid-cols-1 sm:grid-cols-3 xs:gap-8 sm:gap-4"
          data-aos="zoom-in"
        >
          {achievementsData.map((achievement) => {
            return (
              <div key={achievement.id}>
                <span className="xs:text-3xl sm:text-4xl md:text-5xl font-semibold text-yellow-500 xs:mb-4 md:mb-8 inline-block">
                  {achievement.achievementNum}
                </span>
                <p className="xs:text-xl lg:text-2xl text-gray-900">
                  {achievement.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Achievement;

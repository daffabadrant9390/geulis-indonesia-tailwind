import React from "react";
import CustomLayout from "./CustomLayout";

function Activities({ activities }) {
  return (
    <section
      id="activities"
      className="w-full h-full flex justify-center shadow-md"
    >
      <div className="max-w-screen-2xl w-full xs:px-4 md:px-10 py-16">
        <div className="w-full text-center xs:mb-10 md:mb-14">
          <h2 className="xs:text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-semibold text-gray-900 mb-10">
            Activities
          </h2>
          <p className="xs:text-sm md:text-base text-gray-900">
            The activities provided for the mentees
          </p>
        </div>
        <CustomLayout data={activities} />
      </div>
    </section>
  );
}

export default Activities;

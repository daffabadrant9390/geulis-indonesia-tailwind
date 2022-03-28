import React from "react";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import WorkshopImg from "../assets/workshop-class.jpg";
import GlobalForumImg from "../assets/global-forum.jpg";
import FinalProject from "../assets/final-project.jpg";
import EventsImg from "../assets/event-mentoring.jpg";

function Events() {
  const eventsData = [
    {
      id: 1,
      imgUrl: WorkshopImg,
      description: "Workshop Class",
    },
    {
      id: 2,
      imgUrl: GlobalForumImg,
      description: "Global Forum",
    },
    {
      id: 3,
      imgUrl: EventsImg,
      description: "Scholarship Mentoring Class",
    },
    {
      id: 4,
      imgUrl: FinalProject,
      description: "Final Project",
    },
  ];

  return (
    <section
      id="events"
      className="w-full h-full flex justify-center shadow-md"
    >
      <div className="max-w-screen-2xl w-full xs:px-2 sm:px-4 md:px-10 py-16">
        <div className="w-full text-center xs:mb-10 md:mb-14">
          <h2 className="xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 xs:mb-4 md:mb-8">
            Our Programs
          </h2>
          <p className="xs:text-sm md:text-base text-gray-900">
            What we provide you?
          </p>
        </div>
        <Carousel sPerView={1} carouselData={eventsData} />
        <div className="w-full h-full mt-8 text-center">
          <Link
            to="/programs"
            className="xs:w-32 sm:w-40 md:w-48 xs:py-2 md:py-3 rounded-md xs:text-base sm:text-lg md:text-xl font-semibold text-white bg-yellow-500 transition-all duration-500 hover:bg-yellow-600 text-center inline-block"
          >
            Read more
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Events;

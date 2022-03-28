import React from "react";
import Hero from "../components/Hero.js";
import Benefit from "../components/Benefit.js";
import Achievement from "../components/Achievement.js";
import PartnershipCompany from "../components/PartnershipCompany.js";
import Events from "../components/Events.js";
import AlumniCompany from "../components/Alumni.js";
import RegisterAsMentee from "../components/RegisterAsMentee.js";
import Testimonials from "../components/Testimonials.js";

function HomePage() {
  return (
    <>
      <Hero />
      <Benefit />
      <Achievement />
      <PartnershipCompany />
      <Events />
      <AlumniCompany />
      <Testimonials />
      <RegisterAsMentee />
    </>
  );
}

export default HomePage;

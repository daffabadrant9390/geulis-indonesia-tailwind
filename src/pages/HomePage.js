import React, { useState, useEffect } from "react";
import Hero from "../components/Hero.js";
import Benefit from "../components/Benefit.js";
import Achievement from "../components/Achievement.js";
import PartnershipCompany from "../components/PartnershipCompany.js";
import Events from "../components/Events.js";
import AlumniCompany from "../components/Alumni.js";
import RegisterAsMentee from "../components/RegisterAsMentee.js";
import Testimonials from "../components/Testimonials.js";
import useFetch from "../helpers/hooks/useFetch";

function HomePage() {
  // PartnershipCompany Data
  const { data: partnershipData } = useFetch("data/partnershipComp.json");
  // AlumniCompany Data
  const { data: alumniData } = useFetch("data/alumniComp.json");

  return (
    <>
      <Hero />
      <Benefit />
      <Achievement />
      {partnershipData && (
        <PartnershipCompany partnershipComp={partnershipData} />
      )}
      <Events />
      {alumniData && <AlumniCompany alumniComp={alumniData} />}
      <Testimonials />
      <RegisterAsMentee />
    </>
  );
}

export default HomePage;

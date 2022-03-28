import React from "react";
import ProgramsHeader from "../components/programs/ProgramsHeader";
import Classes from "../components/programs/Classes";
import Activities from "../components/programs/Activities";
import Facils from "../components/programs/Facils";

function ProgramsPage() {
  return (
    <>
      <ProgramsHeader />
      <Classes />
      <Activities />
      <Facils />
    </>
  );
}

export default ProgramsPage;

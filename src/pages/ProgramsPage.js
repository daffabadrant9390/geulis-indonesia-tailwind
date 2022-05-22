import React from "react";
import ProgramsHeader from "../components/programs/ProgramsHeader";
import Classes from "../components/programs/Classes";
import Activities from "../components/programs/Activities";
import Facils from "../components/programs/Facils";
import useFetch from "../helpers/hooks/useFetch.js";

function ProgramsPage() {
  const { data: facilsData } = useFetch("data/facilsData.json");
  const { data: classesData } = useFetch("data/classesData.json");
  const { data: activitiesData } = useFetch("data/activitiesData.json");

  return (
    <>
      <ProgramsHeader />
      {classesData && <Classes classes={classesData} />}
      {activitiesData && <Activities activities={activitiesData} />}
      {facilsData && <Facils facils={facilsData} />}
    </>
  );
}

export default ProgramsPage;

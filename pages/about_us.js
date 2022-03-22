import React from "react";
import TeamUs from "../components/UsComponent/TeamUs";
/* import Team from "../components/TeamComponent/Team"; */
import MisionVision from "../components/UsComponent/MisionVision";
import Us from "../components/UsComponent/Us";

const about_us = () => {
  return (
    <>
      <Us></Us>
      <MisionVision></MisionVision>
      <TeamUs></TeamUs>
      {/*  <Team></Team> */}
    </>
  );
};

export default about_us;

import React from "react";
import Information from "./Information";
import StakeCard from "./StakeCard/StakeCard";

const LeftSide = () => {
  return (
    <>
      <div className="mb-4 md:mb-0 md:w-4/12">
        <Information />
        <StakeCard />
      </div>
    </>
  );
};

export default LeftSide;

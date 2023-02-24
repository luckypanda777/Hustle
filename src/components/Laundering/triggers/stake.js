import React, { useState } from "react";
import StakeForm from "../forms/stake";

const StakeBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
      <button
        className="btn btn-default w-24 rounded-md text-sm"
        onClick={() => setIsOpen(true)}
      >
        Stake
      </button>
      <StakeForm setIsOpen={setIsOpen} isOpen={isOpen} />
    </div>
  );
};

export default StakeBtn;

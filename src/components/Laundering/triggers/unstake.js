import React, { useState } from "react";
import UnstakeForm from "../forms/unstake";

const UnstakeBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
      <button
        className="btn btn-default w-24 rounded-md text-sm"
        onClick={() => setIsOpen(true)}
      >
        Unstake
      </button>
      <UnstakeForm setIsOpen={setIsOpen} isOpen={isOpen} />
    </div>
  );
};

export default UnstakeBtn;

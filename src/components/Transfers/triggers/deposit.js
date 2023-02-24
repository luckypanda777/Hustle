import React, { useState } from "react";
import AttemptDeposit from "../forms/deposit";

const DepositBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
      <button
        className="btn btn-default mt-5 block flex flex-col items-center justify-center rounded-md text-sm"
        onClick={() => setIsOpen(true)}
      >
        Deposit
      </button>
      <AttemptDeposit setIsOpen={setIsOpen} isOpen={isOpen} />
    </div>
  );
};

export default DepositBtn;

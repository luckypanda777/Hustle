import React, { useState } from "react";
import AttemptWithdraw from "../forms/withdraw";

const WithdrawBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
      <button
        className="btn btn-default mt-5 block flex flex-col items-center justify-center rounded-md text-sm"
        onClick={() => setIsOpen(true)}
      >
        Withdraw
      </button>
      <AttemptWithdraw setIsOpen={setIsOpen} isOpen={isOpen} />
    </div>
  );
};

export default WithdrawBtn;

import React, { useState } from "react";
import AttemptWithdraw from "../forms/exchange";

const ExchangeBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
      <button
        className="btn btn-default mt-5 block flex flex-col items-center justify-center rounded-md text-sm"
        onClick={() => setIsOpen(true)}
      >
        Exchange
      </button>
      <AttemptWithdraw setIsOpen={setIsOpen} isOpen={isOpen} />
    </div>
  );
};

export default ExchangeBtn;

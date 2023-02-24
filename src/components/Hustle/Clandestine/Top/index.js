import React, { useState } from "react";
import ClandestineLogo from "../../../../assets/images/logo/clandestine-lab.png";
import icon1 from "../../../../assets/images/icons/work.png";
import ReUpForm from "./ReupForm";
import UnlockForm from "../forms/UnlockForm";

const Top = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUnlockOpen, setIsUnlockOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="img relative">
          <img width="300" height="200" src={ClandestineLogo} alt="Corner" />
          <button
            className="lock-btn btn btn-default absolute top-20 left-20 w-32 rounded-md font-Inter font-bold"
            onClick={() => setIsUnlockOpen(true)}
          >
            Unlock Area
          </button>
        </div>
        <div className="locked-area locked flex items-center gap-x-2">
          <div className="w-16">
            <img src={icon1} alt="Corner" className="object- h-full w-full" />
          </div>
          <p className="mb-1 text-xl font-bold text-olive">
            Remaining work: <span className="font-bold">10K</span>
          </p>
          <div className="w-16">
            <img src={icon1} alt="Work" className="object- h-full w-full" />
          </div>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="locked-area locked btn btn-default w-32 rounded-md font-Inter font-bold "
        >
          Re-up
        </button>
      </div>
      <ReUpForm setIsOpen={setIsOpen} isOpen={isOpen} />
      <UnlockForm setIsOpen={setIsUnlockOpen} isOpen={isUnlockOpen} />
    </>
  );
};

export default Top;

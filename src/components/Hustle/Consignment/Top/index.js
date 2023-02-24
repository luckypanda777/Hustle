import React, { useState } from "react";
import image1 from "../../../../assets/images/hustle/consignment.png";
import icon1 from "../../../../assets/images/icons/work.png";
import ReUpForm from "./ReupForm";

const Top = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="img">
          <img width="300" height="200" src={image1} alt="Consignment Logo" />
        </div>
        <div className="flex items-center gap-x-2">
          <div className="w-16">
            <img src={icon1} alt="" className="object- h-full w-full" />
          </div>
          <p className="mb-1 text-xl font-bold text-olive">
            Remaining work: <span className="font-bold">10K</span>
          </p>
          <div className="w-16">
            <img src={icon1} alt="" className="object- h-full w-full" />
          </div>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="btn btn-default w-32 rounded-md font-Inter font-bold "
        >
          Re-up
        </button>
      </div>
      <ReUpForm setIsOpen={setIsOpen} isOpen={isOpen} />
    </>
  );
};

export default Top;

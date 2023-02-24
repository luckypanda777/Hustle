import Tippy from "@tippyjs/react";
import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import "tippy.js/dist/tippy.css"; // optional
import img from "../../../assets/images/icons/hst-final.png";
import BoostTrigger from "./triggers/boost";
import UpgradeSlotTrigger from "./triggers/upgrade";

const StakeCard = () => {
  return (
    <div>
      <div className="mx-2 mt-10 rounded-md ">
        <div className="mr-2 mb-2 flex items-center justify-between">
          <p className="text-primary">Safe/s: 1</p>
          <InfoIcon />
          <UpgradeSlotTrigger />
        </div>
        <div className="">
          <div
            className="mr-2 bg-black p-8 "
            style={{ boxShadow: "#a5a5a5eb 0px 0px 9px 0px" }}
          >
            <div className="flex justify-center">
              <div className="h-52 w-48">
                <img
                  src="https://images.pexels.com/photos/102100/pexels-photo-102100.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  className="h-full w-full object-contain"
                  alt="Pexels"
                />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div className="mt-2 text-center text-primary">
              <p className="text-primary">Hustlers Token stored in Safe</p>
              <div className="flex items-center justify-center">
                <div className="w-12">
                  <img
                    src={img}
                    alt="Hustlers Token"
                    className="h-full w-full"
                  />
                </div>
                <p>100</p>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="btn btn-profile mt-3 rounded-md border-[#d3ddb3]">
                Collect
              </button>
            </div>
            <div className="mx-auto mt-5 w-6/12">
              <div className="mb-1 text-center text-xl font-bold text-white">
                <span>Boost</span>
              </div>
              <BoostTrigger />
            </div>
            <div className="w-12/12 mx-auto mt-2 text-sm">
              <div className="text-center">
                <p className="text-primary">
                  Time Left before Safe Maintenance
                </p>
                <p className="text-primary">48h</p>
              </div>
              <div className="flex justify-center">
                <button className="btn btn-profile mt-3 rounded-md border-[#d3ddb3]">
                  Perform <br />
                  Maintenance
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoIcon = () => (
  <Tippy
    content={
      <span>
        The safe will available at G Rank 100 and by completing mission 1 of
        Hustlers Club!
      </span>
    }
    popperOptions={{
      placement: "right",
    }}
  >
    <p className="text-xl text-primary">
      <FaInfoCircle />
    </p>
  </Tippy>
);

export default StakeCard;

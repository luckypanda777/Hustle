import Tippy from "@tippyjs/react";
import React, { Component } from "react";
import { FaInfoCircle } from "react-icons/fa";
import launderingImg from "../../assets/images/hustle/laundering.png";
import icon2 from "../../assets/images/icons/clean-cash.png";
import icon1 from "../../assets/images/icons/hustler-clean-cash-token.png";
import icon3 from "../../assets/images/icons/clean-cash.png";
import StakeBtn from "./triggers/stake";
import UnstakeBtn from "./triggers/unstake";

const Laundering = () => {
  return (
    <div className="laundering-page">
      <div className="bg-black py-10">
        <div className="container mx-auto ">
          <div className="flex flex-col items-center">
            <div className="img flex justify-center">
              <img width="300" height="200" src={launderingImg} alt="hustle" />
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col gap-x-24 gap-y-24 md:flex-row md:justify-center">
          {/* LEFT SIDEBAR 
          ===========================================================================*/}
          <div className="mx-auto w-3/4 rounded-3xl border px-5 pb-5 md:mx-0 md:w-1/4">
            <div className="py-5 text-center text-xl font-bold text-primary">
              <p className="">Dirty Cash</p>
              <p className="">Laundering Properties</p>
            </div>
            <div className="flex flex-col justify-between gap-y-4 text-white md:w-full md:justify-center">
              <div className="">
                <span className="font-bold">Type: </span>
                <span className="font-medium">Locked</span>
              </div>
              <div className="">
                <span className="font-bold">Daily pay-out: </span>
                <span className="font-medium">0.8%</span>
              </div>
              <div className="">
                <span className="font-bold">Reward Period: </span>
                <span className="font-medium">24h</span>
              </div>
              <div className="">
                <span className="font-bold">Unstake Fee: </span>
                <span className="font-medium">5%</span>
              </div>
              <div className="">
                <span className="font-bold">Total Max Stake: </span>
                <span className="font-medium">100k</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold">Total Staked: </span>
                <img className="w-8" src={icon1} alt="hustle" />
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold">Total Burned: </span>
                <img
                  className="relative left-2 w-12"
                  src={icon2}
                  alt="hustle"
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold">Total Laundered: </span>
                <img className="relative left-2 w-12" src={icon3} alt="hustle" />
              </div>
            </div>
          </div>
          {/* MAIN 
          ===========================================================================*/}
          <div className="mx-auto flex w-3/4 flex-col gap-y-5 md:mx-0 md:w-1/4">
            <div className="">
              <div className="relative flex items-center justify-center">
                <div className="absolute bottom-2">
                  <InfoIcon />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center rounded-3xl border py-5">
                <div className="w-16">
                  <img
                    src={icon1}
                    alt="hustle"
                    className="object- h-full w-full"
                  />
                </div>
                <p className="mb-4 mt-1 text-center text-xl font-semibold text-primary">
                  Staked Dirty Cash
                </p>
                <p className="text-xl font-bold text-white">2000</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center rounded-3xl rounded-3xl border border py-5">
              <div className="w-32">
                <img
                  src={icon2}
                  alt="hustle"
                  className="object- h-full w-full"
                />
              </div>
              <p className="mb-4 mt-1 text-center text-xl font-semibold text-primary">
                Daily Pay-out
              </p>
              <p className="text-xl font-bold text-white">20</p>
            </div>
            <div className="flex w-full justify-center gap-x-5 font-bold">
              <UnstakeBtn />
              <StakeBtn />
            </div>
          </div>
          {/* RIGHT SIDEBAR 
          ===========================================================================*/}
          <div className="mx-auto flex w-3/4 flex-col gap-y-5 md:mx-0 md:w-1/4">
            <div className="flex min-h-full flex-col items-center justify-center gap-y-1 rounded-3xl border py-10 md:py-0">
              <div className="w-32">
                <img
                  src={icon2}
                  alt="hustle"
                  className="object- h-full w-full"
                />
              </div>
              <p className="text-center text-xl font-semibold text-primary">
                Laundered Cash
              </p>
              <p className="mt-5 text-xl font-bold text-white">200</p>
              <button className="btn btn-default mt-5 block w-1/2 rounded-md px-2 py-2.5">
                Collect
              </button>
            </div>
          </div>
          {/* END INNER */}
        </div>
      </div>
    </div>
  );
};

class InfoIcon extends Component {
  state = {};
  render() {
    return (
      <Tippy
        content={
          <span className="text-sm">
            1% of your staked Dirty Cash will be burned every 24 hours in order
            to produce Clean Cash
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
  }
}

export default Laundering;

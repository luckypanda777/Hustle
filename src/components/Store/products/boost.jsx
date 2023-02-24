import React, { Component } from "react";
import BoostPlaceHolder from "../../../assets/images/shop/boost-placeholder.png";
import icon2 from "../../../assets/images/icons/clean-cash.png";
import icon1 from "../../../assets/images/icons/hustler-clean-cash-token.png";
import icon3 from "../../../assets/images/shop/ht-hustler-token.png";

class BoostPack extends Component {
  state = {};
  render() {
    return (
      <div className="flex flex-col items-center justify-center p-5 md:gap-y-1">
        <p className="text-primary">Ends in 64D 12H 30M</p>
        <div className="flex flex-col items-center">
          <img className="w-64" src={BoostPlaceHolder} alt="hustle" />
        </div>
        <button className="btn btn-default mt-5 block w-3/4 rounded-xl px-5 py-2.5 font-bold">
          Total Mints: 0/10,000
        </button>
        <div className="mt-5 flex flex-row items-center gap-x-3">
          <img className="w-8" src={icon1} alt="hustle" />
          <span className="relative left-2 font-bold text-white">0</span>
        </div>
        <div className="mt-5 flex flex-row items-center gap-x-3">
          <img className="w-12" src={icon2} alt="hustle" />
          <span className="font-bold text-white">0</span>
        </div>
        <div className="mt-5 flex flex-row items-center gap-x-3">
          <img className="w-8" src={icon3} alt="hustle" />
          <span className="relative left-2 font-bold text-white">0</span>
        </div>
        <button className="btn btn-default mt-5 block w-2/4 rounded-xl px-5 py-2.5 font-bold">
          Buy
        </button>
      </div>
    );
  }
}

export default BoostPack;

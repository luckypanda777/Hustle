import React, { Component } from "react";
import ImgGang from "../../../assets/images/home/game-logic-graph.png";

class GangManagement extends Component {
  render() {
    return (
      <div className="flex w-full flex-col items-center justify-center py-16 md:flex-row md:px-5 md:px-10 md:py-24">
        <div className="order-1 w-full md:order-2 md:w-1/2">
          <img src={ImgGang} alt="Welcome to London" />
        </div>
        <div className="order-2 flex w-full flex-col gap-y-5 p-5 md:order-1 md:w-1/2">
          <h2 className="text-3xl font-bold text-primary md:text-5xl">
            Gang Management
          </h2>
          <p className="text-md leading-8 text-white md:text-xl">
            Experience the most extensive and ever evolving role playing game in
            the wax blockchain. Manage your crew and rise from a street level
            hustler to becoming the next El Chapo. You decide your path!
          </p>
        </div>
      </div>
    );
  }
}

export default GangManagement;

import React, { Component } from "react";
import ImgHero from "../../../assets/images/home/resource.png";

class Resources extends Component {
  render() {
    return (
      <div className="flex w-full flex-col items-center justify-center py-16 md:flex-row md:px-5 md:px-10 md:py-24">
        <div className="order-1 w-full md:order-2 md:w-1/3">
          <img className="mx-auto" src={ImgHero} alt="Welcome to London" />
        </div>
        <div className="order-2 flex w-full flex-col gap-y-5 p-5 md:order-1 md:w-2/3">
          <h2 className="text-3xl font-bold text-primary md:text-5xl">
            Resources
          </h2>
          <div className="text-md flex flex-col gap-x-2 leading-8 text-white md:flex-row md:text-xl">
            <span className="min-w-fit font-bold text-primary">
              Dirty Cash:
            </span>
            <span className="text-sm text-white md:text-xl">
              The token that kick starts your drug empire.
            </span>
          </div>
          <div className="text-md flex flex-col gap-x-2 leading-8 text-white md:flex-row md:text-xl">
            <span className="min-w-fit font-bold text-primary">
              Clean Cash:
            </span>
            <span className="text-sm text-white md:text-xl">
              A real hustlers ambition token, your ticket to start your
              enterprise.
            </span>
          </div>
          <div className="text-md flex flex-col gap-x-2 leading-8 text-white md:flex-row md:text-xl">
            <span className="min-w-fit font-bold text-primary">
              Hustlers Token:
            </span>
            <span className="text-sm text-white md:text-xl">
              Owned by a few but wanted by so many.
            </span>
          </div>
          <div className="text-md flex flex-col gap-x-2 leading-8 text-white md:flex-row md:text-xl">
            <span className="min-w-fit font-bold text-primary">Work:</span>
            <span className="text-sm text-white md:text-xl">
              A resource needed by all, a true hustler can turn a gram into a kilo.
            </span>
          </div>
          <div className="text-md flex flex-col gap-x-2 leading-8 text-white md:flex-row md:text-xl">
            <span className="min-w-fit font-bold text-primary">
              Upgrade Token:
            </span>
            <span className="text-sm text-white md:text-xl">
              Upgrades and growth comes at a cost.
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Resources;

import React from "react";
import LeaderBoardImg from "../../assets/images/leaderboard/leaderboard.png";
import InfoImg from "../../assets/images/icons/info.png";
import CleanCashImg from "../../assets/images/icons/clean-cash.png";
import Mission from "./mission";

const Index = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center pb-2">
      <img src={LeaderBoardImg} className="h-auto max-w-sm shadow-lg" alt="" />
      <p className="mb-1 text-4xl text-white">Membership Fee</p>
      <img src={InfoImg} className="h-auto max-w-sm pt-5 shadow-lg" alt="" />
      <img
        src={CleanCashImg}
        className="h-auto w-20 max-w-sm pt-5 shadow-lg"
        alt=""
      />

      <button
        className={`rounded-4 mt-5 rounded border border-white bg-transparent  py-1 px-12 font-bold text-white hover:bg-gray-900`}
      >
        Pay
      </button>

      <div className="mt-10 flex w-full justify-between px-10 max-sm:flex-col">
        <div className="flex max-sm:flex-col">
          <div className="relative text-gray-600 focus-within:text-gray-400">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button
                type="submit"
                className="focus:shadow-outline p-1 focus:outline-none"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
            </span>
            <input
              type="search"
              name="q"
              className="mx-1 rounded-md border border-white bg-transparent py-2 pl-10 text-sm text-white focus:bg-white focus:text-gray-900 focus:outline-none max-sm:w-full"
              placeholder="Search..."
              autoComplete="off"
            />
          </div>
          <button
            className={`rounded-4 mx-1 rounded border border-white  bg-transparent py-1 px-8 font-bold text-white hover:bg-gray-900 max-sm:mt-5 max-sm:w-full`}
          >
            All
          </button>
          <button
            className={`rounded-4 mx-1 rounded border border-white  bg-transparent py-1 px-8 font-bold text-white hover:bg-gray-900 max-sm:mt-5 max-sm:w-full`}
          >
            Active
          </button>
        </div>
        <div className="flex flex-row justify-center align-bottom max-sm:mt-5 max-sm:w-full max-sm:flex-col">
          <p className="max-sm:w-15 mr-2 flex items-center text-white">
            Sort by:{" "}
          </p>
          <input
            type="search"
            name="q"
            className="mx-1 rounded-md border border-white bg-transparent py-2 pl-10 text-sm text-white focus:bg-white focus:text-gray-900 focus:outline-none max-sm:w-full"
            placeholder="Search Mission"
            autoComplete="off"
          />
        </div>
      </div>
      <div className="w-full px-10">
        <Mission />
      </div>

      {/* <div className="flex px-10 text-center">
        <img src={WarningImg} className="h-8 w-8" alt="" />
        <p className="text-xl text-white md:px-5">
          Players must have at least one character in game and complete a
          collection in order to appear on our Leaderboards. Only the top 100
          players will be displayed.
        </p>
      </div> */}
    </div>
  );
};

export default Index;

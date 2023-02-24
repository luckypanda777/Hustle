import React from "react";
import LeaderBoardImg from "../../assets/images/leaderboard/leaderboard.png";
import WarningImg from "../../assets/images/leaderboard/warning.png";
import Img1 from "../../assets/images/leaderboard/1.png";
import Img2 from "../../assets/images/leaderboard/2.png";
import Img3 from "../../assets/images/leaderboard/3.png";

const image = [Img1, Img2, Img3];
const columnNames = [
  ["Rank", "Wallet ID", "Hustling Power"],
  ["Rank", "Wallet ID", "Hustling Power"],
  ["Rank", "Wallet ID", "G Rank"],
  ["Rank", "Wallet ID", "Number of Drops"],
];
const title = [
  "Hustling Power Leaderboard",
  "Laundering Leaderboard",
  "G Rank Leaderboard",
  "Drops Leaderboard",
];
const power = [
  ["vxwt.wam", "2,000 Dirty Cash/ per second"],
  ["enwd.wam", "1,000 Dirty Cash/ per second"],
  ["enwd.wam", "500 Dirty Cash/ per second"],
];
const laundering = [
  ["vxwt.wam", "2,000 Dirty Cash/ per day"],
  ["enwd.wam", "1,000 Dirty Cash/ per day"],
  ["enwd.wam", "500 Dirty Cash/ per day"],
];
const rank = [
  ["vxwt.wam", "500 G Rank"],
  ["enwd.wam", "100 G Rank"],
  ["enwd.wam", "50 G Rank"],
];
const drops = [
  ["vxwt.wam", "500"],
  ["enwd.wam", "100"],
  ["enwd.wam", "50"],
];

const data = [power, laundering, rank, drops];

const LeaderBoard = () => {
  const [index, setIndex] = React.useState(0);
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <img
        src={LeaderBoardImg}
        class="py=10 h-auto max-w-sm shadow-lg"
        alt=""
      />
      <div className="flex px-10 text-center">
        <img src={WarningImg} className="h-8 w-8" alt="" />
        <p className="text-xl text-white md:px-5">
          Players must have at least one character in game and complete a
          collection in order to appear on our Leaderboards. Only the top 100
          players will be displayed.
        </p>
      </div>
      <div className="flex w-full justify-center py-10 px-10 max-sm:flex-col md:flex-row">
        <button
          className={`rounded-full border border-white bg-transparent py-3  px-4 font-bold ${
            index === 0 ? "text-green-500" : "text-white"
          } hover:bg-gray-900 max-sm:my-1 sm:mx-2 md:mx-10`}
          onClick={() => {
            setIndex(0);
          }}
        >
          Hustling Power
        </button>
        <button
          className={`rounded-full border border-white bg-transparent py-3  px-4 font-bold ${
            index === 1 ? "text-green-500" : "text-white"
          } hover:bg-gray-900 max-sm:my-1 sm:mx-2 md:mx-10`}
          onClick={() => {
            setIndex(1);
          }}
        >
          Laundering
        </button>
        <button
          className={`rounded-full border border-white bg-transparent py-3  px-4 font-bold ${
            index === 2 ? "text-green-500" : "text-white"
          } hover:bg-gray-900 max-sm:my-1 sm:mx-2 md:mx-10`}
          onClick={() => {
            setIndex(2);
          }}
        >
          G Rank
        </button>
        <button
          className={`rounded-full border border-white bg-transparent py-3  px-4 font-bold ${
            index === 3 ? "text-green-500" : "text-white"
          } hover:bg-gray-900 max-sm:my-1 sm:mx-2 md:mx-10`}
          onClick={() => {
            setIndex(3);
          }}
        >
          Drops
        </button>
      </div>
      <div className="text-center">
        <p className="px-5 py-10 text-4xl text-yellow-200">{title[index]}</p>
      </div>
      <div className="mt-10 flex w-full flex-row justify-between">
        <p className="w-1/3 max-sm:text-center text-right text-yellow-200">
          {columnNames[index][0]}
        </p>
        <p className="w-1/3 text-center text-yellow-200">
          {columnNames[index][1]}
        </p>
        <p className="w-1/3 text-yellow-200">{columnNames[index][2]}</p>
      </div>
      {data[index].map((item, i) => {
        return (
          <div className="my-5 flex w-full flex-row justify-between" key={i}>
            <div className="flex w-1/3 max-sm:justify-center justify-end">
              <img className="w-10 h-10" src={image[i]} alt="" />
            </div>
            <p className="w-1/3 text-center text-white">{item[0]}</p>
            <p className="w-1/3 text-white">{item[1]}</p>
          </div>
        );
      })}
    </div>
  );
};

export default LeaderBoard;

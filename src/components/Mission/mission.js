import StarImg from "../../assets/images/icons/star.png";
import CleanCashImg from "../../assets/images/icons/clean-cash.png";
import SlotImg from "../../assets/images/icons/slot.png";
import FinalImg from "../../assets/images/icons/hst-final.png";
import DirtyImg from "../../assets/images/icons/hustler-dirty-cash-token.png";
import BoostImg from "../../assets/images/icons/boost.png";

const Mission = () => {
  return (
    <div className="mt-10 flex w-full flex-row items-start justify-between rounded-md border border-white p-5 align-bottom max-sm:w-full max-sm:flex-col">
      <div className="flex flex-col justify-center text-center max-sm:mt-5 max-sm:w-full">
        <p className="font-bold text-white">Mission</p>
        <p className="text-white">“Say hello to my lil friend”</p>
        <div className="mt-5 flex justify-center">
          <img
            src={StarImg}
            alt=""
            className="absolute  left-12 flex items-center pl-2"
          />
          <button
            className={`rounded-4 mx-1 rounded border border-white  bg-transparent px-2 py-1 font-bold text-white hover:bg-gray-900`}
          >
            Start
          </button>
        </div>
        <div className="mt-5 flex justify-center">
          <button
            className={`rounded-4 mx-1 rounded border border-white  bg-transparent py-1 px-2 font-bold text-white hover:bg-gray-900`}
          >
            Stake
          </button>
          <button
            className={`rounded-4 mx-1 rounded border border-white  bg-transparent py-1 px-2 font-bold text-white hover:bg-gray-900`}
          >
            Unstake
          </button>
        </div>
        <div className="mt-5">
          <button
            className={`rounded-4 mx-1 rounded border border-white  bg-transparent py-1 px-2 font-bold text-red-600 hover:bg-gray-900`}
          >
            Offline
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center text-center max-sm:mt-5 max-sm:w-full">
        <p className="font-bold text-white">Mission Requirements</p>
        <div className="mt-10 flex flex-row justify-center rounded-xl border border-white p-3">
          <div className="h-90 flex flex-col justify-between">
            <img alt="" src={CleanCashImg} className="mt-3 w-10" />
            <p className="text-white">2K</p>
          </div>
          <div className="h-90 flex flex-col justify-between">
            <img alt="" src={SlotImg} className="w-10" />
            <p className="text-white">40K</p>
          </div>
          <div className="h-90 flex flex-col justify-between">
            <img alt="" src={FinalImg} className="w-10" />
            <p className="text-white">1K</p>
          </div>
          <div className="h-90 flex flex-col justify-between">
            <img alt="" src={DirtyImg} className="w-10" />
            <p className="text-white">3K</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center text-center max-sm:mt-5 max-sm:w-full">
        <p className="font-bold text-white">Your Progress</p>
        <div className="mt-3 flex w-full flex-col justify-center rounded-xl border border-white p-3">
          <div className="h-90 flex flex-row justify-between">
            <img alt="" src={CleanCashImg} className="w-10" />
            <p className="text-white">2K</p>
          </div>
          <div className="h-90 flex flex-row justify-between">
            <img alt="" src={SlotImg} className="w-10" />
            <p className="text-white">40K</p>
          </div>
          <div className="h-90 flex flex-row justify-between">
            <img alt="" src={FinalImg} className="w-10" />
            <p className="text-white">1K</p>
          </div>
          <div className="h-90 flex flex-row justify-between">
            <img alt="" src={DirtyImg} className="w-10" />
            <p className="text-white">3K</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center text-center max-sm:mt-5 max-sm:w-full">
        <p className="font-bold text-white">
          Reward
          <br /> Period
        </p>
        <div className="mt-3 flex w-full flex-col justify-center rounded-xl p-3">
          <button
            className={`rounded-4 mx-1 rounded border border-white  bg-transparent px-2 py-1 font-bold text-white hover:bg-gray-900`}
          >
            Every 2 days
          </button>
          <p className="font-bold text-white">
            Lock
            <br /> Period
          </p>
          <button
            className={`rounded-4 mx-1 rounded border border-white  bg-transparent px-2 py-1 font-bold text-white hover:bg-gray-900`}
          >
            35 days
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center text-center max-sm:mt-5 max-sm:w-full">
        <p className="font-bold text-white">Reward</p>
        <p className="text-sm text-white">
          <b>Boost </b>“Enforcer”
        </p>
        <div className="flex flex-col justify-center text-center max-sm:mt-5 max-sm:w-full">
          <div className="mt-3 flex w-full flex-col items-center justify-center rounded-xl p-3">
            <img alt="" src={BoostImg} className="w-40" />
            <button
              className={`rounded-4 mx-1 mt-5 w-20 rounded  border border-white bg-transparent px-2 py-1 font-bold text-white hover:bg-gray-900`}
            >
              Claim
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;

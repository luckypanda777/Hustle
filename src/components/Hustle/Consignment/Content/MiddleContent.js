import React from "react";
import CleanCashIcon from "../../../../assets/images/icons/clean-cash.png";
import DirtyCashIcon from "../../../../assets/images/icons/dirty-cash-token.png";

const MiddleContent = () => {
  return (
    <div className="order-1 mb-5 w-full md:mb-0 lg:order-2 lg:w-4/12 ">
      <div className="flex justify-center ">
        <div className="w-1/2">
          <div className="mt-5 flex items-center justify-center">
            <div className="w-full">
              <div className="flex flex-col items-center justify-center gap-y-1">
                <p className="text-center text-xl font-semibold text-primary">
                  Collected Dirty Cash
                </p>
                <div className="w-10">
                  <img
                    src={DirtyCashIcon}
                    alt="Dirty Cash"
                    className="object- h-full w-full"
                  />
                </div>
                <p className="mb-2 font-bold text-white">800</p>
              </div>
              <button className="btn btn-default block w-full rounded-md px-5 py-2.5">
                Collect rewards
              </button>
            </div>
          </div>
          <div className="mt-5 flex items-center justify-center">
            <div className="w-full">
              <div className="flex flex-col items-center justify-center gap-y-1">
                <p className="text-center text-xl font-semibold text-primary">
                  Bail Cost
                </p>
                <div className="w-16">
                  <img
                    src={CleanCashIcon}
                    alt="Clean Cash"
                    className="object- h-full w-full"
                  />
                </div>
                <p className="mb-2 font-bold text-white">300</p>
              </div>

              <button className="btn btn-default block w-full  rounded-md px-2 py-2.5">
                Pay Bail
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleContent;

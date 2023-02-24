import React from "react";

const Bottom = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full md:w-1/6">
        <div className="mt-5 flex items-center justify-center">
          <div className="w-full">
            <p className="text-center text-xl font-semibold text-primary">
              Collected HCC:
            </p>
            <button className="btn btn-default block w-full rounded-md px-5 py-2.5">
              Collect rewards
            </button>
          </div>
        </div>
        <div className="mt-5 flex items-center justify-center">
          <div className="w-full">
            <p className="text-center text-xl font-semibold text-primary">
              Bail Cost (HCC)
            </p>
            <button className="btn btn-default block w-full  rounded-md px-2 py-2.5">
              Pay Bail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottom;

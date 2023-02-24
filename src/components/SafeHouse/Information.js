import React from "react";

const Information = () => {
  return (
    <div
      className="mx-2 mr-2 rounded-md bg-black p-8 text-xl "
      style={{ boxShadow: "#a5a5a5eb 0px 0px 9px 0px" }}
    >
      <div className="">
        <div className="flex flex-col gap-y-1 ">
          <div className="text-primary">
            <div className="box-border flex items-center gap-1 gap-x-2">
              <p className="">Name:</p>
              <p className="s box-border w-full rounded-md border px-2 py-0.5 text-base text-primary">
                John Doe
              </p>
            </div>
            <div className="my-3 box-border flex items-center gap-1 gap-x-2">
              <p className="">Gang:</p>
              <p className="s box-border w-full rounded-md border px-2 py-0.5 text-base text-primary">
                Gang 1
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="my-4">
          <span className="font-bold text-primary"> Stats: </span>
        </div>
        <div className="mt-2">
          <Item text={"G Rank"} value={"0"} />
          <Item text={"Total Bonus Reward"} value={"1%"} />
          <Item text={"Dirty Cash per hour"} value={"0"} />
          <Item text={"Dirty Cash per hour"} value={" 10.5"} />
          <Item text={"Clean Cash per day"} value={"5"} />
          <Item text={" Hustlers Token per day"} value={".75"} />
          <Item text={"Total Stop & Search"} value={"60"} />
          <Item text={"Total Successful Drops"} value={"5"} />
          <Item text={"Total Drop Intercepted"} value={"3"} />
        </div>
      </div>
    </div>
  );
};

const Item = ({ text, value }) => (
  <p className="text-primary">
    <span className="text-primary ">{text}:</span> {"  "} {value}
  </p>
);

export default Information;

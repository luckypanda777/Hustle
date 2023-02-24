import Tippy from "@tippyjs/react";
import React, { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import data from "./data1.json";
import UnlockModal from "./Unlock/UnlockModal";

const SafeHouseTable = () => {
  const [items, setItems] = useState(data);

  const activate = (id) => {
    setItems((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return { ...item, isActivated: true };
        }
        return item;
      });
    });
  };

  return (
    <div className="md:w-8/12">
      <div className="data122 mx-2">
        <div
          className="relative w-full overflow-x-auto rounded-md border border-gray-700 "
          style={{ boxShadow: "#a5a5a5eb 0px 0px 9px 0px" }}
        >
          <div className="bg-black py-2 text-center text-primary">
            <div className="flex justify-center gap-x-1">
              <h2 className="mb-2 text-2xl font-bold md:text-3xl">
                G rank mission
              </h2>
              <InfoIcon />
            </div>
            <p className="mb-3 text-base">
              Complete the missions by collecting G Ranks and activating the
              missions to gain bonus
            </p>
          </div>
          <table className="table w-full text-left text-sm text-primary dark:text-gray-400 ">
            <thead className="border-t  border-gray-700 bg-black text-sm uppercase text-primary dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="w-1/12 py-3 px-6">
                  Missions
                </th>
                <th scope="col" className="w-3/12 py-3 px-6">
                  Activation Cost
                </th>
                <th scope="col" className="w-1/12 py-3 px-6">
                  Bonus
                </th>
                <th scope="col" className="py-3 px-6">
                  Current Progress
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <Item
                  key={item.id}
                  id={item.id}
                  bonus={item.bonus}
                  count={item.count}
                  index={index + 1}
                  activate={activate}
                  isActivated={item.isActivated}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const InfoIcon = () => (
  <Tippy
    content={
      <span>
        Each account can accrued up to +5% bonus reward for every location
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

const Item = ({ bonus, count, index, activate, isActivated, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <UnlockModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        activate={activate}
        id={id}
      />
      <tr className="w-full border-b border-gray-700 bg-gray-800 dark:border-gray-700 dark:bg-gray-800">
        <td className="text-center">M{index}</td>
        <td className="whitespace-nowrap py-4 px-6 font-medium text-gray-900 dark:text-white">
          <button
            className="btn btn-profile mr-2 mb-2 w-full rounded-lg font-medium"
            onClick={() => setIsOpen(true)}
          >
            {isActivated ? "Active" : "Activate"}
          </button>
        </td>
        <td className="py-4 px-6">
          {bonus > 0 ? `+` : ""}
          {bonus}%
        </td>
        <td className="w-6/12 py-4 px-6">
          <div className="w-full rounded-full bg-gray-600 dark:bg-gray-700">
            <div className="w-8/12 rounded-full bg-profile-green p-0.5 py-1 text-center text-xs font-medium leading-none text-black">
              {count}
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default SafeHouseTable;

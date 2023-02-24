import React, { useState } from "react";
import DropDown from "../../shared/DropDown/DropDown";
import Menus from "./Menus";

const HustleMenu = () => {
  const [isShow, setIsShow] = useState(false);

  const menusList = [
    {
      id: 1,
      label: "Consignment",
      url: "/consignment",
    },
    {
      id: 2,
      label: "The Corner",
      url: "/the-corner",
    },
    {
      id: 3,
      label: "The Traphouse",
      url: "/the-traphouse",
    },
    {
      id: 4,
      label: "Clandestine Lab",
      url: "/clandestine-lab",
    },
  ];

  return (
    <DropDown
      isShow={isShow}
      onClose={setIsShow}
      element={<Menus list={menusList} onSubmit={setIsShow} />}
    >
      <div>
        <div
          className={`cursor-pointer bg-gradient-to-r bg-clip-text font-Inter text-lg font-bold capitalize tracking-wide text-transparent hover:text-money-green ${
            isShow ? "text-money-green" : "from-primary to-primary"
          }`}
          onClick={(e) => {
            e.preventDefault();
            setIsShow(true);
          }}
        >
          Hustle
        </div>
      </div>
    </DropDown>
  );
};

export default HustleMenu;

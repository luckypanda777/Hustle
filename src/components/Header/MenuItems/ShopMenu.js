import React, { useState } from "react";
import DropDown from "../../shared/DropDown/DropDown";
import Menus from "./Menus";

const ShopMenu = () => {
  const [isShow, setIsShow] = useState(false);

  const menusList = [
    {
      id: 1,
      label: "Pack Shop",
      url: "/pack-shop",
    },
    {
      id: 2,
      label: "Booster Shop",
      url: "/booster-shop",
    },
  ];

  return (
    <DropDown
      isShow={isShow}
      onClose={setIsShow}
      element={<Menus list={menusList} onSubmit={setIsShow} />}
    >
      <div type="button">
        <div
          className={`cursor-pointer bg-gradient-to-r bg-clip-text font-Inter text-lg font-bold capitalize tracking-wide text-transparent hover:text-money-green ${
            isShow ? "text-money-green" : "from-primary to-primary"
          }`}
          onClick={(e) => {
            e.preventDefault();
            setIsShow(true);
          }}
        >
          Shop
        </div>
      </div>
    </DropDown>
  );
};

export default ShopMenu;

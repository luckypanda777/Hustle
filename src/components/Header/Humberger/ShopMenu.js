import React from "react";
import MenuItem from "./MenuItem";

const ShopMenu = () => {
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
    <div className="">
      <MenuItem text={"Shop"} noLink />
      <ul className="ml-3 gap-6">
        {menusList.map((item) => (
          <MenuItem text={item.label} url={item.url} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default ShopMenu;

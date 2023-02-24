import React from "react";
// import HustleMenu from "./HustleMenu";
import MenuItem from "./MenuItem";
// import ShopMenu from "./ShopMenu";
const Menu = () => {
  return (
    <div className="pl-2 md:hidden ">
      <ul className="gap-6">
        <MenuItem text={"home"} url="/" />
        {/* <MenuItem text={"Safe House"} url="/safe-house" />
        <HustleMenu />
        <MenuItem text={"Drop Zone"} url="/drop-zone" />
        <ShopMenu />
        <MenuItem text={"Laundering"} url="/laundering" /> */}
      </ul>
    </div>
  );
};

export default Menu;

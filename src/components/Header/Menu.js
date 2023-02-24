import React from "react";
import { Link } from "react-router-dom";
import HustleMenu from "./MenuItems/HustleMenu";
import ShopMenu from "./MenuItems/ShopMenu";
const Menu = () => {
  return (
    <div className="hidden md:block">
      <ul className="flex gap-6">
        <Item text={"home"} url="/" />
        <Item text={"Safe House"} url="/safe-house" />
        <HustleMenu />
        <Item text={"Transfers"} url="/transfers" />
        <ShopMenu />
        <Item text={"Laundering"} url="/laundering" />
        <Item text={"Leader Board"} url="/leaderboard" />
        <Item text={"Hustlers Club"} url="/mission" />
      </ul>
    </div>
  );
};

const Item = ({ text, url }) => {
  return (
    <li className="cursor-pointer bg-gradient-to-r from-primary to-primary bg-clip-text font-Inter text-lg font-semibold capitalize tracking-wide text-transparent hover:from-purple-400 hover:to-pink-600 hover:text-money-green">
      <Link to={url} style={{ all: "inherit" }}>
        {text}
      </Link>
    </li>
  );
};

export default Menu;

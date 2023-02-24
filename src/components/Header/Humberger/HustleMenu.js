import React from "react";
import MenuItem from "./MenuItem";

const HustleMenu = () => {
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
    <div className="">
      <MenuItem text={"Hustle"} noLink />

      <ul className="ml-2 gap-6">
        {menusList.map((item) => (
          <MenuItem text={item.label} url={item.url} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default HustleMenu;

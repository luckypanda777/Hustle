import React from "react";
const MENUS = [
  {
    value: "1",
    label: "wax1.greymass.com",
  },
  {
    value: "2",
    label: "wax2.greymass.com",
  },
  {
    value: "3",
    label: "wax3.greymass.com",
  },
];
const GearMenus = () => {
  return (
    <div className="custom-shadow bg-black p-4 text-sm">
      <div>
        <p>Select RPC EndPoint</p>

        <select
          id="countries"
          className="btn btn-default custom-shadow mt-3 w-full rounded-md border-none"
        >
          {MENUS.map(({ label, value }) => (
            <option className="bg-black" value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default GearMenus;

import React from "react";
import { FaBars } from "react-icons/fa";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import useInnerSize from "../../../hooks/useInnerSize";
import Menu from "./Menu";
const HumbuggerMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const { height } = useInnerSize();

  return (
    <div className="md:hidden">
      <button onClick={toggleDrawer} className="text-3xl text-white">
        <FaBars />
      </button>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className=""
        style={{ background: "#000", height }}
      >
        <div className="px-2 pt-10">
          <Menu />
        </div>
      </Drawer>
    </div>
  );
};

export default HumbuggerMenu;

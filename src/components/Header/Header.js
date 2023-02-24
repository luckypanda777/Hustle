import React from "react";
// import AuthMenu from "./AuthMenu";
import HumbuggerMenu from "./Humberger/HumbuggerMenu";
import Logo from "./Logo";
import Menu from "./Menu";

const Header = ({ isTransparent = false }) => {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <div
      className={`${
        isTransparent ? "bg-transparent" : "bg-black"
      } custom-shadow fixed top-0 z-50 w-full`}
    >
      <div className="mx-10">
        <div className="flex items-center justify-between">
          <Logo />
          <Menu />
          {/* <AuthMenu
            isAuthenticated={isAuthenticated}
            setIsAuthenticated={setIsAuthenticated}
          /> */}
          <HumbuggerMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;

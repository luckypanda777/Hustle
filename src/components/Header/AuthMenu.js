import React, { useState } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";
import { FaCog } from "react-icons/fa";
import logoutIcon from "../../assets/images/icons/logout.png";
import DropDown from "../shared/DropDown/DropDown";
import GearMenus from "./GearMenus";
import SignInMenus from "./SignInMenus";
import AuthUserMenu from "./User/AuthUserMenu";

const AuthMenu = ({ isAuthenticated, setIsAuthenticated }) => {
  const [isShowAuthMenu, setIsShowAuthMenu] = useState(false);
  const [isShow, setIsShow] = useState(false);

  const ref = useDetectClickOutside({
    onTriggered: () => setIsShowAuthMenu(false),
  });

  const ref2 = useDetectClickOutside({
    onTriggered: () => setIsShow(false),
  });

  return (
    <div className="flex items-center gap-x-2">
      {isAuthenticated ? (
        <AuthUserMenu />
      ) : (
        <div className="hidden text-white md:block" ref={ref}>
          <DropDown
            isShow={isShowAuthMenu}
            onClose={setIsShowAuthMenu}
            element={
              <SignInMenus
                onSubmit={setIsShowAuthMenu}
                setIsAuthenticated={setIsAuthenticated}
              />
            }
            width={300}
            left={-(300 - 150)}
          >
            <button
              className={`flex cursor-pointer items-center rounded-full border border-primary bg-gradient-to-r bg-clip-text px-5 py-2 font-Inter font-bold  tracking-widest text-transparent transition-all duration-300 hover:text-money-green ${
                isShowAuthMenu ? "text-money-green" : "from-primary to-primary"
              }`}
              type="button"
              onClick={() => setIsShowAuthMenu(!isShowAuthMenu)}
            >
              Login
            </button>
          </DropDown>
        </div>
      )}
      <div className="flex flex-col items-center justify-center gap-x-2">
        <div className="hidden text-white md:block" ref={ref2}>
          <DropDown
            width={300}
            isShow={isShow}
            onClose={setIsShow}
            left={-(300 - 90)}
            element={<GearMenus />}
          >
            <p
              className={`hover:text-money-green ${
                isShow ? "text-money-green" : "text-primary"
              }`}
              onClick={() => setIsShow((p) => !p)}
            >
              <FaCog className="ml-2" />
            </p>
          </DropDown>
        </div>
        {isAuthenticated && (
          <div
            className="mt-3 ml-2 w-4 cursor-pointer"
            onClick={() => setIsAuthenticated(false)}
          >
            <img src={logoutIcon} className="h-full w-full" alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthMenu;

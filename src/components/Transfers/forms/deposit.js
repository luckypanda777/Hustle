import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import PlayerAccWalletIcon from "../../../assets/images/icons/player-acc-wallet.png";
import CleanCashIcon from "../../../assets/images/icons/clean-cash.png";
import DirtyCashIcon from "../../../assets/images/icons/dirty-cash-token.png";
import HustlersTokenIcon from "../../../assets/images/icons/hustlers-token.png";
import Modal from "../../shared/Modal";

const CashTokens = [
  {
    icon: DirtyCashIcon,
    classes: "w-8 mx-auto",
  },
  {
    icon: CleanCashIcon,
    classes: "w-16 mx-auto",
  },
  {
    icon: HustlersTokenIcon,
    classes: "w-10 mx-auto",
  },
];

const AttemptDeposit = ({ isOpen, setIsOpen }) => {
  const [amountInWallet] = useState(0.94);

  const [input, setInput] = useState("");

  return (
    <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
      <div
        className="w-full rounded-md bg-black py-4 px-6"
        style={{ boxShadow: "#a5a5a5eb 0px 0px 9px 0px" }}
      >
        <form>
          <div className="mb-2 flex items-center justify-between">
            <div />
            <h2 className="px-5 py-2 text-center font-Inter text-2xl font-bold text-primary">
              Deposit
            </h2>
            <FaTimes
              className="block text-2xl text-primary hover:cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          </div>
          <div className="text-center text-primary"></div>
          <div>
            <div className=" flex items-center justify-end gap-x-2 text-primary">
              <p className="mt-2">{amountInWallet}</p>
              <div className="h-10 w-14">
                <img
                  src={PlayerAccWalletIcon}
                  alt="icon"
                  className="object- h-full w-full"
                />
              </div>
            </div>
            <p className="mb-2 text-center text-sm text-white text-primary">
              6% Fee
            </p>
            <div className="flex flex-col gap-y-2">
              {CashTokens.map(({ icon, classes }) => (
                <div className="flex items-center justify-between rounded-md bg-olive py-2 px-1.5">
                  <input
                    type="text"
                    name=""
                    className=" flex-1 border-none bg-transparent px-2 py-2 outline-none"
                    placeholder="insert amount"
                    id=""
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  />
                  <p className="w-16 pl-2.5 ">
                    <img src={icon} alt="icon" className={classes} />
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 flex justify-center">
            <button className="btn btn-default rounded">Deposit</button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AttemptDeposit;

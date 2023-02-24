import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import DirtyCashTokenIcon from "../../../assets/images/icons/dirty-cash-token.png";
import Modal from "../../shared/Modal";
import UnstakeConfirmation from "./UnstakeConfirmation";

const UnstakeForm = ({ isOpen, setIsOpen }) => {
  const [amountInWallet] = useState(3000);

  const [input, setInput] = useState("");
  const [isUnstakeOpen, setIsUnstakeOpen] = useState("");

  const setIsUnstakeConfirm = () => {
    document.querySelector("form").submit();
  };

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
              Unstake
            </h2>
            <FaTimes
              className="block text-2xl text-primary hover:cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          </div>
          <div className="text-center text-primary"></div>
          <div>
            <div className=" flex items-center justify-end gap-x-2 text-primary">
              <p>{amountInWallet}</p>
              <p>Staked</p>
            </div>
            <div className="mt-2 flex items-center justify-between rounded-md bg-olive py-2 px-1.5">
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
                <img
                  src={DirtyCashTokenIcon}
                  alt="icon"
                  className="mx-auto w-8"
                />
              </p>
            </div>
          </div>
          <div className="mt-4">
            <div className="text-center text-white ">
              <p className="text-sm">You will be charged a 5% fee to unstake</p>
            </div>
          </div>
          <div className="mt-5 flex hidden justify-center">
            <button className="btn btn-default rounded">Unstake</button>
          </div>
        </form>
        <div className="mt-5 flex justify-center">
          <button
            className="btn btn-default rounded"
            onClick={() => setIsUnstakeOpen(true)}
          >
            Unstake
          </button>
        </div>
        <UnstakeConfirmation
          isOpen={isUnstakeOpen}
          setIsOpen={setIsUnstakeOpen}
          onConfirm={setIsUnstakeConfirm}
        />
      </div>
    </Modal>
  );
};

export default UnstakeForm;

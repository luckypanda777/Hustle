import React, { useMemo, useState } from "react";
import { FaTimes } from "react-icons/fa";
import DirtyCashIcon from "../../../../assets/images/icons/dirty-cash-token.png";
import icon1 from "../../../../assets/images/icons/wallet.png";
import icon3 from "../../../../assets/images/icons/work.png";
import Modal from "../../../shared/Modal";

const RATE = 40;

const ReUpForm = ({ isOpen, setIsOpen }) => {
  const [amount] = useState(10);
  const [amountInWallet] = useState(3000);

  const [input, setInput] = useState("");

  const exchangedAmount = useMemo(() => {
    if (!input) return "";
    return parseFloat(input) * RATE;
  }, [input]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      //   className='w-8/12'
    >
      <div
        className="w-full rounded-md bg-black py-4 px-6"
        style={{ boxShadow: "#a5a5a5eb 0px 0px 9px 0px" }}
      >
        <form>
          <div className="mb-2 flex items-center justify-between">
            <div />
            <h2 className="px-5 py-2 text-center font-Inter text-2xl font-bold text-primary">
              Re-up
            </h2>
            <FaTimes
              className="block text-2xl text-primary hover:cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          </div>
          <div className="text-center text-primary">
            <p>Exchange Rate</p>
            <p>
              {RATE / 160} Dirty Cash = {amount} Work
            </p>
          </div>
          <div>
            <div className=" flex items-center justify-end gap-x-2 text-primary">
              <p className="mt-2">{amountInWallet}</p>
              <div className="h-10 w-14">
                <img
                  src={icon1}
                  alt="Wallet Icon"
                  className="object- h-full w-full"
                />
              </div>
            </div>
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
                <img
                  src={DirtyCashIcon}
                  alt="Dirty Cash Icon"
                  className="mx-auto w-8"
                />
              </p>
            </div>
          </div>
          <div className="mt-4">
            <div className="text-left text-white ">
              <p>You will receive:</p>
            </div>
            <div className="flex items-center justify-between rounded-md bg-olive py-2 px-1.5">
              <input
                type="text"
                name=""
                className="flex-1 border-none bg-transparent py-2 pl-4 outline-none"
                placeholder="insert amount"
                readOnly
                value={exchangedAmount}
              />
              <p className="w-16 rounded-md  pl-2.5 ">
                <img
                  src={icon3}
                  alt="Works Icon"
                  className="object- h-full w-full"
                />
              </p>
            </div>
          </div>

          <div className="mt-5 flex justify-center">
            <button className="btn btn-default rounded">Re-up</button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ReUpForm;

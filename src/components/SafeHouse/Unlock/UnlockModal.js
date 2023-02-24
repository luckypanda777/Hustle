import React from "react";
import { FaTimes } from "react-icons/fa";
import { v4 as uuid } from "uuid";
import icon2 from "../../../assets/images/icons/clean-cash.png";
import icon3 from "../../../assets/images/icons/hst-final.png";
import icon1 from "../../../assets/images/icons/hustler-clean-cash-token.png";
import Modal from "../../shared/Modal";
const data = [
  {
    id: uuid(),
    icon: icon1,
    cost: "25000",
  },
  {
    id: uuid(),
    icon: icon2,
    cost: "15000",
  },
  {
    id: uuid(),
    icon: icon3,
    cost: "1000",
  },
];

const UnlockModal = ({ isOpen, setIsOpen, activate, id }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      //   className='w-8/12'
    >
      <div
        className="w-full rounded-md bg-black py-4 px-6"
        id="unlock_modal"
        style={{ boxShadow: "#a5a5a5eb 0px 0px 9px 0px" }}
      >
        <>
          <div className="mb-2 flex items-center justify-between">
            <div />
            <div />
            <h2 className="px-5 py-2 text-center font-Inter text-2xl font-bold text-primary">
              Unlock Bonus
            </h2>
            <FaTimes
              className="block text-2xl text-primary hover:cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          </div>

          <div className="flex justify-center">
            <div>
              {data.map((item) => (
                <div
                  className="unlock-items my-2 flex items-center gap-x-3"
                  key={Math.random()}
                >
                  <div className="w-16">
                    <img
                      src={item.icon}
                      className="h-full w-full object-contain"
                      alt="Token Icon"
                    />
                  </div>
                  <p className="font-bold text-primary">{item.cost}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-5 flex justify-center">
            <button
              className="btn btn-profile rounded"
              onClick={() => {
                setIsOpen(false);
                activate(id);
              }}
            >
              Activate
            </button>
          </div>
        </>
      </div>
    </Modal>
  );
};

export default UnlockModal;

import React from "react";
import { FaTimes } from "react-icons/fa";
import Modal from "../../shared/Modal";

const UnstakeConfirmation = ({ isOpen, setIsOpen, onConfirm }) => {
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
        <>
          <div className="mb-2 flex items-center justify-between">
            <h2 className="px-5 py-2 text-center font-Inter text-2xl text-olive">
              Are you sure you want to unstake your Dirty Cash?
            </h2>
            <FaTimes
              className="block text-2xl text-olive hover:cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          </div>

          <div className="flex justify-center gap-2">
            <button className="btn btn-default" onClick={onConfirm}>
              Yes
            </button>
            <button
              className="btn btn-default"
              onClick={() => setIsOpen(false)}
            >
              No
            </button>
          </div>
        </>
      </div>
    </Modal>
  );
};

export default UnstakeConfirmation;

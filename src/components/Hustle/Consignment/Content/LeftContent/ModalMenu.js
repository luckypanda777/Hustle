import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Modal from "../../../../shared/Modal";
import Stats from "./Stats";
import UpgradeForm from "./UpgradeForm";

const ModalMenu = ({ isOpen, setIsOpen, startUpgradeTimer }) => {
  const [isUpGradeOpen, setIsUpgradeOpen] = useState(false);
  const [isStatsOpen, setIsStatsOpen] = useState(false);
  return (
    <>
      <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
        <div
          className="w-full rounded-md bg-black py-4 px-6"
          style={{ boxShadow: "#a5a5a5eb 0px 0px 9px 0px" }}
        >
          <div>
            <div className="mb-2 flex items-center justify-between">
              <div />
              <h2 className="px-5 py-2 text-center font-Inter text-2xl font-bold text-olive">
                Riley Level 3
              </h2>
              <FaTimes
                className="block text-2xl text-olive hover:cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            </div>

            <div className="text-center">
              <div className="my-5">
                <div className="btn btn-default rounded-md">Collect Reward</div>
              </div>
              <div className="my-5">
                <div
                  className="btn btn-default rounded-md"
                  onClick={() => setIsUpgradeOpen(true)}
                >
                  Upgrade
                </div>
              </div>
              <div className="my-5">
                <div className="btn btn-default rounded-md">Pay bail</div>
              </div>
              <div className="my-5" onClick={() => setIsStatsOpen(true)}>
                <div className="btn btn-default rounded-md">Stats</div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <UpgradeForm
        isOpen={isUpGradeOpen}
        setIsOpen={setIsUpgradeOpen}
        startUpgradeTimer={startUpgradeTimer}
      />
      <Stats isOpen={isStatsOpen} setIsOpen={setIsStatsOpen} />
    </>
  );
};

export default ModalMenu;

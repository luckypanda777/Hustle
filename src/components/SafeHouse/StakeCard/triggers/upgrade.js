import React, { useState } from "react";
import AddForm from "../AddForm";

const UpgradeSlotTrigger = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
      <button
        className="btn btn-profile mt-3 rounded"
        onClick={() => setIsOpen(true)}
      >
        Add Slot
      </button>
      <AddForm setIsOpen={setIsOpen} isOpen={isOpen} />
    </div>
  );
};

export default UpgradeSlotTrigger;

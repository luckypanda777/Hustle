import React, { useState } from "react";
import AddForm from "../../RightContent/AddForm";

const AddSlotBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
      <p
        className="btn btn-default cursor-pointer rounded-md text-sm"
        onClick={() => setIsOpen(true)}
      >
        Add Slot
      </p>
      <AddForm isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default AddSlotBtn;

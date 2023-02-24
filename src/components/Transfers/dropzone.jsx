import Tippy from "@tippyjs/react";
import React, { useState, Component } from "react";
import DropZoneIcon from "../../assets/images/transfers/drop-zone.png";
import { FaInfoCircle } from "react-icons/fa";
import AttemptDrop from "./forms/drop";
import AddPass from "./forms/AddPass";

const DropZone = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPassOpen, setIsPassOpen] = useState(false);
  return (
    <div className="">
      <div className="drop-zone relative flex flex-col items-center justify-center gap-y-5 rounded-3xl px-10 pt-10 pb-3 shadow-[0_0_9px_0_rgba(165,165,165,0.92)]">
        <div className="absolute -top-8">
          <TooltipDropZone />
        </div>
        <div className="text-2xl font-bold text-white">Drop Zone</div>
        <img className="w-12" src={DropZoneIcon} alt="icon" />
        <div
          className="flex h-full cursor-pointer items-center justify-center rounded-3xl border py-20 px-32"
          onClick={() => setIsPassOpen(true)}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 448 512"
            className="text-5xl text-gray-300"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
          </svg>
        </div>
        <div className="absolute bottom-10">
          <TooptipImmunityPass />
        </div>
        <p className="pt-5 text-xl font-bold text-primary">Immunity Pass</p>
      </div>
      <div className="relative mt-5 flex justify-center">
        <div className="absolute -top-1">
          <TooltipAttemptDrop />
        </div>
        <button
          className="btn btn-default mt-5 block flex w-1/2 flex-col items-center justify-center rounded-md"
          onClick={() => setIsOpen(true)}
        >
          Attempt a Drop
        </button>
      </div>
      <AttemptDrop setIsOpen={setIsOpen} isOpen={isOpen} />
      <AddPass setIsOpen={setIsPassOpen} isOpen={isPassOpen} />
    </div>
  );
};

class TooltipDropZone extends Component {
  state = {};
  render() {
    return (
      <Tippy
        content={
          <span className="text-sm">Attempt a drop to withdraw Dirty Cash</span>
        }
        popperOptions={{
          placement: "right",
        }}
      >
        <p className="text-xl text-primary">
          <FaInfoCircle />
        </p>
      </Tippy>
    );
  }
}

class TooptipImmunityPass extends Component {
  state = {};
  render() {
    return (
      <Tippy
        content={
          <span className="text-sm">
            Immunity pass allows players to make a drop of up to 1000 dirty cash
            without it being intercepted
          </span>
        }
        popperOptions={{
          placement: "right",
        }}
      >
        <p className="text-xl text-primary">
          <FaInfoCircle />
        </p>
      </Tippy>
    );
  }
}

class TooltipAttemptDrop extends Component {
  state = {};
  render() {
    return (
      <Tippy
        content={
          <span className="text-sm">
            Drops are risky, you may end up losing all of your rewards
          </span>
        }
        popperOptions={{
          placement: "right",
        }}
      >
        <p className="text-xl text-primary">
          <FaInfoCircle />
        </p>
      </Tippy>
    );
  }
}

export default DropZone;

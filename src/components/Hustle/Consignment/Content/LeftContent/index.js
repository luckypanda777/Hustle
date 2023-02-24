import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import icon1 from "../../../../../assets/images/icons/solo-g.png";
import AddCharacter from "./AddCharacter";
import AddPass from "./AddPass";
import Character from "./Character";
const LeftContent = () => {
  const [character] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="order-2 w-full md:w-1/2 lg:order-1 lg:w-4/12">
      <div className="mx-4 box-border  pb-4 ">
        <div className="mb-3 flex items-center gap-x-2">
          <div className="w-8">
            <img src={icon1} alt="Solo-G" className="object- h-full w-full" />
          </div>
          <p className="text-center text-xl font-bold text-olive">
            Crew Member: 0/1
          </p>
        </div>
        <div className="custom-shadow mr-2 box-border h-80 overflow-hidden rounded-md border bg-black p-6 text-center ">
          <div className="flex h-full items-center justify-center">
            {character.length > 0 ? (
              character.map((i) => <Character />)
            ) : (
              <Add />
            )}
          </div>
        </div>

        <div className="mt-2">
          <p className="text-center text-sm font-bold text-olive">Locked Up</p>

          <div className="mt-3 flex items-center justify-center gap-x-2">
            <div className="w-6">
              <img src={icon1} alt="Solo-G" className="object- h-full w-full" />
            </div>
            <p className="text-center text-lg text-primary">0/1</p>
          </div>
          <div className="mx-auto mt-2 w-5/12">
            <div
              className="btn btn-default flex h-24 w-full items-center justify-center rounded-xl"
              onClick={() => setIsOpen(true)}
            >
              <FaPlus className="text-5xl text-gray-300" />
            </div>
            <p className="btn btn-default mt-3 w-full rounded-md text-center capitalize">
              Get Out of jail
            </p>
          </div>
          <AddPass isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </div>
  );
};

const Add = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className="flex h-full w-full cursor-pointer items-center justify-center  rounded-3xl border border-gray-400 px-2"
        onClick={() => setIsOpen(true)}
      >
        <FaPlus className="text-5xl text-gray-300" />
      </div>
      <AddCharacter setIsOpen={setIsOpen} isOpen={isOpen} />
    </>
  );
};

export default LeftContent;

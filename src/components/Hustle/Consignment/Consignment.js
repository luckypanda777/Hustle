import React from "react";
// import Bottom from './Bottom';
import Content from "./Content";
import Top from "./Top";

const Consignment = () => {
  return (
    <div className="bg-black py-10 md:min-h-screen">
      <div className="container mx-auto ">
        <Top />
        <Content />
        {/* <Bottom /> */}
      </div>
    </div>
  );
};

export default Consignment;

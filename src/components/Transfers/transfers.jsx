import React, { Component } from "react";
import TransfersLogo from "../../assets/images/transfers/transfers.png";
import DropZone from "./dropzone";
import ForeignExchange from "./foreignexchange";

class Transfers extends Component {
  state = {};
  render() {
    return (
      <div className="laundering-page">
        <div className="bg-black py-10 md:min-h-screen">
          <div className="container mx-auto ">
            <div className="flex flex-col items-center">
              <div className="img flex justify-center">
                <img
                  width="300"
                  height="200"
                  src={TransfersLogo}
                  alt="Transfers Logo"
                />
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-y-24 md:flex-row md:items-start md:gap-x-24">
              <DropZone />
              <ForeignExchange />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Transfers;

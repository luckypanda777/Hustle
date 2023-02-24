import Tippy from "@tippyjs/react";
import React, { Component } from "react";
import ForeignExchangeImage from "../../assets/images/transfers/foreign-exchange.png";
import { FaInfoCircle } from "react-icons/fa";
import DepositBtn from "./triggers/deposit";
import WithdrawBtn from "./triggers/withdraw";
import ExchangeBtn from "./triggers/exchange";
import HustlersTokenIcon from "../../assets/images/icons/hustlers-token.png";

const ForeignExchange = () => {
  return (
    <div className="">
      <div className="drop-zone relative flex flex-col items-center justify-center gap-y-5 rounded-3xl px-10 pt-10 pb-3 shadow-[0_0_9px_0_rgba(165,165,165,0.92)]">
        <div className="absolute -top-8">
          <TooltipForeignExchange />
        </div>
        <div className="text-2xl font-bold text-white">Foreign Exchange</div>
        <img className="w-40" src={ForeignExchangeImage} alt="hustle" />
        <div className="mt-2 w-12">
          <img src={HustlersTokenIcon} alt="Hustlers Token" />
          <p className="pt-2 text-center font-bold text-white">5000</p>
        </div>
        <div className="text-center">
          <p className="pt-5 text-primary">Ends In</p>
          <p className="text-primary">23H 59M 59H</p>
        </div>
      </div>
      <div className="relative mt-4 flex justify-center gap-x-6 px-5">
        <div className="relative flex justify-center">
          <div className="absolute -top-1">
            <TooltipWithdrawBtn />
          </div>
          <WithdrawBtn />
        </div>
        <div className="relative flex justify-center">
          <div className="absolute -top-1">
            <TooltipDepositBtn />
          </div>
          <DepositBtn />
        </div>
        <div className="relative flex justify-center">
          <div className="absolute -top-1">
            <TooltipExchangeBtn />
          </div>
          <ExchangeBtn />
        </div>
      </div>
    </div>
  );
};

class TooltipForeignExchange extends Component {
  render() {
    return (
      <Tippy
        content={
          <span className="text-sm">
            Clean Cash and Hustlers Token can be withdrawn, deposited or
            exchanged via the Foreign Exchange.
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

class TooltipDepositBtn extends Component {
  render() {
    return (
      <Tippy
        content={
          <span className="text-sm">Deposits are not subjected to a fee</span>
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

class TooltipWithdrawBtn extends Component {
  render() {
    return (
      <Tippy
        content={
          <span className="text-sm">Withdraws are subjected to a 6% fee</span>
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

class TooltipExchangeBtn extends Component {
  render() {
    return (
      <Tippy
        content={
          <span className="text-sm">
            Players can exchange a maximum of 10 Hustlers Token every day tax
            free at G Rank 15
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

export default ForeignExchange;

import React, { Component } from "react";
import StashLogo from "../../assets/images/logo/stash.png";

class Stash extends Component {
  state = {};
  render() {
    return (
      <div className="">
        <div className="img flex justify-center">
          <img width="300" height="200" src={StashLogo} alt="Stash Logo" />
        </div>
      </div>
    );
  }
}

export default Stash;

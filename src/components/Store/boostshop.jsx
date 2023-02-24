import React, { Component } from "react";
import BoostShopLogo from "../../assets/images/hustle/boost-shop.png";
import ProductBoost from "./products/boost";

class BoostShop extends Component {
  render() {
    return (
      <div className="BoostShop-page">
        <div className="bg-black py-10 md:min-h-screen">
          <div className="container mx-auto ">
            <div className="flex flex-col items-center">
              <div className="img flex justify-center">
                <img
                  width="300"
                  height="200"
                  src={BoostShopLogo}
                  alt="Boost Shop Logo"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-wrap items-center justify-center pb-6 md:flex-row md:items-start md:gap-y-5 md:gap-x-8">
            <ProductBoost />
            <ProductBoost />
            <ProductBoost />
          </div>
        </div>
      </div>
    );
  }
}

export default BoostShop;

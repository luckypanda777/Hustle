import React, { Component } from "react";
import PackShopLogo from "../../assets/images/hustle/pack-shop.png";
import ProductPack from "./products/pack";

class PackShop extends Component {
  render() {
    return (
      <div className="PackShop-page">
        <div className="bg-black py-10 md:min-h-screen">
          <div className="container mx-auto ">
            <div className="flex flex-col items-center">
              <div className="img flex justify-center">
                <img
                  width="300"
                  height="200"
                  src={PackShopLogo}
                  alt="Pack Shop Logo"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-wrap items-center justify-center pb-6 md:flex-row md:items-start md:gap-y-5 md:gap-x-24">
            <ProductPack />
            <ProductPack />
            <ProductPack />
          </div>
        </div>
      </div>
    );
  }
}

export default PackShop;

import React, { useEffect, useState } from "react";
import icon1 from "../../../assets/images/gitbook.png";
import banner2 from "../../../assets/images/home/banner2.png";
import banner3 from "../../../assets/images/home/banner3.png";
import banner4 from "../../../assets/images/home/banner4.png";
import banner5 from "../../../assets/images/home/banner5.png";
import banner6 from "../../../assets/images/home/banner6.png";

const Hero = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setWidth]);

  return (
    <div
      className="hero-section flex h-[770px] min-h-screen items-center justify-center bg-black bg-cover bg-center bg-no-repeat md:min-h-max"
      style={{
        backgroundImage:
          width > 1490
            ? `url(${banner2})`
            : width > 1055
            ? `url(${banner3})`
            : width > 700
            ? `url(${banner4})`
            : width > 500
            ? `url(${banner5})`
            : `url(${banner6})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="mx-3 pt-10 text-center text-white md:mx-auto md:w-7/12">
      <h2 className="text-3xl font-bold capitalize text-primary">
      2023
       </h2> 
        <h2 className="text-5xl font-bold capitalize text-primary">
          The Hustle
        </h2>
        <p className="mt-2 text-xl">"The NFT game where no dream is too big"</p>
        <div className="mt-10">
          <p className="text-lg">Check out our whitepaper</p>
          <div className="mt-4 flex justify-center">
            <a
              href="https://thehustlegame.gitbook.io/whitepaper/"
              target={"_blank"}
              className="block h-10 w-10"
              rel="noreferrer"
            >
              <img
                src={icon1}
                alt="Whitepaper Icon"
                className="h-full w-full object-contain"
              />
            </a>
          </div>
        </div>
        <p className="mt-5">
          Login and experience the closest thing to being a real gang leader by
          building a crew and taking charge of one or more locations
        </p>
      </div>
    </div>
  );
};

export default Hero;

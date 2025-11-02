import React from "react";
import BannerImg from "../../public/img/banner.svg";
import Image from "next/image";
import Close from "../../public/img/close.svg";

const Banner = () => {
  return (
    <div>
      <div className="relative flex rounded-lg  banner-bg-color mx-36 my-8">
        <Image
          src={BannerImg}
          width={248}
          height={164}
          alt="Author by Simba"
          className=" w-5/18 p-10 hide-item min-w-5/18"
        />

        <div className="w-13/18 p-10 txt-main-color flex flex-col gap-4">
          <p className="font-bold text-3xl">Welcome</p>
          <p className="font-bold text-3xl">Amit Singh</p>
          <p>
            Take control of investments and returns in one place - track
            balances, customise alerts, act on analytical insights, and transfer
            dividends with ease.
          </p>
          <p className="font-bold text-xl">
            Membership Date: 16th October 2023
          </p>
        </div>
        <div className="absolute top-2 right-2">X</div>
      </div>
    </div>
  );
};

export default Banner;

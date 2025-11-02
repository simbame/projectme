import React from "react";
import Image from "next/image";
import Icon from "../../../../public/svgs/calendarIcon.svg";

export default function Page() {
  return (
    <div className="flex gap-4 justify-center">
      {/* <Image src={Summary1} width={400} height={200} alt="Authored by Simba" />
      <Image src={Summary2} width={400} height={200} alt="Authored by Simba" /> */}
      <div className="flex flex-col gap-1 rounded-2xl gradient-color w-100 min-w-80 h-44 m-0.5 p-6 mt-1 ml-3">
        <p className="text-sm font-bold">Current Balance</p>
        <p className="text-2xl font-bold mb-3">₹3,50,000</p>
        <div className="flex">
          <Image src={Icon} width={20} height={20} alt="Authored by Simba" />
          <p className="text-sm">As On</p>
        </div>
        <p className="pl-5">Jan 24, 2024</p>
      </div>
      <div className="flex flex-col gap-1 rounded-2xl gradient-color w-100 min-w-80 h-44 m-0.5 p-6 mt-1 ml-3">
        <p className="text-sm font-bold">Current Balance</p>
        <p className="text-2xl font-bold mb-3">₹3,50,000</p>
        <div className="flex">
          <Image src={Icon} width={20} height={20} alt="Authored by Simba" />
          <p className="text-sm">As On</p>
        </div>
        <p className="pl-5">Jan 24, 2024</p>
      </div>
      <div className="flex justify-between items-center relative rounded-2xl gradient-color w-100 min-w-80 h-44 m-0.5 p-6 mt-1 ml-3">
        <div className="flex flex-col gap-1">
          <p className="text-sm font-bold">Current Balance</p>
          <p className="text-2xl font-bold mb-3">₹3,50,000</p>
          <div className="flex">
            <Image src={Icon} width={20} height={20} alt="Authored by Simba" />
            <p className="text-sm">As On</p>
          </div>
          <p className="pl-5">Jan 24, 2024</p>
        </div>
        <Image
          src={"/img/dashboard/Illustration Container.svg"}
          width={78}
          height={42}
          alt="Authored by Simb@"
          className="absolute right-0"
        />
      </div>
    </div>
  );
}

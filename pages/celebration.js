import Link from "next/link";
import React from "react";
import Confetti from "react-confetti";

const Celebration = () => {
  return (
    <div className="flex flex-col items-center pt-[56px]">
      <Confetti />
      <p className="text-[24px] mb-[26px]">YAAYY! YOU WON!</p>
      <img className="h-[270px] w-[246px]" src="bottom.svg" alt="" />
      <p className="font-bold text-[24px] w-[146px] leading-[28px] text-center mb-[118px]">
        route to monastery
      </p>
      <p className="text-[14px] italic text-gray-500 opacity-85">
        A new stamp got added to your collection!
      </p>
    </div>
  );
};

export default Celebration;

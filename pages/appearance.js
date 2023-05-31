import React from "react";
import * as Form from "@radix-ui/react-form";

const appearance = () => {
  return (
    <div className="mt-[18px] mx-[16px]">
      <div className="flex flex-row justify-between items-center mb-[20px]">
        <div className="flex flex-row h-[48px] w-[48px] items-center justify-between">
          <img className="m-auto" src="arrow-left.svg" alt="" />
        </div>
        <div className="flex flex-row h-[48px] w-[48px] border-[2px] border-black rounded-full items-center justify-between">
          <img className="m-auto" src="menu.svg" alt="" />
        </div>
      </div>

      <div>
        <p className="text-[16px] leading-[35px] text-black">
          How will it appear for the collectors?
        </p>
        <p className="italic text-[14px] text-black/50">
          The picture they view when they claim it, view it on the map and
          moree..
        </p>
      </div>
    </div>
  );
};

export default appearance;

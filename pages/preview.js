import React from "react";
import Menu from "../components/Menu";
import PreviewMap from "../components/PreviewMap";
import Link from "next/link";

const Preview = () => {
  return (
    <div className="mt-[18px] mx-[16px]">
      <div className="flex flex-row justify-between items-center mb-[20px]">
        <h5 className="text-[32px]">Preview</h5>
        <Menu />
      </div>
      <div className="flex flex-col">
        <p className="text-[24px] font-bold">Nandi Hills : Sunrise gem</p>
        <div className="flex flex-row">
          <img src="location.svg" alt="" />
          <p className="text-[16px]">Nandi Hills</p>
        </div>
        <PreviewMap />
        <div className="flex flex-row gap-[12px] p-[16px]">
          <img src="nft.svg" alt="" />
          <p className="w-[361px] text-[16px]">
            find this collectible around Nandi hills. it’s a hidden spot to
            enjoy a beautiful sunrise. Watch out for more sunrise hikes around
            Bangalore
          </p>
        </div>
        <Link href="landing">
          <button className="box-border w-[358px] h-[48px] inline-flex items-center justify-center rounded-[15px] bg-[#0FA958] px-[15px] leading-none focus:outline-none mt-[30px] border-black border-[2px]">
            Confirm
          </button>
        </Link>
        <button className="box-border w-[358px] h-[48px] inline-flex items-center justify-center rounded-[15px] px-[15px] leading-none focus:outline-none mt-[10px]">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Preview;

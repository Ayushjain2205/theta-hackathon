import React from "react";
import ProfileMap from "../components/ProfileMap";

const profile = () => {
  return (
    <div>
      <div className="mt-[18px] mx-[16px]">
        <div className="flex flex-row justify-between items-center mb-[20px]">
          <h5 className="text-[32px]">Your profile ...</h5>
          <div className="flex flex-row h-[48px] w-[48px] border-[2px] border-black rounded-full items-center justify-between">
            <img className="m-auto" src="menu.svg" alt="" />
          </div>
        </div>
        <div className="flex flex-row gap-[32px] px-[28px] py-[10px] pt-0">
          <div className="flex flex-col">
            <img src="profile.svg" alt="" />
          </div>
          <div className="flex flex-col">
            <p className="text-[24px] font-bold">John Doe</p>
            <p className="w-[182px] text-[14px]">
              I host travel collectibles. Find the most exciting locations for
              coffee all over the world.
            </p>
          </div>
        </div>
        <button className="box-border w-[358px] h-[48px] inline-flex items-center justify-center rounded-[15px] bg-[#0FA958] px-[15px] leading-none focus:outline-none mt-[10px] border-black border-[2px]">
          Join my community
        </button>
        <div className="flex flex-row justify-between mt-[20px]">
          <div className="flex flex-col ">
            <span className="text-[32px]">400</span>
            <span className="text-[16px] font-bold text-[#b4b4b4]">
              COMMUNITY
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[32px]">30</span>
            <span className="text-[16px] font-bold text-[#b4b4b4]">
              COLLECTIBLES
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[32px]">3k</span>
            <span className="text-[16px] font-bold text-[#b4b4b4]">
              EARNINGS
            </span>
          </div>
        </div>
      </div>
      <hr className="mt-[24px] h-[3px] bg-black opacity-40" />
      <div className="flex flex-row justify-around pt-[12px]">
        <img src="map.svg" alt="" />
        <img className="opacity-40" src="grid.svg" alt="" />
      </div>
      <div className="flex flex-row p-[16px]">
        <ProfileMap />
      </div>
    </div>
  );
};

export default profile;

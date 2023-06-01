import React, { useEffect } from "react";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import Link from "next/link";

export default function Home() {
  const address = useAddress();

  return (
    <div>
      {/* <div className="bg-[#F8D25A] h-screen w-screen">
        <div className="fixed bottom-0 px-[24px] py-[36px]">
          <img src="me.png" alt="" />
          <p className="text-[40px] font-bold text-[#1A64BC] leading-[48px]">
            COLLECTIBLES
          </p>
          <p className="text-[40px] text-[#1A64BC] leading-[48px]">BEING</p>
          <p className="text-[40px] font-bold text-[#1A64BC] leading-[48px]">
            COLLECTED
          </p>
          <p className="text-[40px] text-[#1A64BC] leading-[48px]"> BY</p>
          <p className="text-[40px] font-bold text-[#1A64BC] leading-[48px]">
            COLLECTORS
          </p>
        </div>
      </div> */}
      <div className="bg-[#A5CDFD] h-screen w-screen flex flex-col items-center justify-center">
        <p className="fixed left-[24px] top-[36px] text-[40px] text-[#EE7D79] font-bold leading-[48px]">
          BUILD A COMMUNITY.
        </p>
        <div className="flex flex-col gap-[20px]">
          <ConnectWallet />
          {address && (
            <Link href="landing">
              <button className="flex flex-row gap-[8px] justify-center items-center w-[184px] h-[48px] bg-black text-white rounded-[12px]">
                Let's go
              </button>
            </Link>
          )}
        </div>

        <div className="fixed bottom-0 left-[24px] py-[36px]">
          <img src="me.png" alt="" />
        </div>
      </div>
    </div>
  );
}

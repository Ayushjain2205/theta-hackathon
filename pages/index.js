import React, { useState, useEffect } from "react";
import { ConnectWallet } from "@thirdweb-dev/react";
import Link from "next/link";

export default function Home() {
  const [currentDiv, setCurrentDiv] = useState(3);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentDiv === 3) setCurrentDiv(1);
      else if (currentDiv === 1) setCurrentDiv(2);
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentDiv]);

  return (
    <div>
      {currentDiv === 3 && (
        <div
          id="3"
          className="bg-[#F8D25A] flex flex-col h-screen w-screen justify-center items-center"
        >
          <img src="loc8.svg" className="w-[190px] h-[178px]" alt="" />
          <div className="fixed bottom-[28px]">
            <p className="text-center text-[16px]">entropy labs</p>
          </div>
        </div>
      )}

      {currentDiv === 1 && (
        <div id="1" className="bg-[#F8D25A] h-screen w-screen">
          <div className="fixed bottom-0 px-[24px] py-[36px]">
            <img src="me.png" alt="" />
            <p className="text-[40px] font-bold text-[#1A64BC] leading-[48px]">
              collectibles
            </p>
            <p className="text-[40px] text-[#1A64BC] leading-[48px]">being</p>
            <p className="text-[40px] font-bold text-[#1A64BC] leading-[48px]">
              collected
            </p>
            <p className="text-[40px] text-[#1A64BC] leading-[48px]"> by</p>
            <p className="text-[40px] font-bold text-[#1A64BC] leading-[48px]">
              collectors
            </p>
          </div>
        </div>
      )}

      {currentDiv === 2 && (
        <div
          id="2"
          className="bg-[#A5CDFD] h-screen w-screen flex flex-col items-center justify-center"
        >
          <p className="fixed left-[24px] top-[36px] text-[40px] text-[#EE7D79] font-bold leading-[48px]">
            build a community.
          </p>
          <div className="flex flex-col gap-[20px]">
            <ConnectWallet />

            <Link href="landing">
              <button className="flex flex-row gap-[8px] justify-center items-center w-[184px] h-[48px] bg-black text-white rounded-[12px]">
                Let's go
              </button>
            </Link>
          </div>

          <div className="fixed bottom-0 left-[24px] py-[36px]">
            <img src="me.png" alt="" />
          </div>
        </div>
      )}
    </div>
  );
}

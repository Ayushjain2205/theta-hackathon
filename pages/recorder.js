import React, { useState, useEffect } from "react";
import Cameraview from "../components/Cameraview";
import Link from "next/link";

const Recorder = () => {
  const [showImage, setShowImage] = useState(false);

  return (
    <div>
      <div className="fixed z-50 bottom-[20px] flex flex-row items-center justify-center w-full">
        <Link href="/appearance">
          <button className="flex flex-row gap-[8px] justify-center items-center w-[148px] h-[48px] bg-black text-white rounded-[8px]">
            <img src="camera-white.svg" alt="" /> Take video
          </button>
        </Link>
      </div>
      <div style={{ zIndex: 0 }}>
        <Cameraview />
      </div>
    </div>
  );
};

export default Recorder;

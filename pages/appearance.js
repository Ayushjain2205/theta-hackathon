import React, { useRef, useState } from "react";
import Menu from "../components/Menu";
import Link from "next/link";

const Appearance = () => {
  const fileInputRef = useRef(null);

  const [showImage, setShowImage] = useState(false);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (event) => {
    const selectedFile = event.target.files[0];
    // Do something with the selected file
    console.log("Selected file:", selectedFile);
  };

  return (
    <div className="mt-[18px] mx-[16px]">
      <div className="flex flex-row justify-between items-center mb-[20px]">
        <div
          className="flex flex-row h-[48px] w-[48px] items-center justify-between"
          onClick={() => setShowImage(true)}
        >
          <img className="m-auto" src="arrow-left.svg" alt="" />
        </div>
        <Menu />
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
      <div className="flex flex-row gap-[14px] mt-[28px]">
        <div>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileInputChange}
            style={{ display: "none" }}
          />
          <button
            className="flex flex-row gap-[8px] justify-center items-center w-[148px] h-[48px] bg-black text-white rounded-[8px]"
            onClick={handleButtonClick}
          >
            <img src="upload.svg" alt="" />
            Upload
          </button>
        </div>
        <Link href="/recorder">
          <button className="flex flex-row gap-[8px] justify-center items-center w-[148px] h-[48px] bg-black text-white rounded-[8px]">
            <img src="camera-white.svg" alt="" /> Take video
          </button>
        </Link>
      </div>
      <div className="h-[279px] w-[358px] border-black rounded-[8px] border-[2px] mt-[16px]">
        {showImage && <img src="nandi.png" alt="" />}
      </div>
      <Link href="preview">
        <button className="box-border w-[358px] h-[48px] inline-flex items-center justify-center rounded-[15px] bg-[#0FA958] px-[15px] leading-none focus:outline-none mt-[30px] border-black border-[2px]">
          Next
        </button>
        <button className="box-border w-[358px] h-[48px] inline-flex items-center justify-center rounded-[15px] px-[15px] leading-none focus:outline-none mt-[10px]">
          Cancel
        </button>
      </Link>
    </div>
  );
};

export default Appearance;

import React, { useRef } from "react";
import Menu from "../components/Menu";

const appearance = () => {
  const fileInputRef = useRef(null);

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
        <div className="flex flex-row h-[48px] w-[48px] items-center justify-between">
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
        <button className="flex flex-row gap-[8px] justify-center items-center w-[148px] h-[48px] bg-black text-white rounded-[8px]">
          <img src="camera-white.svg" alt="" /> Take video
        </button>
      </div>
    </div>
  );
};

export default appearance;

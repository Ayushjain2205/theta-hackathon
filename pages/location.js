import React from "react";
import * as Form from "@radix-ui/react-form";
import MapWithSearchBox from "../components/SearchMap";
import Menu from "../components/Menu";
import Link from "next/link";

const location = () => {
  return (
    <div className="mt-[18px] mx-[16px]">
      <div className="flex flex-row justify-between items-center mb-[20px]">
        <div className="flex flex-row h-[48px] w-[48px] items-center justify-between">
          <img className="m-auto" src="arrow-left.svg" alt="" />
        </div>
        <Menu />
      </div>
      <Form.Root className="w-[260px]">
        <Form.Field className="grid mb-[4px]" name="type">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[16px] leading-[35px] text-black">
              Let&apos;s post it at a location
            </Form.Label>
          </div>
          <Form.Control asChild>
            <MapWithSearchBox />
          </Form.Control>
        </Form.Field>
        <p className="text-[16px] italic -mt-[5px] mb-[20px]">
          Rarity level: 90%
        </p>

        <Form.Submit asChild>
          <Link href="/appearance">
            <button className="box-border w-[358px] h-[48px] inline-flex items-center justify-center rounded-[15px] bg-[#0FA958] px-[15px] leading-none focus:outline-none mt-[10px] border-black border-[2px]">
              Next
            </button>
          </Link>
        </Form.Submit>
        <button className="box-border w-[358px] h-[48px] inline-flex items-center justify-center rounded-[15px] px-[15px] leading-none focus:outline-none mt-[10px]">
          Cancel
        </button>
      </Form.Root>
      <div></div>
    </div>
  );
};

export default location;

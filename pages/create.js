import React from "react";
import * as Form from "@radix-ui/react-form";
import Menu from "../components/Menu";
import Link from "next/link";

const Create = () => {
  return (
    <div className="mt-[18px] mx-[16px]">
      <div className="flex flex-row justify-between items-center mb-[20px]">
        <h5 className="text-[32px]">Create ...</h5>
        <Menu />
      </div>
      <Form.Root className="w-[260px]">
        <Form.Field className="grid mb-[24px]" name="type">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[16px] leading-[35px] text-black">
              What type of collectible is it?
            </Form.Label>
          </div>
          <Form.Control asChild>
            <input
              className="w-[358px] inline-flex h-[48px] appearance-none items-center justify-center px-[10px] text-[15px] leading-none text-black border-black border-[2px] focus:outline-none rounded-[8px]"
              type="text"
              required
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="grid mb-[24px]" name="type">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[16px] leading-[35px] text-black">
              Name of your collectible
            </Form.Label>
          </div>
          <Form.Control asChild>
            <input
              className="w-[358px] inline-flex h-[48px] appearance-none items-center justify-center px-[10px] text-[15px] leading-none text-black border-black border-[2px] focus:outline-none rounded-[8px]"
              type="text"
              required
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="grid mb-[24px]" name="question">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[16px] leading-[35px] text-black">
              Describe it for your collectors
            </Form.Label>
          </div>
          <Form.Control asChild>
            <textarea
              className="w-[358px] h-[120px] inline-flex appearance-none items-center justify-center p-[10px] text-[15px] leading-none text-black border-black border-[2px] focus:outline-none rounded-[8px]"
              required
            />
          </Form.Control>
        </Form.Field>
        <p className="italic text-[16px] w-[350px]">
          Imp : All collectibles will be claimed at $1. As the owner, you get to
          keep 50% for each collectible claimed.
        </p>
        <Form.Submit asChild>
          <Link href="location">
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

export default Create;

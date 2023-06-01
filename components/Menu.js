import Link from "next/link";
import React, { useState } from "react";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div
        className="flex flex-row h-[48px] w-[48px] border-[2px] border-black rounded-full items-center justify-between bg-white"
        onClick={toggleDropdown}
      >
        <img className="m-auto" src="menu.svg" alt="" />
      </div>
      {isOpen && (
        <div
          id="dropdown"
          className="z-10 absolute top-full right-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <Link href="/landing" className="block px-4 py-2 text-black">
                Explore
              </Link>
            </li>
            <li>
              <Link href="/create" className="block px-4 py-2 text-black">
                Create
              </Link>
            </li>
            <li>
              <Link href="/profile" className="block px-4 py-2 text-black">
                My profile
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menu;

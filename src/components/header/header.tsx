"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "lucide-react";
import { X } from "lucide-react";

import { AlignJustify } from "lucide-react";

const Header = () => {
  const links = [
    { lable: "Work", to: "" },
    { lable: "About", to: "" },
    { lable: "Contact", to: "" },
  ];
  const [isMenu, setIsMenu] = useState(false);
  const clickOutSide = () => {
    if (isMenu) {
      setIsMenu(false);
    }
  };
  console.log(isMenu);

  return (
    <header
      className={` text-normalText  flex  px-10 py-6 transition-all duration-500 ease-out justify-between box-border w-full bg-black h-[76px] md:h-[96px]  `}
    >
      <div className="font-bebasRegular text-2xl md:text-3xl  hover:text-normalTextHover transition-all duration-200 flex items-center">
        Hossein seyedi
      </div>
      <ul className="flex font-Manrope">
        {links.map((item) => {
          return (
            <li className="hidden sm:flex items-center  px-4 hover:text-normalTextHover transition-all duration-200">
              <Link to={item.to}>{item.lable}</Link>
            </li>
          );
        })}
        <div>
          <AlignJustify
            className="sm:hidden cursor-pointer "
            onClick={() => setIsMenu(!isMenu)}
          />
        </div>
      </ul>

      {isMenu && (
        <div
          className="transition-all duration-500 ease-out  absolute h-screen w-screen backdrop-blur-sm top-0 left-0 z-0"
          onClick={clickOutSide}
        ></div>
      )}
      <div
        className={`w-full p-8  absolute bg-articleBG h-[50vh] left-0 top-0 z-20  ${
          isMenu
            ? "translate-y-0 opacity-100 transition-opacity duration-500 ease-out"
            : "opacity-0 -translate-y-full  transition-opacity duration-500 ease-out"
        } `}
      >
        <div className="flex flex-col items-start">
          <div className="flex justify-end px-1 w-full">
            <span onClick={() => setIsMenu(!isMenu)}>
              <X />
            </span>
          </div>
          <ul className="text-white">
            {links.map((item) => {
              return (
                <li className=" px-4 py-3 hover:text-normalTextHover transition-all duration-200">
                  <Link to={item.to}>{item.lable}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div>social network </div>
      </div>
    </header>
  );
};

export default Header;
import React from "react";
import logo from "/public/images/logo/keystone-logo.png";
import Image from "next/image";
import Button from "../common/Button";
import GlobIcon from "../icons/glob";
import SearchIcon from "../icons/searchIcon";
import LoveIcon from "../icons/LoveIcon";
import CustomIcon from "../icons/CustomIcon";

const Navbar = () => {
  return (
    <div className="w-full md:w-[90%] mx-auto flex justify-between py-4">
      <div>
        <Image
          className="w-full h-auto"
          src={logo}
          width={100}
          height={100}
          alt="logo"
        />
      </div>
      <div>
        <div className="flex items-center  gap-2">
          <GlobIcon />
          <SearchIcon />
          <LoveIcon />
          <CustomIcon />

          <div>
            <Button text="Sign in" />
            <Button text="Register" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

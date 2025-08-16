import React from "react";
import logo from "../assets/images/logo.png";
import { IoMenu } from "react-icons/io5";
const NavBar = () => {
  return (
    <div className="container flex justify-between items-center  w-full mb-2 ">
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        <IoMenu className="text-2xl cursor-pointer" />
      </div>
    </div>
  );
};

export default NavBar;

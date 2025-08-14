import React from "react";
import logo from "../assets/images/logo.png";
import { IoMenu } from "react-icons/io5";
const NavBar = () => {
  return (
    <div className="container flex justify-between items-center border-2  w-full ">
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        <IoMenu />
      </div>
    </div>
  );
};

export default NavBar;

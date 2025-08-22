import React from "react";
import logo from "../assets/images/logo.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
const NavBar = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    // coming back to make it more interactive
    <div className="container flex justify-between items-center  w-full mb-2 relative ">
      <div className=" md:w-[30%]">
        <img src={logo} alt="" />
      </div>
      {/* MOBILE VIEW */}
      {menu && (
        <div
          className="flex  justify-between   flex-col absolute w-full top-16 left-0 pt-6 py-6 h-screen z-[1000] bg-[#FFFBF8] transform transition-all duration-300
      "
        >
          <div className="font-semibold   text-lg  flex flex-col  px-5 ">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `py-3  border-b border-b-gray-500  ${
                  isActive ? "text-[#F07100]" : "text-[#666666]"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `py-3  border-b border-b-gray-500  ${
                  isActive ? "text-[#F07100]" : "text-[#666666]"
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to={"/marketplace"}
              className={({ isActive }) =>
                `py-3  border-b border-b-gray-500  ${
                  isActive ? "text-[#F07100]" : "text-[#666666]"
                }`
              }
            >
              Marketplace
            </NavLink>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                `py-3  border-b border-b-gray-500  ${
                  isActive ? "text-[#F07100]" : "text-[#666666]"
                }`
              }
            >
              Contact Us
            </NavLink>
          </div>
          <NavLink to={"/signin"}>
            <div className="font-semibold deeporangebg text-white  rounded-md shadow-xl cursor-pointer transform transition duration-300 relative bottom-32 mx-5 text-center py-4 hover:scale-105  ">
              Sign In
            </div>
          </NavLink>
        </div>
      )}
      {/* DESKTOP VIEW */}

      <div
        className=" hidden  justify-between   flex-col absolute w-full top-20 left-0 pt-6 py-6 h-screen z-[1000] bg-[#FFFBF8] sm:flex sm:relative sm:top-0 sm:flex-row sm:bg-transparent sm:h-fit  sm:pt-0 sm:py-0 sm:w-fit  md:w-[90%] tablet:w-[80%]
      "
      >
        <div className="font-semibold   text-lg text-[#666666] flex flex-col  px-5 sm:text-base sm:gap-2 sm:flex-row sm:items-center md:gap-5 tablet:gap-8 tablet:text-lg lg:gap-12">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `py-3  border-b border-b-gray-500 sm:border-b-0 ${
                isActive ? "text-[#F07100]" : "text-[#666666]"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `py-3  border-b border-b-gray-500 sm:border-b-0 ${
                isActive ? "text-[#F07100]" : "text-[#666666]"
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to={"/marketplace"}
            className={({ isActive }) =>
              `py-3  border-b border-b-gray-500 sm:border-b-0 ${
                isActive ? "text-[#F07100]" : "text-[#666666]"
              }`
            }
          >
            Marketplace
          </NavLink>
          <NavLink
            to={"/contact"}
            className={({ isActive }) =>
              `py-3  border-b border-b-gray-500 sm:border-b-0 ${
                isActive ? "text-[#F07100]" : "text-[#666666]"
              }`
            }
          >
            Contact Us
          </NavLink>
        </div>

        <NavLink to={"/signin"}>
          <div className="font-semibold deeporangebg text-white  rounded-md shadow-xl cursor-pointer transform transition duration-300 relative bottom-32 mx-5 text-center py-4 hover:scale-105  sm:mx-0 sm:bottom-0 sm:px-4 sm:py-2 tablet:text-lg">
            Sign In
          </div>
        </NavLink>
      </div>

      <div className="sm:hidden" onClick={toggleMenu}>
        {menu === false ? (
          <IoMenu className="text-2xl cursor-pointer" />
        ) : (
          <IoIosClose className="text-4xl cursor-pointer" />
        )}
      </div>
    </div>
  );
};

export default NavBar;

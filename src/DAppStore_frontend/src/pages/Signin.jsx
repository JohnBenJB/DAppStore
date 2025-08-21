import React from "react";
import logo from "../assets/images/logo.svg";
import identity from "../assets/images/identity.svg";
import drops from "../assets/images/drops.svg";
import map from "../assets/images/map.svg";

const Signin = () => {
  return (
    <div className="container flex flex-col items-center  pb-10 bg-[#FFF7EF]">
      <div className="flex items-center gap-4 mb-6">
        <img src={logo} alt="logo" className="w-14" />
        <h1 className="text-[#333333] font-semibold text-xl md:text-2xl  ">
          DAppStore{" "}
        </h1>
      </div>
      <div className="bg-white flex flex-col items-center justify-center text-center px-6 pt-7 pb-8 rounded-lg shadow-lg md:w-full max-w-xl ">
        <h1 className="text-[#333333] font-semibold text-lg  mb-3  ">
          Ready to dive in?
        </h1>
        <p className="gray roboto text-sm max-w-sm">
          To fully experience DApps, you'll need an Internet identity. You can
          Sign in now
        </p>
        <div className="relative mb-24 sm:mt-4">
          <img src={map} alt="globe" className=" mt-14  sm:w-52" />
          <img
            src={drops}
            alt="drops"
            className="absolute top-10 right-6 h-10 sm:top-12 sm:right-8 sm:h-12"
          />
          <div
            className="bg-white flex  items-center  justify-center py-2 shadow-2xl rounded-lg gap-3 absolute px-3 top-2 -right-14 sm:px-4 sm:py-3 sm:-right-12"
            style={{ boxShadow: "0 0 12px rgba(0,0,0,0.25)" }}
          >
            <img src={identity} alt="identity" />
            <p className="text-xs">Identity</p>
          </div>
        </div>

        <div className="deeporangebg w-full font-semibold rounded-md  cursor-pointer text-white max-w-sm py-2 transition transform duration-300 hover:scale-110 mb-5  ">
          Sign In
        </div>
        <p className="text-sm font-semibold">
          Already have an account?{" "}
          <span className="lorange font-normal cursor-pointer">Login</span>
        </p>
      </div>
    </div>
  );
};

export default Signin;

import React from "react";
import rocket1 from "../assets/images/Vector.svg";
import phone from "../assets/images/DApp- Detail Page.svg";
import rocket2 from "../assets/images/Group 41.svg";
import game from "../assets/images/Group 42.svg";
import p1 from "../assets/images/P1.svg";
import p2 from "../assets/images/P2.svg";
import p3 from "../assets/images/P3.svg";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const MainContent = () => {
  return (
    // major responsiveness to still do
    <div className="container  ">
      <div className="specialcontainer pb-20 flex flex-col sm:flex-row sm:justify-between">
        <div className="  mt-4 flex-col items-center text-center w-full flex sm:text-left  sm:items-start sm:w-fit sm:pt-4 ">
          <div className="lightorange bg-[#FDF2E8] flex items-start justify-center p-2 rounded-lg text-sm max-w-xs m-auto mb-4 sm:justify-start sm:m-0 sm:text-xs  sm:bg-transparent sm:mb-4 sm:pl-0 tablet:text-sm">
            <img src={rocket1} alt="" className="mt-0.5 mr-3 sm:mt-0" />
            <p>Built on Internet Computer</p>
          </div>
          <h2 className="text-2xl font-semibold mb-4 md:text-3xl tablet:text-4xl">
            Discover the <span className="lorange">Future</span> of DApps
          </h2>
          <p className="roboto gray max-w-lg  text-base m-auto mb-6 sm:m-0 sm:max-w-xs sm:mt-2 sm:mb-10  md:max-w-md tablet:max-w-lg">
            Your gateway to decentralized applications on the Internet Computer
            all in one sleek marketplace. Explore, submit, and use dApps easily,
            anytime.
          </p>

          <div className="flex flex-col items-center justify-center sm:flex-row sm:gap-2 ">
            <Link to={"/marketplace"}>
              <div className="deeporangebg rounded-2xl border-2 border-transparent px-5 py-3 w-fit flex justify-center items-center text-white text-lg gap-4 font-semibold mb-5  cursor-pointer transform transition duration-300  hover:scale-110 shadow-lg sm:px-3 sm:gap-2 sm:mb-0 sm:rounded-xl sm:text-base md:px-5 ">
                Explore DApps <FaArrowRight className="text-xl " />
              </div>
            </Link>
            <div className="lorange border-b-2 font-semibold border-red-300 text-lg cursor-pointer sm:lorange sm:border-2 sm:border-[#F07100] sm:w-fit sm:py-3 sm:rounded-xl sm:px-3 sm:shadow-lg sm:text-base md:px-5 ">
              Add your DApp +
            </div>
          </div>
        </div>
        <div
          className=" relative shadowbg pt-10 flex justify-center items-center flex-col sm:pt-0 
        md:border "
        >
          {/* bg-[#FFAA00] blur-[120px] */}
          <div className=" w-48 relative flex flex-col gap-2  sm:w-52 md:w-60">
            <img src={phone} alt="" className="w-full" />
            {/* floating objects */}
            <div className=" border py-1 px-3 text-[0.6rem]  rounded-lg absolute top-24 right-28 bg-white w-36 sm:top-28 md:right-36 md:top-32 md:py-2 ">
              <div className="relative flex items-center gap-3 z-20 ">
                <img src={rocket2} alt="" className="w-10" />
                <p className="max-w-28">Launch your DApps</p>
                <img
                  src={p1}
                  alt=""
                  className="absolute  -top-1 -z-20 -left-3"
                />
                <img
                  src={p2}
                  alt=""
                  className="absolute -bottom-1 left-20 -z-20"
                />
                <img src={p3} alt="" className="absolute -right-3 -top-1 " />
              </div>
            </div>
            <div className=" border py-1 px-3 text-[0.6rem]  rounded-lg absolute bg-white w-36 bottom-32 left-28 sm:left-20 md:left-32 md:py-2 z-20">
              <div className="flex items-center gap-3 relative ">
                <img src={game} alt="" className="w-8" />
                <p className="max-w-28">Access to DApps Games</p>
                <img
                  src={p1}
                  alt=""
                  className="  absolute -top-1 -left-3 -z-20"
                />
                <img
                  src={p2}
                  alt=""
                  className="absolute -bottom-1 left-20 -z-20"
                />
                <img src={p3} alt="" className="absolute -right-3 -top-1 " />
              </div>
            </div>
          </div>

          <div className=" top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border absolute h-40 w-full border-red-400 -z-10 rounded-full bg-[#FFAA00] blur-[197px] sm:blur-[100px]"></div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;

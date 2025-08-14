import React from "react";
import rocket1 from "../assets/images/Vector.png";
import phone from "../assets/images/DApp- Detail Page.png";
import { FaArrowRight } from "react-icons/fa";
const MainContent = () => {
  return (
    <div className="container ">
      <div className="flex-col items-center text-center w-full flex ">
        <div className="lightorange flex items-start justify-center p-2 rounded-lg text-sm max-w-xs m-auto mb-4">
          <img src={rocket1} alt="" className="mt-0.5 mr-3" />
          <p>Built on Internet Computer</p>
        </div>
        <h2 className="text-2xl font-semibold mb-4">
          Discover the <span className="lorange">Future</span> of DApps
        </h2>
        <p className="roboto gray max-w-lg  text-lg m-auto mb-6">
          Your gateway to decentralized applications on the Internet Computer
          all in one sleek marketplace. Explore, submit, and use dApps easily,
          anytime.
        </p>

        <div className="bttns flex flex-col items-center justify-center  ">
          <div className="deeporangebg rounded-2xl px-5 py-3 w-fit flex justify-center items-center text-white text-lg gap-4 font-semibold mb-5 ">
            Explore DApps <FaArrowRight className="text-xl " />
          </div>
          <div className="lorange border-b-2 font-semibold border-red-300 text-lg">
            Add your DApp +
          </div>
        </div>
      </div>
      <div className="pt-10 flex justify-center">
        <div className="border-2">
          <img src={phone} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MainContent;

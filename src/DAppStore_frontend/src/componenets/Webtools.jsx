import React from "react";
import search from "../assets/images/Group 27.png";
import rocket from "../assets/images/Frame 1707479994.png";
import div from "../assets/images/Group 53.png";

const Webtools = () => {
  return (
    <div className="container border-2 text-center flex flex-col gap-8 pb-20">
      <div className="font-semibold text-lg ">
        <p>All Your Favourite Web3 Tools in</p>
        <p className="lorange">One Place</p>
      </div>
      {/* three tools */}
      <div className="flex flex-col gap-3">
        <div className="border-2 rounded-xl py-8 px-10 flex flex-col items-center ">
          <img src={search} alt="" className="mb-4" />
          <h3 className="font-semibold text-lg mb-3">Discover</h3>
          <p className="roboto gray">
            Browse top decentralized applications by category
          </p>
        </div>
        <div className="border-2 rounded-xl py-8 px-10 flex flex-col items-center">
          <img src={rocket} alt="" className="mb-4" />
          <h3 className="font-semibold text-lg mb-3">Launch</h3>
          <p className="roboto  gray">
            Use dApps instantly via embedded mobile browser or on web
          </p>
        </div>
        <div className="border-2 rounded-xl py-8 px-10 flex flex-col items-center">
          <img src={div} alt="" className="mb-4" />
          <h3 className="font-semibold text-lg mb-3">Build</h3>
          <p className="roboto  gray">
            Submit your dApp to reach global ICP users
          </p>
        </div>
      </div>
    </div>
  );
};

export default Webtools;

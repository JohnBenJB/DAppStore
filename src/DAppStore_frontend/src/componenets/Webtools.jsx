import React from "react";
import search from "../assets/images/Group 27.png";
import rocket from "../assets/images/Frame 1707479994.png";
import div from "../assets/images/Group 53.png";

const Webtools = () => {
  const tools = [
    {
      image: search,
      title: "Discover",
      about: " Browse top decentralized applications by category",
    },
    {
      image: rocket,
      title: "Launch",
      about: " Use dApps instantly via embedded mobile browser or on web",
    },
    {
      image: div,
      title: "Build",
      about: " Submit your dApp to reach global ICP users",
    },
  ];
  return (
    // coming back to chnage resolution
    <div className="container border-2 text-center flex flex-col gap-8 pb-20">
      <div className="font-semibold text-lg ">
        <p>All Your Favourite Web3 Tools in</p>
        <p className="lorange">One Place</p>
      </div>
      {/* three tools */}
      <div className="flex flex-col gap-8">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="border-2 rounded-xl py-8 px-10 flex flex-col items-center shadow-lg"
          >
            <img src={tool.image} alt="" className="mb-4" />
            <h3 className="font-semibold text-lg mb-3">{tool.title}</h3>
            <p className="roboto gray">{tool.about}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Webtools;

import React from "react";
import homescreen from "../assets/images/Home Screen.svg";
import detail from "../assets/images/DApp- Detail Page (2).svg";
import detail4 from "../assets/images/Empty State- Create Dapp 4 (2).svg";

const Features = () => {
  const Features = [
    {
      name: "Search & Filter: Quickly find DApps by name or category.",
      image: homescreen,
    },
    {
      name: "Mobile-Friendly: Open any dApp inside DAppStore",
      image: detail,
    },
  ];
  return (
    // would remove the deep orange bg for desktop view ,,, a lot of differences here
    <div>
      <div className="container deeporangebg rounded-tl-xl rounded-tr-xl text-white">
        <div className="deeporangebg">
          <h3 className="text-lg font-semibold mb-8">Features</h3>
          <div className="flex">
            {Features.map((feature, index) => (
              <div
                key={index}
                className=" flex flex-col justify-between text-center"
              >
                <p className="text-[10px] ">{feature.name}</p>
                <img src={feature.image} alt="" className="h-4/5 " />
              </div>
            ))}
          </div>
          <div
            className="
          border-t border-t-white flex flex-col pt-6 items-center justify-center"
          >
            <p className="text-[10px] text-center max-w-40 ">
              Quick Submission: Easy dApp onboarding for developers.
            </p>
            <img src={detail4} alt="" className="h-44 " />
          </div>
        </div>
      </div>
      <div className="container  text-center ">
        <h3 className="font-semibold text-lg mt-10 mb-4">
          Your Gateway to the <span className="lorange">Decentralized</span>{" "}
          Future.
        </h3>
        <p className="gray roboto text-base mb-6">
          Start exploring the world of Web3 applications today. Whether you're a
          user or developer, your journey into the decentralized future begins
          here.
        </p>
        <div className=" w-fit m-auto deeporangebg text-white cursor-pointer py-3 px-7 rounded-lg font-semibold mb-16 ">
          Explore DApps
        </div>
      </div>
    </div>
  );
};

export default Features;

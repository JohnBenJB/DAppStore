import React from "react";
import homescreen from "../assets/images/Home Screen.svg";
import detail from "../assets/images/DApp- Detail Page (2).svg";
import detail4 from "../assets/images/Empty State- Create Dapp 4 (2).svg";

const Features = () => {
  const Features = [
    {
      name: "Search & Filter: Quickly find DApps by name or category.",
      id: 0,
      image: homescreen,
    },
    {
      name: "Mobile-Friendly: Open any dApp inside DAppStore",
      id: 1,
      image: detail,
    },
  ];
  return (
    // MAJOR WORK ON FEATURES DIV
    <div className="sm:border sm:px-[60px]">
      <div className=" deeporangebg rounded-tl-xl rounded-tr-xl text-white px-[24px] pt-[24px] sm:flex sm:flex-col  sm:rounded-xl">
        <h3 className="text-lg font-semibold mb-8 sm:text-xl">Features</h3>

        <div className="flex flex-col sm:flex-row">
          <div className="deeporangebg flex gap-2 justify-between">
            {Features.map((feature) => (
              <div
                key={feature.id}
                className=" flex flex-col justify-between text-center sm:text-left "
              >
                <p className="text-[10px]  max-w-60 m-auto sm:text-xs sm:pl-4 ">
                  {feature.name}
                </p>
                <img
                  src={feature.image}
                  alt=""
                  className={`h-4/5 ${
                    feature.id === 1 ? "w-64 " : ""
                  } sm:w-96 sm:h-52`}
                />
              </div>
            ))}
          </div>
          <div className=" px-[24px]  flex flex-col pt-6 items-center justify-center sm:px-0 sm:pt-0 sm:justify-between sm:gap-5 ">
            <p className="text-[10px] text-center max-w-40 sm:pt-1 ">
              Quick Submission: Easy dApp onboarding for developers.
            </p>
            <img src={detail4} alt="" className="h-1/2 sm:h-48 sm:w-96" />
          </div>
        </div>
      </div>

      <div className="container text-center ">
        <h3 className="font-semibold text-lg mt-10 mb-4 md:text-xl">
          Your Gateway to the <span className="lorange">Decentralized</span>{" "}
          Future.
        </h3>
        <p className="gray roboto text-base mb-6 md:max-w-2xl md:m-auto md:mb-8 md:text-lg">
          Start exploring the world of Web3 applications today. Whether you're a
          user or developer, your journey into the decentralized future begins
          here.
        </p>
        <div className=" w-fit m-auto deeporangebg text-white cursor-pointer py-3 px-7 rounded-lg font-semibold mb-16 transition transform hover:scale-110 shadow-lg md:text-lg">
          Explore DApps
        </div>
      </div>
    </div>
  );
};

export default Features;

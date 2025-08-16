import React from "react";

import WalletLinking from "../assets/images/Wallet Linking.svg";
import DAppDetail from "../assets/images/DApp- Detail Page.svg";
import EmptyState from "../assets/images/Empty State- Create Dapp 4.svg";

const Howworks = () => {
  const tools = [
    {
      title: "/01",
      image: WalletLinking,
      span: "Sign in",
      heading: "with Internet Identity",
      little:
        "Internet Identity is a decentralized login service built on ICP. It's your digital fingerprint, allowing you to create a secure account for DAppStore with a simple device-based login.",
    },
    {
      title: "/02",
      image: DAppDetail,
      span: "Browse & launch",
      heading: "DApps directly from your device.",
      little:
        "Discover and launch a wide range of decentralized applications with the DAppStore mobile app. Your gateway to the open internet, right from your pocket.",
    },
    {
      title: "/03",
      image: EmptyState,
      span: "Developers: ",
      heading: "Submit your DApp in a few clicks.",
      little:
        "Get your decentralized application discovered by a global community. Our streamlined submission process makes it simple to publish your dApp and connect with users in minutes.",
    },
  ];
  return (
    <div className="container flex flex-col items-center pb-24 ">
      <div>
        <p className="font-semibold text-lg mb-14">
          How <span className="lorange">DAppStore</span> Works
        </p>
      </div>
      <div>
        <div className="flex flex-col gap-36">
          {tools.map((tool, index) => (
            <div key={index}>
              <div>
                <h3 className="lorange font-semibold text-2xl mb-3">
                  {tool.title}
                </h3>
                <p className="font-bold mb-3 text-lg">
                  <span className="lorange ">{tool.span}</span> {tool.heading}
                </p>
                <p className="gray roboto text-base mb-2">{tool.little}</p>
                <div className="mt-4 lorange border-2 border-[#F07100] w-fit py-3 px-6 rounded-xl cursor-pointer mb-5 transform transition duration-300 shadow-lg hover:scale-110 ">
                  Learn more
                </div>
              </div>
              <div className=" relative h-2/5 mt-10 z-50 ">
                <img src={tool.image} alt="" className="m-auto z-50" />
                <div className="deeporangebg h-48 rounded-3xl w-3/4 absolute top-32 left-1/2 -translate-x-1/2 -z-40 "></div>
              </div>
            </div>
          ))}
        </div>

        <img alt="" />
      </div>
    </div>
  );
};

export default Howworks;

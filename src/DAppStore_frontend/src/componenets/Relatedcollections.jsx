import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Relatedcollections = () => {
  const btns = [
    {
      btn: "Defi Dapps",
      id: 0,
    },
    {
      btn: "NFT Dapps",
      id: 1,
    },
    {
      btn: "Web3 Socials Dapps",
      id: 2,
    },
  ];
  return (
    <div>
      <div className="container flex flex-col justify-center items-center text-center pb-5 sm:pb-14">
        <h1 className="text-[#333333] font-semibold mb-3 sm:mt-4">
          Related Collections
        </h1>
        <p className="roboto gray mb-6">
          Discover web3 applications from categories similar to Decentralized
          Games.
        </p>

        <div className="flex flex-col gap-4 w-full mb-4 mini:grid max-w-3xl mini:grid-cols-3 mini:gap-3 text-sm md:gap-6">
          {btns.map((btn) => (
            <div
              key={btn.id}
              className="flex text-[#333333] items-center justify-center gap-2 rounded-md border  px-4 py-2 cursor-pointer transition transform duration-300 hover:scale-110 shadow-lg mini:px-2 md:py-3"
            >
              <p>{btn.btn}</p>
              <FaArrowRightLong />
            </div>
          ))}
        </div>
      </div>
      <div className="container deeporangebg flex flex-col text-center items-center pb-14 ">
        <h1 className="text-white font-semibold ">
          Your DApp deserves a home.
        </h1>
        <p className="roboto text-white font-light mt-4 max-w-lg text-sm mb-3">
          Get your project featured on a Web3 discovery hub. From DeFi to
          gaming, our community is searching for the next big thing—submit your
          dApp today.
        </p>

        <div className="lorange bg-white rounded-md w-full py-2 font-semibold  max-w-xs mt-4 sm:mb-8">
          <img src="" alt="" />
          <p>Launch Now</p>
        </div>
      </div>
    </div>
  );
};

export default Relatedcollections;

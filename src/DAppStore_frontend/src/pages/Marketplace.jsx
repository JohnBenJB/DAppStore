import React from "react";
import NavBar from "../componenets/NavBar";
import Relatedcollections from "../componenets/Relatedcollections";
import Footer from "../componenets/Footer";
import { IoIosArrowForward } from "react-icons/io";
import Lists from "../componenets/Lists";
import search from "../assets/images/search.svg";
import filter from "../assets/images/filter.svg";
import arrdown from "../assets/images/arrdown.svg";
import arrleft from "../assets/images/arrleft.svg";
import arrright from "../assets/images/arrright.svg";

const Marketplace = () => {
  return (
    <div>
      <NavBar />
      <div className="container bg-[#FF973C] text-white pb-6 relative z-50">
        <div
          className="text-[10px] flex  gap-3 mb-4 items-center
        "
        >
          <p>DAppstore</p>
          <IoIosArrowForward />
          <p>Decentralized Games</p>
        </div>
        <h1 className="font-semibold text-2xl ">Decentralized Games</h1>
      </div>

      <div className="container">
        <div className="flex  items-center font-semibold gap-8 text-sm mb-12">
          <p className="border-b-2 lorange border-b-[#F07100]">Games</p>
          <p className="border-b-2 border-b-transparent text-[#666666] hover:border-b-[#F07100] hover:text-[#F07100] cursor-pointer transform transition duration-200">
            NFTs
          </p>
          <p className="border-b-2 border-b-transparent text-[#666666] hover:border-b-[#F07100] hover:text-[#F07100] cursor-pointer transform transition duration-200">
            DeFi
          </p>
          <p className="border-b-2 border-b-transparent text-[#666666] hover:border-b-[#F07100] hover:text-[#F07100] cursor-pointer transform transition duration-200">
            Socials
          </p>
        </div>
        <div
          className=" mt-4 flex flex-col gap-10 sm:flex-row sm:justify-between pb-8 sm:pb-14
      "
        >
          <div>
            <h1 className="font-semibold text-[#333333] text-lg mb-3 sm:text-xl">
              List of 105 Decentralized Games
            </h1>
            <p className="roboto gray text-sm max-w-md tablet:max-w-lg">
              Browse 105 of the best dApps in web3 gaming, curated from leading
              platforms like Ethereum, Solana, and others. Whether you're a
              builder, a competitor, or a collector, find your perfect game with
              popular titles like Sorare, Planet IX, The Sandbox, Axie Infinity,
              and Illuvium.
            </p>
          </div>
          <div className="rounded-lg bg-white text-center flex flex-col items-center shadow-xl py-8 px-2 gap-8 sm:px-5 sm:py-10 sm:h-fit ">
            <h1 className="font-semibold text-[#333333] max-w-xs">
              Launch your first Web3 Game on DappStore
            </h1>
            <div className="deeporangebg text-white w-fit py-2 font-semibold px-20 cursor-pointer transition transform duration-300 hover:scale-110 rounded-lg  sm:px-14">
              Launch Now
            </div>
          </div>
        </div>
      </div>

      {/* special scenario */}
      <div className="container sm:flex sm:gap-4 sm:justify-between mb-20">
        <div className="hidden filter h-fit border border-[#E6E2E2] shadow-md md:flex flex-col mt-40 py-4 w-[35%] px-4 rounded-xl tablet:w-[28%] tablet:mt-20 tablet:pb-14 xl:w-[25%]">
          <p className="border-b border-b-[#DDDDDDS]text-[#333333] mt-8  pb-2 mb-5 tablet:mt-10 ">
            Filter
          </p>
          <div className="text-sm flex justify-between items-center border py-2 px-2 border-[#333333] text-[#333333] rounded-md mb-4">
            All Categories
            <img src={arrdown} alt="" className="cursor-pointer" />
          </div>
          <div className="text-sm flex justify-between items-center border py-2 px-2 border-[#333333] text-[#333333] rounded-md mb-4">
            Explore By Chain
            <img src={arrdown} alt="" className="cursor-pointer" />
          </div>
        </div>
        <div className=" md:w-[60%]  tablet:w-[68%] xl:w-[71%]">
          {/* desktop search */}
          <div className="hidden md:flex md:flex-col justify-between gap-2 tablet:flex-row  ">
            <div className="flex gap-2 border border-[#666666] py-3 px-4 rounded-xl mb-4 tablet:w-[63%] tablet:mb-0  ">
              <img src={search} alt="" className="w-5" />
              <input
                type="text"
                placeholder="Search for dapp"
                className="bg-transparent placeholder:text-[#666666] "
              />
            </div>
            <div
              className="flex items-center gap-3 text-sm md:gap-6 
             tablet:gap-3 "
            >
              <p className="roboto gray">Show</p>
              <div className="flex text-[#333333] border border-[#666666] rounded-lg py-3 px-2 w-28 justify-between gap-6">
                1-50
                <img src={arrdown} alt="" />
              </div>
              <p className="roboto gray">Of 150 results</p>
            </div>
          </div>
          {/* mobile search */}
          <div className="mb-8 md:hidden">
            <div className="flex justify-between w-full gap-4 mb-6">
              <div className="flex gap-2 border border-[#666666] py-3 px-2 rounded-lg w-[67%] ">
                <img src={search} alt="" className="w-22" />
                <input
                  type="text"
                  placeholder="Search for dapp"
                  className="bg-transparent placeholder:text-[#666666] "
                />
              </div>
              <div className="border-[#666666] border flex items-center justify-center w-[28%] gap-3 px-4 py-3 text-[#666666] rounded-lg ">
                <img src={filter} alt="" />
                <p className="font-semibold">Filter</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm  ">
              <p className="roboto gray">Show</p>
              <div className="flex text-[#333333] border border-[#666666] rounded-lg py-3 px-3 gap-6">
                1-50
                <img src={arrdown} alt="" />
              </div>
              <p className="roboto gray">Of 150 results</p>
            </div>
          </div>

          {/* contains the lists stuff */}
          <Lists />
          <div className=" mt-10 flex justify-center items-center gap-6 text-xs text-[#666666] font-semibold">
            <img src={arrleft} alt="" className="cursor-pointer" />
            <p className=" text-black cursor-pointer">1</p>
            <p className="cursor-pointer">2</p>
            <p className="cursor-pointer">3</p>
            <img src={arrright} alt="" className="cursor-pointer" />
          </div>
        </div>
      </div>
      <Relatedcollections />
      <Footer />
    </div>
  );
};

export default Marketplace;

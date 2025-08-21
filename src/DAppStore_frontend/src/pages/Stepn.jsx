import React from "react";
import NavBar from "../componenets/NavBar";
import { IoIosArrowForward } from "react-icons/io";
import shoe from "../assets/images/shoe.svg";
import container from "../assets/images/Container.svg";
import slantarrow from "../assets/images/slantarrow.svg";
import alien from "../assets/images/alien.svg";
import diamond from "../assets/images/Ethereum.svg fill.svg";
import wolf from "../assets/images/sorare.svg";
import infinity from "../assets/images/Polygon.svg fill.svg";
import miniroyals from "../assets/images/miniroyals.svg";
import greater from "../assets/images/greater.svg";
import greater2 from "../assets/images/whitegreater.svg";
import Footer from "../componenets/Footer";
const Stepn = () => {
  const alternatives = [
    {
      id: 0,
      img1: alien,
      name: "Alien Worlds",
      web: "Web3 Games",
      content:
        "Alien Worlds is a Community-Built Metaverse where Explorers can play and build together to collect NFTs and compete for Trilium.",
      img2: diamond,
      img3: 4,
    },
    {
      id: 1,
      img1: wolf,
      name: "Wombat",
      web: "Web3 Games",
      content:
        "Wombat is your home for NFT-Gaming. Become part of the gaming revolution",
      img2: diamond,
      img3: infinity,
    },
    {
      id: 2,
      img1: miniroyals,
      name: "Mini Royals: Nations",
      web: "Web3 Games",
      content:
        "Mini Royale: Nations is a free-to-play browser-based IO shooting FPS social strategy game.",
      img2: container,
    },
  ];

  return (
    <div>
      <NavBar />
      <div className="container bg-[#FF973C] text-white pb-6">
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

      <div className="container flex flex-wrap gap-3 text-sm  items-center mt-4 pb-6">
        <p className="lorange ">Games</p>
        <IoIosArrowForward />
        <p className="lorange ">Decentralized Games</p>
        <IoIosArrowForward />
        <p className="lorange ">Web3 Games</p>
        <IoIosArrowForward />
        <p>STEPN</p>
      </div>
      {/* second */}
      <div className="container flex flex-col gap-8 sm:flex-row sm:justify-between sm:items-center">
        <div className="flex flex-col sm:flex-row sm:gap-3 ">
          <div className="flex gap-2 items-center mb-5 sm:w-fit ">
            <img
              src={shoe}
              alt=""
              className="rounded-full w-16  sm:w-32 sm:rounded-none "
            />
            <p className="flex flex-col gap-2 text-[#333333] font-semibold text-3xl sm:hidden">
              <span className="text-xs bg-[#FDF2E8] lorange px-2 py-1 font-normal">
                Web3 Games
              </span>{" "}
              STEPN
            </p>
          </div>
          <div>
            <h1 className="hidden text-[#333333] font-semibold text-xl sm:mb-2 sm:block ">
              STEPN
            </h1>
            <p className="gray roboto text-sm  mb-4 sm:max-w-72 sm:mb-2 md:max-w-xs tablet:max-w-md">
              STEPN is a web3 lifestyle app that rewards users for movement ·
              users equipped with STEPN nfts can earn by walking, jogging.
            </p>
            <div className="flex gap-2 items-center text-sm">
              <p className="gray roboto">
                <span className="font-semibold text-[#333333]">Developer:</span>{" "}
                Amarachi Benson
              </p>
              <img src={container} alt="" className="" />
            </div>
          </div>
        </div>
        <div className="roboto deeporangebg text-white w-fit py-3 px-10 rounded-lg flex gap-2 items-center cursor-pointer transition transform duration-300 hover:scale-110 sm:px-6 sm:gap-1 md:gap-3 tablet:px-10 ">
          view site
          <img src={slantarrow} alt="" />
        </div>
      </div>
      {/* end */}

      {/* third */}
      <div
        className="container mt-4 flex flex-col gap-10 sm:flex-row sm:justify-between pb-8 sm:pb-14
      "
      >
        <div>
          <h1 className="font-semibold text-[#333333] text-lg mb-3 sm:text-xl">
            What is STEPN?
          </h1>
          <p className="roboto gray text-sm max-w-md tablet:max-w-lg">
            STEPN, the world’s first move-to-earn game, was launched in late
            2021 by FindSatoshi Lab. Running on Ethereum’s biggest competitor
            Solana, STEPN has low gas fees and carbon footprint. Players can try
            the game mechanics for free, but to start earning native tokens GST
            and GMT, one must buy NFT sneakers with varying stats determining
            their value. The more one moves, the more they earn. Sneakers can
            also be traded on NFT marketplaces.
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
      {/* end */}

      <div className="container flex flex-col items-center pb-20 border  ">
        <h1 className="font-semibold text-[#333333] mb-4 text-lg md:text-xl">
          STEPN Alternatives
        </h1>
        <p className="gray roboto text-center mb-8">
          Explore web3 competitors and apps like STEPN.
        </p>
        <div className="flex flex-col gap-6 sm:grid sm:grid-cols-2 tablet:grid-cols-3">
          {alternatives.map((alternative) => (
            <div
              key={alternative.id}
              className={`border-2 border-[#CBCBCB] rounded-lg p-4 ${
                alternative.id === 2
                  ? "sm:col-span-2 sm:justify-self-center tablet:col-span-1"
                  : ""
              }`}
            >
              <div className="flex items-center gap-4 mb-5 h-16">
                <img src={alternative.img1} alt="" />
                <h1 className="font-semibold text-[#333333] text-xl">
                  {alternative.name}
                </h1>
              </div>
              <div className="text-xs bg-[#FDF2E8] w-fit rounded-lg lorange px-2 py-1 font-normal mb-3">
                {alternative.web}
              </div>

              <p className="gray roboto text-sm max-w-sm mb-4 h-20 ">
                {alternative.content}{" "}
              </p>

              <div className="flex items-center gap-2">
                <img src={alternative.img2} alt="" />
                <img src={alternative.img3} alt="" />
              </div>
            </div>
          ))}
        </div>
        <div className="lorange cursor-pointer border mt-14 py-3 px-8 rounded-lg border-[#F07100] transition transform duration-300 hover:scale-110 flex items-center gap-3 ">
          View Alternatives
          <img src={greater} alt="" />
        </div>
      </div>

      <div className="container bg-[#FFE9D7] flex flex-col items-center text-center pb-14 mb-20">
        <h1 className="text-[#333333] font-semibold mt-5 text-lg mb-4 ">
          Best Web3 Games
        </h1>
        <p className="gray roboto mb-8">
          Discover more web3 applications and developer tools.
        </p>
        <div className="deeporangebg text-white cursor-pointer border py-3 px-8 rounded-lg border-[#F07100] transition transform duration-300 hover:scale-110 flex items-center gap-3 ">
          See All DApps
          <img src={greater2} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Stepn;

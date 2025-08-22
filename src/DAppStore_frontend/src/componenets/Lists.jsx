import React from "react";
import alien from "../assets/images/alien.svg";
import diamond from "../assets/images/Ethereum.svg fill.svg";
import wolf from "../assets/images/sorare.svg";
import infinity from "../assets/images/Polygon.svg fill.svg";
import miniroyals from "../assets/images/miniroyals.svg";
import shoe from "../assets/images/shoe.svg";
import container from "../assets/images/Container.svg";
import ball from "../assets/images/ball.svg";
import defi from "../assets/images/defi.svg";
import axie from "../assets/images/axie.svg";
import skull from "../assets/images/skull.svg";
import slint from "../assets/images/slint.svg";
import cave from "../assets/images/cave.svg";
import tombala from "../assets/images/tombala.svg";
import cronos from "../assets/images/Cronos.svg fill.svg";
import dust from "../assets/images/dust.svg";
import fara from "../assets/images/fara.svg";
import { Link, Links } from "react-router-dom";

const Lists = () => {
  const dapps = [
    {
      id: 0,
      img1: shoe,
      name: "STEPN",
      lil1: "Web3 Games",
      lil2: "",
      path: "/stepn",
      content:
        "STEPN is a web3 lifestyle app that rewards users for movement · users equipped with STEPN nfts can earn by walking, jogging",
      img2: container,
      img3: 4,
    },
    {
      id: 1,
      img1: ball,
      name: "Sorare",
      lil1: "Free Customers",
      lil2: "Web3 Games",
      content:
        "Sorare helps you experience fantasy sports through a virtual game.",
      img2: diamond,
    },
    {
      id: 2,
      speciial: true,
      btn: "Get Started",
      title: "Build anything onchain with DAppStore.",
    },
    {
      id: 3,
      img1: defi,
      name: "DeFi Land",
      lil1: "Web3 Games",
      lil2: "",
      content:
        "mission controlFarm, build and refine NFT resources ; netempireTrade land and explore the planet ; marketplaceBuy",
      img2: diamond,
    },
    {
      id: 4,
      img1: defi,
      name: "DeFi Land",
      lil1: "Web3 Games",
      lil2: "",
      content:
        "DeFi Land is a multi-chain agriculture-simulation game created to gamify Decentralized Finance.",
      img2: container,
    },
    {
      id: 5,
      img1: axie,
      name: "Axie Infinity",
      lil1: "Free Customers",
      lil2: "Web3 Games",
      content:
        "Axie Infinity is a virtual world filled with cute, formidable creatures known as Axies. Axies can be battled, collected",
    },
    {
      id: 6,
      img1: fara,
      name: "Faraland",
      lil1: "Web3 Games",
      lil2: "",
      content:
        "FaraLand (FARA) is a play-to-earn multiplayer game based on the Binance Smart Chain (BSC).  ",
      img2: diamond,
    },
    {
      id: 7,
      img1: alien,
      name: "Alien Worlds",
      lil1: "Web3 Games",
      lil2: "",
      content:
        "Alien Worlds is a Community-Built Metaverse where Explorers can play and build together to collect NFTs and compete for Trilium.",
      img2: diamond,
    },
    {
      id: 8,
      img1: dust,
      name: "Dustland Runner",
      lil1: "Web3 Games",
      lil2: "",
      content:
        "Dustland Runner is an exhilarating audio adventure game designed to motivate you to stay active every day.",
      img2: infinity,
    },
    {
      id: 9,
      img1: slint,
      name: "Splinterlands",
      lil1: "Web3 Games",
      lil2: "",
      content:
        "Splinterlands is the next generation of collectible card games. It allows players to collect, trade, and battle with provably scarce digital collectibles with",
      img2: diamond,
    },
    {
      id: 10,
      img1: skull,
      name: "CroSkull NFT",
      lil1: "Web3 Games",
      lil2: "",
      content:
        "Explore CroSkull's Underworld with CroSkulls, Pets and EvoSkulls. Earn Grave, Souls or RUDE by sending you Skulls in Adventure.",
      img2: cronos,
    },
    {
      id: 11,
      img1: wolf,
      name: "Wombat",
      lil1: "Web3 Games",
      lil2: "",
      content:
        "Wombat is your home for NFT-Gaming. Become part of the gaming revolution",
      img2: diamond,
      img3: infinity,
    },
    {
      id: 12,
      img1: cave,
      name: "CaveWorld",
      lil1: "Web3 Games",
      lil2: "",
      content:
        "CaveWorld is a unique and engaging gaming experience that combines battle, crafting, exploration, and trading.",
      img2: container,
    },
    {
      id: 13,
      img1: tombala,
      name: "Tombala",
      lil1: "Web3 Games",
      lil2: "",
      content:
        "Tombala is a Web3 next-generation decentralized lottery platform.",
      img2: diamond,
      img3: infinity,
    },
    {
      id: 14,
      img1: miniroyals,
      name: "Mini Royale: Nations",
      lil1: "Web3 Games",
      lil2: "",
      content:
        "Mini Royale: Nations is a free-to-play browser-based IO shooting FPS social strategy game.",
      img2: container,
    },
    {
      id: 15,
      img1: ball,
      name: "Sorare",
      lil1: "Free Customers",
      lil2: "Web3 Games",
      content:
        "Sorare helps you experience fantasy sports through a virtual game.",
      img2: diamond,
    },
    {
      id: 16,
      img1: ball,
      name: "Sorare",
      lil1: "Free Customers",
      lil2: "Web3 Games",
      content:
        "Sorare helps you experience fantasy sports through a virtual game.",
      img2: diamond,
    },
    {
      id: 17,
      img1: ball,
      name: "Sorare",
      lil1: "Free Customers",
      lil2: "Web3 Games",
      content:
        "Sorare helps you experience fantasy sports through a virtual game.",
      img2: diamond,
    },
  ];
  return (
    <div>
      <div className=" flex flex-col gap-6 mt-14  w-full  tablet:gap-3 md:mt-8 tablet:grid tablet:grid-cols-2 xl:grid-cols-3 z-50">
        {dapps.map((list) =>
          list.speciial ? (
            <Link to={list.path}>
              <div
                key={list.id}
                className="border py-6 rounded-lg px-6 shadow-lg deeporangebg text-white cursor-pointer tablet:px-4 relative z-20 transition transform duration-300 hover:scale-105"
              >
                <p className="lorange bg-white w-fit text-sm py-1 px-3 rounded-md mb-6">
                  {list.btn}
                </p>
                <h1 className="font-semibold text-2xl  h-44">{list.title}</h1>
              </div>
            </Link>
          ) : (
            <Link to={list.path}>
              <div
                key={list.id}
                className="border py-6 rounded-lg px-6 shadow-lg  cursor-pointer tablet:px-4 transition transform duration-300 hover:scale-105"
              >
                <div className="flex  items-center gap-4 h-12 mb-6">
                  <img src={list.img1} alt="" className="w-10 rounded-full" />
                  <h1 className="text-[#333333] text-2xl font-semibold ">
                    {list.name}
                  </h1>
                </div>

                <div className="flex text-xs gap-3 items-center h-8 mb-4 ">
                  <p className="text-[#007BFF] border border-[#C0D4FF] px-2 py-1  rounded-lg">
                    {list.lil1}
                  </p>
                  <p className="text-xs bg-[#FDF2E8] w-fit rounded-lg lorange px-2 py-1 font-normal ">
                    {list.lil2}
                  </p>
                </div>

                <div className="gray roboto">
                  <p className="text-sm mb-4 h-24">{list.content}</p>
                </div>

                <div className="flex gap-2">
                  <img src={list.img2} alt="" />
                  <img src={list.img3} alt="" />
                </div>
              </div>
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default Lists;

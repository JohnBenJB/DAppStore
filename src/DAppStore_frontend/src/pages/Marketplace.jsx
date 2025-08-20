import React from "react";
import NavBar from "../componenets/NavBar";
import Relatedcollections from "../componenets/Relatedcollections";
import Footer from "../componenets/Footer";
import { IoIosArrowForward } from "react-icons/io";

const Marketplace = () => {
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
      <Relatedcollections />
      <Footer />
    </div>
  );
};

export default Marketplace;

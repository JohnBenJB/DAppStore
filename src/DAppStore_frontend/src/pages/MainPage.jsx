import React from "react";
import NavBar from "../componenets/NavBar";
import MainContent from "../componenets/MainContent";
import Webtools from "../componenets/Webtools";
import Howworks from "../componenets/Howworks";
import Features from "../componenets/Features";
import Footer from "../componenets/Footer";

const MainPage = () => {
  return (
    <div className="w-full">
      <NavBar />
      <MainContent />
      <Webtools />
      <Howworks />
      <Features />
      <Footer />
    </div>
  );
};

export default MainPage;

import React from "react";
import logo from "../assets/images/Group 40.svg";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="container bg-black text-white">
      <div className="flex items-center gap-2 mb-6">
        <img src={logo} alt="" />
        <p className="font-semibold text-lg  ">DAppStore</p>
      </div>

      <div className="mb-14">
        <div className="mb-10">
          <div>
            <p className="roboto text-sm leading-normal mb-4 font-extralight">
              Your gateway to the decentralized future. Discover, launch, and
              thrive in the Web3 ecosystem built on the Internet Computer.
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <FaXTwitter />
            <FaGithub className="text-lg" />
          </div>
        </div>
        <div className="flex gap-14 roboto">
          <div>
            <h3 className="font-semibold mb-3 text-sm">Quick Links</h3>
            <p className="text-sm font-extralight">About</p>
            <p className="text-sm font-extralight">Docs</p>
            <p className="text-sm font-extralight">Github</p>
            <p className="text-sm font-extralight">Privacy</p>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-sm">Support</h3>
            <p className="text-sm font-extralight">Contact Us</p>
            <p className="text-sm font-extralight">Help Center</p>
            <p className="text-sm font-extralight">Community</p>
            <p className="text-sm font-extralight">Discord</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex text-xs gap-4 font-extralight  py-4">
          <p>Terms of Service</p>
          <p>Privacy Policies</p>
          <p>Cookies Policies</p>
        </div>
        <div className="py-6 text-xs font-extralight ">
          <p>
            © 2024 DAppStore. Built on Internet Computer. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

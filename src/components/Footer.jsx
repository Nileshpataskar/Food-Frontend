import React, { useState } from "react";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoPinterestAlt,
  BiLogoTwitter,
  BiLogoYoutube,
} from "react-icons/bi";
import { AiOutlineArrowUp, AiOutlineMail } from "react-icons/ai";
const Footer = () => {
  const [showNetworksDropdown, setShowNetworksDropdown] = useState(false);

  const toggleNetworksDropdown = () => {
    setShowNetworksDropdown(!showNetworksDropdown);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scrolling behavior for a nicer effect
    });
  };

  return (
    <div className="h-full bg-black flex flex-col p-5 md:pl-28 md:flex-row md:pr-28 box-border justify-between cursor-pointer gap-5 ">
      <div className="flex gap-2 flex-col">
        <div className="flex gap-8">
          <ul className="flex gap-2 cursor-pointer">
            <li className="text-white  ">
              <BiLogoFacebook size={24} />
            </li>
            <li className="text-white  ">
              <BiLogoInstagram size={24} />
            </li>
            <li className="text-white   ">
              <BiLogoPinterestAlt size={24} />
            </li>
            <li className="text-white   ">
              <BiLogoTwitter size={24} />
            </li>
            <li className="text-white   ">
              <BiLogoYoutube size={24} />
            </li>
            <li className="text-white   ">
              <AiOutlineMail size={24} />
            </li>
          </ul>
          <ul className="flex items-center gap-1 cursor-pointer" onClick={scrollToTop} >
            <li className="text-white">
              <AiOutlineArrowUp size={24} />
            </li>
            <p className="font-cabin text-white text-[10px] md:text-[17px] sm:text-sm">BACK TO TOP</p>
          </ul>
        </div>
        <div>
          <ul className="flex gap-3">
            {" "}
            <li className="text-white text-xs font-bold pl-2">
              All Categories
            </li>
            <li className="text-white text-xs font-bold pl-2">Site Map</li>
            <li className="text-white text-xs font-bold pl-2">About us</li>
            <li className="text-white text-xs font-bold pl-2">Help</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-3 md:items-end cursor-pointer">
        <p
          className="text-[#fff] text-xs relative"
          onMouseEnter={toggleNetworksDropdown}
          onMouseLeave={toggleNetworksDropdown}
        >
          <span className="flex gap-3 pl-2">
            Discover family of Networks <AiOutlineArrowUp />
          </span>
          {showNetworksDropdown && (
            <ul className="dropdown-list absolute bottom-4 p-2 pr-10 bg-white">
              <a href="https://www.hgtv.com/?xp=sistersite" target="_blank" rel="noreferrer">
                {" "}
                <li className="text-black text-xs font-bold pl-2">HGTV</li>
              </a>

              <a href="https://magnolia.com/DIYNetwork/?xp=sistersite" target="_blank" rel="noreferrer">
                <li className="text-black text-xs font-bold pl-2">DIY NETWORK</li>
              </a>
              <a href="https://www.cookingchanneltv.com/?xp=sistersite  " target="_blank" rel="noreferrer">
                <li className="text-black text-xs font-bold pl-2">Cooking Channel</li>
              </a>
              <a href="https://www.foodnetwork.com/?xp=sistersite" target="_blank" rel="noreferrer">
                <li className="text-black text-xs font-bold pl-2">Food Channel</li>
              </a>
              <a href="https://www.travelchannel.com/?xp=sistersite" target="_blank" rel="noreferrer">
                <li className="text-black text-xs font-bold pl-2">Travel Channel</li>
              </a>
              <a href="https://www.cookingchanneltv.com/?xp=sistersite" target="_blank" rel="noreferrer">
                <li className="text-black text-xs font-bold pl-2">HGTV POLAND</li>
              </a>
             
              {/* Add more network items as needed */}
            </ul>
          )}
        </p>
        <p className="text-[#cac8c8] text-[8px] sm:text-xs pl-2">
          © 2023 Warner Bros. Discovery, Inc. or its subsidiaries and
          affiliates. All rights reserved.
        </p>

        <div className="flex flex-col md:items-end gap-3">
          <ul className="flex gap-1">
            {" "}
            <li className="text-white text-[8px] sm:text-xs font-bold pl-2">Advertise</li>
            <li className="text-white text-[8px] sm:text-xs font-bold pl-2">Ad choice</li>
            <li className="text-white text-[8px] sm:text-xs font-bold pl-2">
              Privacy Notice
            </li>
            <li className="text-white text-[8px] sm:text-xs font-bold pl-2">
              Visitor Agreements
            </li>
          </ul>

          <ul className="flex gap-1">
            {" "}
            <li className="text-white text-[8px] sm:text-xs font-bold pl-2">
              Calafornia Privacy Notice
            </li>
            <li className="text-white text-[8px] sm:text-xs font-bold pl-2">
              Do not Share or Sell my personal information
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

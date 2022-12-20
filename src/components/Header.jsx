import React from "react";
import troll from "../assets/images/troll.png";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-[#672280] to-[#A626D3] text-white flex items-center py-5">
      <div className="flex gap-3 pl-3">
        <img src={troll} alt="logo" className="w-8 h-7" />
        <h1 className="font-karla ">Meme Generator</h1>
      </div>

      <p className="font-inter font-medium hidden md:block">
        React Course - Project 3
      </p>
    </header>
  );
};

export default Header;

import React from "react";
import troll from "../assets/images/troll.png";

const Header = () => {
  return (
    <header className="w-full bg-gradient-to-r from-[#672280] to-[#A626D3] text-white flex justify-between items-center py-5 md:py-8 md:px-8 fixed top-0">
      <div className="flex gap-2 pl-3 md:pl-0">
        <img src={troll} alt="logo" className="w-8 h-7" />
        <h1 className="font-karla text-xl tracking-tighter ">Meme Generator</h1>
      </div>

      <p className="font-inter font-medium hidden md:block">
        React Course - Project 3
      </p>
    </header>
  );
};

export default Header;

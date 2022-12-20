import React from "react";
import newMeme from "../assets/images/memeimage.png";

const Meme = () => {
  return (
    <form action="" className="flex flex-col items-center gap-4">
      <div className="flex-col space-y-5 md:space-y-0 md:flex md:flex-row gap-5">
        <input type="text" className="inputs" />

        <input type="text" className="inputs" />
      </div>

      <button className="block bg-gradient-to-r from-[#711F8D] to-[#A818DA] h-[40px] w-[230px] md:h-12 md:w-[660px] rounded-md">
        <img
          src={newMeme}
          alt="Button text"
          className="h-[19px] w-[200] mx-auto"
        />
      </button>
    </form>
  );
};

export default Meme;

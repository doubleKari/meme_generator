import React from "react";
import { useState } from "react";
import memeData from "../memeData";
import newMeme from "../assets/images/memeimage.png";

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/30b1gx.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(memeData);

  function getMemeImage() {
    const Meme =
      allMemeImages.data.memes[
        Math.floor(Math.random() * allMemeImages.data.memes.length)
      ];
    setMeme({
      ...meme,
      randomImage: Meme.url,
    });
  }

  return (
    <main className="flex flex-col gap-10">
      <div className="flex flex-col items-center gap-4">
        <div className="flex-col space-y-5 sm:space-y-0 sm:flex sm:flex-row gap-5">
          <input type="text" className="inputs" placeholder="Top text" />

          <input type="text" className="inputs" placeholder="Bottom text" />
        </div>

        <button
          onClick={getMemeImage}
          className="block bg-gradient-to-r from-[#711F8D] to-[#A818DA] h-[50px] w-80 sm:h-12 sm:w-[660px] rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
        >
          <img
            src={newMeme}
            alt="Button text"
            className="h-[19px] w-[200] mx-auto"
          />
        </button>
      </div>

      <div className="w-80 mx-auto rounded-sm sm:w-[660px]  sm:rounded-lg">
        <img
          src={meme.randomImage}
          alt="Meme"
          className="w-full h-full object-cover object-center rounded-sm sm:rounded-lg"
        />
      </div>
    </main>
  );
};

export default Meme;

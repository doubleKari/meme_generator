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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  };
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

  console.log(meme);

  return (
    <main className="flex flex-col gap-10 relative">
      <div className="flex flex-col items-center gap-4">
        <div className="flex-col space-y-5 sm:space-y-0 sm:flex sm:flex-row gap-5">
          <input
            type="text"
            className="inputs"
            name="topText"
            value={meme.topText}
            placeholder="Top text"
            onChange={handleChange}
          />

          <input
            type="text"
            className="inputs"
            name="bottomText"
            value={meme.bottomText}
            placeholder="Bottom text"
            onChange={handleChange}
          />
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

      <div className="w-80 mx-auto rounded-sm sm:w-[660px]  sm:rounded-lg relative outline font-roboto text-3xl text-white font-bold">
        <img
          src={meme.randomImage}
          alt="Meme"
          className="w-full h-full object-cover object-center rounded-sm sm:rounded-lg"
        />
        <p className="absolute top-5 sm:top-20 px-10 py-5  w-full text-shadow-lg  text-center">
          {meme.topText}
        </p>
        <p className="absolute bottom-5 sm:bottom-20 px-10 py-5 w-full text-shadow-lg text-center">
          {meme.bottomText}
        </p>
      </div>
    </main>
  );
};

export default Meme;

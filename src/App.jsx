import React from "react";
import Header from "./components/Header";
import Meme from "./components/Meme";
import "./index.css";

function App() {
  return (
    <main className="w-full h-full">
      <Header />
      <section className="mt-28 md:mt-36 w-full mb-20">
        <Meme />
      </section>
    </main>
  );
}

export default App;

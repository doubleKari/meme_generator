import React from "react";
import Header from "./components/Header";
import Meme from "./components/Meme";
import "./index.css";

function App() {
  return (
    <main className="w-full h-full">
      <Header />
      <section className="mt-24 md:mt-36 w-full">
        <Meme />
      </section>
    </main>
  );
}

export default App;

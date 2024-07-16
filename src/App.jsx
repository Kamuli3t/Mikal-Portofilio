import React from "react";
import Navbar from "./components/Navbar";
import Bio from "./components/Bio";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased select bg-red-900  selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full"></div>

      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[linear-gradient(to right,#4f4f4f2e_1px,transparent 1px), linear-gradient(to bottom,#4f4f4f2e_1px,transparent 1px)] bg-[size:14px 24px]"></div>

      <div className="container mx-auto px-8"></div>

      <Navbar />
      <Bio />
    </div>
  );
};

export default App;

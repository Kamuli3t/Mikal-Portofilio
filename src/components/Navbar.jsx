import React from "react";
import logo from "../assets/mikalslogo.jpg";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className=" mb-1 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-8 w-20" src={logo} alt="logo" />
      </div>
      <div className="m-2  flex items-center justify-center gap-2 text-4xl">
        <FaLinkedinIn />
        <FaGithub />
        <FaSquareXTwitter />
      </div>
    </nav>
  );
};

export default Navbar;

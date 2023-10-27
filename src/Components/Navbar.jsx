import React from "react";
import logo from "./logo.png";

export default function Navbar() {
  return (
    <div className="bg-black font-rubik flex items-center justify-between py-2 px-10">
      <img src={logo} alt="logo" className="h-16" />
      <div className="menu  text-white">
        <ul className="grid grid-flow-col space-x-4">
          <li className="cursor-pointer transition-all ease-in hover:text-sky-400">LOCATION</li>
          <li className="cursor-pointer transition-all ease-in hover:text-sky-400">ABOUT</li>
          <li className="cursor-pointer transition-all ease-in hover:text-sky-400">CONTACT</li>
        </ul>
      </div>
      <div className="loginbtn">
        <button className="bg-sky-800 transition-all ease-in hover:bg-sky-600 text-white px-5 py-2">Login</button>
      </div>
    </div>
  );
}

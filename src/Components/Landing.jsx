import React from "react";
import panjabi from "./panjabi.png";

export default function Landing() {
  return (
    <div className="my-20 mx-32 grid grid-flow-col">
      <div className="left w-5/6 space-y-8">
        <p className="font-rubikMonoOne text-7xl">
          WEAR YOUR CULTURE WITH PRIDE
        </p>
        <p className="w-5/6 font-acme text-gray-600">
          Wear your culture with pride because our panjabis are high quality,
          stylish, and made with love. We offer a wide variety of designs to
          choose from, so you can find the perfect one to express your unique
          style and culture.
        </p>
        <div className="buttons space-x-5">
          <button className="bg-sky-600 animate-pulse hover:animate-none transition-all ease-in text-white px-5 py-2 font-bold hover:bg-sky-500">
            Shop Now
          </button>
          <button className="bg-transparent transition-all ease-in border px-5 py-2 font-bold hover:bg-sky-500 hover:text-white border-black">Contact</button>
        </div>
      </div>
      <div className="right">
        <img src={panjabi} alt="panjabi" />
      </div>
    </div>
  );
}

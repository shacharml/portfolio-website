import React from "react";
import { useRef } from "react";
import { PROFILE } from "../../constants";
import { RiArrowRightUpLine } from "@remixicon/react";
import shachar from "../assets/linkdin_img.jpeg";

const Hero = () => {
  const heroRef = useRef(null);
  return (
    <section
      className="flex min-h-screen flex-col items-center justify-center gap-4 lg:gap-6"
      rel={heroRef}
    >
      <div className="mt-8 lg:mt-20">
        <h1 className="hero-titel text-4xl uppercase lg:text-7xl mt-20 outline-orange-400 outline-dotted">
          {PROFILE.name}
        </h1>
        <h2
          className="hero-subtitle bg-gradient-to-b from-amber-400 to-amber-700 bg-clip-text text-center text-2xl -tracking-tighter
       text-transparent "
        >
          {PROFILE.role}
        </h2>
      </div>
      <p className="hero-text max-w-2xl p-2 text-center text-xl tracking-tighter lg:text-1xl">
        {PROFILE.subheading}
      </p>
      <a
        href="./Shachar Males-Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        download
        className="hero-btn mb-6 flex gap-1 rounded-full border border-pink-200/50 px-3 py-2 tracking-tighter"
      >
        <span>Download Resume</span>
        <RiArrowRightUpLine />
      </a>
      <img
        src={shachar}
        alt={PROFILE.name}
        width={400}
        height="400"
        className="hero-img rounded-3xl border border-purple-300/20 p-1"
      />
    </section>
  );
};

export default Hero;

import React from "react";

const Hero = () => {
  return (
    <div className="h-[30vh] w-full flex flex-col justify-center items-center text-2xl sm:text-4xl text-white text-center">
      <div>
        <span>Seeing the weather of the whole world</span>
      </div>
      <div className="mt-2 sm:mt-6 text-white">
        with{" "}
        <span className="text-4xl sm:text-5xl bg-gradient-to-r from-[#CAECFF] to-[#78CFFF] text-transparent bg-clip-text">
          Moro Weather
        </span>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";

const Hero = () => {
  return (
    <div className="h-[30vh] w-full flex flex-col justify-center items-center text-4xl text-center">
      <div>
        <span>Seeing the weather of the whole world</span>
      </div>
      <div className="mt-6">
        with{" "}
        <span className="text-5xl  bg-gradient-to-r from-[#CAECFF] to-[#78CFFF] text-transparent bg-clip-text">
          Moro Weather
        </span>
      </div>
    </div>
  );
};

export default Hero;

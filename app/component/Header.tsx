import React from "react";

const Header = () => {
  return (
    <div className="">
      <nav className="flex flex-row w-full justify-between items-center">
        <div className="text-3xl text-slate-200">Moro Weather</div>
        <div className="flex flex-row w-[50%] justify-evenly">
          <a href="">
            <h2 className="text-xl text-white cursor-pointer">Home</h2>
          </a>
          <a href="morosama.vercel.app">
            <h2 className="text-xl text-slate-200 cursor-pointer font-extralight">
              Contact US
            </h2>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;

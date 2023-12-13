import React from "react";

const Header = () => {
  return (
    <div className="">
      <nav className="flex flex-col sm:flex-row w-full justify-between items-center">
        <div className="text-xl hidden sm:block sm:text-3xl text-slate-200">
          Moro Weather
        </div>
        <div className="flex flex-col text-center sm:flex-row w-[50%] justify-evenly ">
          <a href="">
            <h2 className="sm:text-xl text-white cursor-pointer text-3xl">
              Home
            </h2>
          </a>
          <a href="https://morosama.vercel.app">
            <h2 className="text-3xl sm:mt-0 mt-6 sm:text-xl text-slate-200 cursor-pointer font-extralight">
              Contact US
            </h2>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;

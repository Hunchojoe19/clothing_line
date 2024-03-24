import React from "react";
import menu from "../assets/svgs/menu-hamburger.svg";
import logo from "../assets/svgs/omix.png";
import cart from "../assets/svgs/cart-4.svg";
import heart from "../assets/svgs/heart.svg";
import search from "../assets/svgs/shape.png";

const catalogData = ["Women", "For Men", "New", "Collections"];

const Headers = () => {
  return (
    <nav className="w-full h-[86px]">
      <div className="px-8 h-full flex items-center justify-between">
        <div className="flex flex-grow-0 lg:flex-grow-0 items-center gap-x-6">
          <img src={menu} />
          <img src={logo} />
        </div>
        <div className="hidden md:flex justify-between items-center max-w-md lg:max-w-xl">
          {catalogData.map((item, i) => (
            <p key={i} className="w-32">
              {item}
            </p>
          ))}
        </div>
        <div className="flex items-center justify-center gap-x-2 lg:gap-x-4 cursor-pointer">
          <img src={search} />
          <img src={heart} />
          <img src={cart} />
        </div>
      </div>
    </nav>
  );
};

export default Headers;

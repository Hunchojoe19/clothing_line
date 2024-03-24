import React from "react";
import img1 from "../assets/svgs/Img1.png";
import img2 from "../assets/svgs/Img2.png";
import img3 from "../assets/svgs/Img3.png";
import img4 from "../assets/svgs/Img4.png";
import heart from "../assets/svgs/heart.svg";
import cart from "../assets/svgs/cart.png";

const bestSellersData = [
  { id: 1, title: "T-shirt", price: 35, image: `${img1}` },
  { id: 2, title: "Dress", price: 76, image: `${img2}` },
  { id: 3, title: "Jeans", price: 80, image: `${img3}` },
  { id: 4, title: "Gowns", price: 75, image: `${img4}` },
];

const Bestsellers = () => {
  return (
    <div className="max-w-screen-xl">
      <div className="w-full px-4 lg:ml-12">
        <h1 className="text-4xl font-montserat font-bold">Best Sellers</h1>
        <div className="flex items-center gap-x-6 mt-4">
          <p className="underline text-xl font-roboto">For Women</p>
          <p className="underline text-xl font-roboto">For Men</p>
        </div>
        <div className="w-full mt-6 flex items-center flex-wrap gap-x-4 sm:gap-x-8 xl:gap-x-16 md:flex-nowrap">
          {bestSellersData.map((item) => (
            <div
              key={item.id}
              id="image"
              className="relative cursor-pointer rounded-lg w-[152px] h-[380px] mb-4 md:w-[200px] lg:w-[280px] lg:h-[480px]"
            >
              <img src={item.image} className="w-full h-[70%]" />
              <p className="mt-2 font-montserat text-lg lg:mt-4">
                {item.title}
              </p>
              <p className="mt-2 font-montserat text-lg font-bold lg:mt-4">
                ${item.price}
              </p>
              <div className="absolute top-6 right-2 w-[32px] md:right-4 h-[32px] flex justify-center items-center bg-white rounded-full">
                <img src={heart} className="md:w-[16px] h-[16px]" />
              </div>
              <div
                className="hidden md:flex absolute bottom-40 -left-[100%] items-center justify-center gap-x-4 w-[216px] h-[56px] bg-black rounded-full"
                id="carts"
              >
                <img src={cart} />
                <p className="text-white">Add to cart</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full mb-2 flex justify-center items-center">
          <button className="capitalize outline-none w-full h-[45px] rounded-full border border-gray-400 cursor-pointer  md:w-40">
            all hits
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bestsellers;

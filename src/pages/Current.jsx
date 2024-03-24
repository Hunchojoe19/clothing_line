import React from "react";
import image1 from "../assets/svgs/Ellipse1.png";
import image2 from "../assets/svgs/Ellipse2.png";
import image3 from "../assets/svgs/Ellipse3.png";
import image4 from "../assets/svgs/Ellipse4.png";
import image5 from "../assets/svgs/Ellipse5.png";
import image6 from "./../assets/svgs/Group6.png";

const imageData = [
  {
    id: 1,
    title: "Spring/Summer 2022",
    image: `${image1}`,
  },
  {
    id: 2,
    title: "Stylist's choice",
    image: `${image2}`,
  },
  {
    id: 3,
    title: "T-shirts",
    image: `${image3}`,
  },
  {
    id: 4,
    title: "Shirts",
    image: `${image4}`,
  },
  {
    id: 5,
    title: "Dresses",
    image: `${image5}`,
  },
  {
    id: 6,
    title: "sale",
    image: `${image6}`,
  },
];

const Current = () => {
  return (
    <div className="p-2 max-w-full">
      <div className="w-full ">
        <h1 className="text-3xl font-montserat mt-8 ml-4 lg:ml-12 md:mt-12 md:text-4xl">
          Current
        </h1>
        <div className="slider max-w-full flex mt-8 overflow-x-scroll scroll gap-x-10 whitespace-nowrap lg:overflow-hidden lg:gap-x-0">
          {imageData.map((item) => (
            <div className="w-full flex flex-col items-center gap-y-4">
              <img
                src={item.image}
                className="w-[104px] h-[104px] inline-block cursor-pointer hover:scale-105 ease-in-out duration-300 xl:w-[168px] xl:h-[168px]"
              />
              <p className="w-[130px] text-center">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Current;

import React from "react";
import mobile from "../assets/svgs/MainImage.png";
import hero from "../assets/svgs/HeroImage.png";

const Hero = () => {
  return (
    <div className="w-full p-2">
      <div className="w-full md:hidden">
        <div className="w-full">
          <img src={mobile} className="w-full" />
        </div>
        <div className="w-full mt-6 px-8">
          <h1 className="text-4xl font-montserat">
            There is clothing for everyone
          </h1>
          <p className="text-lg font-roboto mt-4">
            Pay only for what suits you and what you like!
          </p>
        </div>
        <div className="w-full flex gap-x-8 justify-center items-center mt-8">
          <button className="w-[202px] outline-none xs:w-[182px] h-[48px] xs:text-sm sm:text-lg bg-yellow-500 rounded-full font-montserat">
            For Men
          </button>
          <button className="w-[202px] outline-none xs:w-[182px] h-[48px] xs:text-sm sm:text-lg bg-yellow-500 rounded-full font-montserat">
            For Women
          </button>
        </div>
      </div>
      <div className="hidden max-w-screen h-full md:flex items-center gap-x-12">
        <img src={hero} className="h-full" />
        <div className="w-1/2 md:ml-0 lg:ml-24">
          <p className="text-7xl font-montserat lg:w-[460px] xl:w-[690px]">
            There is clothing for everyone
          </p>
          <p className="text-2xl font-montserat mt-8">
            {" "}
            Pay only for what suits you and what you like!
          </p>
          <div className="mt-8 flex gap-x-2 lg:gap-x-6">
            <button className="w-[154px] outline-none h-[48px] lg:w-[178px] text-xl font-montserat bg-yellow-500 rounded-full">
              For Men
            </button>
            <button className="w-[154px] outline-none h-[48px] lg:w-[178px] text-xl font-montserat border border-gray-500 rounded-full">
              For Women
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

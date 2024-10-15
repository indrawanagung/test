"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
const TextAndImage = () => {
  useEffect(() => {
    AOS.init({
      duration: 100, // Durasi animasi dalam milidetik
    });
  }, []);
  return (
    <>
      <div className="w-full lg:h-[40rem] flex flex-col lg:flex-row-reverse justify-between items-center gap-5">
        {/* BERRY IMAGE  */}
        <div className="relative lg:w-[50%] h-96 flex flex-col justify-center items-start gap-6 p-2">
          <Image
            src="/berry.png"
            alt=""
            width={600}
            height={600}
            className="h-96 lg:h-[30rem] w-max self-center"
          />
        </div>
        {/* TEXT  */}
        <div className="lg:w-[50%] flex flex-col justify-center items-center lg:items-start gap-3 pt-2 pb-10">
          <p className="text-gray-500 text-xl font-extralight">Flat 30% Off</p>
          <p
            className="text-5xl lg:text-7xl font-extrabold text-gray-700 tracking-wide text-center lg:text-start"
          >
            Explore <span className="text-purple-600">Healthy</span> & Fresh
            Fruits
          </p>
          <button
            data-aos="fade-up-right"
            className="border mt-3 border-gray-500 text-gray-600 px-3 py-2 rounded-lg"
          >
            Shop Now
          </button>
        </div>
      </div>
    </>
  );
};

export default TextAndImage;

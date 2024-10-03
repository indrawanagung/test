"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";

const CategoryOverflow = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Durasi animasi dalam milidetik
    });
  }, []);
  return (
    <>
      <div className="scrollbar-hide overflow-scroll mb-10 ">
        <div className="flex gap-5 mb-5 lg:justify-center">
          <div
            data-aos="flip-left"
            data-aos-offset="400"
            className="bg-orange-100 h-36 min-w-max py-3 px-20 rounded-xl flex flex-col gap-1 justify-center items-center"
          >
            {/* IMAGE  */}
            <Image
              src="/jeruk.svg"
              alt=""
              width={100}
              height={100}
              className="w-12 h-12"
            />
            {/* CATEGORY  */}
            <h3 className="text-lg">Fruits</h3>
            {/* TOTAL ITEMS  */}
            <span className="text-gray-500">4 Items</span>
          </div>
          <div
            data-aos="flip-left"
            data-aos-offset="400"
            className="bg-orange-100 h-36 min-w-max py-3 px-20 rounded-xl flex flex-col gap-1 justify-center items-center"
          >
            {/* IMAGE  */}
            <Image
              src="/jeruk.svg"
              alt=""
              width={100}
              height={100}
              className="w-12 h-12"
            />
            {/* CATEGORY  */}
            <h3 className="text-lg">Fruits</h3>
            {/* TOTAL ITEMS  */}
            <span className="text-gray-500">4 Items</span>
          </div>
          <div
            data-aos="flip-left"
            data-aos-offset="400"
            className="bg-orange-100 h-36 min-w-max py-3 px-20 rounded-xl flex flex-col gap-1 justify-center items-center"
          >
            {/* IMAGE  */}
            <Image
              src="/jeruk.svg"
              alt=""
              width={100}
              height={100}
              className="w-12 h-12"
            />
            {/* CATEGORY  */}
            <h3 className="text-lg">Fruits</h3>
            {/* TOTAL ITEMS  */}
            <span className="text-gray-500">4 Items</span>
          </div>
          <div
            data-aos="flip-left"
            data-aos-offset="400"
            className="bg-orange-100 h-36 min-w-max py-3 px-20 rounded-xl flex flex-col gap-1 justify-center items-center"
          >
            {/* IMAGE  */}
            <Image
              src="/jeruk.svg"
              alt=""
              width={100}
              height={100}
              className="w-12 h-12"
            />
            {/* CATEGORY  */}
            <h3 className="text-lg">Fruits</h3>
            {/* TOTAL ITEMS  */}
            <span className="text-gray-500">4 Items</span>
          </div>
          <div
            data-aos="flip-left"
            data-aos-offset="400"
            className="bg-orange-100 h-36 min-w-max py-3 px-20 rounded-xl flex flex-col gap-1 justify-center items-center"
          >
            {/* IMAGE  */}
            <Image
              src="/jeruk.svg"
              alt=""
              width={100}
              height={100}
              className="w-12 h-12"
            />
            {/* CATEGORY  */}
            <h3 className="text-lg">Fruits</h3>
            {/* TOTAL ITEMS  */}
            <span className="text-gray-500">4 Items</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryOverflow;

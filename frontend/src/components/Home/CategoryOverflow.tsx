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
        <div className="flex gap-6 mb-5 lg:justify-center">
          <div
            className="bg-green-100 h-36 min-w-max py-3 px-20 rounded-xl flex flex-col gap-1 justify-center items-center"
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
            <h3 className="text-lg font-medium tracking-widest">Fruits</h3>
            {/* TOTAL ITEMS  */}
            <span className="text-gray-500">4 Items</span>
          </div>
          <div
            className="bg-yellow-100 h-36 min-w-max py-3 px-20 rounded-xl flex flex-col gap-1 justify-center items-center"
          >
            {/* IMAGE  */}
            <Image
              src="/bakery.svg"
              alt=""
              width={100}
              height={100}
              className="w-12 h-12"
            />
            {/* CATEGORY  */}
            <h3 className="text-lg font-medium tracking-widest">Bakery</h3>
            {/* TOTAL ITEMS  */}
            <span className="text-gray-500">4 Items</span>
          </div>
          <div
            className="bg-purple-100 h-36 min-w-max py-2 px-20 rounded-xl flex flex-col gap-1 justify-center items-center"
          >
            {/* IMAGE  */}
            <Image
              src="/drink.svg"
              alt=""
              width={100}
              height={100}
              className="w-12 h-12"
            />
            {/* CATEGORY  */}
            <h3 className="text-lg font-medium tracking-widest">Cold Drink</h3>
            {/* TOTAL ITEMS  */}
            <span className="text-gray-500">4 Items</span>
          </div>
          <div
            className="bg-rose-100 h-36 min-w-max py-3 px-20 rounded-xl flex flex-col gap-1 justify-center items-center"
          >
            {/* IMAGE  */}
            <Image
              src="/vegetable.svg"
              alt=""
              width={100}
              height={100}
              className="w-12 h-12"
            />
            {/* CATEGORY  */}
            <h3 className="text-lg font-medium tracking-widest">Vegatable</h3>
            {/* TOTAL ITEMS  */}
            <span className="text-gray-500">4 Items</span>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default CategoryOverflow;

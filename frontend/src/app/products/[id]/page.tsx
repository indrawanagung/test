import FilterMenu from "@/components/Filter";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { HeartStraight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <MaxWidthWrapper className="mb-10">
        <div className="flex flex-col lg:flex-row gap-5 p-2">
          {/* CATEGORY  */}
          <FilterMenu />

          {/* LIST PRODUCT  */}
          <div className="flex flex-col lg:flex-row gap-5">
            <Image
              src="/product1.jpg"
              alt=""
              height={500}
              width={500}
              className="w-fit max-h-80 p-10 hover:p-1 duration-300 border border-gray-200 rounded-xl"
            />
            <div className="flex flex-col gap-5">
              <span className="text-2xl text-gray-600 font-medium">
                Ground Nuts Oil Pack 52g
              </span>
              <span className="text-gray-600 tracking-wide font-light">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
                exercitationem ad laborum asperiores blanditiis delectus animi
                dolorum optio eligendi voluptatibus!
              </span>
              <h3 className="text-2xl font-bold text-gray-600 tracking-wide">
                $923.00
              </h3>
              <div className="flex flex-col gap-2 text-gray-400">
                <span>Closure : Hook & Loop</span>
                <span>Sole : Polyvinyl Chloride</span>
                <span>Width : Medium</span>
                <span>Outer Material : A-Grade Standard Quality</span>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="font-medium tracking-wide text-gray-700">
                  WEIGHT
                </h3>
                <div className="flex gap-2">
                  <button className="px-4 py-1 bg-purple-500 text-white rounded-xl">
                    250g
                  </button>
                  <button className="px-4 py-1 border border-gray-300 text-gray-500 rounded-xl">
                    500g
                  </button>
                  <button className="px-4 py-1 border border-gray-300 text-gray-500 rounded-xl">
                    1kg
                  </button>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex gap-2 justify-center items-center text-xl border border-gray-200 py-2 px-3 rounded-xl">
                  <button className="text-xl">-</button>
                  <input
                    type="text"
                    className="w-10 text-base text-center outline-none"
                    defaultValue={1}
                  />
                  <button className="text-xl">+</button>
                </div>
                <button className="text-white bg-purple-500 px-7 py-2 rounded-xl">
                  View Cart
                </button>
                <button className="border border-gray-200 px-2 py-1 rounded-xl">
                  <HeartStraight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default page;

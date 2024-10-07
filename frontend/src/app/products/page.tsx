import FilterMenu from "@/components/Filter";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
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
          <div>
            <div className="bg-slate-100 w-full mb-5 py-3 px-5 rounded-2xl flex justify-end">
              <span className="text-gray-500 text-sm lg:text-base cursor-pointer">
                Sort by {">"}
              </span>
            </div>
            <div className="flex flex-wrap gap-6">
              <div className="flex flex-col max-w-40 min-w-48 gap-2 cursor-pointer border rounded-xl border-gray-200 ">
                <Image
                  src="/product1.jpg"
                  alt=""
                  className="w-fit hover:p-1 self-center duration-300 h-40 md:h-50 p-3 border-b"
                  width={200}
                  height={200}
                />
                <div className="flex flex-col gap-2 py-2 px-4">
                  <span className="text-sm font-light tracking-wider text-gray-500">
                    Chocos
                  </span>
                  <h4>Mixed Fruit Cocholates Organic Apple</h4>
                  {/* PRICE  */}
                  <div className="flex justify-between">
                    <span className="font-extrabold text-xl">$25</span>
                    <span>1 Pack</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col max-w-40 min-w-48 gap-2 cursor-pointer border rounded-xl border-gray-200 ">
                <Image
                  src="/product2.jpg"
                  alt=""
                  className="w-fit hover:p-1 self-center duration-300 h-40 md:h-50 p-3 border-b"
                  width={200}
                  height={200}
                />
                <div className="flex flex-col gap-2 py-2 px-4">
                  <span className="text-sm font-light tracking-wider text-gray-500">
                    Chocos
                  </span>
                  <h4>Mixed Fruit Cocholates Organic Apple</h4>
                  {/* PRICE  */}
                  <div className="flex justify-between">
                    <span className="font-extrabold te">$25</span>
                    <span>1 Pack</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col max-w-40 min-w-48 gap-2 cursor-pointer border rounded-xl border-gray-200 ">
                <Image
                  src="/product3.jpg"
                  alt=""
                  className="w-fit hover:p-1 self-center duration-300 h-40 md:h-50 p-3 border-b"
                  width={200}
                  height={200}
                />
                <div className="flex flex-col gap-2 py-2 px-4">
                  <span className="text-sm font-light tracking-wider text-gray-500">
                    Chocos
                  </span>
                  <h4>Mixed Fruit Cocholates Organic Apple</h4>
                  {/* PRICE  */}
                  <div className="flex justify-between">
                    <span className="font-extrabold te">$25</span>
                    <span>1 Pack</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col max-w-40 min-w-48 gap-2 cursor-pointer border rounded-xl border-gray-200 ">
                <Image
                  src="/product1.jpg"
                  alt=""
                  className="w-fit hover:p-1 self-center duration-300 h-40 md:h-50 p-3 border-b"
                  width={200}
                  height={200}
                />
                <div className="flex flex-col gap-2 py-2 px-4">
                  <span className="text-sm font-light tracking-wider text-gray-500">
                    Chocos
                  </span>
                  <h4>Mixed Fruit Cocholates Organic Apple</h4>
                  {/* PRICE  */}
                  <div className="flex justify-between">
                    <span className="font-extrabold text-xl">$25</span>
                    <span>1 Pack</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col max-w-40 min-w-48 gap-2 cursor-pointer border rounded-xl border-gray-200 ">
                <Image
                  src="/product2.jpg"
                  alt=""
                  className="w-fit hover:p-1 self-center duration-300 h-40 md:h-50 p-3 border-b"
                  width={200}
                  height={200}
                />
                <div className="flex flex-col gap-2 py-2 px-4">
                  <span className="text-sm font-light tracking-wider text-gray-500">
                    Chocos
                  </span>
                  <h4>Mixed Fruit Cocholates Organic Apple</h4>
                  {/* PRICE  */}
                  <div className="flex justify-between">
                    <span className="font-extrabold te">$25</span>
                    <span>1 Pack</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col max-w-40 min-w-48 gap-2 cursor-pointer border rounded-xl border-gray-200 ">
                <Image
                  src="/product3.jpg"
                  alt=""
                  className="w-fit hover:p-1 self-center duration-300 h-40 md:h-50 p-3 border-b"
                  width={200}
                  height={200}
                />
                <div className="flex flex-col gap-2 py-2 px-4">
                  <span className="text-sm font-light tracking-wider text-gray-500">
                    Chocos
                  </span>
                  <h4>Mixed Fruit Cocholates Organic Apple</h4>
                  {/* PRICE  */}
                  <div className="flex justify-between">
                    <span className="font-extrabold te">$25</span>
                    <span>1 Pack</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default page;

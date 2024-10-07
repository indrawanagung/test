import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <MaxWidthWrapper className="flex flex-col lg:flex-row gap-7 items-start min-h-fit my-4 md:my-10 lg:my-20 justify-start">
        <div className="flex flex-col gap-6 justify-center items-center w-full lg:w-[40%] ">
          {/* SUMMARY  */}
          <div className="flex flex-col gap-6 border border-gray-200 w-full p-5 rounded-3xl">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-3 text-gray-500 tracking-wide">
                <div className="flex justify-between">
                  <span className="text-xl tracking-wider font-medium text-gray-600">
                    Summary
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="tracking-wider  ">sub-total</span>
                  <span className="font-bold">$56</span>
                </div>
                <div className="flex justify-between">
                  <span className="tracking-wider ">Delivery Changes</span>
                  <span className="font-bold">$56</span>
                </div>
                <div className="flex justify-between">
                  <span className="tracking-wider ">Coupon Discount</span>
                  <span className="font-medium text-red-500">Apply Coupon</span>
                </div>
              </div>
              <hr />
              {/* LIST PRODUCT  */}
              <div className="flex flex-col gap-4">
                {/* PRODUCT  */}
                <div className="flex gap-1 w-full bg-slate-100 rounded-xl">
                  <div className="p-6 flex justify-between items-center">
                    <Image
                      className="w-24 h-24 rounded-xl"
                      src="/product1.jpg"
                      alt=""
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-2">
                    <h3 className="text-gray-600 text-base font-medium tracking-wider">
                      Ground Nuts Oil Pack
                    </h3>
                    <span className="text-lg font-bold text-gray-600">$15</span>
                    <div className="flex gap-1">
                      <span className="text-white bg-blue-500 px-2 py-1 rounded-xl text-sm">
                        250g
                      </span>
                      <span className="text-gray-500 text-sm px-2 py-1">
                        500g
                      </span>
                      <span className="text-gray-500 text-sm px-2 py-1">
                        1kg
                      </span>
                    </div>
                  </div>
                </div>
                {/* PRODUCT  */}
                <div className="flex gap-1 w-full bg-slate-100 rounded-xl">
                  <div className="p-6 flex justify-between items-center">
                    <Image
                      className="w-24 h-24 rounded-xl"
                      src="/product1.jpg"
                      alt=""
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-2">
                    <h3 className="text-gray-600 text-base font-medium tracking-wider">
                      Ground Nuts Oil Pack
                    </h3>
                    <span className="text-lg font-bold text-gray-600">$15</span>
                    <div className="flex gap-1">
                      <span className="text-white bg-blue-500 px-2 py-1 rounded-xl text-sm">
                        250g
                      </span>
                      <span className="text-gray-500 text-sm px-2 py-1">
                        500g
                      </span>
                      <span className="text-gray-500 text-sm px-2 py-1">
                        1kg
                      </span>
                    </div>
                  </div>
                </div>
                {/* PRODUCT  */}
                <div className="flex gap-1 w-full bg-slate-100 rounded-xl">
                  <div className="p-6 flex justify-between items-center">
                    <Image
                      className="w-24 h-24 rounded-xl"
                      src="/product1.jpg"
                      alt=""
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-2">
                    <h3 className="text-gray-600 text-base font-medium tracking-wider">
                      Ground Nuts Oil Pack
                    </h3>
                    <span className="text-lg font-bold text-gray-600">$15</span>
                    <div className="flex gap-1">
                      <span className="text-white bg-blue-500 px-2 py-1 rounded-xl text-sm">
                        250g
                      </span>
                      <span className="text-gray-500 text-sm px-2 py-1">
                        500g
                      </span>
                      <span className="text-gray-500 text-sm px-2 py-1">
                        1kg
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* DELIVERY METHOD  */}
          <div className="flex flex-col gap-6 border border-gray-200 w-full p-5 rounded-3xl">
            <div className="flex flex-col gap-3 text-gray-600">
              <span className="text-xl text-gray-600 font-medium tracking-wide">
                Delivery Method
              </span>
              <span className="text-gray-600">
                Please select the preferred shipping method to use on this
                order.
              </span>
              <div className="flex gap-14">
                <div className="flex flex-col items-start">
                  <span className="font-medium">Free Shipping</span>
                  <div className="flex gap-2">
                    <input type="radio" defaultChecked />
                    <label htmlFor="" className="text-gray-500 tracking-wider">
                      Rate - $0.00
                    </label>
                  </div>
                </div>
                <div className="flex flex-col items-start">
                  <span className="font-medium">Free Shipping</span>
                  <div className="flex gap-2">
                    <input type="radio" defaultChecked />
                    <label htmlFor="" className="text-gray-500 tracking-wider">
                      Rate - $0.00
                    </label>
                  </div>
                </div>
              </div>
              <span className="text-gray-400">
                Add Comments About Your Order
              </span>
              <textarea
                placeholder="Comments"
                className="outline-none border border-gray-200 px-2 py-1 rounded-xl text-gray-500 h-20"
              />
            </div>
          </div>
          {/* PAYMENT METHOD  */}
          <div className="flex flex-col gap-6 border border-gray-200 w-full p-5 rounded-3xl">
            <div className="flex flex-col gap-3 text-gray-600">
              <span className="text-xl text-gray-600 font-medium tracking-wide">
                Payment Method
              </span>
              <span className="text-gray-600">
                Please select the preferred shipping method to use on this
                order.
              </span>
              <div className="flex gap-10">
                <div className="flex gap-2">
                  <input type="radio" defaultChecked />
                  <label htmlFor="" className="text-gray-500 tracking-wider">
                    Cash On Delivery
                  </label>
                </div>
              </div>
              <span className="text-gray-400">
                Add Comments About Your Order
              </span>
              <textarea
                placeholder="Comments"
                className="outline-none border border-gray-200 px-2 py-1 rounded-xl text-gray-500 h-20"
              />
            </div>
          </div>
        </div>

        {/* CUSTOMER  */}
        <div className="flex flex-col gap-6 border mb-10 border-gray-200 w-full lg:w-[60%] p-5 rounded-3xl">
          <span className="text-xl text-gray-600 font-medium tracking-wide">
            Customer
          </span>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3 text-gray-500">
              <span className="text-base text-gray-600 tracking-wide">
                First Name*
              </span>
              <input
                className="px-2 py-2 border outline-none border-gray-200 rounded-lg"
                placeholder="Enter your first Name"
              />
            </div>
            <div className="flex flex-col gap-3 text-gray-500">
              <span className="text-base text-gray-600 tracking-wide">
                Last Name*
              </span>
              <input
                className="px-2 py-2 border outline-none border-gray-200 rounded-lg"
                placeholder="Enter your first Name"
              />
            </div>
            <div className="flex flex-col gap-3 text-gray-500">
              <span className="text-base text-gray-600 tracking-wide">
                Address*
              </span>
              <input
                className="px-2 py-2 border outline-none border-gray-200 rounded-lg"
                placeholder="Enter your first Name"
              />
            </div>
            <div className="flex flex-col gap-3 text-gray-500">
              <span className="text-base text-gray-600 tracking-wide">
                City*
              </span>
              <input
                className="px-2 py-2 border outline-none border-gray-200 rounded-lg"
                placeholder="Enter your first Name"
              />
            </div>
            <div className="flex flex-col gap-3 text-gray-500">
              <span className="text-base text-gray-600 tracking-wide">
                Post Code*
              </span>
              <input
                className="px-2 py-2 border outline-none border-gray-200 rounded-lg"
                placeholder="Enter your first Name"
              />
            </div>
          </div>
          <button className="px-4 py-2 text-white bg-purple-500 self-start rounded-lg">
            Place Holder
          </button>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default page;

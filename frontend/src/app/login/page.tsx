import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";

const page = () => {
  return (
    <>
      <MaxWidthWrapper>
        <div className="flex flex-col gap-5 justify-start items-center h-screen mt-24">
          <div className="flex flex-col gap-1 justify-center items-center">
            <div className="flex gap-2 text-2xl font-medium">
              <h4>Log</h4>
              <h4 className="text-purple-500">In</h4>
            </div>
            <span className="text-gray-600 font-light">Best place to buy and sell digital products</span>
          </div>
          <div className="flex flex-col gap-5 w-full md:w-[27rem] px-10 py-6 border border-gray-200 rounded-xl">
            <div className="flex flex-col gap-1 items-start">
              <h5 className="text-gray-500">Email*</h5>
              <input placeholder="Enter Your Email" className="outline-none px-3 py-2 border border-gray-200 rounded-lg text-gray-500 w-full"/>
            </div>
            <div className="flex flex-col gap-1 items-start">
              <h5 className="text-gray-500">Password*</h5>
              <input placeholder="Enter Your Password" className="outline-none px-3 py-2 border border-gray-200 rounded-lg text-gray-500 w-full"/>
            </div>
            <span className="text-gray-800">Forgot Password?</span>
            <div className="flex justify-between">
              <button className="text-white bg-purple-500 rounded-xl px-5 py-2">Login</button>
              <button className="text-purple-500 rounded-xl px-5 py-2 hover:text-black">Register</button>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default page;

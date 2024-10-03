import { CaretDown, User } from "@phosphor-icons/react/dist/ssr";
import React, { useRef, useState } from "react";
import { useOnClickOutside } from "./hooks/use-on-click-outside";
import Link from "next/link";

const DropdownUser = () => {
  return (
    <>
      <div className="group relative flex gap-2 items-center cursor-pointer">
        <User size={30} className="text-gray-400" />
        <div className="flex flex-col">
          <span className="text-sm text-gray-500 tracking-wider font-light">
            Account
          </span>
          <h3 className="text-sm font-semibold text-gray-700 tracking-wider">
            Login
          </h3>
        </div>
  
        <div className="group-hover:flex hidden absolute top-10 bg-white text-sm text-gray-500 tracking-wider w-max py-5 shadow-lg rounded-lg z-10 pl-4 pr-20 -left-4 flex-col gap-4 items-start animate-in fade-in-0 duration-400">
          <Link href="/register" className="hover:text-teal-500">Register</Link>
          <span className="hover:text-teal-500">Checkout</span>
          <Link href="/login" className="hover:text-teal-500">Login</Link>
        </div>
    
      </div>
  
    </>
  );
};

export default DropdownUser;

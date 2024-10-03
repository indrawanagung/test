import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import React, { useRef, useState } from "react";
import { useOnClickOutside } from "./hooks/use-on-click-outside";

const DropdownProducts = ({
  navRef,
  name,
}: {
  navRef: React.MutableRefObject<HTMLDivElement | null> , name : string;
}) => {
  const [isDropdownCategorySearch, setIsDropdownCategorySearch] =
    useState(false);

  useOnClickOutside(navRef, () => setIsDropdownCategorySearch(false));
  return (
    <div className="hidden lg:inline">
      <button
        onClick={() => setIsDropdownCategorySearch(!isDropdownCategorySearch)}
        className="relative group hidden lg:flex gap-2 h-10 items-center"
      ><span className="hover:text-teal-500">{name} </span>
        {/* {isDropdownCategorySearch && (
          <div className="absolute top-9 bg-white w-max py-5 shadow-lg rounded-lg z-40  pl-4 pr-20 -left-4 flex flex-col gap-4 items-start animate-in fade-in-0 duration-400">
            <span className="hover:text-teal-500">Vegetables</span>
            <span className="hover:text-teal-500">Cold Drinks</span>
            <span className="hover:text-teal-500">Fruits</span>
            <span className="hover:text-teal-500">Bakery</span>
          </div>
        )} */}
        
          <div className="group-hover:flex absolute top-10 bg-white w-max py-5 shadow-lg rounded-lg z-40  pl-4 pr-20 -left-4 hidden flex-col gap-4 items-start animate-in fade-in-0 duration-300">
            <span className="hover:text-teal-500">Vegetables</span>
            <span className="hover:text-teal-500">Cold Drinks</span>
            <span className="hover:text-teal-500">Fruits</span>
            <span className="hover:text-teal-500">Bakery</span>
          </div>
        
      </button>
    </div>
  );
};

export default DropdownProducts

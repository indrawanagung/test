import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import React, { useState } from "react";
import { useOnClickOutside } from "./hooks/use-on-click-outside";

const DropdownCategorySearch = ({
  navRef,
}: {
  navRef: React.MutableRefObject<HTMLDivElement | null>;
}) => {
  const [isDropdownCategorySearch, setIsDropdownCategorySearch] =
    useState(false);

  useOnClickOutside(navRef, () => setIsDropdownCategorySearch(false));
  return (
    <div ref={navRef} className="hidden lg:inline">
      <button
        onClick={() => setIsDropdownCategorySearch(!isDropdownCategorySearch)}
        className="relative text-sm hidden lg:flex text-gray-500 mr-4 ml-2 tracking-widest gap-2 items-center border-r"
      >
        Vegetable <CaretDown size={14} className="text-gray-500 mr-2" />
        {isDropdownCategorySearch && (
          <div className="absolute top-9  bg-white w-max py-5 shadow-lg  rounded-lg z-40  pl-4 pr-20 -left-4 flex flex-col gap-4 items-start animate-in fade-in-0 duration-400">
            <span className="hover:text-teal-500">Vegetables</span>
            <span className="hover:text-teal-500">Cold Drinks</span>
            <span className="hover:text-teal-500">Fruits</span>
            <span className="hover:text-teal-500">Bakery</span>
          </div>
        )}
      </button>
    </div>
  );
};

export default DropdownCategorySearch;

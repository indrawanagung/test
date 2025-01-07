"use client";
import {
  MagnifyingGlass,
  ShoppingCartSimple,
  SquaresFour,
  Star,
} from "@phosphor-icons/react/dist/ssr";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import { useRef, useState } from "react";
import DropdownCategorySearch from "./DropdownCategorySearch";
import RightMenuNavbar from "./Mobile/RightMenuNavbar";
import DropdownProducts from "./DropdownMenu";
import DropdownUser from "./DropdownUser";
import { CartSheet } from "./Cart/CartSheet";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const navRef = useRef<HTMLDivElement | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?name=${encodeURIComponent(searchQuery.trim())}`);
    }else {
      router.push(`/products`);
    }
  };

  return (
    <div
      ref={navRef}
      className="sticky top-0 z-50 w-full bg-white bg-opacity-70 backdrop-blur-lg transition-all"
    >
      <div className="w-full px-2 py-4">
        <MaxWidthWrapper>
          <div className="relative flex flex-col md:flex-row gap-4 w-full justify-between">
            {/* LOGO  */}
            <div className="flex justify-between gap-4 items-center">
              <a href="/">
              <Image src="/logo.png" alt="" width={130} height={180} />
              </a>
              <SquaresFour
                size={25}
                className="text-gray-500 lg:hidden ring-[1px] ring-gray-300 rounded-lg p-[2px]"
              />
            </div>
            {/* INPUT SEARCH  */}
            <form onSubmit={handleSearch} className="w-full md:w-1/2">
              <div className="flex justify-between items-center px-2 py-2 mt-1 border-[1px] border-gray-300 bg-white rounded-lg">
                {/* <DropdownCategorySearch navRef={navRef} /> */}
                <input
                  className="bg-transparent w-full tracking-wide outline-none text-sm text-gray-500 font-medium leading-loose"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <MagnifyingGlass

                  size={20}
                  className="font-light text-gray-500"
                />
              </div>
            </form>
            {/* RIGHT MENU MOBILE */}
            <RightMenuNavbar />
            {/* RIGHT MENU  */}
            <div className="self-center items-center hidden xl:flex gap-7 text-blue-500 font-light">
              <DropdownUser />
              <div className="flex gap-2 items-center">
                <Star size={30} className="text-gray-400" />
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500 tracking-wider font-light">
                    3 Items
                  </span>
                  <h3 className="text-sm font-semibold text-gray-700 tracking-wider">
                    Whislist
                  </h3>
                </div>
              </div>

              <CartSheet
                button={
                  <button>
                    <div className="flex gap-2 items-center">
                      <ShoppingCartSimple size={30} className="text-gray-400" />
                      <div className="flex flex-col justify-start items-start">
                        <span className="text-sm text-gray-500 tracking-wider font-light">
                          4 Items
                        </span>
                        <h3 className="text-sm font-semibold text-gray-700 tracking-wider">
                          Cart
                        </h3>
                      </div>
                    </div>
                  </button>
                }
              />
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
      <MaxWidthWrapper className="my-3 hidden lg:block">
        <div className="relative flex flex-col md:flex-row gap-9 w-full justify-start items-center">
          <SquaresFour
            size={30}
            className="text-gray-500 hidden lg:block ring-[1px] ring-gray-300 rounded-lg p-[2px]"
          />
          <Link href="/" className="text-gray-500 text-[15px] tracking-wider">
            Home
          </Link>
          <h3 className="text-gray-500 text-[15px] tracking-wider">
            <DropdownProducts name="Categories" navRef={navRef} />
          </h3>
          <h3 className="text-gray-500 text-[15px] tracking-wider">
            <DropdownProducts name="Products" navRef={navRef} />
          </h3>
          <h3 className="text-gray-500 text-[15px] tracking-wider">
            <DropdownProducts name="Pages" navRef={navRef} />
          </h3>
          <h3 className="text-gray-500 text-[15px] tracking-wider">
            <DropdownProducts name="blog" navRef={navRef} />
          </h3>
          <h3 className="text-gray-500 text-[15px] tracking-wider">
            <DropdownProducts name="Offer" navRef={navRef} />
          </h3>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Navbar;

import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import Link from "next/link";
import { CaretDown, CaretRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

const RightMenuNavbarSheet = () => {
  const [categoryOpen, setIsCategoryOpen] = useState(false);

  return (
    <div>
      <SheetContent side={"left"} className="shadow-lg">
        <div className="flex flex-col gap-7">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold tracking-widest font-sans">
              My Menu
            </h2>
            <SheetPrimitive.Close className="rounded-sm opacity-70  transition-opacity   disabled:pointer-events-none data-[state=open]:bg-secondary">
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </SheetPrimitive.Close>
          </div>
          <div className="flex flex-col gap-4 text-[14px] font-semibold tracking-widest text-gray-500">
            <Link
              href="/"
              className="py-3 pl-4 pr-10 rounded-lg border border-gray-200"
            >
              Home
            </Link>
            <Link
              href="/"
              onClick={() => setIsCategoryOpen(!categoryOpen)}
              className="flex justify-between py-3 pl-4 pr-2 rounded-lg border border-gray-200"
            >
              Categories
              {!categoryOpen ? (
                <CaretDown size={18} />
              ) : (
                <CaretRight size={18} />
              )}
            </Link>
            {categoryOpen && (
              <div className="flex flex-col gap-4">
                <Link href="/" className="pl-4 pr-10 text-sm font-medium">
                  Classic
                </Link>
                <Link href="/" className="pl-4 pr-10 text-sm font-medium">
                  Banner
                </Link>
                <Link href="/" className="pl-4 pr-10 text-sm font-medium">
                  List
                </Link>
              </div>
            )}

            <Link
              href="/"
              className="py-3 pl-4 pr-10 rounded-lg border border-gray-200"
            >
              Product
            </Link>
            <Link
              href="/"
              className="py-3 pl-4 pr-10 rounded-lg border border-gray-200"
            >
              Pages
            </Link>
            <Link
              href="/"
              className="py-3 pl-4 pr-10 rounded-lg border border-gray-200"
            >
              Blog
            </Link>
          </div>
          <div className="flex gap-2 justify-center items-center">
            <Image
              src="/fb.svg"
              alt=""
              width={42}
              height={40}
            />
            <Image
              src="/instagram.svg"
              alt=""
              width={40}
              height={40}
              className="w-9 h-10"
            />
            <Image
              src="/twitter.svg"
              alt=""
              width={25}
              height={40}
              className="w-8 h-10"
            />
            <Image
              src="/linkedin.svg"
              alt=""
              width={40}
              height={40}
              className="w-8 h-10"
            />
          </div>
        </div>
      </SheetContent>
    </div>
  );
};

export default RightMenuNavbarSheet;

import Image from "next/image";
import React from "react";
import RightMenuNavbarSheet from "./RightMenuNavbarSheet";
import {
  Sheet,
  SheetTrigger,
} from "../ui/sheet";
import { CartSheet } from "../Cart/CartSheet";

const RightMenuNavbar = () => {
  return (
    <>
      <div className="self-center items-center flex xl:hidden gap-4 text-blue-500 font-light">
        <Image src="/user.png" alt="" height={20} width={20} />

        <Image src="/star.png" alt="" height={20} width={20} />

        <CartSheet
          button={<Image src="/cart.png" alt="" height={20} width={20} />}
        />
        <Sheet>
          <SheetTrigger>
            {" "}
            <Image
              src="/menu.png"
              alt=""
              height={20}
              width={20}
              className="md:hidden mt-2"
            />
          </SheetTrigger>
          <RightMenuNavbarSheet />
        </Sheet>
      </div>
    </>
  );
};

export default RightMenuNavbar;

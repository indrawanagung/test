import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCartSimple } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

export function CartSheet({ button }: { button: JSX.Element }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        {/* TRIGGER BUTTON  */}
        {button}
      </SheetTrigger>
      {/* Overlay (background dark) */}
      <SheetOverlay className="fixed min-h-screen inset-0 bg-black bg-opacity-50 "></SheetOverlay>
      <SheetContent
        side={"right"}
        className="rounded-l-2xl min-w-[90%] md:min-w-max md:px-10 md:py-6"
      >
        <div className="flex gap-6 justify-start ">
          {/* RELATED ITEMS  */}
          <div className="flex-col gap-4 hidden md:flex">
            <span className="text-lg tracking-wider">Related Items</span>
            <div className="flex flex-col max-w-60  gap-2 cursor-pointer border rounded-xl border-gray-200 shadow-md">
              <Image
                src="/product1.jpg"
                alt=""
                className="self-center w-fit hover:p-1 duration-300 h-40 lg:h-50 p-5 border-b"
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
                  <span className="font-extrabold">$25</span>
                  <span>1 Pack</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col max-w-60 min-w-60 gap-2 cursor-pointer border rounded-xl border-gray-200 shadow-md">
              <Image
                src="/product1.jpg"
                alt=""
                className="self-center w-fit hover:p-1 duration-300 h-40 lg:h-50 p-5 border-b"
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
                  <span className="font-extrabold">$25</span>
                  <span>1 Pack</span>
                </div>
              </div>
            </div>
          </div>
          {/* MY CART  */}
          <div className="overflow-scroll w-full scrollbar-hide  md:scrollbar-x  h-screen pr-4">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <span className="text-lg tracking-wider">My Cart</span>
                <SheetClose className="font-bold text-lg text-red-500">
                  X
                </SheetClose>
              </div>

              {/* PRODUCT  */}
              <div className="flex gap-6 bg-slate-100 p-7 rounded-2xl">
                <div className="bg-white shadow-lg px-2 h-fit py-5 md:py-0 md:px-0 rounded-2xl flex items-center justify-center">
                  <Image
                    src="/product1.jpg"
                    alt=""
                    className="w-14 h-12 md:w-24 md:h-24"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="flex flex-col gap-2 text-sm">
                  <h3 className="w-20 md:w-52">Ground Nuts Oil Pack</h3>
                  <div className="flex gap-2 items-center">
                    <span className="font-bold text-base">$15 </span>
                    <span className="font-light ">x 500 g</span>
                  </div>
                  <div className="bg-white flex gap-4 w-fit p-1">
                    <span>-</span>
                    <span>1</span>
                    <span>+</span>
                  </div>
                </div>
              </div>
              {/* PRODUCT  */}
              <div className="flex gap-6 bg-slate-100 p-7 rounded-2xl">
                <div className="bg-white shadow-lg px-2 h-fit py-5 md:py-0 md:px-0 rounded-2xl flex items-center justify-center">
                  <Image
                    src="/product1.jpg"
                    alt=""
                    className="w-14 h-12 md:w-24 md:h-24"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="flex flex-col gap-2 text-sm">
                  <h3 className="w-20 md:w-52">Ground Nuts Oil Pack</h3>
                  <div className="flex gap-2 items-center">
                    <span className="font-bold text-base">$15 </span>
                    <span className="font-light ">x 500 g</span>
                  </div>
                  <div className="bg-white flex gap-4 w-fit p-1">
                    <span>-</span>
                    <span>1</span>
                    <span>+</span>
                  </div>
                </div>
              </div>
              {/* PRODUCT  */}
              <div className="flex gap-6 bg-slate-100 p-7 rounded-2xl">
                <div className="bg-white shadow-lg px-2 h-fit py-5 md:py-0 md:px-0 rounded-2xl flex items-center justify-center">
                  <Image
                    src="/product1.jpg"
                    alt=""
                    className="w-14 h-12 md:w-24 md:h-24"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="flex flex-col gap-2 text-sm">
                  <h3 className="w-20 md:w-52">Ground Nuts Oil Pack</h3>
                  <div className="flex gap-2 items-center">
                    <span className="font-bold text-base">$15 </span>
                    <span className="font-light ">x 500 g</span>
                  </div>
                  <div className="bg-white flex gap-4 w-fit p-1">
                    <span>-</span>
                    <span>1</span>
                    <span>+</span>
                  </div>
                </div>
              </div>

              {/* PRODUCT  */}
              <div className="flex gap-6 bg-slate-100 p-7 rounded-2xl">
                <div className="bg-white shadow-lg px-2 h-fit py-5 md:py-0 md:px-0 rounded-2xl flex items-center justify-center">
                  <Image
                    src="/product1.jpg"
                    alt=""
                    className="w-14 h-12 md:w-24 md:h-24"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="flex flex-col gap-2 text-sm">
                  <h3 className="w-20 md:w-52">Ground Nuts Oil Pack</h3>
                  <div className="flex gap-2 items-center">
                    <span className="font-bold text-base">$15 </span>
                    <span className="font-light ">x 500 g</span>
                  </div>
                  <div className="bg-white flex gap-4 w-fit p-1">
                    <span>-</span>
                    <span>1</span>
                    <span>+</span>
                  </div>
                </div>
              </div>
              {/* PRODUCT  */}
              <div className="flex gap-6 bg-slate-100 p-7 rounded-2xl">
                <div className="bg-white shadow-lg px-2 h-fit py-5 md:py-0 md:px-0 rounded-2xl flex items-center justify-center">
                  <Image
                    src="/product1.jpg"
                    alt=""
                    className="w-14 h-12 md:w-24 md:h-24"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="flex flex-col gap-2 text-sm">
                  <h3 className="w-20 md:w-52">Ground Nuts Oil Pack</h3>
                  <div className="flex gap-2 items-center">
                    <span className="font-bold text-base">$15 </span>
                    <span className="font-light ">x 500 g</span>
                  </div>
                  <div className="bg-white flex gap-4 w-fit p-1">
                    <span>-</span>
                    <span>1</span>
                    <span>+</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 p-2 mb-10">
                <div className="flex justify-between">
                  <span>Sub-Total :</span>
                  <span>$300.00</span>
                </div>
                <div className="flex justify-between">
                  <span>VAT (20%) :</span>
                  <span>$60.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Total:</span>
                  <span>$360.00</span>
                </div>
                <div className="flex justify-between">
                  <button className="border rounded-xl border-black px-5 py-2">
                    View Cart
                  </button>
                  <button className="text-white rounded-xl bg-purple-500 px-5 py-2">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

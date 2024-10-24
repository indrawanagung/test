import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetOverlay,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  addProductCart,
  addProductCartRequest,
  deleteProductCart,
  getAllProductCart,
  ProductCart,
} from "@/lib/fetcher/product";
import Image from "next/image";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Link from "next/link";
import { toRupiah } from "@/lib/utils";

export function CartSheet({ button }: { button: JSX.Element }) {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [cartProducts, setCartProducts] = useState<ProductCart[]>();
  const [totalPrice, setTotalPrice] = useState(0);
  const [count, setCount] = useState(0);
  const token = Cookies.get("token");

  const toggleSheet = () => {
    setIsSheetOpen((prev) => !prev);
  };

  const countTotalPrice = () => {
    let total = 50;
    cartProducts?.map(
      (product) => (total += product.Qty * product.VariationOption.Price)
    );
    setTotalPrice(total);
  };
  const fetchCartProducts = async () => {
    const response = await getAllProductCart(token!);
    if (!response.header.error) {
      setCartProducts(response.data);
      let total = 0;
      response.data?.map(
        (product) => (total += product.Qty * product.VariationOption.Price)
      );
      setTotalPrice(total);
    }
  };
  const deleteProduct = async (id: string) => {
    const response = await deleteProductCart(token!, id);
    if (!response.header.error) {
      fetchCartProducts();
      countTotalPrice();
    }
  };

  const changeStock = async (
    product: ProductCart,
    type: "Increase" | "Decrease"
  ) => {
    const request: addProductCartRequest = {
      VariationOptionID: product.VariationOptionID,
      Qty: product.Qty,
    };
    if (type == "Increase") {
      request.Qty += 1;
      const response = await addProductCart(request, token!);
    }
    if (type == "Decrease") {
      if (request.Qty - 1 > 0) {
        request.Qty -= 1;
        const response = await addProductCart(request, token!);
      }
    }
    fetchCartProducts();
    countTotalPrice();
  };
  useEffect(() => {
    if (isSheetOpen) {
      fetchCartProducts();
      countTotalPrice();
    }
  }, [isSheetOpen]);
  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetTrigger asChild>
        {/* TRIGGER BUTTON  */}
        <div onClick={toggleSheet}>{button}</div>
      </SheetTrigger>
      {/* Overlay (background dark) */}
      <SheetOverlay className="fixed min-h-screen inset-0 bg-black bg-opacity-50 "></SheetOverlay>
      <SheetContent
        side={"right"}
        className="rounded-l-2xl min-w-[90%] md:min-w-max md:px-10 md:py-6"
      >
        <div className="flex gap-6 justify-start ">
          {/* RELATED ITEMS  */}
          {cartProducts!?.length > 0 && (
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
          )}

          {/* MY CART  */}
          <div className="overflow-scroll w-full scrollbar-hide  md:scrollbar-x  h-screen pr-4">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <span className="text-lg tracking-wider">My Cart</span>
                <SheetClose className="font-bold text-lg text-red-500">
                  X
                </SheetClose>
              </div>

              {cartProducts?.map((product) => (
                <div className="flex gap-6 bg-slate-100 p-7 rounded-2xl">
                  <div className="bg-white shadow-lg px-2 h-fit py-5 md:py-0 md:px-0 rounded-2xl flex items-center justify-center">
                    <Image
                      src={
                        `${process.env.NEXT_PUBLIC_API_BASE_URL}/images/` +
                        product.VariationOption.Product.Image
                      }
                      alt=""
                      className="w-14 h-12 md:w-24 md:h-24"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="flex flex-col gap-2 text-sm">
                    <h3 className="w-full md:w-52">
                      {product.VariationOption.Product.Name}
                    </h3>
                    <div className="flex gap-2 items-center">
                      <span className="font-bold text-base">
                        {toRupiah(product.VariationOption.Price)}
                      </span>
                      <span className="font-light ">
                        x {product.VariationOption.OptionName}
                      </span>
                    </div>
                    <div className="bg-white flex gap-6 w-fit p-2 font-semibold text-base rounded-lg">
                      <button onClick={() => changeStock(product, "Decrease")}>
                        -
                      </button>
                      <span>{product.Qty}</span>
                      <button onClick={() => changeStock(product, "Increase")}>
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => deleteProduct(product.ID)}
                    className="text-red-500 text-sm font-bold"
                  >
                    Delete
                  </button>
                </div>
              ))}
              {/* PRODUCT  */}
              {cartProducts!?.length > 0 ? (
                <div className="flex flex-col gap-4 p-2 mb-10">
                  <div className="flex justify-between">
                    <span>Sub-Total :</span>
                    <span>{toRupiah(totalPrice)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Ongkir :</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total:</span>
                    <span>{toRupiah(totalPrice)}</span>
                  </div>
                  <div className="flex justify-end">
                    {/* <button className="border rounded-xl border-black px-5 py-2">
                    View Cart
                  </button> */}

                    <a
                      href="/checkout"
                      className="text-white rounded-xl bg-purple-500 px-6 py-2 flex items-center border border-purple-500 hover:bg-white hover:text-purple-500 duration-300"
                    >
                      Checkout
                    </a>
                  </div>
                </div>
              ) : (
                <div className="h-screen flex items-center">
                  Tidak ada item {":)"}
                </div>
              )}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

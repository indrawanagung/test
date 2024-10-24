"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import {
  checkout,
  CheckoutRequest,
  getAllPaymentTypes,
  getAllProductCart,
  PaymentType,
  ProductCart,
} from "@/lib/fetcher/product";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { toRupiah } from "@/lib/utils";
const page = () => {
  const router = useRouter()
  const [cartProducts, setCartProducts] = useState<ProductCart[]>();
  const [paymentTypes, setPaymentTypes] = useState<PaymentType[]>();
  const [checkoutRequest , setCheckoutRequest] = useState<CheckoutRequest>({PaymentTypeID : ""})
  const [totalPrice, setTotalPrice] = useState(0);
  const token = Cookies.get("token");

  const fetchCartProducts = async () => {
    const response = await getAllProductCart(token!);
    if (!response.header.error) {
      setCartProducts(response.data);
      let total = 0;
      response.data?.map(
        (product) => (total += product.Qty * product.VariationOption.Price)
      );
      setTotalPrice(total);
    } else {
      toast.error(response.header.message);
    }
  };

  const checkoutHandler = async(event: React.FormEvent) => {
    event.preventDefault(); // Mencegah reload halaman
    if(cartProducts!?.length < 1 || cartProducts === undefined) {
      return toast.error("tidak ada produk yang dipesan")
    }
    if(checkoutRequest.PaymentTypeID == "") {
      return toast.error("Silahkan pilih metode pembayaran")
    }
    const response = await checkout(token!, checkoutRequest)
    if(!response.header.error) {
      toast.success("Pesanan anda telah berhasil diproses")
      fetchCartProducts()
      fetchPaymentType()
      router.push("/order")
    }else {
      toast.error(response.header.message)
    }
  }

  const fetchPaymentType = async () => {
    const response = await getAllPaymentTypes(token!);
    if (!response.header.error) {
      setPaymentTypes(response.data);
    } else {
      toast.error(response.header.message);
    }
  };

  useEffect(() => {
    fetchCartProducts();
    fetchPaymentType();
  },[]);

  return (
    <>
      <MaxWidthWrapper className="flex flex-col lg:flex-row gap-7 items-start min-h-screen my-4 md:my-10 lg:my-20 justify-start">
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
                  <span className="font-bold">{toRupiah(totalPrice)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="tracking-wider ">Ongkir</span>
                  <span className="font-bold">Free</span>
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
                {cartProducts?.map((product) => (
                  <div
                    key={product.ID}
                    className="flex gap-1 w-full bg-slate-100 rounded-xl"
                  >
                    <div className="p-6 flex justify-between items-center">
                      <Image
                        className="w-24 h-24 rounded-xl"
                        src={
                          `${process.env.NEXT_PUBLIC_API_BASE_URL}/images/` +
                          product.VariationOption.Product.Image
                        }
                        alt=""
                        width={200}
                        height={200}
                      />
                    </div>
                    <div className="flex flex-col justify-center gap-2">
                      <h3 className="text-gray-600 text-base font-medium tracking-wider">
                        {product.VariationOption.Product.Name}
                      </h3>
                      <span className="text-lg font-bold text-gray-600">
                        {toRupiah(product.VariationOption.Price)}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-white bg-blue-500 px-2 py-1 rounded-xl text-sm">
                          {product.VariationOption.OptionName}
                        </span>
                        <span className="text-base text-gray-500">
                          x {product.Qty}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* DELIVERY METHOD  */}
          {/* <div className="flex flex-col gap-6 border border-gray-200 w-full p-5 rounded-3xl">
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
          </div> */}
        </div>
        <div>
          {/* PAYMENT METHOD  */}
          <form onSubmit={checkoutHandler}>
            <div className="flex flex-col gap-6 border border-gray-200 w-full p-5 rounded-3xl">
              <div className="flex flex-col gap-3 text-gray-600">
                <span className="text-xl text-gray-600 font-medium tracking-wide">
                  Payment Method
                </span>
                <span className="text-gray-600">
                  Please select the preferred shipping method to use on this
                  order.
                </span>
                <select
                  required
                  id="PaymentTypeID"
                  onChange={(e) => setCheckoutRequest({ ...checkoutRequest, PaymentTypeID: e.target.value })} 
                  className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Choose a Payment</option>
                  {paymentTypes?.map((type) => (
                     <option key={type.ID} value={type.ID}>{type.Name}</option>
                  ))}
              
                </select>
                <span className="text-gray-400">
                  Add Comments About Your Order
                </span>
                <textarea
                  placeholder="Comments"
                  className="outline-none border border-gray-200 px-2 py-1 rounded-xl text-gray-500 h-20"
                />
                <button className="px-4 py-2 hover:bg-white hover:text-purple-500 duration-300 hover:border border-purple-500 bg-purple-500 text-white rounded-xl">Order</button>
              </div>
            </div>
          </form>
        </div>

        {/* CUSTOMER  */}
        {/* <div className="flex flex-col gap-6 border mb-10 border-gray-200 w-full lg:w-[60%] p-5 rounded-3xl">
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
        </div> */}
      </MaxWidthWrapper>
    </>
  );
};

export default page;

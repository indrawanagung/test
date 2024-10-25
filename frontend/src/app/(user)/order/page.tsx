"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import {
  checkout,
  CheckoutRequest,
  getAllOrder,
  getAllPaymentTypes,
  getAllProductCart,
  Order,
  PaymentType,
  ProductCart,
} from "@/lib/fetcher/product";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { toast } from "sonner";
import { epochToDateTime, toRupiah } from "@/lib/utils";

const page = () => {
  const token = Cookies.get("token");
  const [orders, setOrders] = useState<Order[]>();
  const fetchOrders = async () => {
    const response = await getAllOrder(token!);
    if (!response.header.error) {
      setOrders(response.data);
    }
  };
  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <>
      <MaxWidthWrapper className="flex flex-col gap-7 items-center my-4 md:my-10 h-auto justify-center">
        <h3 className="text-2xl font-bold text-purple-500">Order History</h3>
        {orders?.map((order) => (
          <div
            key={order.ID}
            className="flex flex-col gap-6 justify-center items-center w-2/3"
          >
            <div className="flex flex-col gap-6 border border-gray-200 w-full p-5 rounded-3xl">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-3 text-gray-500 tracking-wide">
                  <div className="flex justify-between">
                    <span className="text-base tracking-wider font-medium text-gray-600">
                      Transaksi ID
                    </span>
                    <span className="self-end">{order.ID}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="tracking-wider  ">Total</span>
                    <span className="font-bold">{toRupiah(order.TotalPrice)}</span>
                  </div>
               
                  <div className="flex justify-between">
                    <span className="tracking-wider ">Pembayaran</span>
                    <span className="font-medium text-gray-500">
                      {order.Payment.PaymentType.Name}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="tracking-wider ">No. Pembayaran</span>
                    <span className="font-medium text-gray-500">
                      {order.Payment.AccountNumber}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="tracking-wider ">Batas Pembayaran</span>
                    <span className="font-medium text-gray-500">
                      {epochToDateTime(order.Payment.ExpiryDate)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="tracking-wider ">Alamat</span>
                    <span className="font-medium text-gray-500">
                      {order.Address.Name} {order.Address.City.city} {order.Address.PostalCode}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="tracking-wider  ">Status</span>
                    <span className="font-bold text-purple-500 ">{order.Status.Name}</span>
                  </div>
                </div>
                <hr />
                {/* LIST PRODUCT  */}
                <div className="flex flex-col gap-4">
                  {/* PRODUCT  */}
                  {order.OrderItem?.map((item) => (
                    <div
                      key={item.ID}
                      className="flex gap-1 w-full bg-slate-100 rounded-xl"
                    >
                      <div className="p-6 flex justify-between items-center">
                        <Image
                          className="w-24 h-24 rounded-xl"
                          src={
                            `${process.env.NEXT_PUBLIC_API_BASE_URL}/images/` +
                            item.VariationOption.Product.Image
                          }
                          alt=""
                          width={200}
                          height={200}
                        />
                      </div>
                      <div className="flex flex-col justify-center gap-2">
                        <h3 className="text-gray-600 text-base font-medium tracking-wider">
                          {item.VariationOption.Product.Name}
                        </h3>
                        <span className="text-lg font-bold text-gray-600">
                          {toRupiah(item.Price)}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-white bg-blue-500 px-2 py-1 rounded-xl text-sm">
                            {item.VariationOption.OptionName}
                          </span>
                          <span className="text-base text-gray-500">
                            x {item.Qty}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </MaxWidthWrapper>
    </>
  );
};

export default page;

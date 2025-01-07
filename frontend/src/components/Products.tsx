"use client";
import { getProducts, Product } from "@/lib/fetcher/product";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toRupiah } from "@/lib/utils";
import Link from "next/link";
import {  ProductAPI } from "@/lib/fetcher/products/product";
import { ProductVariation } from "@/lib/fetcher/types";

const ListProducts = () => {
  const router = useRouter();
  const [products, setProducts] = useState<ProductVariation[]>();

  const fetchProducts = async () => {
    const response = await ProductAPI.getProductVariations()
    if (response.header.error != true) {
      setProducts(response.data);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  const onClickProduct = (id: string) => {
    router.push("/products/" + id);
  };
  return (
    <>
      {products?.map((product) => (
        <Link key={product.ID} href={`products/` + product.Product.ID}>
          <div
            key={product.ID}
            data-aos="fade-up"
            className="flex flex-col max-w-56 min-w-56 gap-2 cursor-pointer border rounded-xl border-gray-200 "
          >
            <Image
              src={
                `${process.env.NEXT_PUBLIC_API_BASE_URL}/images/` +
                product.Product.Image
              }
              alt=""
              className="w-fit hover:p-1 self-center duration-300 h-44 md:h-50 p-3 border-b"
              width={200}
              height={200}
            />
            <div className="flex flex-col gap-2 py-2 px-4">
              <span className="text-sm tracking-wider text-gray-600">
                {product.Product.ProductCategory.CategoryName}
              </span>
              <h4>{product.Product.Name}</h4>
              {/* PRICE  */}
              <div className="flex justify-between">
                <span className="font-extrabold text-xl text-gray-600">
                  {toRupiah(product.Price)}
                </span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default ListProducts;

"use client";
import FilterMenu from "@/components/Filter";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import React, { Suspense, useEffect, useState } from "react";
import { toRupiah } from "@/lib/utils";
import Link from "next/link";
import {
  ProductAPI,
} from "@/lib/fetcher/products/product";
import { ProductVariation } from "@/lib/fetcher/types";
import { useSearchParams } from "next/navigation";

const ProductList = () => {
  const searchParams = useSearchParams()
  const searchQuery = searchParams.get('name')
  const [products, setProducts] = useState<ProductVariation[]>();

  const fetchProducts = async () => {
    const response = await ProductAPI.getProductVariations(searchQuery);
    if (!response.header.error) {
      setProducts(response.data);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [searchParams]);
  return (
    <>
      <MaxWidthWrapper className="mb-10 min-h-screen">
        <div className="flex flex-col lg:flex-row gap-5 p-2">
          {/* CATEGORY  */}
          <FilterMenu />

          {/* LIST PRODUCT  */}
          <div className="w-full">
            <div className="bg-slate-100 w-full mb-5 py-3 px-5 rounded-2xl flex justify-end">
              <span className="text-gray-500 text-sm lg:text-base cursor-pointer">
                Sort by {">"}
              </span>
            </div>
            <div className="flex flex-wrap gap-6">
              {products?.map((product) => (
                <Link key={product.ID} href={`products/` + product.Product.ID}>
                  <div className="flex flex-col max-w-60 min-w-60 gap-2 cursor-pointer border rounded-xl border-gray-200 ">
                    <Image
                      src={
                        `${process.env.NEXT_PUBLIC_API_BASE_URL}/images/` +
                        product.Product.Image
                      }
                      alt=""
                      className="w-fit object-cover hover:p-1 self-center duration-300 h-44 md:h-50 p-3 border-b"
                      width={200}
                      height={200}
                    />
                    <div className="flex flex-col gap-2 py-2 px-4">
                      <span className="text-sm tracking-wider text-gray-500">
                        {product.Product.ProductCategory.CategoryName}
                      </span>
                      <h4>{product.Product.Name}</h4>
                      {/* PRICE  */}
                      <div className="flex justify-between">
                        <span className="font-extrabold text-xl">
                          {toRupiah(product.Price)}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default function ProductsPage() {
  return (
    <div className="container mx-auto p-4">
      <Suspense fallback={<div>Loading...</div>}>
        <ProductList />
      </Suspense>
    </div>
  )
}

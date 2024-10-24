'use client'
import FilterMenu from "@/components/Filter";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { getProducts, Product } from "@/lib/fetcher/product";
import { toRupiah } from "@/lib/utils";
import Link from "next/link";

const page = () => {
  const token = Cookies.get("token");
  const [products, setProducts] = useState<Product[]>();

  const fetchProducts = async () => {
    const response = await getProducts();
    if (!response.header.error) {
      setProducts(response.data);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
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
                <Link href={`products/`+ product.ID}>
                <div key={product.ID} className="flex flex-col max-w-56 min-w-56 gap-2 cursor-pointer border rounded-xl border-gray-200 ">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/images/`+ product.Image}
                    alt=""
                    className="w-fit object-cover hover:p-1 self-center duration-300 h-44 md:h-50 p-3 border-b"
                    width={200}
                    height={200}
                  />
                  <div className="flex flex-col gap-2 py-2 px-4">
                    <span className="text-sm tracking-wider text-gray-500">
                      {product.ProductCategory.CategoryName}
                    </span>
                    <h4>{product.Name}</h4>
                    {/* PRICE  */}
                    <div className="flex justify-between">
                      <span className="font-extrabold text-xl">{toRupiah(product.VariationOptions[0].Price)}</span>
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

export default page;

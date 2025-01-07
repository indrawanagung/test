"use client";
import FilterMenu from "@/components/Filter";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import {
  addProductCart,
  addProductCartRequest,
  getProduct,
  ProductDetail,
} from "@/lib/fetcher/product";
import { HeartStraight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { toast } from "sonner";
import { toRupiah } from "@/lib/utils";

interface ProductPageProps {
  params: {
    id: string;
  };
}

interface productCart {
  product: ProductDetail;
  stock: number;
}

const ProductDetailPage = ({ params }: ProductPageProps) => {
  const token = Cookies.get("token");
  const { id } = params;
  const [product, setProduct] = useState<ProductDetail>();
  const [options, setOptions] = useState<string[]>([]);
  const [optionChoose, setOptionChoose] = useState(0);
  const [stock, setStock] = useState(4);

  const fetchProduct = async () => {
    const response = await getProduct(id);
    if (response.header.error != true) {
      setProduct(response.data);
    }
    setOptions(response.data.VariationOptions.map((v) => v.OptionName));
  };

  const changeStock = (action: "Increase" | "Decrease") => {
    if (action == "Increase") {
      setStock(stock + 1);
    }
    if (action == "Decrease") {
      if (stock - 1 != 0) {
        setStock(stock - 1);
      }
    }
  };

  const addToCart = async () => {
    const request: addProductCartRequest = {
      VariationOptionID: product?.VariationOptions[optionChoose].ID!,
      Qty: stock,
    };
    const response = await addProductCart(request, token!);
    if (response.header.error) {
      toast.error(response.header.message);
    } else {
      // window.location.reload()
      toast.success("Produk telah berhasil ditambahkan");
    }
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <>
      <MaxWidthWrapper className="min-h-screen mb-10">
        <div className="flex flex-col lg:flex-row gap-5 p-2">
          {/* CATEGORY  */}
          <FilterMenu />

          {/* LIST PRODUCT  */}
          <div className="flex flex-col items-center lg:flex-row gap-5">
            <Image
              src={
                `${process.env.NEXT_PUBLIC_API_BASE_URL}/images` +
                product?.Image
              }
              alt=""
              height={500}
              width={500}
              className="w-fit max-h-80 p-10 hover:p-1 duration-300 border border-gray-200 rounded-xl"
            />
            <div className="flex flex-col gap-5">
              <span className="text-2xl text-gray-600 font-medium">
                {product?.Name}
              </span>
              <span className="text-gray-600 tracking-wide font-light">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
                exercitationem ad laborum asperiores blanditiis delectus animi
                dolorum optio eligendi voluptatibus!
              </span>
              <h3 className="text-2xl font-bold text-gray-600 tracking-wide">
                {toRupiah(product?.VariationOptions[optionChoose].Price!)}
              </h3>
              <div className="flex flex-col gap-2 text-gray-400">
                <span>Closure : Hook & Loop</span>
                <span>Sole : Polyvinyl Chloride</span>
                <span>Width : Medium</span>
                <span>Outer Material : A-Grade Standard Quality</span>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="font-medium tracking-wide text-gray-700">
                  {product?.VariationOptions[0].Variation.VariationName}
                </h3>
                <div className="flex gap-2">
                  {options.map((name, index) => (
                    <div key={index}>
                      {index === optionChoose ? (
                        <button
                          onClick={() => setOptionChoose(index)}
                          className={
                            "px-4 py-1 bg-purple-500 text-white rounded-xl"
                          }
                        >
                          {name}
                        </button>
                      ) : (
                        <button
                          onClick={() => setOptionChoose(index)}
                          className={
                            "px-4 py-1 bg-white text-purple-500 border border-purple-500 rounded-xl"
                          }
                        >
                          {name}
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex gap-2 justify-center items-center text-xl border border-gray-200 py-2 px-3 rounded-xl">
                  <button
                    onClick={() => changeStock("Decrease")}
                    className="text-xl"
                  >
                    -
                  </button>
                  <input
                    type="text"
                    className="w-10 text-base text-center outline-none"
                    defaultValue={1}
                    value={stock}
                  />
                  <button
                    onClick={() => changeStock("Increase")}
                    className="text-xl"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={addToCart}
                  className="text-white bg-purple-500 px-7 py-2 rounded-xl"
                >
                  Add To Cart
                </button>
                <button className="border border-gray-200 px-2 py-1 rounded-xl">
                  <HeartStraight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default ProductDetailPage;

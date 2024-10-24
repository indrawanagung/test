'use client'
import { getProducts, Product } from '@/lib/fetcher/product';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { toRupiah } from '@/lib/utils';

const ListProducts = () => {
    const router = useRouter()
    const [products, setProducts] = useState<Product[]>();

    const fetchProducts = async () => {
      const response = await getProducts();
      if (response.header.error != true) {
        setProducts(response.data);
      }
    };
    useEffect(() => {
      fetchProducts();
    },[]);
    const onClickProduct = (id : string) => {
        router.push("/products/"+id)
    }
  return (
    <>
     {products?.map((product) => (
                <div
                  key={product.ID}
                  onClick={()=> onClickProduct(product.ID)}
                  data-aos="fade-up"
                  className="flex flex-col max-w-60 min-w-60 gap-2 cursor-pointer border rounded-xl border-gray-200 shadow-md"
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/images/`+ product.Image}
                    alt=""
                    className="w-fit hover:p-1 duration-300 h-50 p-5 border-b"
                    width={200}
                    height={200}
                  />
                  <div className="flex flex-col gap-2 py-2 px-4">
                    <span className="text-sm font-light tracking-wider text-gray-500">
                      Chocos
                    </span>
                    <h4>{product.Name}</h4>
                    {/* PRICE  */}
                    <div className="flex justify-between">
                      <span className="font-extrabold">{toRupiah(product.Price)}</span>
                      <span>{product.ProductCategory['CategoryName']}</span>
                    </div>
                  </div>
                </div>
              ))}
    </>
  )
}

export default ListProducts
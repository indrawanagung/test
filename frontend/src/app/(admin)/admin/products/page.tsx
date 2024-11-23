'use client'
import FormModal from "@/components/Admin/FormModal";
import Pagination from "@/components/Admin/Pagination";
import Table from "@/components/Admin/Table";
import TableSearch from "@/components/Admin/TableSearch";
import { role, teachersData } from "@/lib/data";
import { getAllProduct, Product } from "@/lib/fetcher/admin";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { toRupiah } from "@/lib/utils";

const columns = [
  {
    header: "Product",
    accessor: "product",
  },
  {
    header: "Price",
    accessor: "price",
    className: "hidden md:table-cell",
  },
  {
    header: "Category",
    accessor: "category",
    className: "hidden md:table-cell",
  },
  {
    header: "Status",
    accessor: "status",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const TeacherListPage = () => {
  const token = Cookies.get('token')
  const [products , setProducts] = useState<Product[]>([])

  const fetchProducts = async() => {
    const response = await getAllProduct(token!)
    if(!response.header.error) {
      setProducts(response.data)
    }
  }

  const renderRow = (item: Product) => (
    <tr
      key={item.ID}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">
        <Image
          src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/images/`+ item.Image}
          alt=""
          width={60}
          height={60}
          className="md:hidden xl:block w-14 h-14 rounded-full "
        />
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.Name}</h3>
          <p className="text-xs text-gray-500">{item?.ProductCategory.CategoryName}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{toRupiah(item.Price)}</td>
      <td className="hidden md:table-cell">{item.ProductCategory.CategoryName}</td>
      <td className="hidden md:table-cell">{item.StatusID}</td>
      {/* <td className="hidden md:table-cell">{item.Name}</td> */}
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.ID}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
              <Image src="/view.png" alt="" width={16} height={16} />
            </button>
          </Link>
          {role === "admin" && (
            // <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
            //   <Image src="/delete.png" alt="" width={16} height={16} />
            // </button>
            <FormModal table="teacher" type="delete" id={item.ID}/>
          )}
        </div>
      </td>
    </tr>
  );

  useEffect(() => {
    fetchProducts()
  } , [])

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Products</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <Link href="/admin/products/create" className="bg-purple-400 hover:bg-purple-500 text-white px-4 py-2 rounded-xl">Add Product</Link>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={products!} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default TeacherListPage;

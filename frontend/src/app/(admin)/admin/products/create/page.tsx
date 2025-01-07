"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "sonner";
import { Plus } from "@phosphor-icons/react";
import { ProductVariant } from "./ProductVariant";
import Image from "next/image";
import { ProductAPI } from "@/lib/fetcher/products/product";
import Cookies from "js-cookie";

interface VariantData {
  id: string;
  name: string;
  description: string;
  width: string;
  length: string;
  height: string;
  stock: string;
  price: string;
}

const CreateProductPage = () => {
  const router = useRouter();
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [variants, setVariants] = useState<VariantData[]>([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const token = Cookies.get("token");

  const handleAddVariant = () => {
    const newVariant: VariantData = {
      id: Math.random().toString(36).substr(2, 9), // Unique ID
      name: "",
      description: "",
      width: "",
      length: "",
      height: "",
      stock: "",
      price: "",
    };

    // Perbarui state variants dengan menambahkan varian baru
    setVariants((prevVariants) => [...prevVariants, newVariant]);
  };

  const handleRemoveVariant = (id: string) => {
    setVariants((prev) => prev.filter((variant) => variant.id !== id));
  };

  const handleUpdateVariant = (
    id: string,
    updatedVariant: Partial<VariantData>
  ) => {
    setVariants((prev) =>
      prev.map((variant) =>
        variant.id === id ? { ...variant, ...updatedVariant } : variant
      )
    );
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!productName || !productCategory || variants.length === 0) {
      toast.error("All fields are required!");
      return;
    }

    const formData = new FormData();
    const productData = {
      ProductName: productName,
      ProductCategoryID: productCategory,
      VariationOptions: variants.map((variant) => ({
        OptionName: variant.name,
        VariationID: variant.id,
        Description: variant.description,
        Width: parseFloat(variant.width),
        Height: parseFloat(variant.height),
        Length: parseFloat(variant.length),
        Stock: parseInt(variant.stock, 10),
        Price: parseFloat(variant.price),
      })),
    };

    formData.append("productData", JSON.stringify(productData));
    if (selectedFile) {
      formData.append("image", selectedFile);
    }

    try {
      const response = await ProductAPI.createProduct(formData, token!);
      if (!response.header.error) {
        toast.success("Product created successfully!");
        // router.push("/dashboard");
      } else {
        toast.error(response.header.message);
      }
    } catch (error) {
      toast.error("Failed to create product. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <div className="p-4">
        <h2 className="text-2xl font-medium tracking-wider">Add New Product</h2>
        <span className="text-gray-400">
          Best place to buy and sell digital products
        </span>
        <form onSubmit={handleSubmit} className="w-full mt-16">
          <div className="flex flex-col gap-5 w-full">
            {/* Product Name and Category */}
            <div className="flex flex-col gap-5 md:flex-row justify-between w-full">
              <div className="flex flex-col gap-2 items-start w-full">
                <h4 className="text-gray-600 font-medium">Product Name*</h4>
                <input
                  type="text"
                  placeholder="Enter product name"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="py-2 px-3 w-full border border-gray-200 rounded-lg outline-none text-gray-600"
                />
              </div>
              <div className="flex flex-col gap-2 items-start w-full">
                <h4 className="text-gray-600 font-medium">Product Category*</h4>
                <input
                  type="text"
                  placeholder="Enter product category"
                  value={productCategory}
                  onChange={(e) => setProductCategory(e.target.value)}
                  className="py-2 px-3 w-full border border-gray-200 rounded-lg outline-none text-gray-600"
                />
              </div>
            </div>
            {/* Image Upload */}
            <div className="flex items-center justify-center w-1/2">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  {preview ? (
                    <Image
                      src={preview}
                      alt="Preview"
                      width={200}
                      height={200}
                      className="rounded-md object-cover"
                    />
                  ) : (
                    <>
                      <svg
                        className="w-10 h-10 mb-3 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        ></path>
                      </svg>
                      <p className="mb-2 text-sm text-gray-500">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </>
                  )}
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                  accept="image/*"
                />
              </label>
            </div>
            {/* Variants */}
            <div className="space-y-4 mt-8">
              <div className="flex items-start justify-between">
                <h2 className="text-xl">Product Variants</h2>
                <button
                  type="button"
                  onClick={handleAddVariant}
                  className="flex items-center justify-center bg-white px-6 py-2 text-purple-500 hover:bg-white border border-purple-500 rounded-lg self-center mt-2 duration-300"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Variant
                </button>
              </div>
              <div className="space-y-4">
                {variants.map((variant) => (
                  <ProductVariant
                    key={variant.id}
                    variant={variant}
                    onRemove={() => handleRemoveVariant(variant.id)}
                    onUpdate={(updatedData) =>
                      handleUpdateVariant(variant.id, updatedData)
                    }
                  />
                ))}
              </div>
            </div>
            <button
              type="submit"
              className="text-white bg-purple-500 px-6 py-2 hover:text-purple-500 hover:bg-white border border-purple-500 rounded-lg self-center mt-2 duration-300"
            >
              Create Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProductPage;

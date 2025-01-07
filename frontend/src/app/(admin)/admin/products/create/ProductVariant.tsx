"use client";

import React from "react";
import { X } from "lucide-react";

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

interface ProductVariantProps {
  variant: VariantData;
  onRemove: () => void;
  onUpdate: (updatedData: Partial<VariantData>) => void;
}

export function ProductVariant({
  variant,
  onRemove,
  onUpdate,
}: ProductVariantProps) {
  const handleChange = (field: keyof VariantData, value: string) => {
    onUpdate({ [field]: value });
  };

  return (
    <div className="border border-purple-100">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-medium text-gray-600">Variant Details</h3>
          <div
            onClick={onRemove}
            className="text-purple-600 hover:text-purple-800 hover:bg-purple-50 cursor-pointer"
          >
            <X className="h-4 w-4" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Variant Name */}
          <div className="flex flex-col gap-2 items-start w-full">
            <h4 className="text-gray-600 font-medium">Variant Name*</h4>
            <input
              type="text"
              placeholder="Enter variant name"
              value={variant.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="py-2 px-3 w-full border border-gray-200 rounded-lg outline-none text-gray-600"
            />
          </div>

          {/* Description */}
          <div className="flex flex-col gap-2 items-start w-full">
            <h4 className="text-gray-600 font-medium">Description*</h4>
            <input
              type="text"
              placeholder="Enter description"
              value={variant.description}
              onChange={(e) => handleChange("description", e.target.value)}
              className="py-2 px-3 w-full border border-gray-200 rounded-lg outline-none text-gray-600"
            />
          </div>

          {/* Width */}
          <div className="flex flex-col gap-2 items-start w-full">
            <h4 className="text-gray-600 font-medium">Width*</h4>
            <input
              type="text"
              placeholder="Enter width"
              value={variant.width}
              onChange={(e) => handleChange("width", e.target.value)}
              className="py-2 px-3 w-full border border-gray-200 rounded-lg outline-none text-gray-600"
            />
          </div>

          {/* Length */}
          <div className="flex flex-col gap-2 items-start w-full">
            <h4 className="text-gray-600 font-medium">Length*</h4>
            <input
              type="text"
              placeholder="Enter length"
              value={variant.length}
              onChange={(e) => handleChange("length", e.target.value)}
              className="py-2 px-3 w-full border border-gray-200 rounded-lg outline-none text-gray-600"
            />
          </div>

          {/* Height */}
          <div className="flex flex-col gap-2 items-start w-full">
            <h4 className="text-gray-600 font-medium">Height*</h4>
            <input
              type="text"
              placeholder="Enter height"
              value={variant.height}
              onChange={(e) => handleChange("height", e.target.value)}
              className="py-2 px-3 w-full border border-gray-200 rounded-lg outline-none text-gray-600"
            />
          </div>

          {/* Stock */}
          <div className="flex flex-col gap-2 items-start w-full">
            <h4 className="text-gray-600 font-medium">Stock*</h4>
            <input
              type="text"
              placeholder="Enter stock"
              value={variant.stock}
              onChange={(e) => handleChange("stock", e.target.value)}
              className="py-2 px-3 w-full border border-gray-200 rounded-lg outline-none text-gray-600"
            />
          </div>

          {/* Price */}
          <div className="flex flex-col gap-2 items-start w-full">
            <h4 className="text-gray-600 font-medium">Price*</h4>
            <input
              type="text"
              placeholder="Enter price"
              value={variant.price}
              onChange={(e) => handleChange("price", e.target.value)}
              className="py-2 px-3 w-full border border-gray-200 rounded-lg outline-none text-gray-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

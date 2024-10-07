import React from "react";

const FilterMenu = () => {
  return (
    <div className="bg-slate-100 w-full lg:w-[30%] rounded-3xl p-6 flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <span className="text-xl tracking-wide text-gray-700">Category</span>
        <div className="flex flex-col gap-2 tracking-wide">
          <div className="flex items-center">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-black rounded-full"
            />
            <label
              htmlFor="default-checkbox"
              className="ms-2 text-sm font-medium text-gray-500 dark:text-gray-300"
            >
              Clothes
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-black rounded-full "
            />
            <label
              htmlFor="default-checkbox"
              className="ms-2 text-sm font-medium text-gray-500 dark:text-gray-300"
            >
              Bags
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-black rounded-full "
            />
            <label
              htmlFor="default-checkbox"
              className="ms-2 text-sm font-medium text-gray-500 dark:text-gray-300"
            >
              Shoes
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-black rounded-full "
            />
            <label
              htmlFor="default-checkbox"
              className="ms-2 text-sm font-medium text-gray-500 dark:text-gray-300"
            >
              Cosmetics
            </label>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-xl tracking-wide text-gray-700">Weight</span>
        <div className="flex flex-col gap-2 tracking-wide">
          <div className="flex items-center">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-black rounded-full "
            />
            <label
              htmlFor="default-checkbox"
              className="ms-2 text-sm font-medium text-gray-500 dark:text-gray-300 w-full"
            >
              200gm Packs
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-black rounded-full "
            />
            <label
              htmlFor="default-checkbox"
              className="ms-2 text-sm font-medium text-gray-500 dark:text-gray-300"
            >
              500gm Packs
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterMenu

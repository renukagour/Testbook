/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const HomeSectionCard = ({ product }) => {
  return (
    //  w-[15rem] my-3
    <div
      className="cursor-pointer flex flex-col items-center bg-white rounded-lg 
    shadow-lg overflow-hidden w-[15rem] mx-3 border"
    >
      <div className="h-[13rem] w-[15rem]">
        <img
          className="object-cover object-top w-full h-full " //object-cover to get full img if img will cut it cut not by top
          src={product.imageUrl}
          alt=""
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">{product.brand}</h3>
        <p className="mt-2 text-sm text-gray-500">
          {product.title}
        </p>
      </div>
    </div>
  );
};

export default HomeSectionCard;

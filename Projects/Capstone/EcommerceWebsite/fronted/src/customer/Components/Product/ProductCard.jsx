/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

const ProductCard = ({product}) => {
  const navigate=useNavigate();

  const handleNavigate = () => {
    navigate(`/product/${product?._id}`);
  }
  
  return (
    <div onClick={handleNavigate} className="productCard w-[15rem] m-3 transition-all cursor-pointer">
      <div className="h-[15rem]">
        <img
          className="h-full w-full object-cover object-left-top"
          src={product.imageUrl}
          alt=""
        />
      </div>

      <div className="textPart bg-white p-3">
        <div>
          <p className="font-bold opacity-60 ">{product.brand}</p>
          <p>{product.title}</p>
        </div>
        <div className="flex items-center space-x-2">
          {/* price */}
          <p className="font-semibold">{product.discountedPrice}</p>
          {/* real price  */}
          <p className="line-through opacity-50">{product.price}</p>
          {/* discount */}
          <p className="text-green-600 font-semibold">{product.discountPercent}% off</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

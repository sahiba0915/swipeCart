import React from "react";

const ProductCard = ({ product }) => {
  const { image, name, brand, currentPrice, originalPrice, discountPercent } =
    product;

  return (
    <div className="w-72 max-w-sm bg-white rounded-2xl shadow-xl overflow-hidden p-4 flex flex-col gap-3 cursor-pointer">
      {/* Product Image */}
      <div className="w-full h-full bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
        <img src={image} alt={name} className="object-fit h-full w-full" />
      </div>

      {/* Product Info */}
      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
          {name}
        </h2>
        <p className="text-sm text-gray-500">{brand}</p>
      </div>

      {/* Price Section */}
      <div className="flex items-center gap-2">
        <span className="text-lg font-bold text-green-600">
          ₹{currentPrice}
        </span>
        {originalPrice && (
          <span className="text-sm text-gray-400 line-through">
            ₹{originalPrice}
          </span>
        )}
        {discountPercent && (
          <span className="text-sm text-red-500 font-medium">
            {discountPercent}% off
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;

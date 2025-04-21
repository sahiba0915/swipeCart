import React from "react";

const ProductCard = ({ product }) => {
  const { image, name, brand, currentPrice, originalPrice, discountPercent } =
    product;

  function capitalizeFirstLetters(str) {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  }

  return (
    <div className="w-72 max-w-sm bg-white rounded-2xl shadow-xl overflow-hidden p-4 flex flex-col gap-3 cursor-pointer">
      {/* Product Image + Swipe Hints on Hover */}
      <div className="relative group w-full h-full bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
        <img src={image} alt={name} className="object-cover h-full w-full" />

        {/* Swipe Hints Overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none text-white text-xs font-semibold">
          <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-black/50 px-3 py-1 rounded-xl">
            ↑ Add to Cart
          </div>
          <div className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 px-3 py-1 rounded-xl">
            ← Pass
          </div>
          <div className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 px-3 py-1 rounded-xl">
            Like →
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
          {capitalizeFirstLetters(name)}
        </h2>
        <p className="text-sm text-gray-500">{capitalizeFirstLetters(brand)}</p>
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

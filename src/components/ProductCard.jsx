import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="w-[90%] max-w-sm bg-white rounded-2xl shadow-xl overflow-hidden p-4">
      <img src={product.imageUrl} alt={product.name} className="rounded-xl object-cover h-64 w-full" />
      <div className="mt-4">
        <h3 className="text-lg font-bold capitalize">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-1">{product.brand}</p>
        <div className="flex items-center space-x-2">
          <span className="text-xl font-semibold text-pink-600">₹{product.price}</span>
          {product.discountPercentage > 0 && (
            <>
              <span className="text-gray-400 line-through text-sm">₹{product.originalPrice}</span>
              <span className="text-green-600 text-sm">{product.discountPercentage}% off</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

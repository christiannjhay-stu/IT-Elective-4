import React from "react";

const ProductCard = ({ product }) => {
  const handleAdd = () => {
    product.quantity += 1;
  };

  const handleSubtract = () => {
    if (product.quantity > 0) {
      product.quantity -= 1;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={product.image} alt={product.name} className="w-full h-48" />
      <div className="p-4">
        <div className="font-bold text-lg mb-2">{product.name}</div>
        <p className="text-gray-700 text-base">{product.category}</p>
        <div className="flex justify-between items-center mt-4">
          <div className="font-bold text-xl">${product.price}</div>
          <div className="flex">
            <button
              className="bg-gray-200 text-gray-700 rounded-full h-8 w-8"
              onClick={handleSubtract}
            >
              -
            </button>
            <span className="mx-2">{product.quantity}</span>
            <button
              className="bg-blue-500 text-white rounded-full h-8 w-8"
              onClick={handleAdd}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

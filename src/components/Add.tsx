'use client';
import React, { useState } from 'react';

const Add: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(1);
  const maxQuantity = 4;

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(prev => prev - 1);
  };

  const handleIncrease = () => {
    if (quantity < maxQuantity) setQuantity(prev => prev + 1);
  };

  return (
    <div className="flex flex-col gap-4 p-4 rounded-md bg-white shadow-md w-full max-w-md">
      <h4 className="text-lg font-semibold text-gray-800">Choose Quantity</h4>

      <div className="flex justify-between items-center flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 py-2 px-4 rounded-full flex items-center justify-between w-32 text-lg">
            <button
              onClick={handleDecrease}
              disabled={quantity === 1}
              className="text-xl px-2 disabled:opacity-30"
            >
              −
            </button>
            <span className="mx-2">{quantity}</span>
            <button
              onClick={handleIncrease}
              disabled={quantity === maxQuantity}
              className="text-xl px-2 disabled:opacity-30"
            >
              +
            </button>
          </div>
          <p className="text-xs text-gray-500">
            {maxQuantity - quantity} item(s) left!
          </p>
        </div>

        <button
          disabled={quantity > maxQuantity}
          className="w-36 text-sm rounded-full ring-1 ring-[#F35C7A] text-[#F35C7A] py-2 px-4 transition hover:bg-[#F35C7A] hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:text-white"
        >
          Add to Item Cart
        </button>
      </div>
    </div>
  );
};

export default Add;

import React from 'react';
import Image from 'next/image';

type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};


const CartModal: React.FC = () => {
  const cartItems: CartItem[] = [
    {
      id: 1,
      name: 'Product A',
      price: 29.99,
      image: '/product-a.jpg',
      quantity: 1,
    },
    {
      id: 2,
      name: 'Product B',
      price: 45.0,
      image: '/product-b.jpg',
      quantity: 2,
    },
  ];

  const total: number = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="w-80 absolute p-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md bg-white top-16 right-4 flex flex-col gap-4 z-20">
      <h2 className="text-lg font-semibold border-b pb-2">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col gap-3 max-h-60 overflow-y-auto">
          {cartItems.map((item: CartItem) => (
            <div key={item.id} className="flex items-center gap-4 border-b pb-2">
              <Image
                src={item.image}
                alt={item.name}
                width={50}
                height={50}
                className="rounded-md"
              />
              <div className="flex-1">
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
              </div>
              <div className="text-sm font-semibold">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="border-t pt-3 flex justify-between items-center">
        <span className="font-semibold">Total:</span>
        <span className="font-bold text-green-600">${total.toFixed(2)}</span>
      </div>

      <button className="mt-2 bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition-all">
        Checkout
      </button>
    </div>
  );
};

export default CartModal;

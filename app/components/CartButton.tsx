'use client';

import React, { useState } from 'react';
import { BsCart3 } from 'react-icons/bs';
import { useCart } from '../context/CartContext';
import Cart from './Cart';

export default function CartButton() {
  const [isOpen, setIsOpen] = useState(false);
  const { state } = useCart();

  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative link flex items-center"
      >
        <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
          {itemCount}
        </span>
        <BsCart3 className="h-8 w-8" />
        <p className="hidden md:inline font-extrabold md:text-sm mt-2">カート</p>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-96 z-50">
          <Cart />
        </div>
      )}
    </div>
  );
} 
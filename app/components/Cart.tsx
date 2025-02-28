'use client';

import React from 'react';
import Image from 'next/image';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { state, dispatch } = useCart();

  const total = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">ショッピングカート</h2>
      
      {state.items.length === 0 ? (
        <p className="text-gray-500">カートは空です</p>
      ) : (
        <>
          {state.items.map((item) => (
            <div key={item.id} className="flex items-center py-4 border-b">
              <div className="relative h-20 w-20 flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>
              
              <div className="flex-grow ml-4">
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-gray-600">¥{item.price.toLocaleString()}</p>
                
                <div className="flex items-center mt-2">
                  <button
                    onClick={() =>
                      dispatch({
                        type: 'UPDATE_QUANTITY',
                        payload: { id: item.id, quantity: Math.max(0, item.quantity - 1) },
                      })
                    }
                    className="px-2 py-1 border rounded-l"
                  >
                    -
                  </button>
                  <span className="px-4 py-1 border-t border-b">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() =>
                      dispatch({
                        type: 'UPDATE_QUANTITY',
                        payload: { id: item.id, quantity: item.quantity + 1 },
                      })
                    }
                    className="px-2 py-1 border rounded-r"
                  >
                    +
                  </button>
                  
                  <button
                    onClick={() =>
                      dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })
                    }
                    className="ml-4 text-red-500 hover:text-red-700"
                  >
                    削除
                  </button>
                </div>
              </div>
              
              <div className="ml-4">
                <p className="font-bold">
                  ¥{(item.price * item.quantity).toLocaleString()}
                </p>
              </div>
            </div>
          ))}
          
          <div className="mt-6">
            <div className="flex justify-between text-xl font-bold">
              <span>合計</span>
              <span>¥{total.toLocaleString()}</span>
            </div>
            <button className="w-full mt-4 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded">
              レジに進む
            </button>
          </div>
        </>
      )}
    </div>
  );
} 
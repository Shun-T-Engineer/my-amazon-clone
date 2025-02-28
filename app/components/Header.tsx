'use client';

import React from 'react';
import { BsSearch } from 'react-icons/bs';
import CartButton from './CartButton';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-black text-white sticky top-0 z-50">
      {/* Top Header */}
      <div className="flex items-center p-2 flex-grow">
        {/* Logo */}
        <Link href="/" className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <span className="text-2xl font-bold cursor-pointer px-4">
            Amazon Clone
          </span>
        </Link>

        {/* Search */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4 text-black"
            type="text"
            placeholder="検索"
          />
          <div className="h-10 p-3 bg-yellow-400 hover:bg-yellow-500">
            <BsSearch className="h-4 w-4" />
          </div>
        </div>

        {/* Right */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="link">
            <p>アカウント</p>
            <p className="font-extrabold md:text-sm">サインイン</p>
          </div>

          <div className="link">
            <p>返品・</p>
            <p className="font-extrabold md:text-sm">注文履歴</p>
          </div>

          <CartButton />
        </div>
      </div>

      {/* Bottom Header */}
      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon-light text-white text-sm">
        <p className="link flex items-center">
          <span>すべて</span>
        </p>
        <p className="link">プライム</p>
        <p className="link">タイムセール</p>
        <p className="link">ギフト券</p>
        <p className="link hidden lg:inline-flex">本</p>
        <p className="link hidden lg:inline-flex">食品・飲料</p>
        <p className="link hidden lg:inline-flex">ファッション</p>
      </div>
    </header>
  );
};

export default Header; 
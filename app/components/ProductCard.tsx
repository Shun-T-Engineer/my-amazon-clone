import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsStarFill } from 'react-icons/bs';

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  rating: number;
  image: string;
  description?: string;
}

const ProductCard = ({ id, title, price, rating, image, description }: ProductCardProps) => {
  return (
    <Link href={`/product/${id}`} className="block">
      <div className="relative flex flex-col m-5 bg-white z-30 p-10 growing-hover">
        <p className="absolute top-2 right-2 text-xs italic text-gray-400">カテゴリー</p>

        <Image
          src={image}
          height={200}
          width={200}
          alt={title}
          className="object-contain w-full h-48"
        />

        <h4 className="my-3 line-clamp-2">{title}</h4>

        <div className="flex">
          {Array(rating)
            .fill(null)
            .map((_, i) => (
              <BsStarFill key={i} className="h-5 text-yellow-500" />
            ))}
        </div>

        <div className="mb-5 mt-2">
          <p className="text-xl font-bold">¥{price.toLocaleString()}</p>
        </div>

        {description && (
          <p className="text-xs mt-2 line-clamp-2 text-gray-600">{description}</p>
        )}

        <button className="mt-auto button">カートに追加</button>
      </div>
    </Link>
  );
};

export default ProductCard; 
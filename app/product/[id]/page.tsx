'use client';

import React from 'react';
import Image from 'next/image';
import { BsStarFill } from 'react-icons/bs';
import Header from '../../components/Header';
import { useCart } from '../../context/CartContext';

// 商品データ
const productsData = {
  "1": {
    id: "1",
    title: "新型ワイヤレスイヤホン",
    price: 15800,
    rating: 4,
    image: "/images/sample-product.jpg",
    description: "高音質・長時間バッテリー・ノイズキャンセリング機能搭載の最新型ワイヤレスイヤホン。防水機能も備えており、スポーツ時の使用も安心です。",
    features: [
      "ノイズキャンセリング機能",
      "最大24時間再生",
      "IPX7防水",
      "Bluetooth 5.2対応"
    ]
  },
  "2": {
    id: "2",
    title: "スマートウォッチ 最新モデル",
    price: 29800,
    rating: 5,
    image: "/images/sample-product.jpg",
    description: "最新のセンサーを搭載し、より正確な健康管理が可能になった次世代スマートウォッチ。スマートフォンとの連携機能も強化されています。",
    features: [
      "心拍数モニター",
      "睡眠トラッキング",
      "防水機能",
      "最大7日間のバッテリー持続"
    ]
  },
  "3": {
    id: "3",
    title: "4Kウルトラワイドモニター",
    price: 54800,
    rating: 4,
    image: "/images/sample-product.jpg",
    description: "34インチの大画面で作業効率を大幅に向上。クリエイターやゲーマーに最適な高性能ディスプレイです。",
    features: [
      "34インチ曲面パネル",
      "HDR1000対応",
      "144Hz高リフレッシュレート",
      "G-SYNC対応"
    ]
  },
  "4": {
    id: "4",
    title: "ゲーミングキーボード",
    price: 12800,
    rating: 3,
    image: "/images/sample-product.jpg",
    description: "高品質なメカニカルスイッチを採用し、快適なタイピング感と耐久性を実現したゲーミングキーボード。",
    features: [
      "メカニカルスイッチ",
      "RGBバックライト",
      "マクロキー搭載",
      "耐久性10000万回クリック"
    ]
  }
};

// 商品データ取得関数
const getProductById = (id: string) => {
  return productsData[id as keyof typeof productsData] || null;
};

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id);
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    if (product) {
      dispatch({
        type: 'ADD_TO_CART',
        payload: {
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
        },
      });
    }
  };

  if (!product) {
    return (
      <div className="bg-gray-100 min-h-screen">
        <Header />
        <main className="max-w-screen-xl mx-auto p-4 md:p-8">
          <div className="bg-white p-6 md:p-10 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-red-600">商品が見つかりません</h1>
            <p className="mt-4">指定された商品は存在しないか、削除された可能性があります。</p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      
      <main className="max-w-screen-xl mx-auto p-4 md:p-8">
        <div className="bg-white p-6 md:p-10 rounded-lg shadow-md">
          <div className="grid md:grid-cols-2 gap-8">
            {/* 商品画像 */}
            <div className="relative h-[400px] bg-white">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain"
              />
            </div>

            {/* 商品情報 */}
            <div className="flex flex-col">
              <h1 className="text-2xl md:text-3xl font-bold mb-4">{product.title}</h1>
              
              <div className="flex items-center mb-4">
                {Array(product.rating)
                  .fill(null)
                  .map((_, i) => (
                    <BsStarFill key={i} className="h-5 text-yellow-500" />
                  ))}
                <span className="ml-2 text-gray-500">({product.rating})</span>
              </div>

              <div className="border-t border-b py-4 my-4">
                <p className="text-3xl font-bold">¥{product.price.toLocaleString()}</p>
                <p className="text-sm text-gray-500 mt-1">送料無料</p>
              </div>

              <p className="text-gray-700 mb-6">{product.description}</p>

              <div className="mb-6">
                <h3 className="font-bold mb-2">主な特徴：</h3>
                <ul className="list-disc list-inside space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index} className="text-gray-700">{feature}</li>
                  ))}
                </ul>
              </div>

              <button 
                onClick={handleAddToCart}
                className="button w-full md:w-auto md:px-10"
              >
                カートに追加
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 
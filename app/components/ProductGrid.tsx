import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = () => {
  // サンプルデータ
  const products = [
    {
      id: "1",
      title: "新型ワイヤレスイヤホン",
      price: 15800,
      rating: 4,
      image: "/images/sample-product.jpg",
      description: "高音質・長時間バッテリー・ノイズキャンセリング機能搭載"
    },
    {
      id: "2",
      title: "スマートウォッチ 最新モデル",
      price: 29800,
      rating: 5,
      image: "/images/sample-product.jpg",
      description: "心拍数モニター・睡眠トラッキング・防水機能搭載"
    },
    {
      id: "3",
      title: "4Kウルトラワイドモニター",
      price: 54800,
      rating: 4,
      image: "/images/sample-product.jpg",
      description: "34インチ曲面ディスプレイ・HDR対応・高リフレッシュレート"
    },
    {
      id: "4",
      title: "ゲーミングキーボード",
      price: 12800,
      rating: 3,
      image: "/images/sample-product.jpg",
      description: "メカニカルスイッチ・RGBバックライト・マクロキー搭載"
    },
  ];

  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          rating={product.rating}
          image={product.image}
          description={product.description}
        />
      ))}
    </div>
  );
};

export default ProductGrid; 
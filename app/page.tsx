import Header from './components/Header';
import ProductGrid from './components/ProductGrid';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Header />

      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        <div className="relative">
          <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
          <div className="relative">
            <Image
              src="/images/banner.jpg"
              alt="Amazon Banner"
              width={1500}
              height={600}
              className="w-full h-[300px] object-cover"
            />
          </div>
        </div>

        {/* Product Grid */}
        <ProductGrid />
      </main>

      {/* Footer */}
      <footer className="bg-amazon-blue-light text-white text-center p-4 mt-10">
        <p>© 2024 Amazon Clone. All rights reserved.</p>
      </footer>
    </div>
  );
}

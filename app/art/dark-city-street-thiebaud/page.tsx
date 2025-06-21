import Image from "next/image";
import Link from "next/link";

export default function DarkCityStreetPage() {
  return (
    <main className="p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] max-w-4xl mx-auto">
      <Link href="/" className="text-blue-600 hover:underline">
        ← Back to home
      </Link>
      <article className="mt-8">
        <h1 className="text-4xl font-bold mb-4">
          Day Streets, by Wayne Thiebaud
        </h1>
        <Image
          src="https://shop.famsf.org/cdn/shop/files/DP-515436-1114F_1024x1024.jpg?v=1742498056"
          alt="Day Streets by Wayne Thiebaud"
          width={800}
          height={600}
          priority
          className="mt-8"
        />
        <p className="text-sm mt-2 text-gray-500">
          Source:{" "}
          <a
            href="https://shop.famsf.org/products/wayne-thiebaud-dark-city-street-1988-2021"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            FAMSF Shop
          </a>
        </p>
      </article>
    </main>
  );
} 
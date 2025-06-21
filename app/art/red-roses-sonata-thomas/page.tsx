import Image from "next/image";
import Link from "next/link";

export default function RedRosesSonataPage() {
  return (
    <main className="p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] max-w-4xl mx-auto">
      <Link href="/" className="text-blue-600 hover:underline">
        ← Back to home
      </Link>
      <article className="mt-8">
        <h1 className="text-4xl font-bold mb-4">
          Red Roses Sonata, by Alma Thomas
        </h1>
        <Image
          src="https://news.artnet.com/app/news-upload/2016/09/72_58_thomasa_1140-843x1024.jpg"
          alt="Red Roses Sonata by Alma Thomas"
          width={800}
          height={800}
          priority
          className="mt-8"
        />
        <p className="text-sm mt-2 text-gray-500">
          Source:{" "}
          <a
            href="https://news.artnet.com/market/alma-thomas-barack-obama-white-house-679778"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Artnet News
          </a>
        </p>
      </article>
    </main>
  );
} 
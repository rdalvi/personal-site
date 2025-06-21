import Image from "next/image";
import Link from "next/link";

export default function DarkerRoomsPage() {
  return (
    <main className="p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] max-w-4xl mx-auto">
      <Link href="/" className="text-blue-600 hover:underline">
        ← Back to home
      </Link>
      <article className="mt-8">
        <h1 className="text-4xl font-bold mb-4">
          Darker Rooms, by Jenna Barton
        </h1>
        <Image
          src="https://prod-cdn-07.storenvy.com/product_photos/77853112/file_b9c0191bf7_large.jpg"
          alt="Darker Rooms by Jenna Barton"
          width={520}
          height={520}
          priority
          className="mt-8 mx-auto"
        />
        <p className="text-sm mt-2 text-gray-500">
          Source:{" "}
          <a
            href="https://www.jenna-barton.com/darker-rooms"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            jenna-barton.com
          </a>
        </p>
      </article>
    </main>
  );
} 
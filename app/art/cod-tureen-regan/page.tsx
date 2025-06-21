import Image from "next/image";
import Link from "next/link";

export default function CodTureenPage() {
  return (
    <main className="p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] max-w-4xl mx-auto">
      <Link href="/" className="text-blue-600 hover:underline">
        ← Back to home
      </Link>
      <article className="mt-8">
        <h1 className="text-4xl font-bold mb-4">
          Cod Tureen, by David Regan
        </h1>
        <Image
          src="https://annesart.wordpress.com/wp-content/uploads/2010/11/img_5627.jpg"
          alt="Cod Tureen by David Regan"
          width={800}
          height={600}
          priority
          className="mt-8"
        />
        <p className="text-sm mt-2 text-gray-500">
          Source:{" "}
          <a
            href="https://annesart.wordpress.com/2010/11/17/david-regan-at-ferrin-gallery/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Anne's Art
          </a>
        </p>
      </article>
    </main>
  );
} 
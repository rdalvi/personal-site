import Image from "next/image";
import Link from "next/link";

export default function DandelionFabergePage() {
  return (
    <main className="p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] max-w-4xl mx-auto">
      <Link href="/" className="text-blue-600 hover:underline">
        ← Back to home
      </Link>
      <article className="mt-8">
        <h1 className="text-4xl font-bold mb-4">
          Dandelion, by Fabergé
        </h1>
        <Image
          src="https://vmfa.museum/pcollections/wp-content/uploads/sites/4/2015/01/47-20-37_T-2048x2048.jpg"
          alt="Dandelion by Fabergé"
          width={800}
          height={800}
          priority
          className="mt-8"
        />
        <p className="text-sm mt-2 text-gray-500">
          Source:{" "}
          <a
            href="https://vmfa.museum/pcollections/collections/dandelion/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Virginia Museum of Fine Arts
          </a>
        </p>
      </article>
    </main>
  );
} 
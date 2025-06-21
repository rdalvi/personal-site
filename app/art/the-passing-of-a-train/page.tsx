import Image from "next/image";
import Link from "next/link";

export default function ThePassingOfATrainPage() {
  return (
    <main className="p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] max-w-4xl mx-auto">
      <Link href="/" className="text-blue-600 hover:underline">
        ← Back to home
      </Link>
      <article className="mt-8">
        <h1 className="text-4xl font-bold mb-4">
          The Passing of a Train, by Giuseppe De Nittis
        </h1>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Giuseppe_de_Nittis_-_Passa_il_treno.jpg"
          alt="The Passing of a Train by Giuseppe De Nittis"
          width={800}
          height={660}
          priority
          className="mt-8"
        />
        <p className="text-sm mt-2 text-gray-500">
          Source:{" "}
          <a
            href="https://commons.wikimedia.org/wiki/File:Giuseppe_de_Nittis_-_Passa_il_treno.jpg"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wikimedia Commons
          </a>
        </p>
      </article>
    </main>
  );
} 
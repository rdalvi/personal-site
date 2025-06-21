import Image from "next/image";
import Link from "next/link";

export default function CharlesEthanPorterPage() {
  return (
    <main className="p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] max-w-4xl mx-auto">
      <Link href="/" className="text-blue-600 hover:underline">
        ← Back to home
      </Link>
      <article className="mt-8">
        <h1 className="text-4xl font-bold mb-4">
          Peonies in a Vase, by Charles Ethan Porter
        </h1>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Charles_Ethan_Porter_-_Peonies_in_a_Vase_-_2018.44.124_-_National_Gallery_of_Art.jpg"
          alt="Peonies in a Vase by Charles Ethan Porter"
          width={500}
          height={600}
          priority
          className="mt-8"
        />
        <p className="text-sm mt-2 text-gray-500">
          Source:{" "}
          <a
            href="https://commons.wikimedia.org/wiki/File:Charles_Ethan_Porter_-_Peonies_in_a_Vase_-_2018.44.124_-_National_Gallery_of_Art.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Wikimedia Commons
          </a>
        </p>
      </article>
    </main>
  );
} 
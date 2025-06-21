import Image from "next/image";
import Link from "next/link";

export default function CircusHorsePage() {
  return (
    <main className="p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] max-w-4xl mx-auto">
      <Link href="/" className="text-blue-600 hover:underline">
        ← Back to home
      </Link>
      <article className="mt-8">
        <h1 className="text-4xl font-bold mb-4">
          Circus Horse, by Joan Miró
        </h1>
        <Image
          src="https://successiomiro.com/x/imagen/wh/2064f26172e00a892b4076fd302fb8af.jpg"
          alt="Circus Horse by Joan Miró"
          width={800}
          height={1000}
          priority
          className="mt-8"
        />
        <p className="text-sm mt-2 text-gray-500">
          Source:{" "}
          <a
            href="https://www.metmuseum.org/art/collection/search/490209"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            The Metropolitan Museum of Art
          </a>
        </p>
      </article>
    </main>
  );
} 
import Image from "next/image";
import Link from "next/link";

export default function GoldScabPage() {
  return (
    <main className="p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] max-w-4xl mx-auto">
      <Link href="/" className="text-blue-600 hover:underline">
        ← Back to home
      </Link>
      <article className="mt-8">
        <h1 className="text-4xl font-bold mb-4">
          The Gold Scab, by James McNeill Whistler
        </h1>
        <Image
          src="https://uploads7.wikiart.org/images/james-mcneill-whistler/the-gold-scab.jpg!Large.jpg"
          alt="The Gold Scab by James McNeill Whistler"
          width={520}
          height={390}
          priority
          className="mt-8 mx-auto"
        />
        <p className="text-sm mt-2 text-gray-500">
          Source:{" "}
          <a
            href="https://www.wikiart.org/en/james-mcneill-whistler/the-gold-scab"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            WikiArt
          </a>
        </p>
      </article>
    </main>
  );
} 
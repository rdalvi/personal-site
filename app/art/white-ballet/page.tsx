import Image from "next/image";
import Link from "next/link";

export default function WhiteBalletPage() {
  return (
    <main className="p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] max-w-4xl mx-auto">
      <Link href="/" className="text-blue-600 hover:underline">
        ← Back to home
      </Link>
      <article className="mt-8">
        <h1 className="text-4xl font-bold mb-4">
          The White Ballet, by Everett Shinn
        </h1>
        <Image
          src="https://ids.si.edu/ids/deliveryService?id=SAAM-2004.4_1"
          alt="The White Ballet by Everett Shinn"
          width={800}
          height={600}
          priority
          className="mt-8"
        />
        <p className="text-sm mt-2 text-gray-500">
          Source:{" "}
          <a
            href="https://americanart.si.edu/artwork/white-ballet-73317"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Smithsonian American Art Museum
          </a>
        </p>
      </article>
    </main>
  );
} 
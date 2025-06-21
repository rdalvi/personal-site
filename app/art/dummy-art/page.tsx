import Image from "next/image";
import Link from "next/link";

export default function DummyArtPage() {
  return (
    <main className="p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] max-w-4xl mx-auto">
      <Link href="/" className="text-blue-600 hover:underline">
        ← Back to home
      </Link>
      <article className="mt-8">
        <h1 className="text-4xl font-bold mb-4">Starry Night</h1>
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Starry Night"
          width={500}
          height={500}
          priority
        />
      </article>
    </main>
  );
} 
import Image from "next/image";
import Link from "next/link";

export default function Figure5InGoldPage() {
  return (
    <main className="p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] max-w-4xl mx-auto">
      <Link href="/" className="text-blue-600 hover:underline">
        ← Back to home
      </Link>
      <article className="mt-8">
        <h1 className="text-4xl font-bold mb-4">
          I Saw the Figure 5 in Gold, by Charles Demuth
        </h1>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/9/90/Charles_Demuth_-_Figure_5.png"
          alt="I Saw the Figure 5 in Gold by Charles Demuth"
          width={520}
          height={650}
          priority
          className="mt-8 mx-auto"
        />
        <p className="text-sm mt-2 text-gray-500">
          Source:{" "}
          <a
            href="https://commons.wikimedia.org/wiki/File:Charles_Demuth_-_Figure_5.png"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Wikimedia Commons
          </a>
        </p>
      </article>
    </main>
  );
} 
import Image from "next/image";
import Link from "next/link";

export default function SigmarPolkeUntitledPage() {
  return (
    <main className="p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] max-w-4xl mx-auto">
      <Link href="/" className="text-blue-600 hover:underline">
        ← Back to home
      </Link>
      <article className="mt-8">
        <h1 className="text-4xl font-bold mb-4">
          Untitled, by Sigmar Polke
        </h1>
        <Image
          src="https://d1hhug17qm51in.cloudfront.net/www-media/2024/01/16091539/FC.735_10T_POLKE_735R4_FINAL-Artsy-JPEG_4000-pixels-long-scaled.jpg"
          alt="Untitled by Sigmar Polke"
          width={800}
          height={1000}
          priority
          className="mt-8"
        />
        <p className="text-sm mt-2 text-gray-500">
          Source:{" "}
          <a
            href="https://www.artsy.net/artwork/sigmar-polke-untitled-fc-735"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Artsy
          </a>
        </p>
      </article>
    </main>
  );
} 
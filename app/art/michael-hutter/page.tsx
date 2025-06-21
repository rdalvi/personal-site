import Image from "next/image";
import Link from "next/link";

export default function MichaelHutterPage() {
  return (
    <main className="p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] max-w-4xl mx-auto">
      <Link href="/" className="text-blue-600 hover:underline">
        ← Back to home
      </Link>
      <article className="mt-8">
        <h1 className="text-4xl font-bold mb-4">
          Untitled, by Michael Hutter
        </h1>
        <Image
          src="https://biblioklept.org/wp-content/uploads/2016/05/tumblr_ncctksbuz21rlaql2o1_1280.jpg"
          alt="Untitled by Michael Hutter"
          width={800}
          height={1000}
          priority
          className="mt-8"
        />
        <p className="text-sm mt-2 text-gray-500">and other similar works</p>
        <p className="text-sm mt-2 text-gray-500">
          Source:{" "}
          <a
            href="https://biblioklept.org/2016/05/20/the-art-of-michael-hutter/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Biblioklept
          </a>
        </p>
      </article>
    </main>
  );
} 
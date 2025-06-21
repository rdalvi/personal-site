import Image from "next/image";
import Link from "next/link";

export default function FranklinDRooseveltPage() {
  return (
    <main className="p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] max-w-4xl mx-auto">
      <Link href="/" className="text-blue-600 hover:underline">
        ← Back to home
      </Link>
      <article className="mt-8">
        <h1 className="text-4xl font-bold mb-4">
          Franklin D. Roosevelt, by Douglas Chandor
        </h1>
        <Image
          src="https://www.art-prints-on-demand.com/kunst/douglas_chandor/roosevelt_franklin_d_portraet.jpg"
          alt="Franklin D. Roosevelt by Douglas Chandor"
          width={800}
          height={1000}
          priority
          className="mt-8"
        />
        <p className="text-sm mt-2 text-gray-500">
          Source:{" "}
          <a
            href="https://npg.si.edu/object/npg_NPG.67.60"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            National Portrait Gallery
          </a>
        </p>
      </article>
    </main>
  );
} 
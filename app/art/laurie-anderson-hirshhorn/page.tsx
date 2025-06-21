import Image from "next/image";
import Link from "next/link";

export default function LaurieAndersonPage() {
  return (
    <main className="p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] max-w-4xl mx-auto">
      <Link href="/" className="text-blue-600 hover:underline">
        ← Back to home
      </Link>
      <article className="mt-8">
        <h1 className="text-4xl font-bold mb-4">
          The Weather, by Laurie Anderson
        </h1>
        <Image
          src="https://hirshhorn.si.edu/wp-content/uploads/2021/09/HMSG_EXH_WEATHER_2021_001-e1697122907803.jpg"
          alt="The Weather by Laurie Anderson at the Hirshhorn"
          width={1200}
          height={800}
          priority
          className="mt-8"
        />
        <p className="text-sm mt-2 text-gray-500">
          Source:{" "}
          <a
            href="https://hirshhorn.si.edu/exhibitions/laurie-anderson-the-weather/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Hirshhorn Museum and Sculpture Garden
          </a>
        </p>
      </article>
    </main>
  );
} 
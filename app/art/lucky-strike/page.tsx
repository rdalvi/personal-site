import Image from "next/image";
import Link from "next/link";

export default function LuckyStrikePage() {
  return (
    <main className="p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] max-w-4xl mx-auto">
      <Link href="/" className="text-blue-600 hover:underline">
        ← Back to home
      </Link>
      <article className="mt-8">
        <h1 className="text-4xl font-bold mb-4">
          Lucky Strike, by Stuart Davis
        </h1>
        <Image
          src="https://i0.wp.com/worleygig.com/wp-content/uploads/2021/03/IMG_0353-e1614980749272.jpg?fit=2139%2C3566&quality=89&ssl=1"
          alt="Lucky Strike by Stuart Davis"
          width={600}
          height={900}
          priority
          className="mt-8 mx-auto"
        />
        <p className="text-sm mt-2 text-gray-500">
          Source:{" "}
          <a
            href="https://worleygig.com/2021/03/05/stuart-davis-in-general-and-the-cool-lucky-strike-painting-in-particular/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Worley Gig
          </a>
        </p>
      </article>
    </main>
  );
} 
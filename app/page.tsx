import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-10">Rohan Dalvi</h1>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">About me</h2>
        <p className="text-lg leading-relaxed">
          Making logistics more efficient. Previously consulted for healthcare
          investors, providers, and payers. Enjoy cooking and reading.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Essays</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <Link
              href="/essays/dummy-essay"
              className="text-lg text-blue-600 hover:underline"
            >
              My First Essay
            </Link>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
          Art I like
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <Link
              href="/art/dummy-art"
              className="text-lg text-blue-600 hover:underline"
            >
              Starry Night
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}

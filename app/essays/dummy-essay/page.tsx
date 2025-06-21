import Link from "next/link";

export default function DummyEssayPage() {
  return (
    <main className="p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] max-w-4xl mx-auto">
      <Link href="/" className="text-blue-600 hover:underline">
        ← Back to home
      </Link>
      <article className="mt-8">
        <h1 className="text-4xl font-bold mb-4">My First Essay</h1>
        <p className="text-lg leading-relaxed mt-4">
          This is a placeholder for a real essay.
        </p>
      </article>
    </main>
  );
} 
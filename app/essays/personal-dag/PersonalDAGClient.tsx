"use client";
import ReactMarkdown from "react-markdown";
// import DAGDiagram from "./DAGDiagram";
import Link from "next/link";

export default function PersonalDAGClient({ markdown }: { markdown: string }) {
  return (
    <main className="p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] max-w-4xl mx-auto">
      <Link href="/" className="text-blue-600 hover:underline">
        ← Back to home
      </Link>
      <article className="mt-8 prose prose-lg prose-neutral dark:prose-invert">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </article>
      <section className="mt-16">
        {/* <DAGDiagram /> */}
      </section>
    </main>
  );
} 
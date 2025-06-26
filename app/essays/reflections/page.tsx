import Link from "next/link";
import { promises as fs } from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";

export default async function ReflectionsPage() {
  const markdownPath = path.join(
    process.cwd(),
    "app/essays/reflections/content.md"
  );

  let markdown = "";
  try {
    markdown = await fs.readFile(markdownPath, "utf-8");
  } catch (error) {
    console.error("Error reading markdown file:", error);
    markdown = "Failed to load the essay. Please try again later.";
  }

  return (
    <main className="p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] max-w-4xl mx-auto">
      <Link href="/" className="text-blue-600 hover:underline">
        ← Back to home
      </Link>
      <article className="mt-8 prose prose-lg prose-neutral dark:prose-invert">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </article>
    </main>
  );
} 
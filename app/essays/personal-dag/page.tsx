import { promises as fs } from "fs";
import path from "path";
import PersonalDAGClient from "./PersonalDAGClient";

export default async function PersonalDAGPage() {
  const markdownPath = path.join(
    process.cwd(),
    "app/essays/personal-dag/content.md"
  );

  let markdown = "";
  try {
    markdown = await fs.readFile(markdownPath, "utf-8");
  } catch (error) {
    markdown = "Failed to load the essay. Please try again later.";
  }

  return <PersonalDAGClient markdown={markdown} />;
} 
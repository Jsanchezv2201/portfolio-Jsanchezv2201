import { PROJECTS } from "@/features/profile/data/projects";

/** Resolves a Localizable value to its English string for LLM output. */
function resolveEN(
  value: string | { en: string; es: string } | undefined
): string | undefined {
  if (!value) return undefined;
  if (typeof value === "string") return value;
  return value.en;
}

const content = `# Projects

${PROJECTS.map((item) => {
  const title = resolveEN(item.title) ?? "";
  const skills = `\n\nSkills: ${item.skills.join(", ")}`;
  const description = resolveEN(item.description);
  const descriptionText = description ? `\n\n${description.trim()}` : "";
  return `## ${title}\n\nProject URL: ${item.link}${skills}${descriptionText}`;
}).join("\n\n")}
`;

export const dynamic = "force-static";

export async function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  });
}

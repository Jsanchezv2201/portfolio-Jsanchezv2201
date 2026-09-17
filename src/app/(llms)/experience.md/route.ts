import { EXPERIENCES } from "@/features/profile/data/experiences";

/** Resolves a Localizable value to its English string for LLM output. */
function resolveEN(
  value: string | { en: string; es: string } | undefined
): string | undefined {
  if (!value) return undefined;
  if (typeof value === "string") return value;
  return value.en;
}

const content = `# Experience

${EXPERIENCES.map((item) =>
  item.positions
    .map((position) => {
      const title = resolveEN(position.title) ?? "";
      const skills = position.skills?.map((skill) => skill).join(", ") || "N/A";
      const description = resolveEN(position.description);
      return `## ${title} | ${item.companyName}\n\nDuration: ${position.employmentPeriod.start} - ${position.employmentPeriod.end || "Present"}\n\nSkills: ${skills}\n\n${description?.trim() ?? ""}`;
    })
    .join("\n\n")
).join("\n\n")}
`;

export const dynamic = "force-static";

export async function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  });
}

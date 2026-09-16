"use client";

import { Bot, CodeXml, Eye, Terminal } from "lucide-react";

import { CopyButton } from "@/components/copy-button";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslation } from "@/lib/i18n";

interface FeaturedComponent {
  id: "assistant" | "terminal";
  title: string;
  technologies: string[];
  extension: string;
  highlightedSourceLight: string;
  highlightedSourceDark: string;
  source: string;
}

export function PortfolioComponentShowcase({
  components,
}: {
  components: FeaturedComponent[];
}) {
  const copy = useTranslation({
    en: {
      eyebrow: "Portfolio pieces",
      title: "Featured components",
      description:
        "Interactive components built for this portfolio and ready to reuse.",
      demo: "Demo",
      code: "Code",
      open: "Open demo",
    },
    es: {
      eyebrow: "Piezas del portfolio",
      title: "Componentes destacados",
      description:
        "Componentes interactivos construidos para este portfolio y listos para reutilizar.",
      demo: "Demo",
      code: "Código",
      open: "Abrir demo",
    },
  });

  const openComponent = (id: FeaturedComponent["id"]) => {
    window.dispatchEvent(
      new Event(id === "assistant" ? "open-ask-juan" : "open-terminal")
    );
  };

  return (
    <section className="border-b border-edge px-4 py-6">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <p className="mb-1 font-mono text-xs tracking-wider text-muted-foreground uppercase">
            {copy.eyebrow}
          </p>
          <h2 className="text-xl font-semibold tracking-tight">{copy.title}</h2>
        </div>
        <p className="max-w-xs text-right text-xs text-muted-foreground">
          {copy.description}
        </p>
      </div>

      <div className="grid gap-4">
        {components.map((component) => {
          const isAssistant = component.id === "assistant";
          const Icon = isAssistant ? Bot : Terminal;

          return (
            <article
              key={component.id}
              className="overflow-hidden rounded-xl border border-edge bg-background"
            >
              <div className="flex items-start gap-3 border-b border-edge bg-muted/20 p-4">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-edge bg-background">
                  <Icon className="size-4" />
                </div>
                <div className="flex items-start gap-3">
                  <div>
                    <h3 className="font-medium">{component.title}</h3>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {component.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-md border border-edge bg-background px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <Tabs defaultValue="preview" className="gap-0">
                <TabsList className="w-full justify-start rounded-none border-b border-edge bg-background px-3 pt-2">
                  <TabsTrigger value="preview" className="gap-1.5">
                    <Eye className="size-3.5" />
                    {copy.demo}
                  </TabsTrigger>
                  <TabsTrigger value="code" className="gap-1.5">
                    <CodeXml className="size-3.5" />
                    {copy.code} {component.extension}
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="preview" className="m-0">
                  <div className="flex min-h-32 items-center justify-center bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] p-5 [--pattern-foreground:var(--color-zinc-950)]/5 dark:[--pattern-foreground:var(--color-white)]/5">
                    <Button
                      variant="outline"
                      className="gap-2"
                      onClick={() => openComponent(component.id)}
                    >
                      <Icon className="size-4" />
                      {copy.open}
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="code" className="m-0">
                  <div className="relative h-52 overflow-auto bg-white p-4 dark:bg-zinc-950">
                    <CopyButton
                      value={component.source}
                      className="absolute top-3 right-3"
                    />
                    <div
                      className="pr-8 text-[11px] leading-relaxed dark:hidden [&_code]:font-mono [&_pre]:m-0 [&_pre]:overflow-visible [&_pre]:!bg-white"
                      dangerouslySetInnerHTML={{
                        __html: component.highlightedSourceLight,
                      }}
                    />
                    <div
                      className="hidden pr-8 text-[11px] leading-relaxed dark:block [&_code]:font-mono [&_pre]:m-0 [&_pre]:overflow-visible [&_pre]:!bg-zinc-950"
                      dangerouslySetInnerHTML={{
                        __html: component.highlightedSourceDark,
                      }}
                    />
                  </div>
                </TabsContent>
              </Tabs>
            </article>
          );
        })}
      </div>
    </section>
  );
}

import { RssIcon } from "lucide-react";

import { SITE_INFO, SOURCE_CODE_GITHUB_URL } from "@/config/site";
import { cn } from "@/lib/utils";

import { Icons } from "./icons";

export function SiteFooter() {
  return (
    <footer className="max-w-screen overflow-x-hidden px-2">
      <div className="screen-line-before mx-auto border-x border-edge pt-4 md:max-w-3xl">
        <p className="mb-4 px-4 text-center font-mono text-sm text-balance text-muted-foreground">
          The source code is available on{" "}
          <a
            className="link"
            href={SOURCE_CODE_GITHUB_URL}
            target="_blank"
            rel="noopener"
          >
            GitHub
          </a>
        </p>

        <div
          className={cn(
            "screen-line-before screen-line-after flex w-full before:z-1 after:z-1",
            "bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] [--pattern-foreground:var(--color-edge)]/56"
          )}
        >
          <div className="mx-auto flex h-12 items-center justify-center gap-3 border-x border-edge bg-background px-4">
            {/* ⬇️ ZONA DE BOTONES DESACTIVADOS (COMENTADOS) ⬇️ 
                Para reactivarlos, borra los símbolos {/* y */}

            {/* 1. ARCHIVO PARA IAs */}
            {/* <a
              className="flex font-mono text-xs font-medium text-muted-foreground hover:text-foreground"
              href={`${SITE_INFO.url}/llms.txt`}
              target="_blank"
              rel="noopener noreferrer"
            >
              llms.txt
            </a>
            <Separator /> 
            */}

            {/* 2. RSS DEL BLOG */}
            {/* <a
              className="flex items-center text-muted-foreground transition-colors hover:text-foreground"
              href={`${SITE_INFO.url}/rss`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <RssIcon className="size-4" />
              <span className="sr-only">RSS</span>
            </a>
            <Separator /> 
            */}

            {/* 3. PROTECCIÓN DMCA */}
            {/* <a
              className="flex text-muted-foreground transition-colors hover:text-foreground"
              href={process.env.NEXT_PUBLIC_DMCA_URL || "https://www.dmca.com/ProtectionPro.aspx"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.dmca className="h-5 w-auto" />
              <span className="sr-only">DMCA.com Protection Status</span>
            </a> 
            */}

            {/* Mensaje sobrio por defecto (puedes borrarlo si prefieres que esté vacío) */}
            <span className="font-mono text-xs text-muted-foreground">
              © {new Date().getFullYear()} Juan Sánchez
            </span>
          </div>
        </div>
      </div>
      <div className="pb-[env(safe-area-inset-bottom,0px)]">
        <div className="flex h-2" />
      </div>
    </footer>
  );
}

function Separator() {
  return <div className="flex h-11 w-px bg-edge" />;
}

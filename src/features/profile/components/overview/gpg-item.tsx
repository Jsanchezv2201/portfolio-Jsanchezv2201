"use client";

import { LockIcon } from "lucide-react";

export function GpgItem({
  fingerprint,
  publicKeyUrl,
}: {
  fingerprint: string;
  publicKeyUrl: string;
}) {
  return (
    <div className="flex items-center gap-4 font-mono text-sm">
      <div
        className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted ring-1 ring-edge ring-offset-1 ring-offset-background"
        aria-hidden
      >
        <LockIcon className="pointer-events-none size-4 text-muted-foreground" />
      </div>

      <p className="text-balance">
        <a
          className="underline-offset-4 hover:underline"
          href={publicKeyUrl}
          download="jsanchezv.asc"
          title={`Fingerprint: ${fingerprint}`}
        >
          PGP Public Key (local file)
        </a>
      </p>
    </div>
  );
}

"use client";

import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";

import type { Post } from "@/features/blog/types/post";

import { Button } from "./ui/button";

const CommandMenu = dynamic(() =>
  import("@/components/command-menu").then((mod) => mod.CommandMenu)
);

function isEditableTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) {
    return false;
  }

  return (
    target.isContentEditable ||
    target instanceof HTMLInputElement ||
    target instanceof HTMLTextAreaElement ||
    target instanceof HTMLSelectElement
  );
}

export function LazyCommandMenu({ posts }: { posts: Post[] }) {
  const [isMounted, setIsMounted] = useState(false);
  const [openOnMount, setOpenOnMount] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();

    document.addEventListener(
      "keydown",
      (e: KeyboardEvent) => {
        const isShortcut =
          (e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/";

        if (!isShortcut || isEditableTarget(e.target)) {
          return;
        }

        e.preventDefault();
        setOpenOnMount(true);
        setIsMounted(true);
      },
      { signal: abortController.signal }
    );

    return () => abortController.abort();
  }, []);

  if (isMounted) {
    return <CommandMenu posts={posts} initialOpen={openOnMount} />;
  }

  return (
    <Button
      variant="secondary"
      className="h-8 gap-1.5 rounded-full border bg-zinc-50 px-2.5 text-muted-foreground select-none hover:bg-zinc-50 dark:bg-zinc-900 dark:hover:bg-zinc-900"
      onClick={() => {
        setOpenOnMount(true);
        setIsMounted(true);
      }}
      onMouseEnter={() => setIsMounted(true)}
      onFocus={() => setIsMounted(true)}
      onTouchStart={() => setIsMounted(true)}
      aria-label="Open command menu"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 16 16"
        aria-hidden
      >
        <path
          d="M10.278 11.514a5.824 5.824 0 1 1 1.235-1.235l3.209 3.208A.875.875 0 0 1 14.111 15a.875.875 0 0 1-.624-.278l-3.209-3.208Zm.623-4.69a4.077 4.077 0 1 1-8.154 0 4.077 4.077 0 0 1 8.154 0Z"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>

      <span className="font-sans text-sm/4 font-medium sm:hidden">Search</span>
    </Button>
  );
}

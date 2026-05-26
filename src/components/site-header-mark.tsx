"use client";

import { useMotionValueEvent, useScroll } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { LogoMark } from "./logo-mark";

const calcDistance = (el: HTMLElement) => {
  const rect = el.getBoundingClientRect();
  const scrollTop = document.documentElement.scrollTop;
  const headerHeight = 56;
  return scrollTop + rect.top + rect.height - headerHeight;
};

function LogoMarkMotion() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const distanceRef = useRef(160);

  // Fallback: update visibility from scroll position when needed
  useMotionValueEvent(scrollY, "change", (latestValue) => {
    setVisible((v) => v || latestValue >= distanceRef.current);
  });

  useEffect(() => {
    const coverMark = document.getElementById("js-cover-mark");
    if (!coverMark) return;

    // Use IntersectionObserver to robustly determine when the cover is
    // visible under the header. When the cover is intersecting the
    // top of the viewport (accounting for header height), hide the
    // header logo; when it is out of view, show it.
    const headerHeight = 56;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry) {
          setVisible(!entry.isIntersecting);
        }
      },
      { root: null, rootMargin: `-${headerHeight}px 0px 0px 0px`, threshold: 0 }
    );

    observer.observe(coverMark);

    const resizeObserver = new ResizeObserver(() => {
      distanceRef.current = calcDistance(coverMark);
    });
    distanceRef.current = calcDistance(coverMark);
    resizeObserver.observe(coverMark);

    return () => {
      observer.disconnect();
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <LogoMark
      data-visible={visible}
      className="translate-y-2 opacity-0 transition-[opacity,translate] duration-300 data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100"
    />
  );
}

export function SiteHeaderMark() {
  const pathname = usePathname();
  const isHome = ["/", "/index"].includes(pathname);
  return isHome ? <LogoMarkMotion /> : <LogoMark />;
}

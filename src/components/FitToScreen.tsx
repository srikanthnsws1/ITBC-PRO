"use client";

import { useLayoutEffect, useRef } from "react";

/**
 * Desktop one-screen mode (`fit:` variant, see globals.css): the page is laid out on a canvas
 * `designHeight` px tall and zoomed down so the whole canvas is exactly one viewport high.
 * Zooming out also makes the canvas proportionally wider, so everything fits without scrolling.
 * Outside that mode this is a plain wrapper and the page scrolls normally.
 */
export default function FitToScreen({ children, designHeight = 1040 }: { children: React.ReactNode; designHeight?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fit = window.matchMedia("(width >= 80rem) and (height >= 36rem)");
    const apply = () => {
      const zoom = fit.matches ? Math.min(1, window.innerHeight / designHeight) : 1;
      el.style.setProperty("--fit-zoom", String(zoom));
    };
    apply();
    window.addEventListener("resize", apply);
    return () => window.removeEventListener("resize", apply);
  }, [designHeight]);

  return (
    <div
      ref={ref}
      className="fit:flex fit:h-[calc(100dvh/var(--fit-zoom,1))] fit:flex-col fit:overflow-hidden fit:[zoom:var(--fit-zoom,1)]"
    >
      {children}
    </div>
  );
}

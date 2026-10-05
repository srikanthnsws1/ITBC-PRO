"use client";

import { useLayoutEffect, useRef } from "react";

const FIT_QUERY = "(width >= 80rem) and (height >= 36rem)";
const MIN_ZOOM = 0.5;

/**
 * One-screen mode only: shrinks its content (CSS zoom) just enough to fit the height it is given.
 * Re-measures whenever its box changes size, e.g. when the tab it sits in becomes visible.
 */
export default function AutoFit({ children }: { children: React.ReactNode }) {
  const outer = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const box = outer.current;
    const content = inner.current;
    if (!box || !content) return;
    const fitMode = window.matchMedia(FIT_QUERY);

    const fit = () => {
      content.style.zoom = "1";
      const available = box.getBoundingClientRect().height;
      const fits = () => content.getBoundingClientRect().height <= available + 0.5;
      if (!fitMode.matches || available === 0 || fits()) {
        content.dataset.zoom = "1";
        return;
      }
      // binary search the largest zoom that fits (zooming out also widens the layout, so it is re-measured each step)
      let lo = MIN_ZOOM;
      let hi = 1;
      for (let i = 0; i < 9; i++) {
        const mid = (lo + hi) / 2;
        content.style.zoom = String(mid);
        if (fits()) lo = mid;
        else hi = mid;
      }
      content.style.zoom = String(lo);
      content.dataset.zoom = lo.toFixed(2);
    };

    fit();
    const observer = new ResizeObserver(fit);
    observer.observe(box);
    fitMode.addEventListener("change", fit);
    document.fonts?.ready.then(fit);
    return () => {
      observer.disconnect();
      fitMode.removeEventListener("change", fit);
    };
  }, []);

  return (
    <div ref={outer} className="fit:h-full fit:min-h-0 fit:overflow-clip">
      <div ref={inner}>{children}</div>
    </div>
  );
}

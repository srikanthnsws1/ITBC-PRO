"use client";

import { useState, useSyncExternalStore } from "react";
import AutoFit from "./AutoFit";

export type SectionView = {
  id: string;
  title: string;
  parts: { label: string; content: React.ReactNode }[];
};

/* Which section is selected: the last in-page link clicked, else the URL hash. Shared by every info page. */
let selected: { path: string; id: string } | null = null;
const listeners = new Set<() => void>();
const notify = () => listeners.forEach((l) => l());

function select(id: string) {
  selected = { path: window.location.pathname, id };
  notify();
}

function subscribe(cb: () => void) {
  const onClick = (e: MouseEvent) => {
    const a = (e.target as Element | null)?.closest?.("a[href*='#']");
    if (!(a instanceof HTMLAnchorElement)) return;
    const url = new URL(a.href, window.location.href);
    if (url.pathname === window.location.pathname && url.hash) select(url.hash.slice(1));
  };
  const onHash = () => {
    selected = null;
    cb();
  };
  listeners.add(cb);
  document.addEventListener("click", onClick);
  window.addEventListener("hashchange", onHash);
  window.addEventListener("popstate", onHash);
  return () => {
    listeners.delete(cb);
    document.removeEventListener("click", onClick);
    window.removeEventListener("hashchange", onHash);
    window.removeEventListener("popstate", onHash);
  };
}

const getSnapshot = () =>
  selected && selected.path === window.location.pathname ? selected.id : window.location.hash.slice(1);
const getServerSnapshot = () => "";

/**
 * Section index + sections of a navbar page. Normally everything is stacked and the page scrolls.
 * In the desktop one-screen mode (`fit:`) the index acts as tabs: one section is shown at a time,
 * a long section is split into sub-tabs at its headings, and each part is scaled to fit if needed.
 */
export default function InfoSections({ sections }: { sections: SectionView[] }) {
  const requested = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const active = sections.some((s) => s.id === requested) ? requested : sections[0].id;
  const [partOf, setPartOf] = useState<Record<string, number>>({});

  return (
    <div className="mx-auto w-full max-w-6xl px-4 pb-12 sm:px-6 fit:flex fit:min-h-0 fit:max-w-none fit:flex-1 fit:flex-col fit:gap-2.5 fit:px-5 fit:py-3">
      <nav aria-label="On this page" className="relative z-10 -mt-8 overflow-x-auto rounded-xl border border-slate-200 bg-white p-2 shadow-md fit:mt-0 fit:shrink-0 fit:p-1.5 fit:shadow-sm">
        <ul className="flex min-w-max gap-1">
          {sections.map((s, i) => {
            const isActive = s.id === active;
            return (
              <li key={s.id} className="fit:flex-1">
                <a
                  href={`#${s.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-700 fit:justify-center ${
                    isActive ? "fit:bg-blue-700 fit:text-white fit:shadow fit:hover:bg-blue-700 fit:hover:text-white" : ""
                  }`}
                >
                  <span
                    className={`grid size-6 place-items-center rounded-full bg-blue-100 text-[11px] font-bold text-blue-800 ${isActive ? "fit:bg-white fit:text-blue-800" : ""}`}
                  >
                    {i + 1}
                  </span>
                  {s.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mt-6 space-y-6 fit:mt-0 fit:flex fit:min-h-0 fit:flex-1 fit:flex-col fit:space-y-0">
        {sections.map((s, i) => {
          const part = Math.min(partOf[s.id] ?? 0, s.parts.length - 1);
          return (
            <section
              key={s.id}
              id={s.id}
              aria-labelledby={`${s.id}-title`}
              className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8 fit:min-h-0 fit:flex-1 fit:flex-col fit:p-5! ${
                s.id === active ? "fit:flex" : "fit:hidden"
              }`}
            >
              <div className="fit:flex fit:shrink-0 fit:items-center fit:gap-4">
                <p className="text-xs font-bold uppercase tracking-wider text-blue-700">{String(i + 1).padStart(2, "0")}</p>
                <h2 id={`${s.id}-title`} className="mt-1 font-display text-2xl font-extrabold text-blue-950 sm:text-[1.7rem] fit:mt-0 fit:text-xl!">
                  {s.title}
                </h2>
                {s.parts.length > 1 && (
                  <div role="tablist" aria-label={`${s.title} topics`} className="ml-auto hidden flex-wrap gap-1 fit:flex">
                    {s.parts.map((p, j) => (
                      <button
                        key={p.label}
                        type="button"
                        role="tab"
                        aria-selected={j === part}
                        onClick={() => setPartOf((prev) => ({ ...prev, [s.id]: j }))}
                        className={`cursor-pointer rounded-full border px-3 py-1 text-xs font-semibold transition ${
                          j === part ? "border-blue-700 bg-blue-700 text-white" : "border-slate-200 text-slate-700 hover:border-blue-300 hover:bg-blue-50"
                        }`}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              {s.parts.map((p, j) => (
                <div key={p.label} className={`mt-5 fit:mt-3 fit:min-h-0 fit:flex-1 ${j === part ? "fit:block" : "fit:hidden"}`}>
                  <AutoFit>{p.content}</AutoFit>
                </div>
              ))}
            </section>
          );
        })}
      </div>
    </div>
  );
}

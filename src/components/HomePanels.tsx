"use client";

import { useSyncExternalStore } from "react";

export type HomePanel = { id: string; label: string; className?: string; content: React.ReactNode };

/** Which panel an in-page anchor belongs to (used by the header nav, quick links and CTAs). */
const HASH_TO_PANEL: Record<string, string> = {
  "#overview": "overview",
  "#about": "overview",
  "#join": "overview",
  "#stakeholders": "stakeholders",
  "#membership": "stakeholders",
  "#hubs": "hubs",
  "#wings": "hubs",
  "#projects": "hubs",
  "#jobs": "hubs",
  "#startups": "hubs",
  "#itccf": "itccf",
};

let selected: string | null = null;
const listeners = new Set<() => void>();

function select(id: string) {
  selected = id;
  listeners.forEach((l) => l());
}

function subscribe(cb: () => void) {
  const onHash = () => {
    const id = HASH_TO_PANEL[window.location.hash];
    if (id) select(id);
  };
  const onClick = (e: MouseEvent) => {
    const a = (e.target as Element | null)?.closest?.("a[href]");
    if (!(a instanceof HTMLAnchorElement)) return;
    if (a.getAttribute("href") === "/") return select("overview");
    const url = new URL(a.href, window.location.href);
    const id = url.pathname === window.location.pathname ? HASH_TO_PANEL[url.hash] : undefined;
    if (id) select(id);
  };
  listeners.add(cb);
  window.addEventListener("hashchange", onHash);
  document.addEventListener("click", onClick);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("hashchange", onHash);
    document.removeEventListener("click", onClick);
  };
}

const getSnapshot = () => selected ?? HASH_TO_PANEL[window.location.hash] ?? "overview";
const getServerSnapshot = () => "overview";

/**
 * Home page sections. Normally they simply stack and the page scrolls. In the desktop
 * one-screen mode (`fit:`) only the selected section is shown, picked from the tab bar
 * or by any link that points at one of its anchors.
 */
export default function HomePanels({ panels, quickLinks }: { panels: HomePanel[]; quickLinks: React.ReactNode }) {
  const active = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [first, ...rest] = panels;

  const renderPanel = (p: HomePanel) => (
    <div
      key={p.id}
      role="tabpanel"
      aria-label={p.label}
      className={`min-w-0 ${p.className ?? ""} fit:min-h-0 fit:flex-1 ${active === p.id ? "" : "fit:hidden"}`}
    >
      {p.content}
    </div>
  );

  return (
    <div className="flex min-w-0 flex-col fit:h-full fit:min-h-0 fit:gap-2">
      <div role="tablist" aria-label="Home sections" className="hidden shrink-0 items-center gap-1 rounded-lg border border-slate-200 bg-white p-1 shadow-sm fit:flex">
        {panels.map((p) => (
          <button
            key={p.id}
            type="button"
            role="tab"
            aria-selected={active === p.id}
            onClick={() => select(p.id)}
            className={`flex-1 cursor-pointer rounded-md px-3 py-1.5 text-xs font-semibold uppercase tracking-wide transition ${
              active === p.id ? "bg-blue-700 text-white shadow" : "text-slate-700 hover:bg-blue-50 hover:text-blue-700"
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>
      {renderPanel(first)}
      <div className="min-w-0 fit:order-last fit:shrink-0">{quickLinks}</div>
      {rest.map(renderPanel)}
    </div>
  );
}

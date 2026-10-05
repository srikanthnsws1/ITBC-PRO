import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronRight, Info, Mail, Phone } from "lucide-react";
import FitToScreen from "@/components/FitToScreen";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { contact } from "@/data/site";
import type { Block, InfoPage, Section } from "@/data/pages";
import InfoSections, { type SectionView } from "./InfoSections";

const CARD_COLS = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
  5: "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
} as const;

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "heading":
      return <h3 className="pt-2 font-display text-lg font-bold text-blue-950 sm:text-xl fit:pt-0">{block.text}</h3>;

    case "text": {
      // one-screen mode: longer text flows into newspaper columns to use the full width
      const long = block.paragraphs.join(" ").length > 500;
      return (
        <div className={`space-y-3 ${long ? "fit:columns-[34rem] fit:gap-10 fit:space-y-0 fit:[&>p]:mb-3 fit:[&>p]:max-w-none" : ""}`}>
          {block.paragraphs.map((p) => (
            <p key={p.slice(0, 40)} className="max-w-4xl break-inside-avoid-column text-[15px] leading-relaxed text-slate-700">
              {p}
            </p>
          ))}
        </div>
      );
    }

    case "flow":
      return (
        <div>
          {block.label && <p className="mb-2 text-xs font-bold uppercase tracking-wider text-blue-700">{block.label}</p>}
          <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-2">
            {block.steps.map((s, i) => (
              <li key={`${s}-${i}`} className="flex items-center gap-1.5">
                <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-blue-900">{s}</span>
                {i < block.steps.length - 1 && <ArrowRight className="size-3.5 shrink-0 text-blue-400" aria-hidden />}
              </li>
            ))}
          </ol>
        </div>
      );

    case "cards":
      return (
        <ul className={`grid grid-cols-1 gap-3 sm:gap-4 ${CARD_COLS[block.columns ?? 3]}`}>
          {block.items.map((c) => (
            <li key={c.title} className="flex flex-col rounded-xl border border-slate-200 bg-slate-50/70 p-4">
              {c.tag && <span className="mb-1.5 w-fit rounded bg-blue-700 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">{c.tag}</span>}
              <p className="font-display text-[15px] font-bold leading-snug text-blue-950">{c.title}</p>
              {c.text && <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{c.text}</p>}
            </li>
          ))}
        </ul>
      );

    case "steps":
      return (
        <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {block.items.map((s, i) => (
            <li key={s} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-3.5 shadow-xs">
              <span className="grid size-7 shrink-0 place-items-center rounded-full bg-blue-700 text-xs font-bold text-white">{i + 1}</span>
              <span className="text-sm font-medium leading-snug text-slate-800">{s}</span>
            </li>
          ))}
        </ol>
      );

    case "list":
      return (
        <ul className="grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-[15px] leading-snug text-slate-700">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-600" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      );

    case "table":
      return (
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className={`w-full text-left text-sm ${block.head.length > 2 ? "min-w-[36rem]" : ""}`}>
            <thead className="bg-blue-950 text-white">
              <tr>
                {block.head.map((h) => (
                  <th key={h} scope="col" className="px-4 py-2.5 font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {block.rows.map((row) => (
                <tr key={row[0]} className="odd:bg-white even:bg-slate-50">
                  {row.map((cell, i) => (
                    <td key={i} className={`px-4 py-2.5 align-top ${i === 0 ? "font-semibold text-blue-950 sm:whitespace-nowrap" : "text-slate-700"}`}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "quote":
      return (
        <blockquote className="max-w-4xl rounded-r-xl border-l-4 border-amber-400 bg-amber-50 px-5 py-4 font-display text-[15px] font-semibold leading-relaxed text-blue-950">
          “{block.text}”
        </blockquote>
      );

    case "note":
      return (
        <p className="flex max-w-4xl items-start gap-2.5 rounded-xl border border-slate-200 bg-slate-100 px-4 py-3 text-xs leading-relaxed text-slate-600">
          <Info className="mt-0.5 size-4 shrink-0 text-slate-500" aria-hidden />
          <span>
            <strong className="text-slate-800">Important note: </strong>
            {block.text}
          </span>
        </p>
      );

    case "contact":
      return (
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <li>
            <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-50/70 p-5 transition hover:border-blue-400">
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-blue-700 text-white">
                <Phone className="size-5" />
              </span>
              <span>
                <span className="block text-xs font-bold uppercase tracking-wider text-blue-700">Phone</span>
                <span className="font-display text-lg font-bold text-blue-950">{contact.phone}</span>
              </span>
            </a>
          </li>
          <li>
            <a href={`mailto:${contact.email}`} className="flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-50/70 p-5 transition hover:border-blue-400">
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-blue-700 text-white">
                <Mail className="size-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-bold uppercase tracking-wider text-blue-700">Email</span>
                <span className="block break-all font-display text-lg font-bold text-blue-950">{contact.email}</span>
              </span>
            </a>
          </li>
        </ul>
      );

    case "links":
      return (
        <div className="flex flex-wrap gap-3 pt-1">
          {block.items.map((l) => (
            <Link
              key={l.href + l.label}
              href={l.href}
              className={`inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold uppercase transition ${
                l.primary ? "bg-blue-700 text-white shadow hover:bg-blue-800" : "border border-blue-700 text-blue-700 hover:bg-blue-50"
              }`}
            >
              {l.label} <ArrowRight className="size-4" />
            </Link>
          ))}
        </div>
      );
  }
}

/** Rough height (px on the one-screen canvas) a block needs; only used to decide how to group sub-tabs. */
function estimateHeight(b: Block): number {
  switch (b.type) {
    case "heading":
      return 40;
    case "text": {
      const chars = b.paragraphs.join(" ").length;
      return chars > 500 ? Math.ceil(chars / 280) * 26 + 20 : Math.ceil(chars / 150) * 26 + 12 * b.paragraphs.length;
    }
    case "flow":
      return (b.label ? 26 : 0) + Math.ceil(b.steps.join("").length / 140) * 44;
    case "cards":
      return Math.ceil(b.items.length / (b.columns ?? 3)) * (b.items.some((c) => c.text.length > 120) ? 190 : 120) + 16;
    case "steps":
      return Math.ceil(b.items.length / 5) * 80;
    case "list":
      return Math.ceil(b.items.length / 2) * (b.items.some((i) => i.length > 90) ? 56 : 32);
    case "table":
      return 46 + b.rows.length * 44;
    case "quote":
      return Math.ceil(b.text.length / 160) * 26 + 40;
    case "note":
      return 64;
    case "contact":
      return 100;
    case "links":
      return 56;
  }
}

const PART_BUDGET = 820; // canvas px a sub-tab may hold (estimates run high; AutoFit absorbs small overshoots)

/**
 * Splits a section at its headings, then merges neighbouring pieces while they still fit on one screen.
 * Each resulting part is a sub-tab in one-screen mode; otherwise the parts are simply stacked.
 */
function splitParts(section: Section): SectionView["parts"] {
  const pieces: { label: string; blocks: Block[] }[] = [];
  for (const block of section.blocks) {
    if (block.type === "heading" || pieces.length === 0) {
      pieces.push({ label: block.type === "heading" ? block.text : section.title, blocks: [] });
    }
    pieces[pieces.length - 1].blocks.push(block);
  }
  const height = (blocks: Block[]) => blocks.reduce((sum, b) => sum + estimateHeight(b) + 16, 0);
  const parts: { labels: string[]; blocks: Block[] }[] = [];
  for (const piece of pieces) {
    const last = parts[parts.length - 1];
    if (last && height(last.blocks) + height(piece.blocks) <= PART_BUDGET) {
      last.labels.push(piece.label);
      last.blocks.push(...piece.blocks);
    } else {
      parts.push({ labels: [piece.label], blocks: [...piece.blocks] });
    }
  }
  return parts.map((p) => ({
    label: p.labels.join(" · "),
    content: (
      <div className="space-y-5 fit:space-y-4">
        {p.blocks.map((b, j) => (
          <BlockView key={j} block={b} />
        ))}
      </div>
    ),
  }));
}

/** Shared layout for the navbar content pages: header, title band, section index, sections, footer. */
export default function InfoPageView({ page }: { page: InfoPage }) {
  return (
    // desktop one-screen mode: same scaled canvas as the home page (see FitToScreen)
    <FitToScreen>
      <Header />
      <main className="fit:flex fit:min-h-0 fit:flex-1 fit:flex-col">
        <section className="bg-[#06102e] bg-[radial-gradient(ellipse_at_70%_20%,rgba(59,130,246,0.45),transparent_50%),radial-gradient(ellipse_at_0%_100%,rgba(30,64,175,0.5),transparent_45%)] pb-16 pt-8 text-white sm:pb-20 sm:pt-12 fit:shrink-0 fit:py-4!">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 fit:flex fit:max-w-none fit:items-center fit:justify-between fit:gap-12 fit:px-5">
            <div className="fit:shrink-0">
              <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-300">
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
                <ChevronRight className="size-3.5" aria-hidden />
                <span className="font-semibold text-white">{page.eyebrow}</span>
              </nav>
              <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl fit:mt-1.5 fit:text-3xl!">{page.title}</h1>
            </div>
            <div className="fit:max-w-4xl">
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-200 sm:text-base fit:mt-0 fit:max-w-none fit:text-sm!">{page.lead}</p>
              {page.quote && <p className="mt-5 font-display text-sm font-bold tracking-wide text-amber-400 sm:text-base fit:mt-1.5 fit:text-sm!">“{page.quote}”</p>}
            </div>
          </div>
        </section>

        <InfoSections sections={page.sections.map((s) => ({ id: s.id, title: s.title, parts: splitParts(s) }))} />
      </main>
      <Footer />
    </FitToScreen>
  );
}

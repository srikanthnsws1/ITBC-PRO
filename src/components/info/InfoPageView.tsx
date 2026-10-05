import Link from "next/link";
import { ArrowRight, ChevronRight, Info, Mail, Phone } from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { contact } from "@/data/site";
import type { Block, InfoPage } from "@/data/pages";
import InfoSections from "./InfoSections";

const CARD_COLS = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 xl:grid-cols-3",
  4: "sm:grid-cols-2 xl:grid-cols-4",
  5: "sm:grid-cols-2 xl:grid-cols-3",
} as const;

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "heading":
      return (
        <h3 className="flex items-center gap-3 pt-2 font-display text-lg font-bold text-slate-900 sm:text-xl">
          <span className="h-5 w-1 shrink-0 rounded-full bg-gradient-to-b from-blue-600 to-cyan-400" aria-hidden />
          {block.text}
        </h3>
      );

    case "text": {
      return (
        <div className="space-y-3">
          {block.paragraphs.map((p) => (
            <p key={p.slice(0, 40)} className="max-w-4xl text-[15px] leading-relaxed text-slate-700">
              {p}
            </p>
          ))}
        </div>
      );
    }

    case "flow":
      // numbered nodes joined by a rail; the last node is the destination
      return (
        <div>
          {block.label && (
            <p className="mb-2.5 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-blue-700">
              <span className="h-px w-5 bg-blue-600" aria-hidden />
              {block.label}
            </p>
          )}
          <ol className="flex flex-wrap items-center gap-y-2">
            {block.steps.map((s, i) => {
              const last = i === block.steps.length - 1;
              return (
                <li key={`${s}-${i}`} className="flex items-center">
                  <span
                    className={`flex items-center gap-2 rounded-lg border py-1.5 pl-1.5 pr-3 text-xs font-semibold ${
                      last ? "border-transparent bg-[#0b1437] text-white" : "border-slate-200 bg-white text-slate-800"
                    }`}
                  >
                    <span className={`grid size-5 place-items-center rounded-md text-[10px] font-bold ${last ? "bg-amber-400 text-[#0b1437]" : "bg-blue-50 text-blue-700"}`}>
                      {i + 1}
                    </span>
                    {s}
                  </span>
                  {!last && <span className="h-px w-4 shrink-0 bg-slate-300" aria-hidden />}
                </li>
              );
            })}
          </ol>
        </div>
      );

    case "cards":
      return (
        <ul className={`grid grid-cols-1 gap-3 sm:gap-4 ${CARD_COLS[block.columns ?? 3]}`}>
          {block.items.map((c, i) => (
            <li
              key={c.title}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white p-4 transition duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-900/5 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              <span
                className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-[0.18] bg-gradient-to-r from-blue-600 to-cyan-400 transition-transform duration-300 group-hover:scale-x-100 motion-reduce:transition-none"
                aria-hidden
              />
              {c.tag ? (
                <span className="mb-1.5 w-fit rounded-md bg-blue-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-blue-700">{c.tag}</span>
              ) : (
                <span className="pointer-events-none absolute right-3 top-2 font-display text-3xl font-extrabold leading-none text-slate-100" aria-hidden>
                  {String(i + 1).padStart(2, "0")}
                </span>
              )}
              <p className={`relative font-display text-[15px] font-bold leading-snug text-slate-900 ${c.tag ? "" : "pr-10"}`}>{c.title}</p>
              {c.text && <p className="relative mt-1.5 text-sm leading-relaxed text-slate-600">{c.text}</p>}
            </li>
          ))}
        </ul>
      );

    case "steps":
      return (
        <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {block.items.map((s, i) => (
            <li key={s} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-3.5">
              <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 font-display text-xs font-bold text-white shadow-sm shadow-blue-600/30">
                {i + 1}
              </span>
              <span className="text-sm font-medium leading-snug text-slate-800">{s}</span>
            </li>
          ))}
        </ol>
      );

    case "list":
      return (
        <ul className="grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-[15px] leading-snug text-slate-700">
              <span className="mt-[7px] size-2 shrink-0 rotate-45 rounded-[2px] bg-gradient-to-br from-blue-600 to-cyan-400" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      );

    case "table":
      return (
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className={`w-full text-left text-sm ${block.head.length > 2 ? "min-w-[36rem]" : ""}`}>
            <thead className="bg-[#0b1437] text-white">
              <tr>
                {block.head.map((h) => (
                  <th key={h} scope="col" className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wider">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {block.rows.map((row) => (
                <tr key={row[0]} className="bg-white transition-colors duration-200 hover:bg-blue-50/60">
                  {row.map((cell, i) => (
                    <td key={i} className={`px-4 py-2.5 align-top ${i === 0 ? "font-semibold text-slate-900 sm:whitespace-nowrap" : "text-slate-700"}`}>
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
        <blockquote className="ink-panel relative max-w-4xl overflow-hidden rounded-xl py-4 pl-14 pr-5 font-display text-[15px] font-medium leading-relaxed text-white">
          <span className="absolute left-4 top-2 font-display text-5xl font-extrabold leading-none text-amber-400" aria-hidden>
            “
          </span>
          {block.text}
        </blockquote>
      );

    case "note":
      return (
        <p className="flex max-w-4xl items-start gap-2.5 rounded-xl border border-amber-200 bg-amber-50/60 px-4 py-3 text-xs leading-relaxed text-slate-700">
          <Info className="mt-0.5 size-4 shrink-0 text-amber-600" aria-hidden />
          <span>
            <strong className="text-slate-900">Important note: </strong>
            {block.text}
          </span>
        </p>
      );

    case "contact":
      return (
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <li>
            <a
              href={`tel:${contact.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 transition duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-900/5 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-md shadow-blue-600/25">
                <Phone className="size-5" />
              </span>
              <span>
                <span className="block text-[11px] font-bold uppercase tracking-[0.14em] text-blue-700">Phone</span>
                <span className="font-display text-lg font-bold text-slate-900">{contact.phone}</span>
              </span>
            </a>
          </li>
          <li>
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 transition duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-900/5 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-md shadow-blue-600/25">
                <Mail className="size-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-[11px] font-bold uppercase tracking-[0.14em] text-blue-700">Email</span>
                <span className="block break-all font-display text-lg font-bold text-slate-900">{contact.email}</span>
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
              className={`group inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors duration-200 ${
                l.primary ? "bg-[#0b1437] text-white shadow-md shadow-blue-900/20 hover:bg-blue-700" : "border border-slate-300 bg-white text-slate-800 hover:border-blue-400 hover:text-blue-700"
              }`}
            >
              {l.label} <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none" />
            </Link>
          ))}
        </div>
      );
  }
}

/** Shared layout for the navbar content pages: header, title band, section index, sections, footer. */
export default function InfoPageView({ page }: { page: InfoPage }) {
  return (
    <>
      <Header />
      <main>
        <section className="ink-panel pb-16 pt-8 text-white sm:pb-20 sm:pt-12">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
            <div>
              <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-400">
                <Link href="/" className="transition-colors hover:text-white">
                  Home
                </Link>
                <ChevronRight className="size-3.5" aria-hidden />
                <span className="font-semibold text-amber-300">{page.eyebrow}</span>
              </nav>
              <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">{page.title}</h1>
            </div>
            <div>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">{page.lead}</p>
              {page.quote && <p className="mt-5 border-l-2 border-amber-400 pl-3 font-display text-sm font-bold tracking-wide text-amber-300 sm:text-base">“{page.quote}”</p>}
            </div>
          </div>
        </section>

        <InfoSections
          sections={page.sections.map((s) => ({
            id: s.id,
            title: s.title,
            image: s.image,
            content: s.blocks.map((b, j) => <BlockView key={j} block={b} />),
          }))}
        />
      </main>
      <Footer />
    </>
  );
}

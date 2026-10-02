import Link from "next/link";
import { ArrowRight, Building2, CheckSquare, ChartLine, Laptop, UserRoundCheck } from "lucide-react";
import { companyClasses, dependentClasses, heroStats, opportunities } from "@/data/site";

function HeroIntro() {
  return (
    <div className="relative flex flex-col justify-center py-2 fit:py-0">
      <p className="font-display text-2xl font-semibold text-white fit:text-xl">Building India&apos;s</p>
      <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl fit:text-4xl!">
        <span className="text-white">DIGITAL</span>
        <br />
        <span className="text-amber-400">KNOWLEDGE</span>
        <br />
        <span className="text-lime-400">ECOSYSTEM</span>
      </h1>
      <p className="mt-4 text-sm leading-relaxed text-slate-200 fit:mt-1.5 fit:text-xs fit:leading-normal">
        Connecting Education • Industry • Innovation •
        <br />
        Entrepreneurship • Government
      </p>

      <dl className="mt-5 grid grid-cols-4 divide-x divide-white/25 sm:max-w-md lg:max-w-none fit:mt-2.5">
        {heroStats.map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex flex-col items-center px-1 text-center">
            <span className="mb-1.5 grid size-10 place-items-center rounded-md border border-white/40 bg-white/10 fit:mb-1 fit:size-8">
              <Icon className="size-5 text-white" />
            </span>
            <dt className="sr-only">{label}</dt>
            <dd className="font-display text-lg font-bold text-white fit:text-base">{value}</dd>
            <dd className="text-[11px] text-slate-300">{label}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-6 flex flex-wrap gap-3 fit:mt-2.5 fit:gap-2">
        <Link href="#join" className="flex items-center gap-2 rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold fit:px-3 fit:py-2 fit:text-xs uppercase text-white shadow-lg shadow-blue-900/50 transition hover:bg-blue-500">
          Join as Member <ArrowRight className="size-4" />
        </Link>
        <Link href="#about" className="flex items-center gap-2 rounded-md border border-white/60 px-5 py-2.5 text-sm font-semibold fit:px-3 fit:py-2 fit:text-xs uppercase text-white transition hover:bg-white/10">
          Explore ITBC <ArrowRight className="size-4" />
        </Link>
      </div>
    </div>
  );
}

/* ---------- "What Makes ITBC Unique?" diagram ---------- */

function Emblem({ className = "" }: { className?: string }) {
  return (
    <div className={`@container relative grid place-items-center ${className}`}>
      <div className="absolute inset-[-12%] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.55),rgba(30,64,175,0.25)_55%,transparent_70%)]" />
      <div className="absolute inset-[4%] rounded-full border-2 border-blue-300/70 bg-blue-900/40" />
      {/* 8-point star from two rotated squares */}
      <div className="absolute inset-[16%] rounded-[12%] bg-gradient-to-br from-amber-300 via-amber-600 to-amber-900 shadow-[0_0_24px_rgba(251,191,36,0.6)]" />
      <div className="absolute inset-[16%] rotate-45 rounded-[12%] bg-gradient-to-br from-amber-300 via-amber-600 to-amber-900" />
      <div className="absolute inset-[24%] rounded-full bg-gradient-to-br from-amber-800 to-stone-900 ring-2 ring-amber-300/80" />
      <div className="relative text-center text-white">
        <div className="font-display text-[20cqw] font-extrabold leading-none tracking-wide drop-shadow">ITBC</div>
        <div className="mt-[1.5cqw] text-[5.4cqw] leading-tight text-amber-100">
          e-Governance
          <br />
          Gateway &amp;
          <br />
          Source Provider
        </div>
      </div>
    </div>
  );
}

function PillarList({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`space-y-[0.15cqw] ${className}`}>
      {items.map((c) => (
        <li key={c}>• {c}</li>
      ))}
    </ul>
  );
}

/**
 * Desktop/tablet diagram: laid out on a 640×360 design canvas. Boxes are positioned
 * in percentages and text scales with container width (cqw), so arrows drawn in the
 * SVG overlay always line up with the boxes.
 */
function DiagramCanvas() {
  const pct = (v: number, of: number) => `${(v / of) * 100}%`;
  const box = (x: number, y: number, w: number, h: number) => ({
    left: pct(x, 640),
    top: pct(y, 360),
    width: pct(w, 640),
    height: pct(h, 360),
  });

  return (
    <div className="@container w-full fit:w-[min(100cqw,calc(100cqh*640/360))]">
      <div className="relative aspect-[640/360] text-white">
        <svg viewBox="0 0 640 360" className="absolute inset-0 size-full" aria-hidden>
          <defs>
            {(
              [
                ["red", "#e11d48"],
                ["blue", "#3b82f6"],
                ["green", "#16a34a"],
                ["purple", "#7c3aed"],
              ] as const
            ).map(([id, color]) => (
              <g key={id}>
                <marker id={`ah-${id}`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                  <path d="M0 0 10 5 0 10z" fill={color} />
                </marker>
                {/* larger head for the thick spokes; sized relative to their 9-unit stroke */}
                <marker id={`ahb-${id}`} viewBox="0 0 10 10" refX="2" refY="5" markerWidth="2.4" markerHeight="2.4" orient="auto">
                  <path d="M0 0 10 5 0 10z" fill={color} />
                </marker>
              </g>
            ))}
          </defs>
          {/* curved connectors between outer pillars */}
          <g fill="none" strokeWidth="2.5">
            <path d="M208 22 Q105 22 105 52" stroke="#3b82f6" markerStart="url(#ah-blue)" markerEnd="url(#ah-blue)" />
            <path d="M432 22 Q535 22 535 52" stroke="#16a34a" markerStart="url(#ah-green)" markerEnd="url(#ah-green)" />
            <path d="M190 328 Q105 328 105 290" stroke="#3b82f6" markerStart="url(#ah-blue)" markerEnd="url(#ah-blue)" />
            <path d="M450 328 Q535 328 535 290" stroke="#16a34a" markerStart="url(#ah-green)" markerEnd="url(#ah-green)" />
          </g>
          {/* thick spokes from the centre */}
          <g strokeWidth="9" strokeLinecap="butt">
            <line x1="320" y1="112" x2="320" y2="74" stroke="#e11d48" markerEnd="url(#ahb-red)" />
            <line x1="252" y1="172" x2="224" y2="172" stroke="#3b82f6" markerEnd="url(#ahb-blue)" />
            <line x1="388" y1="172" x2="416" y2="172" stroke="#16a34a" markerEnd="url(#ahb-green)" />
            <line x1="320" y1="232" x2="320" y2="270" stroke="#7c3aed" markerEnd="url(#ahb-purple)" />
          </g>
        </svg>

        {/* Top: Eminent Personalities */}
        <div style={box(210, 0, 220, 46)} className="absolute flex items-center gap-[1.2cqw] rounded-md bg-gradient-to-b from-rose-500 to-red-700 px-[1.6cqw] shadow-lg ring-1 ring-rose-300/50">
          <UserRoundCheck className="size-[4.4cqw] shrink-0" />
          <div className="text-[1.95cqw] font-semibold leading-tight">
            Eminent Personalities
            <div className="text-[1.5cqw] font-normal">(Mentors, R&amp;D &amp; Industry)</div>
          </div>
        </div>

        {/* Left: IT companies */}
        <div style={box(10, 58, 190, 226)} className="absolute flex flex-col rounded-md bg-gradient-to-b from-blue-600 to-blue-900 p-[1.6cqw] shadow-lg ring-1 ring-blue-300/50">
          <p className="text-[1.75cqw] font-semibold leading-tight">All Kinds of IT Companies &amp; Business Class</p>
          <div className="mt-[1cqw] flex flex-1 items-start justify-between">
            <PillarList items={companyClasses} className="text-[1.6cqw] leading-snug" />
            <Building2 className="mt-[4cqw] size-[5.5cqw] shrink-0 opacity-90" strokeWidth={1.4} />
          </div>
        </div>

        {/* Right: IT dependent organisations */}
        <div style={box(440, 58, 190, 226)} className="absolute flex flex-col rounded-md bg-gradient-to-b from-green-600 to-green-900 p-[1.6cqw] shadow-lg ring-1 ring-green-300/50">
          <p className="text-[1.75cqw] font-semibold leading-tight">All IT Dependent Business Organisations Classification</p>
          <div className="mt-[1cqw] flex flex-1 items-start justify-between">
            <PillarList items={dependentClasses} className="text-[1.6cqw] leading-snug" />
            <ChartLine className="mt-[4cqw] size-[5.5cqw] shrink-0 opacity-90" strokeWidth={1.4} />
          </div>
        </div>

        {/* Centre emblem */}
        <div style={box(250, 105, 140, 135)} className="absolute">
          <Emblem className="size-full" />
        </div>

        {/* Bottom: IT students */}
        <div style={box(190, 290, 260, 70)} className="absolute flex items-center gap-[1.2cqw] rounded-md bg-gradient-to-b from-violet-600 to-purple-900 px-[1.6cqw] shadow-lg ring-1 ring-violet-300/50">
          <Laptop className="size-[4.4cqw] shrink-0" />
          <div className="text-[1.75cqw] font-semibold leading-tight">
            All IT Students &amp; Its Related Softwares
            <div className="mt-[0.3cqw] text-[1.5cqw] font-normal">(Web, AI, Data Science, Cloud, DevOps, Mobile, IoT, Design, etc.)</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Phone layout: the same four pillars stacked. */
function DiagramStacked() {
  return (
    <div className="space-y-3 text-white">
      <div className="mx-auto flex w-fit items-center gap-2 rounded-md bg-gradient-to-b from-rose-500 to-red-700 px-4 py-2">
        <UserRoundCheck className="size-6" />
        <div className="text-xs font-semibold">
          Eminent Personalities <span className="block font-normal">(Mentors, R&amp;D &amp; Industry)</span>
        </div>
      </div>
      <div className="mx-auto size-36">
        <Emblem className="size-full" />
      </div>
      <div className="grid grid-cols-2 gap-3 text-[11px] [&>*]:min-w-0">
        <div className="rounded-md bg-gradient-to-b from-blue-600 to-blue-900 p-3">
          <p className="font-semibold">All Kinds of IT Companies &amp; Business Class</p>
          <PillarList items={companyClasses} className="mt-1" />
        </div>
        <div className="rounded-md bg-gradient-to-b from-green-600 to-green-900 p-3">
          <p className="font-semibold">All IT Dependent Business Organisations</p>
          <PillarList items={dependentClasses} className="mt-1" />
        </div>
      </div>
      <div className="flex items-center gap-2 rounded-md bg-gradient-to-b from-violet-600 to-purple-900 px-4 py-2 text-xs">
        <Laptop className="size-6 shrink-0" />
        <div className="font-semibold">
          All IT Students &amp; Its Related Softwares
          <span className="block font-normal">(Web, AI, Data Science, Cloud, DevOps, Mobile, IoT, Design, etc.)</span>
        </div>
      </div>
    </div>
  );
}

function UniqueDiagram() {
  return (
    <div className="relative fit:h-full fit:min-h-0">
      {/* bright glow behind the diagram */}
      <div className="pointer-events-none absolute inset-x-0 inset-y-[-6%] lg:left-[-6%] xl:right-[-6%] bg-[radial-gradient(ellipse_55%_45%_at_50%_22%,rgba(255,255,255,0.97)_0%,rgba(224,242,254,0.92)_35%,rgba(147,197,253,0.45)_70%,transparent_100%),radial-gradient(ellipse_at_50%_55%,rgba(96,165,250,0.45),rgba(37,99,235,0.2)_45%,transparent_70%)]" />
      <div className="relative fit:flex fit:h-full fit:flex-col">
        <div className="mb-3 text-center fit:mb-2 fit:shrink-0">
          <h2 className="font-display text-2xl font-extrabold sm:text-[1.7rem] fit:text-xl!">
            <span className="text-violet-800">What Makes </span>
            <span className="text-red-600">ITBC</span>
            <span className="text-violet-800"> Unique?</span>
          </h2>
          <p className="text-xs font-bold text-slate-900 sm:text-sm fit:text-xs!">
            A 360° Multi-Directional Framework Creating
            <br />
            Mutual &ldquo;Win-Win&rdquo; Value Across 4 Pillars
          </p>
        </div>
        <div className="hidden sm:block fit:grid! fit:min-h-0 fit:flex-1 fit:place-items-center fit:[container-type:size]">
          <DiagramCanvas />
        </div>
        <div className="sm:hidden">
          <DiagramStacked />
        </div>
      </div>
    </div>
  );
}

export function OpportunitiesCard() {
  return (
    <div className="flex h-full flex-col rounded-lg fit:h-auto border border-white/20 bg-[#0a1638]/90 p-5 text-white shadow-xl fit:p-3.5">
      <h2 className="font-display text-lg font-bold leading-snug fit:text-sm">
        One Platform.
        <br />
        Endless Opportunities.
      </h2>
      <ul className="mt-4 grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-1 fit:mt-2.5 fit:grid-cols-2! fit:gap-y-1.5 fit:text-xs">
        {opportunities.map((o, i) => (
          <li key={o} className="flex items-center gap-2">
            <CheckSquare className={`size-4 shrink-0 ${i >= opportunities.length - 2 ? "text-amber-400" : "text-slate-200"}`} />
            {o}
          </li>
        ))}
      </ul>
      <Link
        href="#join"
        className="mt-auto flex items-center justify-center gap-2 rounded-md bg-orange-500 px-4 py-3 text-sm font-bold uppercase transition hover:bg-orange-600 max-2xl:mt-5 max-2xl:self-start max-2xl:px-8 fit:mt-3! fit:self-start! fit:px-6! fit:py-2 fit:text-xs"
      >
        Get Started Now <ArrowRight className="size-4" />
      </Link>
    </div>
  );
}

/** Hero content on its dark band. */
export default function Hero() {
  return (
    <section className="relative grid gap-6 pb-14 pt-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] 2xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.45fr)_minmax(0,0.68fr)] xl:px-5 fit:h-full fit:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)_minmax(0,0.9fr)]! fit:grid-rows-[minmax(0,1fr)] fit:items-center fit:gap-5 fit:overflow-hidden fit:rounded-xl fit:py-3">
      {/* dark band: full-bleed below xl, a rounded card beside the sidebar from xl up */}
      <div
        aria-hidden
        className="absolute inset-y-0 left-1/2 w-screen -translate-x-1/2 bg-[#06102e] bg-[radial-gradient(ellipse_at_52%_35%,rgba(59,130,246,0.55),transparent_45%),radial-gradient(ellipse_at_0%_100%,rgba(30,64,175,0.55),transparent_45%),radial-gradient(ellipse_at_100%_0%,rgba(30,58,138,0.6),transparent_40%)] xl:left-0 xl:w-full xl:translate-x-0 xl:rounded-xl"
      />
      <HeroIntro />
      <UniqueDiagram />
      <div className="relative lg:col-span-2 2xl:col-span-1 fit:col-span-1!">
        <OpportunitiesCard />
      </div>
    </section>
  );
}

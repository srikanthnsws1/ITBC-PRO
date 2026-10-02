import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { placementStats, projectCategories, startupPillars } from "@/data/site";

function HubCard({
  id,
  title,
  subtitle,
  cta,
  ctaClass,
  children,
}: {
  id: string;
  title: string;
  subtitle: string;
  cta: string;
  ctaClass: string;
  children: React.ReactNode;
}) {
  return (
    <div id={id} className="flex min-w-0 flex-col p-5 fit:min-h-0 fit:p-3">
      <h3 className="font-display text-base font-bold uppercase text-blue-950 fit:text-sm">{title}</h3>
      <p className="text-xs text-slate-600">{subtitle}</p>
      <div className="my-4 flex-1 fit:my-2 fit:flex fit:flex-col fit:justify-center">{children}</div>
      <Link href={`#${id}`} className={`mx-auto flex w-full max-w-64 items-center justify-center gap-2 rounded-md py-2 fit:py-1.5 text-xs font-bold uppercase text-white transition ${ctaClass}`}>
        {cta} <ArrowRight className="size-4" />
      </Link>
    </div>
  );
}

function IconGrid({ items, color }: { items: { icon: React.ElementType; label: string }[]; color: string }) {
  return (
    <ul className="grid grid-cols-3 gap-x-2 gap-y-4 sm:grid-cols-6 lg:grid-cols-3 2xl:grid-cols-6 fit:grid-cols-3! fit:gap-y-2">
      {items.map(({ icon: Icon, label }) => (
        <li key={label} className="flex flex-col items-center gap-1 text-center">
          <Icon className={`size-7 ${color}`} strokeWidth={1.6} />
          <span className="text-[11px] leading-tight text-slate-700">{label}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Hubs() {
  return (
    <section className="grid divide-y divide-slate-200 rounded-xl border border-blue-200 bg-white shadow-sm lg:grid-cols-3 lg:divide-x lg:divide-y-0 fit:h-full">
      <HubCard id="projects" title="Live Projects Marketplace" subtitle="Find • Bid • Work • Deliver • Grow" cta="Browse All Projects" ctaClass="bg-emerald-700 hover:bg-emerald-800">
        <IconGrid items={projectCategories} color="text-blue-700" />
      </HubCard>

      <HubCard id="jobs" title="Internship & Placement Hub" subtitle="Your Career. Our Mission." cta="Find Opportunities" ctaClass="bg-blue-700 hover:bg-blue-800">
        <dl className="grid grid-cols-2 gap-x-2 gap-y-3 sm:grid-cols-4 lg:grid-cols-2 2xl:grid-cols-4 fit:grid-cols-2!">
          {placementStats.map((s) => (
            <div key={s.label} className="text-center">
              <dd className="font-display text-2xl font-extrabold text-blue-950">{s.value}</dd>
              <dt className="text-[11px] text-slate-600">{s.label}</dt>
            </div>
          ))}
        </dl>
      </HubCard>

      <HubCard id="startups" title="Startup & Innovation Ecosystem" subtitle="From Idea to Impact" cta="Explore Startup Hub" ctaClass="bg-violet-700 hover:bg-violet-800">
        <IconGrid items={startupPillars} color="text-violet-700" />
      </HubCard>
    </section>
  );
}

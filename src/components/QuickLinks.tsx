import Link from "next/link";
import { quickLinks } from "@/data/site";

export default function QuickLinks() {
  return (
    <nav aria-label="Quick links" className="relative z-10 -mt-9 rounded-xl border border-slate-200 bg-white shadow-md">
      <ul className="grid grid-cols-2 divide-slate-100 sm:grid-cols-4 2xl:grid-cols-7 2xl:divide-x">
        {quickLinks.map(({ icon: Icon, label, href, color }) => (
          <li key={label}>
            <Link href={href} className="group flex items-center gap-3 px-4 py-4 transition hover:bg-blue-50">
              <Icon className={`size-8 shrink-0 ${color} transition group-hover:scale-110`} strokeWidth={1.6} />
              <span className="text-sm font-medium leading-tight text-slate-800">{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

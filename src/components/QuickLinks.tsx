import Link from "next/link";
import { quickLinks } from "@/data/site";

export default function QuickLinks() {
  return (
    <nav aria-label="Quick links" className="relative z-10 -mt-9 rounded-xl border border-slate-200 bg-white shadow-md fit:mt-0 fit:shadow-sm">
      <ul className="grid grid-cols-2 divide-slate-100 overflow-hidden rounded-xl sm:grid-cols-4 2xl:grid-cols-7 2xl:divide-x fit:grid-cols-7! fit:divide-x">
        {quickLinks.map(({ icon: Icon, label, href, color }) => (
          <li key={label}>
            <Link href={href} className="group flex h-full items-center gap-2.5 px-3 py-3.5 transition hover:bg-blue-50 sm:gap-3 sm:px-4 sm:py-4 2xl:gap-2 2xl:px-3 fit:gap-2! fit:px-3! fit:py-2!">
              <Icon className={`size-7 shrink-0 sm:size-8 fit:size-5! ${color} transition group-hover:scale-110`} strokeWidth={1.6} />
              <span className="min-w-0 text-[13px] font-medium leading-tight text-slate-800 wrap-anywhere sm:text-sm lg:wrap-normal 2xl:text-[13px] fit:text-xs!">{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

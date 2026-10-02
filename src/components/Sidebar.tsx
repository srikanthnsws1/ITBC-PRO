import Link from "next/link";
import { ArrowRight, CalendarDays, Play } from "lucide-react";
import { events } from "@/data/site";
import { socials, YoutubeIcon } from "./SocialIcons";

function Panel({
  title,
  children,
  className = "",
  titleClassName = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
}) {
  return (
    <section className={`overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm fit:flex fit:flex-col ${className}`}>
      <h2 className={`border-b border-slate-100 py-3 text-center font-display text-sm font-bold uppercase tracking-wide text-slate-900 fit:py-1.5 fit:text-xs ${titleClassName}`}>
        {title}
      </h2>
      <div className="p-4 fit:flex fit:min-h-0 fit:flex-1 fit:flex-col fit:p-2.5">{children}</div>
    </section>
  );
}

export default function Sidebar() {
  return (
    <aside className="grid gap-4 md:grid-cols-2 xl:grid-cols-1 [&>*]:min-w-0 md:[&>*:last-child]:col-span-2 xl:[&>*:last-child]:col-span-1 fit:flex fit:h-full fit:flex-col fit:gap-2">
      {/* one-screen mode: this panel takes whatever height is left, the video shrinks with it */}
      <Panel title="ITBC Media Network" className="fit:min-h-0 fit:flex-1">
        <div className="flex items-center gap-3 fit:gap-2">
          <YoutubeIcon className="size-12 shrink-0 text-red-600 fit:size-8" />
          <div>
            <p className="font-display text-base font-bold text-red-600 fit:text-sm fit:leading-tight">ITBC YouTube Channel</p>
            <p className="text-xs text-slate-600">(IIP Channel)</p>
          </div>
        </div>
        <p className="mt-2 text-center text-sm text-slate-700 fit:hidden">
          Meet Experts. Hear Stories.
          <br />
          Learn Insights. Shape Future.
        </p>
        <a href="#" className="group relative mt-3 block aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800 fit:mt-2 fit:aspect-auto fit:min-h-10 fit:flex-1">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.4),transparent_60%)]" />
          <div className="absolute left-3 top-1/2 -translate-y-1/2 font-display text-3xl font-extrabold leading-none text-white fit:text-lg">
            ITBC <br className="fit:hidden" />
            TALKS
          </div>
          <span className="absolute left-1/2 top-1/2 grid size-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-xl bg-red-600 shadow-lg transition group-hover:scale-110 fit:size-8 fit:rounded-lg">
            <Play className="size-6 fill-white text-white fit:size-4" />
          </span>
          <div className="absolute inset-x-0 bottom-0 h-1 bg-white/20">
            <div className="h-full w-1/3 bg-red-600" />
          </div>
        </a>
        <a href="#" className="mt-3 flex items-center justify-center gap-2 rounded-md bg-red-600 py-2 text-sm font-semibold text-white transition hover:bg-red-700 fit:mt-2 fit:shrink-0 fit:py-1.5 fit:text-xs">
          <YoutubeIcon className="size-4" /> Subscribe &amp; Stay Updated
        </a>
      </Panel>

      <Panel title="Follow ITBC on Social Media" className="fit:shrink-0" titleClassName="fit:sr-only">
        <ul className="grid grid-cols-4 gap-y-3 fit:grid-cols-8 fit:gap-y-0">
          {socials.map(({ name, Icon, bg, href }) => (
            <li key={name}>
              <a href={href} title={name} className="flex flex-col items-center gap-1 text-[10px] text-slate-600 hover:text-blue-700">
                <span className={`grid size-9 place-items-center rounded-full text-white shadow fit:size-7 ${bg}`}>
                  <Icon className="size-5 fit:size-4" />
                </span>
                <span className="fit:sr-only">{name}</span>
              </a>
            </li>
          ))}
        </ul>
      </Panel>

      <section id="events" className="overflow-hidden rounded-xl border border-violet-200 bg-white shadow-sm fit:shrink-0">
        <h2 className="bg-violet-800 py-3 text-center font-display text-sm font-bold uppercase tracking-wide text-white fit:py-1.5 fit:text-xs">
          ITBC Upcoming Live Events
        </h2>
        <ul className="divide-y divide-slate-100 px-4 md:grid md:grid-cols-3 md:gap-x-4 md:divide-y-0 xl:block xl:divide-y fit:px-3">
          {events.map((e) => (
            <li key={e.title} className="flex gap-3 py-3 fit:gap-2 fit:py-1.5">
              <CalendarDays className="mt-0.5 size-5 shrink-0 text-violet-700 fit:size-4" />
              <div>
                <p className="text-sm font-semibold text-slate-900 fit:text-xs">{e.title}</p>
                <p className="text-xs text-slate-500 fit:text-[11px]">
                  {e.date} | {e.place}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <div className="px-4 pb-4 fit:px-3 fit:pb-2.5">
          <Link href="#events" className="mx-auto flex max-w-sm items-center xl:max-w-none justify-center gap-2 rounded-md bg-violet-800 py-2 text-sm font-semibold uppercase text-white transition hover:bg-violet-900 fit:py-1.5 fit:text-xs">
            View All Events <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </aside>
  );
}

import { impactStats } from "@/data/site";

export default function StatsBar() {
  return (
    <section aria-label="ITBC in numbers" className="rounded-xl bg-[#06102e] bg-[radial-gradient(ellipse_at_50%_0%,rgba(59,130,246,0.35),transparent_70%)] px-4 py-5 text-white fit:shrink-0 fit:px-2 fit:py-2.5">
      <dl className="grid grid-cols-2 gap-y-5 sm:grid-cols-4 xl:grid-cols-8 xl:divide-x xl:divide-white/15">
        {impactStats.map(({ icon: Icon, value, label, color }) => (
          <div key={label} className="flex flex-col items-center gap-1.5 px-2 text-center 2xl:flex-row 2xl:justify-center 2xl:gap-3 2xl:text-left fit:flex-row fit:justify-center fit:gap-2! fit:px-1 fit:text-left">
            <Icon className={`size-8 shrink-0 2xl:size-9 fit:size-6! ${color ?? "text-emerald-400"}`} strokeWidth={1.5} />
            <div>
              <dd className="font-display text-xl font-extrabold fit:text-base fit:leading-tight">{value}</dd>
              <dt className="text-xs text-slate-300 fit:text-[11px] fit:leading-tight">{label}</dt>
            </div>
          </div>
        ))}
      </dl>
    </section>
  );
}

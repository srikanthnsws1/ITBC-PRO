import { impactStats } from "@/data/site";

export default function StatsBar() {
  return (
    <section aria-label="ITBC in numbers" className="rounded-xl bg-[#06102e] bg-[radial-gradient(ellipse_at_50%_0%,rgba(59,130,246,0.35),transparent_70%)] px-4 py-5 text-white">
      <dl className="grid grid-cols-2 gap-y-5 sm:grid-cols-4 xl:grid-cols-8 xl:divide-x xl:divide-white/15">
        {impactStats.map(({ icon: Icon, value, label, color }) => (
          <div key={label} className="flex items-center justify-center gap-3 px-2">
            <Icon className={`size-9 shrink-0 ${color ?? "text-emerald-400"}`} strokeWidth={1.5} />
            <div>
              <dd className="font-display text-xl font-extrabold">{value}</dd>
              <dt className="text-xs text-slate-300">{label}</dt>
            </div>
          </div>
        ))}
      </dl>
    </section>
  );
}

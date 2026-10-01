import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Users } from "lucide-react";
import { itccfBenefits, itccfPillars } from "@/data/site";

export default function Itccf() {
  return (
    <section id="itccf" className="grid overflow-hidden rounded-xl border border-blue-200 bg-white shadow-sm lg:grid-cols-[1.3fr_1fr_1.2fr]">
      <div className="p-5">
        <div className="flex items-center gap-3">
          <Users className="size-12 shrink-0 text-blue-950" />
          <div>
            <h2 className="font-display text-lg font-extrabold uppercase leading-tight text-blue-950 sm:text-xl">
              All India Training &amp; Placement Officers
            </h2>
            <p className="text-sm font-bold uppercase text-slate-700">ITCCF – ITBC Collaborative Council for Future</p>
          </div>
        </div>
        <ul className="mt-5 grid grid-cols-3 gap-y-4 sm:grid-cols-6">
          {itccfPillars.map(({ icon: Icon, label }) => (
            <li key={label} className="flex flex-col items-center gap-1 text-center">
              <Icon className="size-7 text-blue-800" strokeWidth={1.6} />
              <span className="text-[11px] leading-tight text-slate-700">{label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col justify-center border-y border-slate-200 p-5 lg:border-x lg:border-y-0">
        <div className="rounded-md bg-blue-800 px-3 py-1.5 text-center text-white">
          <p className="font-display text-sm font-bold uppercase">ITCCF – The Front Lead Network</p>
          <p className="text-[11px] text-blue-100">You are the Bridge Between Talent &amp; Opportunity</p>
        </div>
        <ul className="mt-3 space-y-1.5">
          {itccfBenefits.map((b) => (
            <li key={b} className="flex items-center gap-2 text-xs text-slate-800">
              <CheckCircle2 className="size-4 shrink-0 text-emerald-600" /> {b}
            </li>
          ))}
        </ul>
        <Link href="#itccf" className="mt-4 flex items-center justify-center gap-2 rounded-md bg-blue-700 py-2 text-xs font-bold uppercase text-white transition hover:bg-blue-800">
          Join ITCCF Network <ArrowRight className="size-4" />
        </Link>
      </div>

      <div className="relative min-h-56 bg-gradient-to-br from-slate-200 to-slate-300">
        <Image
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=70"
          alt="Training and placement officers"
          fill
          sizes="(min-width:1024px) 35vw, 100vw"
          className="object-cover"
        />
        <div className="absolute right-4 top-1/2 grid size-28 -translate-y-1/2 place-items-center rounded-full border-4 border-white bg-blue-950 text-center text-white shadow-xl">
          <div>
            <div className="font-display text-xl font-extrabold">ITCCF</div>
            <div className="text-[9px] font-semibold uppercase leading-tight text-amber-300">
              Together
              <br />
              We Build
              <br />
              Futures
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

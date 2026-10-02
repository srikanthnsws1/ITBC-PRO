import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { stakeholders } from "@/data/site";
import { OpportunitiesCard } from "./Hero";
import SectionTitle from "./SectionTitle";

export default function Stakeholders() {
  return (
    <section id="stakeholders" className="mt-8 fit:mt-0 fit:grid fit:h-full fit:grid-cols-[13.5rem_minmax(0,1fr)] fit:gap-2.5">
      <div className="fit:hidden">
        <SectionTitle>Empowering Every Stakeholder</SectionTitle>
      </div>
      {/* one-screen mode: the opportunities card moves here from the hero */}
      <div className="hidden min-h-0 fit:block">
        <OpportunitiesCard />
      </div>
      <ul className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 fit:mt-0 fit:min-h-0 fit:grid-cols-3! fit:grid-rows-2 fit:gap-2.5">
        {stakeholders.map(({ icon: Icon, title, text, image, accent, titleColor }) => (
          <li key={title} className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg fit:min-h-0 fit:flex-row fit:hover:translate-y-0">
            <div className="relative h-36 bg-gradient-to-br from-slate-300 to-slate-400 fit:h-auto fit:w-20 fit:shrink-0 fit:2xl:w-28">
              <Image src={image} alt="" fill sizes="(min-width:1536px) 16vw, (min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover" />
              <span className={`absolute -bottom-5 left-4 grid size-11 place-items-center rounded-full border-4 border-white text-white shadow fit:bottom-1.5 fit:left-1.5 fit:size-8 fit:border-2 ${accent}`}>
                <Icon className="size-5 fit:size-4" />
              </span>
            </div>
            <div className="flex flex-1 flex-col px-4 pb-4 pt-7 fit:min-w-0 fit:justify-center fit:p-2.5">
              <h3 className={`font-display text-base font-bold fit:text-sm ${titleColor}`}>{title}</h3>
              <p className="mt-1 flex-1 text-sm text-slate-600 fit:flex-none fit:text-xs fit:leading-snug">{text}</p>
              <Link href="#" className={`mt-3 flex items-center gap-1 text-xs font-bold uppercase fit:mt-1.5 fit:text-[11px] ${titleColor}`}>
                Explore Now <ArrowRight className="size-3.5 transition group-hover:translate-x-1" />
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

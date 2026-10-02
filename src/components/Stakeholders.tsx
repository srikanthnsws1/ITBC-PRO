import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { stakeholders } from "@/data/site";
import SectionTitle from "./SectionTitle";

export default function Stakeholders() {
  return (
    <section className="mt-8">
      <SectionTitle>Empowering Every Stakeholder</SectionTitle>
      <ul className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6">
        {stakeholders.map(({ icon: Icon, title, text, image, accent, titleColor }) => (
          <li key={title} className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="relative h-36 bg-gradient-to-br from-slate-300 to-slate-400">
              <Image src={image} alt="" fill sizes="(min-width:1536px) 16vw, (min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover" />
              <span className={`absolute -bottom-5 left-4 grid size-11 place-items-center rounded-full border-4 border-white text-white shadow ${accent}`}>
                <Icon className="size-5" />
              </span>
            </div>
            <div className="flex flex-1 flex-col px-4 pb-4 pt-7">
              <h3 className={`font-display text-base font-bold ${titleColor}`}>{title}</h3>
              <p className="mt-1 flex-1 text-sm text-slate-600">{text}</p>
              <Link href="#" className={`mt-3 flex items-center gap-1 text-xs font-bold uppercase ${titleColor}`}>
                Explore Now <ArrowRight className="size-3.5 transition group-hover:translate-x-1" />
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

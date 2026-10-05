import Image from "next/image";

export type SectionView = {
  id: string;
  title: string;
  image?: { src: string; alt: string };
  content: React.ReactNode;
};

/**
 * Section index + sections of a navbar page. The sections are stacked one after another and the page scrolls;
 * the index is a row of jump links. A section photo is a banner under the title, or a sticky side column on
 * wide screens (alternating sides from one section to the next).
 */
export default function InfoSections({ sections }: { sections: SectionView[] }) {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 pb-14 sm:px-6">
      <nav aria-label="On this page" className="relative z-10 -mt-8 overflow-x-auto rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl shadow-slate-900/10">
        <ul className="flex min-w-max gap-1">
          {sections.map((s, i) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="group flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors duration-200 hover:bg-[#0b1437] hover:text-white"
              >
                <span className="grid size-6 place-items-center rounded-full bg-slate-100 text-[11px] font-semibold text-slate-600 transition-colors duration-200 group-hover:bg-amber-400 group-hover:text-[#0b1437]">
                  {i + 1}
                </span>
                {s.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-8 space-y-8">
        {sections.map((s, i) => {
          const photoLeft = i % 2 === 1;
          return (
            <section key={s.id} id={s.id} aria-labelledby={`${s.id}-title`} className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-8">
              <div className="flex items-center gap-4 border-b border-slate-100 pb-5">
                <p className="bg-gradient-to-br from-blue-600 to-cyan-400 bg-clip-text font-display text-3xl font-extrabold leading-none text-transparent sm:text-4xl">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h2 id={`${s.id}-title`} className="font-display text-2xl font-extrabold text-slate-900 sm:text-[1.7rem]">
                  {s.title}
                </h2>
              </div>

              <div
                className={`mt-6 lg:grid lg:items-start lg:gap-8 ${
                  s.image ? (photoLeft ? "lg:grid-cols-[20rem_minmax(0,1fr)]" : "lg:grid-cols-[minmax(0,1fr)_20rem]") : ""
                }`}
              >
                {s.image && (
                  <div
                    className={`relative mb-6 aspect-[16/9] overflow-hidden rounded-xl bg-slate-200 ring-1 ring-slate-900/10 sm:aspect-[2/1] lg:sticky lg:top-36 lg:mb-0 lg:aspect-[3/4] ${
                      photoLeft ? "" : "lg:order-last"
                    }`}
                  >
                    <Image src={s.image.src} alt={s.image.alt} fill sizes="(min-width:1024px) 20rem, 100vw" className="object-cover object-[50%_25%]" />
                    <span className="absolute left-3 top-3 size-7 rounded-tl-md border-l-2 border-t-2 border-amber-400" aria-hidden />
                    <span className="absolute bottom-3 right-3 size-7 rounded-br-md border-b-2 border-r-2 border-amber-400" aria-hidden />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#070d26]/90 via-[#070d26]/40 to-transparent px-4 pb-3.5 pt-12">
                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-amber-300">ITBC · {String(i + 1).padStart(2, "0")}</p>
                      <p className="pr-8 font-display text-sm font-bold leading-snug text-white">{s.title}</p>
                    </div>
                  </div>
                )}
                <div className="min-w-0 space-y-5">{s.content}</div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

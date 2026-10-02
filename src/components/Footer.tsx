import { Apple, Play, Quote } from "lucide-react";
import { trustedBy } from "@/data/site";
import { LogoMark } from "./Logo";
import Newsletter from "./Newsletter";

const LOGO_COLORS = ["text-slate-800", "text-orange-600", "text-slate-700", "text-blue-800", "text-slate-900", "text-red-600", "text-blue-900"];

export default function Footer() {
  return (
    <footer id="contact" className="mt-6 border-t border-slate-200 bg-white fit:mt-0 fit:shrink-0">
      <div className="container-x grid gap-x-8 gap-y-6 py-6 md:grid-cols-2 xl:grid-cols-[2fr_1.2fr_1.3fr_auto] xl:items-center xl:gap-x-6 [&>*]:min-w-0 fit:flex fit:items-center fit:justify-between fit:gap-4 fit:py-1.5">
        <div className="fit:flex fit:items-center fit:gap-3">
          <p className="text-xs font-bold text-slate-900 fit:whitespace-nowrap">Trusted By</p>
          {/* Replace these with official partner logos once usage rights are confirmed */}
          <ul className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-3 fit:mt-0 fit:flex-nowrap fit:gap-x-3 fit:2xl:gap-x-4">
            {trustedBy.map((t, i) => (
              <li key={t} className={`font-display text-sm font-extrabold tracking-tight fit:whitespace-nowrap fit:text-xs ${LOGO_COLORS[i % LOGO_COLORS.length]}`}>
                {t}
              </li>
            ))}
          </ul>
        </div>

        <blockquote className="flex items-start gap-3 xl:border-l xl:border-slate-200 xl:pl-6 fit:hidden">
          <Quote className="size-9 shrink-0 fill-blue-600 text-blue-600" />
          <p className="font-display text-sm font-semibold text-slate-800">
            A 360° Collaboration Today for a Stronger, Smarter &amp; Digital India Tomorrow.
          </p>
        </blockquote>

        <div className="xl:border-l xl:border-slate-200 xl:pl-6 fit:shrink-0 fit:border-0 fit:pl-0">
          <Newsletter />
        </div>

        <div className="flex items-center gap-3 xl:border-l xl:border-slate-200 xl:pl-6 fit:shrink-0 fit:border-0 fit:pl-0">
          <div>
            <p className="font-display text-sm font-bold text-slate-900 fit:hidden">Download App</p>
            <p className="text-xs text-slate-600 fit:hidden">Take ITBC with you anywhere, anytime.</p>
            <div className="mt-2 flex flex-wrap gap-2 fit:mt-0 fit:flex-nowrap">
              <a href="#" className="flex items-center gap-1 whitespace-nowrap rounded-md bg-black px-2 py-1 text-[10px] leading-tight text-white">
                <Play className="size-4 fill-white" />
                <span>
                  GET IT ON
                  <br />
                  <b className="text-xs">Google Play</b>
                </span>
              </a>
              <a href="#" className="flex items-center gap-1 whitespace-nowrap rounded-md bg-black px-2 py-1 text-[10px] leading-tight text-white">
                <Apple className="size-4 fill-white" />
                <span>
                  Download on the
                  <br />
                  <b className="text-xs">App Store</b>
                </span>
              </a>
            </div>
          </div>
          <div className="hidden h-24 w-12 shrink-0 flex-col items-center justify-center rounded-xl border-4 border-slate-900 bg-blue-950 sm:flex fit:hidden!">
            <LogoMark size={22} />
            <span className="mt-1 text-[8px] font-bold text-white">ITBC</span>
          </div>
        </div>
        <p className="hidden shrink-0 whitespace-nowrap text-[11px] text-slate-500 fit:block">© {new Date().getFullYear()} ITBC. All rights reserved.</p>
      </div>
      <div className="border-t border-slate-200 px-4 py-3 text-center text-xs text-slate-500 fit:hidden">
        © {new Date().getFullYear()} Information Technology Business Council (ITBC). All rights reserved.
      </div>
    </footer>
  );
}

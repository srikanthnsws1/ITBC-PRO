import { Apple, Play, Quote } from "lucide-react";
import { trustedBy } from "@/data/site";
import { LogoMark } from "./Logo";
import Newsletter from "./Newsletter";

const LOGO_COLORS = ["text-slate-800", "text-orange-600", "text-slate-700", "text-blue-800", "text-slate-900", "text-red-600", "text-blue-900"];

export default function Footer() {
  return (
    <footer id="contact" className="mt-6 border-t border-slate-200 bg-white">
      <div className="container-x grid gap-6 py-6 lg:grid-cols-[2fr_1.2fr_1.2fr_1fr] lg:items-center">
        <div>
          <p className="text-xs font-bold text-slate-900">Trusted By</p>
          {/* Replace these with official partner logos once usage rights are confirmed */}
          <ul className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-3">
            {trustedBy.map((t, i) => (
              <li key={t} className={`font-display text-sm font-extrabold tracking-tight ${LOGO_COLORS[i % LOGO_COLORS.length]}`}>
                {t}
              </li>
            ))}
          </ul>
        </div>

        <blockquote className="flex items-start gap-3 lg:border-l lg:border-slate-200 lg:pl-6">
          <Quote className="size-9 shrink-0 fill-blue-600 text-blue-600" />
          <p className="font-display text-sm font-semibold text-slate-800">
            A 360° Collaboration Today for a Stronger, Smarter &amp; Digital India Tomorrow.
          </p>
        </blockquote>

        <div className="lg:border-l lg:border-slate-200 lg:pl-6">
          <Newsletter />
        </div>

        <div className="flex items-center gap-3 lg:border-l lg:border-slate-200 lg:pl-6">
          <div>
            <p className="font-display text-sm font-bold text-slate-900">Download App</p>
            <p className="text-xs text-slate-600">Take ITBC with you anywhere, anytime.</p>
            <div className="mt-2 flex gap-2">
              <a href="#" className="flex items-center gap-1 rounded-md bg-black px-2 py-1 text-[10px] leading-tight text-white">
                <Play className="size-4 fill-white" />
                <span>
                  GET IT ON
                  <br />
                  <b className="text-xs">Google Play</b>
                </span>
              </a>
              <a href="#" className="flex items-center gap-1 rounded-md bg-black px-2 py-1 text-[10px] leading-tight text-white">
                <Apple className="size-4 fill-white" />
                <span>
                  Download on the
                  <br />
                  <b className="text-xs">App Store</b>
                </span>
              </a>
            </div>
          </div>
          <div className="hidden h-24 w-12 shrink-0 flex-col items-center justify-center rounded-xl border-4 border-slate-900 bg-blue-950 sm:flex">
            <LogoMark size={22} />
            <span className="mt-1 text-[8px] font-bold text-white">ITBC</span>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 py-3 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Information Technology Business Council (ITBC). All rights reserved.
      </div>
    </footer>
  );
}

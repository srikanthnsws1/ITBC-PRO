"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Handshake, Mail, Menu, Phone, User, UserCog, Building, X } from "lucide-react";
import Logo from "./Logo";
import { contact, logins, nav } from "@/data/site";
import { socials } from "./SocialIcons";

const loginIcons = [User, UserCog, Building, Handshake];

function TopBar() {
  return (
    <div className="bg-[#0b0f1f] text-xs text-white">
      <div className="container-x flex h-9 items-center justify-between gap-4">
        <div className="flex items-center gap-5">
          <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="flex items-center gap-1.5 hover:text-sky-300">
            <Phone className="size-3.5" /> {contact.phone}
          </a>
          <a href={`mailto:${contact.email}`} className="hidden items-center gap-1.5 hover:text-sky-300 sm:flex">
            <Mail className="size-3.5" /> {contact.email}
          </a>
        </div>
        <div className="flex items-center gap-4">
          <nav className="hidden items-center gap-4 lg:flex" aria-label="Logins">
            {logins.map((l, i) => {
              const Icon = loginIcons[i];
              return (
                <Link key={l.label} href={l.href} className="flex items-center gap-1.5 border-r border-white/25 pr-4 last:border-0 hover:text-sky-300">
                  <Icon className="size-3.5" /> {l.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-3 border-l border-white/25 pl-4">
            <span className="hidden md:inline">Follow Us:</span>
            {socials.slice(0, 5).map(({ name, Icon, href }) => (
              <a key={name} href={href} aria-label={name} className="text-white hover:text-sky-300">
                {name === "YouTube" ? (
                  <span className="grid h-4 w-6 place-items-center rounded-[3px] bg-red-600">
                    <Icon className="size-3.5" />
                  </span>
                ) : (
                  <Icon className="size-4" />
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <TopBar />
      <div className="container-x flex h-20 items-center justify-between gap-6">
        <Logo />

        <nav className="hidden xl:block" aria-label="Main">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 rounded px-3 py-7 text-[13px] font-semibold uppercase tracking-wide transition-colors hover:text-blue-700 ${
                    item.href === "/" ? "border-b-2 border-blue-700 text-blue-700" : "text-slate-800"
                  }`}
                >
                  {item.label}
                  {item.children && <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180" />}
                </Link>
                {item.children && (
                  <ul className="invisible absolute left-0 top-full min-w-52 translate-y-2 rounded-lg border border-slate-100 bg-white py-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    {item.children.map((c) => (
                      <li key={c.label}>
                        <Link href={c.href} className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700">
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="#join"
            className="hidden rounded-md bg-blue-700 px-7 py-3 text-sm font-semibold uppercase text-white shadow transition hover:bg-blue-800 sm:inline-block"
          >
            Join ITBC
          </Link>
          <button
            type="button"
            className="rounded-md p-2 text-slate-800 hover:bg-slate-100 xl:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="max-h-[70vh] overflow-y-auto border-t border-slate-200 bg-white xl:hidden" aria-label="Mobile">
          <ul className="container-x py-2">
            {nav.map((item) => (
              <li key={item.label} className="border-b border-slate-100 last:border-0">
                <div className="flex items-center justify-between">
                  <Link href={item.href} onClick={() => setOpen(false)} className="block py-3 text-sm font-semibold uppercase text-slate-800">
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      type="button"
                      aria-label={`Toggle ${item.label}`}
                      onClick={() => setExpanded((e) => (e === item.label ? null : item.label))}
                      className="p-2"
                    >
                      <ChevronDown className={`size-4 transition-transform ${expanded === item.label ? "rotate-180" : ""}`} />
                    </button>
                  )}
                </div>
                {item.children && expanded === item.label && (
                  <ul className="pb-2 pl-4">
                    {item.children.map((c) => (
                      <li key={c.label}>
                        <Link href={c.href} onClick={() => setOpen(false)} className="block py-2 text-sm text-slate-600">
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="grid grid-cols-2 gap-2 py-3">
              {logins.map((l) => (
                <Link key={l.label} href={l.href} className="rounded border border-slate-200 px-3 py-2 text-center text-xs text-slate-700">
                  {l.label}
                </Link>
              ))}
            </li>
            <li className="pb-4">
              <Link href="#join" className="block rounded-md bg-blue-700 py-3 text-center text-sm font-semibold uppercase text-white">
                Join ITBC
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

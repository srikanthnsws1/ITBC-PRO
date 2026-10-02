"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ChevronDown,
  Handshake,
  Mail,
  Menu,
  Phone,
  User,
  UserCog,
  Building,
  X,
  UserPlus,
  LogIn,
} from "lucide-react";
import Logo from "./Logo";
import { contact, memberPortals, nav } from "@/data/site";
import { socials } from "./SocialIcons";

const loginIcons = {
  student: User,
  faculty: UserCog,
  corporate: Building,
  partner: Handshake,
};

function TopBar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <div className="bg-[#0b0f1f] text-xs text-white relative z-50">
      <div className="container-x flex h-9 items-center justify-between gap-3 sm:gap-4 fit:h-8">
        {/* Contact Info */}
        <div className="flex items-center gap-5">
          <a
            href={`tel:${contact.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-1.5 whitespace-nowrap hover:text-sky-300 transition"
          >
            <Phone className="size-3.5 text-blue-400" /> {contact.phone}
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="hidden items-center gap-1.5 hover:text-sky-300 sm:flex transition"
          >
            <Mail className="size-3.5 text-blue-400" /> {contact.email}
          </a>
        </div>

        {/* Member Portals (Login & Register Only - Dashboards appear after login) */}
        <div className="flex items-center gap-4">
          <nav className="hidden items-center gap-1 xl:flex" aria-label="Portals">
            {memberPortals.map((portal) => {
              const Icon = loginIcons[portal.role as keyof typeof loginIcons] || User;
              return (
                <div
                  key={portal.role}
                  className="relative group py-1"
                  onMouseEnter={() => setActiveDropdown(portal.role)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    type="button"
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded text-slate-200 hover:text-white hover:bg-white/10 transition cursor-pointer"
                  >
                    <Icon className="size-3.5 text-sky-400" />
                    <span className="font-medium">{portal.label}</span>
                    <ChevronDown className="size-3 text-slate-400 group-hover:rotate-180 transition-transform" />
                  </button>

                  {/* Dropdown Menu with Login and Register */}
                  <div
                    className={`absolute right-0 top-full mt-0.5 w-48 rounded-xl border border-white/15 bg-[#09122c] p-2 shadow-2xl backdrop-blur-xl transition-all duration-150 z-50 ${
                      activeDropdown === portal.role
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-1 pointer-events-none"
                    }`}
                  >
                    <div className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-white/10 mb-1">
                      {portal.label} Access
                    </div>

                    <Link
                      href={portal.loginHref}
                      className="flex items-center gap-2 px-2.5 py-2 rounded-lg text-xs text-slate-200 hover:bg-white/10 hover:text-white transition"
                    >
                      <LogIn className="size-3.5 text-blue-400" />
                      <span>{portal.label} Login</span>
                    </Link>

                    <Link
                      href={portal.registerHref}
                      className="flex items-center gap-2 px-2.5 py-2 rounded-lg text-xs text-slate-200 hover:bg-white/10 hover:text-white transition"
                    >
                      <UserPlus className="size-3.5 text-emerald-400" />
                      <span>{portal.label} Register</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-2.5 sm:gap-3 xl:border-l xl:border-white/25 xl:pl-4">
            <span className="hidden md:inline text-slate-400">Follow:</span>
            {socials.slice(0, 5).map(({ name, Icon, href }) => (
              <a
                key={name}
                href={href}
                aria-label={name}
                className="text-white hover:text-sky-300 transition"
              >
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
    <header className="sticky top-0 z-50 shrink-0 bg-white shadow-sm">
      <TopBar />
      <div className="container-x flex h-16 items-center justify-between gap-4 sm:h-20 xl:gap-3 2xl:gap-6 fit:h-14!">
        <Logo />

        <nav className="hidden xl:block" aria-label="Main">
          <ul className="flex items-center 2xl:gap-1">
            {nav.map((item) => (
              <li key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className={`flex h-20 fit:h-14 items-center gap-0.5 whitespace-nowrap px-1.5 text-xs font-semibold uppercase transition-colors hover:text-blue-700 2xl:gap-1 2xl:px-3 2xl:text-[13px] 2xl:tracking-wide ${
                    item.href === "/" ? "border-b-2 border-blue-700 text-blue-700" : "text-slate-800"
                  }`}
                >
                  {item.label}
                  {item.children && <ChevronDown className="size-3 shrink-0 transition-transform group-hover:rotate-180 2xl:size-3.5" />}
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

        <div className="flex shrink-0 items-center gap-3">
          <Link
            href="/register"
            className="hidden whitespace-nowrap rounded-md bg-blue-700 px-6 py-2.5 text-sm font-semibold uppercase text-white shadow transition hover:bg-blue-800 sm:inline-block xl:px-4 2xl:px-6 fit:py-2"
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

      {/* Mobile Drawer */}
      {open && (
        <nav className="max-h-[calc(100dvh-6.25rem)] overflow-y-auto overscroll-contain sm:max-h-[calc(100dvh-7.25rem)] border-t border-slate-200 bg-white xl:hidden shadow-2xl" aria-label="Mobile">
          <div className="container-x py-4 space-y-4">
            {/* Mobile Portals Box (Login & Register Only) */}
            <div className="rounded-xl bg-slate-900 text-white p-4 space-y-3">
              <div className="border-b border-white/10 pb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
                  Member Access Portals
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                {memberPortals.map((portal) => (
                  <div key={portal.role} className="p-2.5 rounded-lg bg-white/5 border border-white/10 space-y-1">
                    <p className="font-bold text-white text-[11px] uppercase tracking-wide">
                      {portal.label}
                    </p>
                    <div className="flex flex-col gap-1 text-[11px]">
                      <Link
                        href={portal.loginHref}
                        onClick={() => setOpen(false)}
                        className="text-slate-300 hover:text-white"
                      >
                        • Sign In
                      </Link>
                      <Link
                        href={portal.registerHref}
                        onClick={() => setOpen(false)}
                        className="text-emerald-400 hover:text-emerald-300"
                      >
                        • Register
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Standard Nav Links */}
            <ul className="divide-y divide-slate-100">
              {nav.map((item) => (
                <li key={item.label} className="py-1">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block py-2.5 text-sm font-semibold uppercase text-slate-800"
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <button
                        type="button"
                        aria-label={`Toggle ${item.label}`}
                        onClick={() => setExpanded((e) => (e === item.label ? null : item.label))}
                        className="p-2 text-slate-500"
                      >
                        <ChevronDown className={`size-4 transition-transform ${expanded === item.label ? "rotate-180" : ""}`} />
                      </button>
                    )}
                  </div>
                  {item.children && expanded === item.label && (
                    <ul className="pb-2 pl-4 space-y-1">
                      {item.children.map((c) => (
                        <li key={c.label}>
                          <Link
                            href={c.href}
                            onClick={() => setOpen(false)}
                            className="block py-1.5 text-sm text-slate-600 hover:text-blue-700"
                          >
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <Link
                href="/register"
                onClick={() => setOpen(false)}
                className="block rounded-md bg-blue-700 py-3 text-center text-sm font-semibold uppercase text-white shadow"
              >
                Join ITBC
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

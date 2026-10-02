"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  User,
  UserCog,
  Building,
  Handshake,
  ArrowRight,
  ShieldCheck,
  LayoutDashboard,
} from "lucide-react";
import Logo from "@/components/Logo";
import { ROLE_CONFIGS, Role, getStoredSession } from "@/lib/auth";

const ROLE_ICONS = {
  student: User,
  faculty: UserCog,
  corporate: Building,
  partner: Handshake,
};

export default function DashboardPortalPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const session = getStoredSession();
    if (session && session.role && ROLE_CONFIGS[session.role]) {
      router.push(ROLE_CONFIGS[session.role].dashboardPath);
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-[#070e24] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-[#070e24] to-[#040816] text-white flex flex-col justify-center p-6">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-8">
          <div className="inline-block bg-white p-1 rounded-md shadow mb-4">
            <Logo />
          </div>
          <h1 className="text-3xl font-display font-extrabold tracking-tight">
            ITBC Member Dashboards
          </h1>
          <p className="mt-2 text-sm text-slate-300 max-w-xl mx-auto">
            Choose your authorized wing to enter the dedicated management environment or inspect role-specific capabilities.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {(Object.keys(ROLE_CONFIGS) as Role[]).map((rKey) => {
            const cfg = ROLE_CONFIGS[rKey];
            const Icon = ROLE_ICONS[rKey];
            return (
              <Link
                key={rKey}
                href={cfg.dashboardPath}
                className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-blue-400/40 hover:bg-white/[0.08] transition shadow-xl group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="size-12 rounded-xl bg-blue-600/20 border border-blue-400/30 text-blue-300 grid place-items-center group-hover:scale-105 transition">
                      <Icon className="size-6" />
                    </div>
                    <span className="text-xs font-bold text-blue-300 bg-blue-500/10 px-2.5 py-1 rounded-full border border-blue-500/20">
                      {cfg.badge}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-white group-hover:text-blue-300 transition">
                    {cfg.label} Dashboard
                  </h2>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                    {cfg.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-blue-400 group-hover:text-blue-300">
                  <span>Enter Dashboard</span>
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-8 text-center text-xs text-slate-400">
          <Link href="/" className="hover:text-white underline">
            ← Return to ITBC Public Home
          </Link>
        </div>
      </div>
    </div>
  );
}

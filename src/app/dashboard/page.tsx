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
  KeyRound,
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

  useEffect(() => {
    const session = getStoredSession();
    if (session && session.role && ROLE_CONFIGS[session.role]) {
      router.push(ROLE_CONFIGS[session.role].dashboardPath);
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-center px-4 py-8 sm:p-6 font-sans">
      <div className="max-w-4xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block bg-white p-1 rounded-md border border-slate-200 shadow-sm mb-4">
            <Logo />
          </div>
          <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
            ITBC Member Dashboards
          </h1>
          <p className="mt-2 text-sm text-slate-600 max-w-xl mx-auto">
            Select your member wing below to access your live workspace. Dashboards appear upon successful authorization.
          </p>
        </div>

        {/* Role Cards in Pure White */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {(Object.keys(ROLE_CONFIGS) as Role[]).map((rKey) => {
            const cfg = ROLE_CONFIGS[rKey];
            const Icon = ROLE_ICONS[rKey];
            return (
              <div
                key={rKey}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-blue-400 hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="size-12 shrink-0 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 grid place-items-center">
                      <Icon className="size-6" />
                    </div>
                    <span className="text-xs font-bold text-blue-800 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                      {cfg.badge}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-slate-900">
                    {cfg.label} Dashboard
                  </h2>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    {cfg.description}
                  </p>

                  {/* Test Credentials Snippet */}
                  <div className="mt-3.5 p-2.5 rounded-lg bg-amber-50/80 border border-amber-200 text-[11px] text-slate-700 flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
                    <div className="flex items-center gap-1.5">
                      <KeyRound className="size-3.5 text-amber-700 shrink-0" />
                      <span>
                        Test: <code className="font-mono text-slate-900 font-bold break-all">{cfg.testCredentials.email}</code>
                      </span>
                    </div>
                    <span className="text-slate-500 font-mono">pw: password123</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <Link
                    href={cfg.loginPath}
                    className="text-xs font-bold text-slate-600 hover:text-blue-700 underline"
                  >
                    Go to Login
                  </Link>
                  <Link
                    href={cfg.dashboardPath}
                    className="px-4 py-2 rounded-lg bg-blue-700 hover:bg-blue-800 text-xs font-bold text-white shadow-sm flex items-center gap-1.5 transition"
                  >
                    <span>Enter Workspace</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center text-xs text-slate-500">
          <Link href="/" className="hover:text-blue-700 font-semibold underline">
            ← Return to ITBC Public Home
          </Link>
        </div>
      </div>
    </div>
  );
}

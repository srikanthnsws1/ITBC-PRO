"use client";

import { useState } from "react";
import DashboardShell from "@/components/dashboard/DashboardShell";
import {
  Handshake,
  Landmark,
  Rocket,
  TrendingUp,
  Sparkles,
  Globe2,
  Layers,
} from "lucide-react";

const partnerMenuItems = [
  { label: "Overview", id: "overview", icon: TrendingUp },
  { label: "Institutional MoUs", id: "mous", icon: Handshake, badge: "15 Executed" },
  { label: "Startup Incubation", id: "incubator", icon: Rocket, badge: "64 Startups" },
  { label: "Regional CoEs", id: "centers", icon: Landmark, badge: "8 Hubs" },
  { label: "e-Governance Audits", id: "governance", icon: Layers },
];

export default function PartnerDashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");

  // One-screen (fit) mode only: the sidebar menu decides which block is visible.
  const overviewOnly = activeTab === "mous" || activeTab === "incubator" ? "fit:hidden" : "";
  const mainListCls = activeTab === "incubator" ? "fit:hidden" : "";
  const sideListCls = activeTab === "incubator" ? "" : "fit:hidden";

  return (
    <DashboardShell
      role="partner"
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      menuItems={partnerMenuItems}
    >
      {/* Welcome Banner */}
      <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-r from-orange-700 via-amber-700 to-slate-900 p-5 sm:p-8 text-white shadow-md fit:px-4! fit:py-3! ${overviewOnly}`}>
        <div className="relative z-10 max-w-2xl fit:grid fit:max-w-none fit:grid-cols-[minmax(0,1fr)_auto] fit:items-center fit:gap-x-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/25 text-xs font-semibold text-orange-100 mb-3 fit:mb-1.5 fit:justify-self-start">
            <Sparkles className="size-3.5 text-amber-300" />
            <span>Regional Apex Institutional Partner</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight fit:text-xl!">
            Welcome, Suresh Narayanan!
          </h1>
          <p className="mt-2 text-sm text-orange-100 leading-relaxed fit:mt-1 fit:text-xs">
            National Innovation Council supervises <strong className="text-white">48 accredited engineering universities</strong>, 64 incubated startups, and ₹10 Crore in deployed seed innovation grants under ITBC governance.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 fit:col-start-2 fit:row-span-3 fit:row-start-1 fit:mt-0 fit:flex-col fit:flex-nowrap fit:gap-2">
            <button
              type="button"
              onClick={() => setActiveTab("mous")}
              className="px-4 py-2 rounded-lg bg-white text-orange-950 font-bold text-xs shadow-sm hover:bg-orange-50 transition flex items-center gap-1.5 cursor-pointer"
            >
              <Handshake className="size-4 text-orange-700" /> View Active MoUs (15)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("incubator")}
              className="px-4 py-2 rounded-lg bg-orange-600/40 border border-white/30 text-white font-bold text-xs hover:bg-orange-600/60 transition flex items-center gap-1.5 cursor-pointer"
            >
              <Rocket className="size-4" /> Startup Accelerator
            </button>
          </div>
        </div>
      </div>

      {/* Metrics Row (White Cards) */}
      <div className={`grid grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4 [&>*]:min-w-0 fit:gap-3! ${overviewOnly}`}>
        <div className="p-3.5 sm:p-5 fit:px-3! fit:py-2.5! rounded-xl bg-white border border-slate-200 shadow-xs">
          <div className="flex items-start justify-between gap-2 text-slate-500 mb-2 fit:mb-0.5">
            <span className="min-w-0 text-[11px] sm:text-xs font-semibold uppercase tracking-wide sm:tracking-wider">Affiliated Colleges</span>
            <div className="max-[359px]:hidden shrink-0 p-1.5 sm:p-2 rounded-lg bg-orange-50 text-orange-600">
              <Landmark className="size-4" />
            </div>
          </div>
          <div className="text-lg sm:text-2xl fit:text-xl! font-bold leading-tight text-slate-900">48 Colleges</div>
          <p className="text-[11px] text-orange-700 font-semibold mt-1">Under Regional Chapter</p>
        </div>

        <div className="p-3.5 sm:p-5 fit:px-3! fit:py-2.5! rounded-xl bg-white border border-slate-200 shadow-xs">
          <div className="flex items-start justify-between gap-2 text-slate-500 mb-2 fit:mb-0.5">
            <span className="min-w-0 text-[11px] sm:text-xs font-semibold uppercase tracking-wide sm:tracking-wider">Seed Capital</span>
            <div className="max-[359px]:hidden shrink-0 p-1.5 sm:p-2 rounded-lg bg-emerald-50 text-emerald-600">
              <TrendingUp className="size-4" />
            </div>
          </div>
          <div className="text-lg sm:text-2xl fit:text-xl! font-bold leading-tight text-slate-900">₹10.2 Crore</div>
          <p className="text-[11px] text-emerald-700 font-semibold mt-1">24 Grants Disbursed</p>
        </div>

        <div className="p-3.5 sm:p-5 fit:px-3! fit:py-2.5! rounded-xl bg-white border border-slate-200 shadow-xs">
          <div className="flex items-start justify-between gap-2 text-slate-500 mb-2 fit:mb-0.5">
            <span className="min-w-0 text-[11px] sm:text-xs font-semibold uppercase tracking-wide sm:tracking-wider">Incubated Startups</span>
            <div className="max-[359px]:hidden shrink-0 p-1.5 sm:p-2 rounded-lg bg-amber-50 text-amber-600">
              <Rocket className="size-4" />
            </div>
          </div>
          <div className="text-lg sm:text-2xl fit:text-xl! font-bold leading-tight text-slate-900">64 Startups</div>
          <p className="text-[11px] text-amber-700 font-semibold mt-1">14 Scaled to Series A</p>
        </div>

        <div className="p-3.5 sm:p-5 fit:px-3! fit:py-2.5! rounded-xl bg-white border border-slate-200 shadow-xs">
          <div className="flex items-start justify-between gap-2 text-slate-500 mb-2 fit:mb-0.5">
            <span className="min-w-0 text-[11px] sm:text-xs font-semibold uppercase tracking-wide sm:tracking-wider">Active MoUs</span>
            <div className="max-[359px]:hidden shrink-0 p-1.5 sm:p-2 rounded-lg bg-blue-50 text-blue-600">
              <Handshake className="size-4" />
            </div>
          </div>
          <div className="text-lg sm:text-2xl fit:text-xl! font-bold leading-tight text-slate-900">15 Executed</div>
          <p className="text-[11px] text-blue-700 font-semibold mt-1">State & Industry Bodies</p>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 fit:block">
        {/* Left: MoU Tracker */}
        <div className={`xl:col-span-2 space-y-4 min-w-0 fit:space-y-2 ${mainListCls}`}>
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
            <h2 className="text-lg fit:text-base font-display font-bold text-slate-900 flex items-center gap-2">
              <Handshake className="size-5 text-orange-600" />
              <span>Institutional MoUs & Chapters</span>
            </h2>
            <button
              type="button"
              className="text-xs font-bold text-orange-700 hover:text-orange-800 cursor-pointer"
            >
              + Draft New Agreement
            </button>
          </div>

          <div className="space-y-3 fit:grid fit:grid-cols-3 fit:gap-3 fit:space-y-0">
            {[
              {
                institution: "State Directorate of Technical Education",
                focus: "Digital Curriculum Standardization & 35,000 Student Certifications",
                term: "2024 – 2028 (Active)",
                status: "Operational",
                centers: "12 CoEs",
              },
              {
                institution: "Federation of Indian Aerospace & Defence IT",
                focus: "R&D Prototyping & Live Capstone Project Mentorship Pipeline",
                term: "2025 – 2029 (Active)",
                status: "Operational",
                centers: "6 Labs",
              },
              {
                institution: "Southern India Startup Incubation Consortium",
                focus: "₹50 Cr Seed Angel Co-Investment Pool & Accelerator Gateway",
                term: "2026 – 2030 (Active)",
                status: "Expanding",
                centers: "24 Hubs",
              },
            ].map((mou, i) => (
              <div
                key={i}
                className="p-5 fit:p-3 fit:flex fit:flex-col fit:[&>p]:mb-1.5 rounded-xl bg-white border border-slate-200 hover:border-orange-300 hover:shadow-md transition"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <span className="text-xs font-bold text-orange-800 bg-orange-50 px-2.5 py-0.5 rounded border border-orange-200 w-fit">
                    {mou.status} • {mou.centers}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">{mou.term}</span>
                </div>
                <h3 className="text-sm font-bold text-slate-900">{mou.institution}</h3>
                <p className="text-xs text-slate-600 mt-1">{mou.focus}</p>

                <div className="mt-4 pt-3 fit:mt-auto fit:pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <span className="text-slate-500 font-mono break-all">Governance ID: #ITBC-MOU-2026-{100 + i}</span>
                  <button
                    type="button"
                    className="px-3.5 py-1.5 rounded-lg bg-orange-700 hover:bg-orange-800 font-bold text-white transition cursor-pointer shadow-xs"
                  >
                    View Terms & Audit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Startup Accelerator */}
        <div className={`space-y-4 min-w-0 fit:space-y-2.5 ${sideListCls}`}>
          <h2 className="text-lg fit:text-base font-display font-bold text-slate-900 flex items-center gap-2">
            <Rocket className="size-5 text-amber-600" />
            <span>Incubated Ventures</span>
          </h2>

          <div className="space-y-3 fit:grid fit:grid-cols-3 fit:gap-3 fit:space-y-0">
            {[
              {
                name: "Aerovision AI",
                domain: "Autonomous Drone Telemetry",
                seed: "₹75 Lakhs Deployed",
                stage: "Growth / Pre-Series A",
              },
              {
                name: "KisaanEdge IoT",
                domain: "Smart Irrigation Sensors",
                seed: "₹50 Lakhs Deployed",
                stage: "Live Deployment (14 Districts)",
              },
              {
                name: "CyberShield Bharat",
                domain: "Critical Infrastructure Zero-Trust",
                seed: "₹1.2 Crore Deployed",
                stage: "Commercial Scaling",
              },
            ].map((venture, i) => (
              <div key={i} className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h4 className="text-sm font-bold text-slate-900">{venture.name}</h4>
                  <span className="shrink-0 whitespace-nowrap text-xs font-bold text-amber-700">{venture.seed}</span>
                </div>
                <p className="text-xs text-slate-600">{venture.domain}</p>
                <div className="mt-2 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="text-emerald-700 font-semibold">{venture.stage}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-orange-50/70 border border-orange-200 text-xs text-slate-700">
            <div className="flex items-center gap-2 text-orange-900 font-bold mb-1">
              <Globe2 className="size-4 text-orange-600" /> Regional Chapter Summit 2026
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Hosting the National ITBC Leadership Conclave with participation from state IT ministries, venture capitalists, and academic chancellors.
            </p>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}

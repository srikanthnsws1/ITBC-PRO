"use client";

import { useState } from "react";
import DashboardShell from "@/components/dashboard/DashboardShell";
import {
  Handshake,
  Landmark,
  Rocket,
  Building,
  TrendingUp,
  Sparkles,
  CheckCircle2,
  FileText,
  Clock,
  Globe2,
  Calendar,
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

  return (
    <DashboardShell
      role="partner"
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      menuItems={partnerMenuItems}
    >
      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-orange-700 via-amber-700 to-slate-900 p-6 sm:p-8 text-white shadow-xl">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-orange-200 mb-3">
            <Sparkles className="size-3.5 text-amber-300" />
            <span>Regional Apex Institutional Partner</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight">
            Welcome, Suresh Narayanan!
          </h1>
          <p className="mt-2 text-sm text-orange-100 leading-relaxed">
            National Innovation Council supervises <strong className="text-white">48 accredited engineering universities</strong>, 64 incubated startups, and ₹10 Crore in deployed seed innovation grants under ITBC governance.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setActiveTab("mous")}
              className="px-4 py-2 rounded-lg bg-white text-orange-950 font-bold text-xs shadow hover:bg-orange-50 transition flex items-center gap-1.5"
            >
              <Handshake className="size-4 text-orange-700" /> View Active MoUs (15)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("incubator")}
              className="px-4 py-2 rounded-lg bg-orange-600/40 border border-white/30 text-white font-bold text-xs hover:bg-orange-600/60 transition flex items-center gap-1.5"
            >
              <Rocket className="size-4" /> Startup Accelerator
            </button>
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-xl bg-white/[0.04] border border-white/10">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Affiliated Colleges</span>
            <Landmark className="size-5 text-orange-400" />
          </div>
          <div className="text-2xl font-bold text-white">48 Colleges</div>
          <p className="text-[11px] text-orange-300 mt-1">Under Regional Chapter</p>
        </div>

        <div className="p-5 rounded-xl bg-white/[0.04] border border-white/10">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Seed Capital Deployed</span>
            <TrendingUp className="size-5 text-emerald-400" />
          </div>
          <div className="text-2xl font-bold text-white">₹10.2 Crore</div>
          <p className="text-[11px] text-emerald-400 mt-1">24 Grants Disbursed</p>
        </div>

        <div className="p-5 rounded-xl bg-white/[0.04] border border-white/10">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Incubated Startups</span>
            <Rocket className="size-5 text-amber-400" />
          </div>
          <div className="text-2xl font-bold text-white">64 Startups</div>
          <p className="text-[11px] text-amber-300 mt-1">14 Scaled to Series A</p>
        </div>

        <div className="p-5 rounded-xl bg-white/[0.04] border border-white/10">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Active MoUs</span>
            <Handshake className="size-5 text-blue-400" />
          </div>
          <div className="text-2xl font-bold text-white">15 Executed</div>
          <p className="text-[11px] text-blue-300 mt-1">State & Industry Bodies</p>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left: MoU Tracker */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-display font-bold text-white flex items-center gap-2">
              <Handshake className="size-5 text-orange-400" />
              <span>Institutional MoUs & Chapters</span>
            </h2>
            <button
              type="button"
              className="text-xs font-semibold text-orange-400 hover:text-orange-300"
            >
              + Draft New Agreement
            </button>
          </div>

          <div className="space-y-3">
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
                className="p-5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-orange-500/40 transition"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <span className="text-xs font-bold text-orange-300 bg-orange-500/10 px-2.5 py-0.5 rounded border border-orange-500/30 w-fit">
                    {mou.status} • {mou.centers}
                  </span>
                  <span className="text-xs text-slate-400">{mou.term}</span>
                </div>
                <h3 className="text-sm font-bold text-white">{mou.institution}</h3>
                <p className="text-xs text-slate-300 mt-1">{mou.focus}</p>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Governance ID: #ITBC-MOU-2026-{100 + i}</span>
                  <button
                    type="button"
                    className="px-3 py-1.5 rounded-lg bg-orange-600/30 hover:bg-orange-600 border border-orange-400/40 font-bold text-orange-200 hover:text-white transition"
                  >
                    View Terms & Audit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Startup Accelerator */}
        <div className="space-y-4">
          <h2 className="text-lg font-display font-bold text-white flex items-center gap-2">
            <Rocket className="size-5 text-amber-400" />
            <span>Incubated Ventures</span>
          </h2>

          <div className="space-y-3">
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
              <div key={i} className="p-4 rounded-xl bg-white/[0.04] border border-white/10">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm font-bold text-white">{venture.name}</h4>
                  <span className="text-xs font-bold text-amber-400">{venture.seed}</span>
                </div>
                <p className="text-xs text-slate-300">{venture.domain}</p>
                <div className="mt-2 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="text-emerald-400 font-medium">{venture.stage}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-br from-orange-950/40 to-amber-950/40 border border-orange-500/30 text-xs">
            <div className="flex items-center gap-2 text-orange-300 font-bold mb-1">
              <Globe2 className="size-4" /> Regional Chapter Summit 2026
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              Hosting the National ITBC Leadership Conclave with participation from state IT ministries, venture capitalists, and academic chancellors.
            </p>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}

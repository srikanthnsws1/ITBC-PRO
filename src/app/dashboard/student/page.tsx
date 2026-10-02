"use client";

import { useState } from "react";
import DashboardShell from "@/components/dashboard/DashboardShell";
import {
  FolderKanban,
  Award,
  Briefcase,
  BrainCircuit,
  Calendar,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  TrendingUp,
  FileCode2,
  Sparkles,
  Search,
  Filter,
} from "lucide-react";

const studentMenuItems = [
  { label: "Overview", id: "overview", icon: TrendingUp },
  { label: "Live Projects", id: "projects", icon: FolderKanban, badge: "4 Active" },
  { label: "Internships & Jobs", id: "jobs", icon: Briefcase, badge: "12 New" },
  { label: "Certifications", id: "certifications", icon: Award },
  { label: "AI Career Guidance", id: "ai-guidance", icon: BrainCircuit },
  { label: "Events & Hackathons", id: "events", icon: Calendar },
];

export default function StudentDashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <DashboardShell
      role="student"
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      menuItems={studentMenuItems}
    >
      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-900 p-6 sm:p-8 text-white shadow-xl">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-blue-200 mb-3">
            <Sparkles className="size-3.5 text-amber-300" />
            <span>Digital Knowledge Scholar Member</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight">
            Welcome back, Aryan!
          </h1>
          <p className="mt-2 text-sm text-blue-100 leading-relaxed">
            Your live project milestone for <strong className="text-white">e-Governance Telemetry</strong> is due in 3 days. Explore 14 newly approved industry internships matching your AI & Cloud profile.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setActiveTab("projects")}
              className="px-4 py-2 rounded-lg bg-white text-blue-900 font-bold text-xs shadow hover:bg-blue-50 transition flex items-center gap-1.5"
            >
              <FolderKanban className="size-4" /> View My Projects
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("jobs")}
              className="px-4 py-2 rounded-lg bg-blue-600/40 border border-white/30 text-white font-bold text-xs hover:bg-blue-600/60 transition flex items-center gap-1.5"
            >
              <Briefcase className="size-4" /> Explore Internships
            </button>
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-xl bg-white/[0.04] border border-white/10">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Live Projects</span>
            <FolderKanban className="size-5 text-blue-400" />
          </div>
          <div className="text-2xl font-bold text-white">4 Active</div>
          <p className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
            <CheckCircle2 className="size-3" /> 2 Milestones Submitted
          </p>
        </div>

        <div className="p-5 rounded-xl bg-white/[0.04] border border-white/10">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Internships Applied</span>
            <Briefcase className="size-5 text-indigo-400" />
          </div>
          <div className="text-2xl font-bold text-white">7 Drives</div>
          <p className="text-[11px] text-blue-400 mt-1 flex items-center gap-1">
            <Clock className="size-3" /> 2 Interviews Scheduled
          </p>
        </div>

        <div className="p-5 rounded-xl bg-white/[0.04] border border-white/10">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Verified Badges</span>
            <Award className="size-5 text-amber-400" />
          </div>
          <div className="text-2xl font-bold text-white">12 Badges</div>
          <p className="text-[11px] text-amber-300 mt-1">Full-Stack, Cloud & DevOps</p>
        </div>

        <div className="p-5 rounded-xl bg-white/[0.04] border border-white/10">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">AI Readiness</span>
            <BrainCircuit className="size-5 text-emerald-400" />
          </div>
          <div className="text-2xl font-bold text-white">88% Score</div>
          <p className="text-[11px] text-emerald-400 mt-1">Top 5% across National Hubs</p>
        </div>
      </div>

      {/* Main Grid: Active Projects & Internships */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left Column: Active Projects */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-display font-bold text-white flex items-center gap-2">
              <FolderKanban className="size-5 text-blue-400" />
              <span>Enrolled Industry Projects</span>
            </h2>
            <button
              type="button"
              className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1"
            >
              Browse All (3,500+) <ArrowUpRight className="size-3.5" />
            </button>
          </div>

          <div className="space-y-3">
            {[
              {
                title: "e-Governance Citizen Grievance AI Telemetry",
                partner: "Ministry of Electronics & ITBC Special Taskforce",
                deadline: "Oct 15, 2026",
                progress: 75,
                role: "Lead Full-Stack Developer",
                tag: "Government Project",
              },
              {
                title: "Distributed Edge Computing for Agri-Tech IoT",
                partner: "TechVista Enterprise & Agritech Incubator",
                deadline: "Nov 02, 2026",
                progress: 40,
                role: "IoT Firmware Engineer",
                tag: "Corporate Live Project",
              },
              {
                title: "FinTech Automated AML & Fraud Detection System",
                partner: "National Banking Digital Consortium",
                deadline: "Nov 28, 2026",
                progress: 20,
                role: "Python Data Analyst",
                tag: "Fintech Challenge",
              },
            ].map((p, i) => (
              <div
                key={i}
                className="p-5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-blue-400/40 transition group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-400/30 w-fit">
                    {p.tag}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Clock className="size-3 text-slate-500" /> Due: {p.deadline}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-white group-hover:text-blue-300 transition">
                  {p.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1">Sponsored by: {p.partner}</p>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center justify-between text-xs text-slate-300 mb-1">
                      <span>Milestone Progress</span>
                      <span className="font-bold text-white">{p.progress}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                        style={{ width: `${p.progress}%` }}
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    className="px-3 py-1.5 rounded-lg bg-blue-600/30 hover:bg-blue-600 border border-blue-400/40 text-xs font-bold text-white transition shrink-0"
                  >
                    Submit Work
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Recommended Opportunities */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-display font-bold text-white flex items-center gap-2">
              <Briefcase className="size-5 text-emerald-400" />
              <span>Recommended Drives</span>
            </h2>
            <span className="text-xs text-slate-400">Match score</span>
          </div>

          <div className="space-y-3">
            {[
              {
                title: "Cloud DevOps Associate",
                company: "TechVista Solutions",
                stipend: "₹35,000 / month",
                type: "Internship + PPO",
                score: "96%",
              },
              {
                title: "Full-Stack AI Developer",
                company: "Digital India Labs",
                stipend: "₹45,000 / month",
                type: "Direct Placement",
                score: "92%",
              },
              {
                title: "Cybersecurity Analyst",
                company: "Apex Secure Systems",
                stipend: "₹30,000 / month",
                type: "Remote Internship",
                score: "89%",
              },
            ].map((j, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-white/[0.04] border border-white/10 hover:border-emerald-500/40 transition"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-white">{j.company}</span>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                    {j.score} Match
                  </span>
                </div>
                <h4 className="text-sm font-semibold text-slate-200">{j.title}</h4>
                <div className="flex items-center justify-between text-xs text-slate-400 mt-2">
                  <span>{j.stipend}</span>
                  <span className="text-blue-300">{j.type}</span>
                </div>
                <button
                  type="button"
                  className="w-full mt-3 py-1.5 rounded-lg bg-emerald-600/30 hover:bg-emerald-600 border border-emerald-400/40 text-xs font-bold text-emerald-200 hover:text-white transition"
                >
                  1-Click Apply with ITBC Profile
                </button>
              </div>
            ))}
          </div>

          {/* Quick Skill Test */}
          <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border border-indigo-500/30 text-xs text-slate-300">
            <div className="flex items-center gap-2 text-indigo-300 font-bold mb-1">
              <BrainCircuit className="size-4" /> AI Skill Assessment Available
            </div>
            <p className="text-[11px] leading-relaxed">
              Verify your Python & System Design credentials to unlock Class A++ verified company listings.
            </p>
            <button
              type="button"
              className="mt-2.5 px-3 py-1.5 rounded bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs"
            >
              Start 15-Min Test
            </button>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}

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
  Sparkles,
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

  // One-screen (fit) mode only: the sidebar menu decides which block is visible.
  const overviewOnly = activeTab === "projects" || activeTab === "jobs" ? "fit:hidden" : "";
  const mainListCls = activeTab === "jobs" ? "fit:hidden" : "";
  const sideListCls = activeTab === "jobs" ? "" : "fit:hidden";

  return (
    <DashboardShell
      role="student"
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      menuItems={studentMenuItems}
    >
      {/* Welcome Banner */}
      <div className={`relative overflow-hidden rounded-2xl ink-panel p-5 sm:p-8 text-white shadow-xl shadow-slate-900/10 fit:px-4! fit:py-3! ${overviewOnly}`}>
        <div className="relative z-10 max-w-2xl fit:grid fit:max-w-none fit:grid-cols-[minmax(0,1fr)_auto] fit:items-center fit:gap-x-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/25 text-xs font-semibold text-blue-100 mb-3 fit:mb-1.5 fit:justify-self-start">
            <Sparkles className="size-3.5 text-amber-300" />
            <span>Digital Knowledge Scholar Member</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight fit:text-xl!">
            Welcome back, Aryan!
          </h1>
          <p className="mt-2 text-sm text-blue-100 leading-relaxed fit:mt-1 fit:text-xs">
            Your live project milestone for <strong className="text-white">e-Governance Telemetry</strong> is due in 3 days. Explore 14 newly approved industry internships matching your AI & Cloud profile.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 fit:col-start-2 fit:row-span-3 fit:row-start-1 fit:mt-0 fit:flex-col fit:flex-nowrap fit:gap-2">
            <button
              type="button"
              onClick={() => setActiveTab("projects")}
              className="px-4 py-2 rounded-lg bg-white text-blue-900 font-bold text-xs shadow-sm hover:bg-blue-50 transition flex items-center gap-1.5 cursor-pointer"
            >
              <FolderKanban className="size-4" /> View My Projects
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("jobs")}
              className="px-4 py-2 rounded-lg bg-blue-600/40 border border-white/30 text-white font-bold text-xs hover:bg-blue-600/60 transition flex items-center gap-1.5 cursor-pointer"
            >
              <Briefcase className="size-4" /> Explore Internships
            </button>
          </div>
        </div>
      </div>

      {/* Metrics Row (White Cards) */}
      <div className={`grid grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4 [&>*]:min-w-0 fit:gap-3! ${overviewOnly}`}>
        <div className="p-3.5 sm:p-5 fit:px-3! fit:py-2.5! relative overflow-hidden rounded-xl bg-white border border-slate-200 shadow-xs before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:bg-gradient-to-r before:from-blue-500 before:to-transparent">
          <div className="flex items-start justify-between gap-2 text-slate-500 mb-2 fit:mb-0.5">
            <span className="min-w-0 text-[11px] sm:text-xs font-semibold uppercase tracking-wide sm:tracking-wider">Live Projects</span>
            <div className="max-[359px]:hidden shrink-0 p-1.5 sm:p-2 rounded-lg bg-blue-50 text-blue-600">
              <FolderKanban className="size-4" />
            </div>
          </div>
          <div className="text-lg sm:text-2xl fit:text-xl! font-display font-extrabold leading-tight text-slate-900">4 Active</div>
          <p className="text-[11px] text-emerald-700 font-semibold mt-1 flex items-center gap-1">
            <CheckCircle2 className="size-3" /> 2 Milestones Submitted
          </p>
        </div>

        <div className="p-3.5 sm:p-5 fit:px-3! fit:py-2.5! relative overflow-hidden rounded-xl bg-white border border-slate-200 shadow-xs before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:bg-gradient-to-r before:from-blue-500 before:to-transparent">
          <div className="flex items-start justify-between gap-2 text-slate-500 mb-2 fit:mb-0.5">
            <span className="min-w-0 text-[11px] sm:text-xs font-semibold uppercase tracking-wide sm:tracking-wider">Internships Applied</span>
            <div className="max-[359px]:hidden shrink-0 p-1.5 sm:p-2 rounded-lg bg-indigo-50 text-indigo-600">
              <Briefcase className="size-4" />
            </div>
          </div>
          <div className="text-lg sm:text-2xl fit:text-xl! font-display font-extrabold leading-tight text-slate-900">7 Drives</div>
          <p className="text-[11px] text-blue-700 font-semibold mt-1 flex items-center gap-1">
            <Clock className="size-3" /> 2 Interviews Scheduled
          </p>
        </div>

        <div className="p-3.5 sm:p-5 fit:px-3! fit:py-2.5! relative overflow-hidden rounded-xl bg-white border border-slate-200 shadow-xs before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:bg-gradient-to-r before:from-blue-500 before:to-transparent">
          <div className="flex items-start justify-between gap-2 text-slate-500 mb-2 fit:mb-0.5">
            <span className="min-w-0 text-[11px] sm:text-xs font-semibold uppercase tracking-wide sm:tracking-wider">Verified Badges</span>
            <div className="max-[359px]:hidden shrink-0 p-1.5 sm:p-2 rounded-lg bg-amber-50 text-amber-600">
              <Award className="size-4" />
            </div>
          </div>
          <div className="text-lg sm:text-2xl fit:text-xl! font-display font-extrabold leading-tight text-slate-900">12 Badges</div>
          <p className="text-[11px] text-amber-700 font-semibold mt-1">Full-Stack, Cloud & DevOps</p>
        </div>

        <div className="p-3.5 sm:p-5 fit:px-3! fit:py-2.5! relative overflow-hidden rounded-xl bg-white border border-slate-200 shadow-xs before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:bg-gradient-to-r before:from-blue-500 before:to-transparent">
          <div className="flex items-start justify-between gap-2 text-slate-500 mb-2 fit:mb-0.5">
            <span className="min-w-0 text-[11px] sm:text-xs font-semibold uppercase tracking-wide sm:tracking-wider">AI Readiness</span>
            <div className="max-[359px]:hidden shrink-0 p-1.5 sm:p-2 rounded-lg bg-emerald-50 text-emerald-600">
              <BrainCircuit className="size-4" />
            </div>
          </div>
          <div className="text-lg sm:text-2xl fit:text-xl! font-display font-extrabold leading-tight text-slate-900">88% Score</div>
          <p className="text-[11px] text-emerald-700 font-semibold mt-1">Top 5% across National Hubs</p>
        </div>
      </div>

      {/* Main Grid: Active Projects & Internships */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 fit:block">
        {/* Left Column: Active Projects */}
        <div className={`xl:col-span-2 space-y-4 min-w-0 fit:space-y-2 ${mainListCls}`}>
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
            <h2 className="text-lg fit:text-base font-display font-bold text-slate-900 flex items-center gap-2">
              <FolderKanban className="size-5 text-blue-600" />
              <span>Enrolled Industry Projects</span>
            </h2>
            <button
              type="button"
              className="text-xs font-bold text-blue-700 hover:text-blue-800 flex items-center gap-1 cursor-pointer"
            >
              Browse All (3,500+) <ArrowUpRight className="size-3.5" />
            </button>
          </div>

          <div className="space-y-3 fit:grid fit:grid-cols-3 fit:gap-3 fit:space-y-0">
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
                className="p-5 fit:p-3 fit:flex fit:flex-col fit:[&>p]:mb-1.5 rounded-xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-lg hover:shadow-slate-900/5 hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 transition duration-200 group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 w-fit">
                    {p.tag}
                  </span>
                  <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                    <Clock className="size-3 text-slate-400" /> Due: {p.deadline}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition">
                  {p.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1">Sponsored by: {p.partner}</p>

                <div className="mt-4 pt-3 fit:mt-auto fit:pt-2 border-t border-slate-100 flex items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center justify-between text-xs text-slate-600 mb-1">
                      <span>Milestone Progress</span>
                      <span className="font-bold text-slate-900">{p.progress}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                      <div
                        className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
                        style={{ width: `${p.progress}%` }}
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-xs font-bold text-white transition shrink-0 cursor-pointer shadow-xs"
                  >
                    Submit Work
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Recommended Opportunities */}
        <div className={`space-y-4 min-w-0 fit:space-y-2.5 ${sideListCls}`}>
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
            <h2 className="text-lg fit:text-base font-display font-bold text-slate-900 flex items-center gap-2">
              <Briefcase className="size-5 text-emerald-600" />
              <span>Recommended Drives</span>
            </h2>
            <span className="text-xs text-slate-500 font-medium">Match score</span>
          </div>

          <div className="space-y-3 fit:grid fit:grid-cols-3 fit:gap-3 fit:space-y-0">
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
                className="p-4 rounded-xl bg-white border border-slate-200 hover:border-emerald-400 hover:shadow-lg hover:shadow-slate-900/5 hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 transition duration-200"
              >
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <span className="text-xs font-bold text-slate-900">{j.company}</span>
                  <span className="shrink-0 whitespace-nowrap text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    {j.score} Match
                  </span>
                </div>
                <h4 className="text-sm font-bold text-slate-800">{j.title}</h4>
                <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-xs text-slate-500 mt-2">
                  <span className="font-semibold text-slate-700">{j.stipend}</span>
                  <span className="text-blue-700 font-medium">{j.type}</span>
                </div>
                <button
                  type="button"
                  className="w-full mt-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-xs font-bold text-white transition cursor-pointer shadow-xs"
                >
                  1-Click Apply with ITBC Profile
                </button>
              </div>
            ))}
          </div>

          {/* Quick Skill Test */}
          <div className="p-4 rounded-xl bg-indigo-50/70 border border-indigo-200 text-xs text-slate-700">
            <div className="flex items-center gap-2 text-indigo-900 font-bold mb-1">
              <BrainCircuit className="size-4 text-indigo-600" /> AI Skill Assessment Available
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Verify your Python & System Design credentials to unlock Class A++ verified company listings.
            </p>
            <button
              type="button"
              className="mt-2.5 px-3 py-1.5 rounded bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs cursor-pointer shadow-xs"
            >
              Start 15-Min Test
            </button>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}

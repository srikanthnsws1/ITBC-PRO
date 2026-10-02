"use client";

import { useState } from "react";
import DashboardShell from "@/components/dashboard/DashboardShell";
import {
  Building2,
  FolderPlus,
  Users2,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  UserCheck,
  Calendar,
} from "lucide-react";

const corporateMenuItems = [
  { label: "Overview", id: "overview", icon: TrendingUp },
  { label: "Posted Projects", id: "projects", icon: FolderPlus, badge: "5 Active" },
  { label: "Talent Pipeline", id: "talent", icon: Users2, badge: "142 Applicants" },
  { label: "Campus Recruitment", id: "campus", icon: Building2 },
  { label: "Interviews", id: "interviews", icon: Calendar, badge: "6 Today" },
];

export default function CorporateDashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");

  // One-screen (fit) mode only: the sidebar menu decides which block is visible.
  const overviewOnly = activeTab === "projects" || activeTab === "talent" ? "fit:hidden" : "";
  const mainListCls = activeTab === "talent" ? "fit:hidden" : "";
  const sideListCls = activeTab === "talent" ? "" : "fit:hidden";

  return (
    <DashboardShell
      role="corporate"
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      menuItems={corporateMenuItems}
    >
      {/* Welcome Banner */}
      <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-800 via-teal-800 to-slate-900 p-5 sm:p-8 text-white shadow-md fit:px-4! fit:py-3! ${overviewOnly}`}>
        <div className="relative z-10 max-w-2xl fit:grid fit:max-w-none fit:grid-cols-[minmax(0,1fr)_auto] fit:items-center fit:gap-x-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/25 text-xs font-semibold text-emerald-100 mb-3 fit:mb-1.5 fit:justify-self-start">
            <Sparkles className="size-3.5 text-amber-300" />
            <span>Class A++ Enterprise Partner</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight fit:text-xl!">
            Welcome, Vikramaditya Roy!
          </h1>
          <p className="mt-2 text-sm text-emerald-100 leading-relaxed fit:mt-1 fit:text-xs">
            TechVista Enterprise has <strong className="text-white">142 vetted candidates</strong> applying to your Cloud DevOps and Full-Stack internship challenges across 850+ ITBC affiliated engineering colleges.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 fit:col-start-2 fit:row-span-3 fit:row-start-1 fit:mt-0 fit:flex-col fit:flex-nowrap fit:gap-2">
            <button
              type="button"
              onClick={() => setActiveTab("projects")}
              className="px-4 py-2 rounded-lg bg-white text-emerald-950 font-bold text-xs shadow-sm hover:bg-emerald-50 transition flex items-center gap-1.5 cursor-pointer"
            >
              <FolderPlus className="size-4 text-emerald-700" /> Post New Project / Drive
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("talent")}
              className="px-4 py-2 rounded-lg bg-emerald-600/40 border border-white/30 text-white font-bold text-xs hover:bg-emerald-600/60 transition flex items-center gap-1.5 cursor-pointer"
            >
              <Users2 className="size-4" /> View Candidates (142)
            </button>
          </div>
        </div>
      </div>

      {/* Metrics Row (White Cards) */}
      <div className={`grid grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4 [&>*]:min-w-0 fit:gap-3! ${overviewOnly}`}>
        <div className="p-3.5 sm:p-5 fit:px-3! fit:py-2.5! rounded-xl bg-white border border-slate-200 shadow-xs">
          <div className="flex items-start justify-between gap-2 text-slate-500 mb-2 fit:mb-0.5">
            <span className="min-w-0 text-[11px] sm:text-xs font-semibold uppercase tracking-wide sm:tracking-wider">Active Postings</span>
            <div className="max-[359px]:hidden shrink-0 p-1.5 sm:p-2 rounded-lg bg-emerald-50 text-emerald-600">
              <FolderPlus className="size-4" />
            </div>
          </div>
          <div className="text-lg sm:text-2xl fit:text-xl! font-bold leading-tight text-slate-900">5 Challenges</div>
          <p className="text-[11px] text-emerald-700 font-semibold mt-1">3 Projects & 2 Internships</p>
        </div>

        <div className="p-3.5 sm:p-5 fit:px-3! fit:py-2.5! rounded-xl bg-white border border-slate-200 shadow-xs">
          <div className="flex items-start justify-between gap-2 text-slate-500 mb-2 fit:mb-0.5">
            <span className="min-w-0 text-[11px] sm:text-xs font-semibold uppercase tracking-wide sm:tracking-wider">Applicants</span>
            <div className="max-[359px]:hidden shrink-0 p-1.5 sm:p-2 rounded-lg bg-blue-50 text-blue-600">
              <Users2 className="size-4" />
            </div>
          </div>
          <div className="text-lg sm:text-2xl fit:text-xl! font-bold leading-tight text-slate-900">142 Talent</div>
          <p className="text-[11px] text-blue-700 font-semibold mt-1">38 Pre-Screened Matches</p>
        </div>

        <div className="p-3.5 sm:p-5 fit:px-3! fit:py-2.5! rounded-xl bg-white border border-slate-200 shadow-xs">
          <div className="flex items-start justify-between gap-2 text-slate-500 mb-2 fit:mb-0.5">
            <span className="min-w-0 text-[11px] sm:text-xs font-semibold uppercase tracking-wide sm:tracking-wider">Hired Trainees</span>
            <div className="max-[359px]:hidden shrink-0 p-1.5 sm:p-2 rounded-lg bg-teal-50 text-teal-600">
              <UserCheck className="size-4" />
            </div>
          </div>
          <div className="text-lg sm:text-2xl fit:text-xl! font-bold leading-tight text-slate-900">18 Engineers</div>
          <p className="text-[11px] text-teal-700 font-semibold mt-1">Joined in FY 2026</p>
        </div>

        <div className="p-3.5 sm:p-5 fit:px-3! fit:py-2.5! rounded-xl bg-white border border-slate-200 shadow-xs">
          <div className="flex items-start justify-between gap-2 text-slate-500 mb-2 fit:mb-0.5">
            <span className="min-w-0 text-[11px] sm:text-xs font-semibold uppercase tracking-wide sm:tracking-wider">Verified Pool</span>
            <div className="max-[359px]:hidden shrink-0 p-1.5 sm:p-2 rounded-lg bg-amber-50 text-amber-600">
              <Building2 className="size-4" />
            </div>
          </div>
          <div className="text-lg sm:text-2xl fit:text-xl! font-bold leading-tight text-slate-900">125K+</div>
          <p className="text-[11px] text-amber-700 font-semibold mt-1">Across 850+ Accredited Colleges</p>
        </div>
      </div>

      {/* Main Grid: Active Postings & Shortlisted Candidates */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 fit:block">
        {/* Left: Active Postings */}
        <div className={`xl:col-span-2 space-y-4 min-w-0 fit:space-y-2 ${mainListCls}`}>
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
            <h2 className="text-lg fit:text-base font-display font-bold text-slate-900 flex items-center gap-2">
              <FolderPlus className="size-5 text-emerald-600" />
              <span>Active Industry Postings</span>
            </h2>
            <button
              type="button"
              className="text-xs font-bold text-emerald-700 hover:text-emerald-800 cursor-pointer"
            >
              + Create New Listing
            </button>
          </div>

          <div className="space-y-3 fit:grid fit:grid-cols-3 fit:gap-3 fit:space-y-0">
            {[
              {
                title: "Cloud DevOps Associate & Infrastructure Automation",
                type: "Internship + Full-Time PPO",
                stipend: "₹35,000 / mo",
                applicants: 64,
                shortlisted: 12,
                status: "Applications Open",
              },
              {
                title: "Enterprise Cybersecurity Threat Detection Pipeline",
                type: "Applied Live Project Challenge",
                stipend: "₹50,000 Milestone Prize",
                applicants: 48,
                shortlisted: 16,
                status: "Evaluation Phase",
              },
              {
                title: "NextGen Full-Stack React & Node.js Developer",
                type: "Graduate Placement Drive",
                stipend: "8.5 LPA Package",
                applicants: 98,
                shortlisted: 22,
                status: "Interviews Active",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-5 fit:p-3 fit:flex fit:flex-col fit:[&>p]:mb-1.5 rounded-xl bg-white border border-slate-200 hover:border-emerald-300 hover:shadow-md transition"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200 w-fit">
                    {item.status}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">{item.type}</span>
                </div>
                <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                <p className="text-xs text-slate-600 mt-1">Compensation: <strong className="text-slate-800">{item.stipend}</strong></p>

                <div className="mt-4 pt-3 fit:mt-auto fit:pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-slate-600">
                    <span>
                      Total Applicants: <strong className="text-slate-900">{item.applicants}</strong>
                    </span>
                    <span>
                      Shortlisted: <strong className="text-emerald-700">{item.shortlisted}</strong>
                    </span>
                  </div>
                  <button
                    type="button"
                    className="px-3.5 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 font-bold text-white transition cursor-pointer shadow-xs"
                  >
                    Manage Pipeline
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Top Talent Matches */}
        <div className={`space-y-4 min-w-0 fit:space-y-2.5 ${sideListCls}`}>
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
            <h2 className="text-lg fit:text-base font-display font-bold text-slate-900 flex items-center gap-2">
              <Users2 className="size-5 text-blue-600" />
              <span>AI Top Matches</span>
            </h2>
            <span className="text-xs text-slate-500 font-medium">Pre-vetted</span>
          </div>

          <div className="space-y-3 fit:grid fit:grid-cols-3 fit:gap-3 fit:space-y-0">
            {[
              {
                name: "Aryan Sharma",
                college: "NIT Trichy • B.Tech CSE",
                score: "96%",
                skills: ["Docker", "Kubernetes", "Next.js", "Python"],
              },
              {
                name: "Ananya Deshmukh",
                college: "IIIT Bangalore • M.Tech AI",
                score: "94%",
                skills: ["PyTorch", "FastAPI", "PostgreSQL"],
              },
              {
                name: "Karan Singhania",
                college: "BITS Pilani • Electronics",
                score: "91%",
                skills: ["Rust", "Embedded C", "AWS IoT"],
              },
            ].map((cand, i) => (
              <div key={i} className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h4 className="text-sm font-bold text-slate-900">{cand.name}</h4>
                  <span className="shrink-0 whitespace-nowrap text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    {cand.score} Match
                  </span>
                </div>
                <p className="text-[11px] text-slate-500">{cand.college}</p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {cand.skills.map((s, si) => (
                    <span
                      key={si}
                      className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <button
                  type="button"
                  className="w-full mt-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-xs font-bold text-white transition cursor-pointer shadow-xs"
                >
                  Schedule Interview
                </button>
              </div>
            ))}
          </div>

          {/* ITBC Verified Guarantee */}
          <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs text-slate-700">
            <div className="flex items-center gap-2 text-emerald-900 font-bold mb-1">
              <CheckCircle2 className="size-4 text-emerald-600" /> 100% Background & Skill Verified
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Every candidate has executed verified GitHub live project commits and passed ITBC academic council evaluation.
            </p>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}

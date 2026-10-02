"use client";

import { useState } from "react";
import DashboardShell from "@/components/dashboard/DashboardShell";
import {
  Users,
  Award,
  BookOpen,
  Landmark,
  FileCheck2,
  Calendar,
  Sparkles,
  TrendingUp,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  GraduationCap,
  Briefcase,
} from "lucide-react";

const facultyMenuItems = [
  { label: "Overview", id: "overview", icon: TrendingUp },
  { label: "Mentee Submissions", id: "mentees", icon: Users, badge: "6 Pending" },
  { label: "Research Grants", id: "grants", icon: Landmark, badge: "₹45L Active" },
  { label: "Academic Advisory", id: "advisory", icon: BookOpen },
  { label: "FDP & Conclaves", id: "events", icon: Calendar },
];

export default function FacultyDashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <DashboardShell
      role="faculty"
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      menuItems={facultyMenuItems}
    >
      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-800 via-violet-800 to-indigo-900 p-6 sm:p-8 text-white shadow-xl">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-purple-200 mb-3">
            <Sparkles className="size-3.5 text-amber-300" />
            <span>Senior Academic Research Fellow</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight">
            Welcome, Dr. Meera Iyer!
          </h1>
          <p className="mt-2 text-sm text-purple-100 leading-relaxed">
            You have <strong className="text-white">6 student capstone project submissions</strong> awaiting peer review. The National R&D Semiconductor Grant deadline closes in 8 days.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setActiveTab("mentees")}
              className="px-4 py-2 rounded-lg bg-white text-purple-900 font-bold text-xs shadow hover:bg-purple-50 transition flex items-center gap-1.5"
            >
              <FileCheck2 className="size-4" /> Review Submissions (6)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("grants")}
              className="px-4 py-2 rounded-lg bg-purple-600/40 border border-white/30 text-white font-bold text-xs hover:bg-purple-600/60 transition flex items-center gap-1.5"
            >
              <Landmark className="size-4" /> R&D Grants Portal
            </button>
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-xl bg-white/[0.04] border border-white/10">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Supervised Mentees</span>
            <Users className="size-5 text-purple-400" />
          </div>
          <div className="text-2xl font-bold text-white">24 Students</div>
          <p className="text-[11px] text-purple-300 mt-1">Across 8 Live Project Squads</p>
        </div>

        <div className="p-5 rounded-xl bg-white/[0.04] border border-white/10">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Active R&D Grants</span>
            <Landmark className="size-5 text-emerald-400" />
          </div>
          <div className="text-2xl font-bold text-white">₹45 Lakhs</div>
          <p className="text-[11px] text-emerald-400 mt-1">2 Industry-Funded Grants</p>
        </div>

        <div className="p-5 rounded-xl bg-white/[0.04] border border-white/10">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Industry Collabs</span>
            <Briefcase className="size-5 text-blue-400" />
          </div>
          <div className="text-2xl font-bold text-white">8 Corporates</div>
          <p className="text-[11px] text-blue-300 mt-1">TechVista, TCS, DRDO labs</p>
        </div>

        <div className="p-5 rounded-xl bg-white/[0.04] border border-white/10">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Academic Credits</span>
            <Award className="size-5 text-amber-400" />
          </div>
          <div className="text-2xl font-bold text-white">320 FDC</div>
          <p className="text-[11px] text-amber-300 mt-1">Faculty Excellence Status</p>
        </div>
      </div>

      {/* Main Sections */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left: Mentee Submissions */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-display font-bold text-white flex items-center gap-2">
              <FileCheck2 className="size-5 text-purple-400" />
              <span>Pending Student Project Reviews</span>
            </h2>
            <span className="text-xs text-slate-400">6 requiring grading</span>
          </div>

          <div className="space-y-3">
            {[
              {
                student: "Aryan Sharma (Team Lead)",
                project: "e-Governance Citizen Grievance AI Telemetry",
                milestone: "Sprint 3: Model Evaluation & REST API Endpoints",
                time: "Submitted 2 hours ago",
                college: "National Institute of Technology",
              },
              {
                student: "Priya V. & Rohan K.",
                project: "Next-Gen Fintech KYC Security Framework",
                milestone: "Sprint 2: Zero-Knowledge Proof Architecture",
                time: "Submitted yesterday",
                college: "IIIT Hyderabad",
              },
              {
                student: "Ankit Verma",
                project: "Distributed Edge Computing for Agri-Tech IoT",
                milestone: "Sprint 1: Sensor Gateway Firmware Benchmark",
                time: "Submitted 2 days ago",
                college: "BITS Pilani",
              },
            ].map((sub, i) => (
              <div
                key={i}
                className="p-5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-purple-500/40 transition"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h3 className="text-sm font-bold text-white">{sub.project}</h3>
                  <span className="text-[11px] text-purple-300 flex items-center gap-1">
                    <Clock className="size-3" /> {sub.time}
                  </span>
                </div>
                <p className="text-xs text-slate-300">
                  By <strong className="text-white">{sub.student}</strong> • {sub.college}
                </p>
                <p className="text-xs text-slate-400 mt-1">Deliverable: {sub.milestone}</p>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    className="px-3 py-1.5 rounded-lg border border-white/20 text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/5 transition"
                  >
                    View Code & Report
                  </button>
                  <button
                    type="button"
                    className="px-4 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-xs font-bold text-white transition"
                  >
                    Grade & Approve
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Grants & Advisory */}
        <div className="space-y-4">
          <h2 className="text-lg font-display font-bold text-white flex items-center gap-2">
            <Landmark className="size-5 text-emerald-400" />
            <span>Research Grants & MoUs</span>
          </h2>

          <div className="space-y-3">
            {[
              {
                title: "National Quantum Edge AI Initiative",
                sponsor: "Dept of Science & Technology",
                amount: "₹25,00,000",
                status: "Approved & Active",
              },
              {
                title: "Autonomous EV Fleet Telemetry System",
                sponsor: "Automotive Industry Consortium",
                amount: "₹20,00,000",
                status: "Mid-Term Review",
              },
              {
                title: "Cyber Resilience for Critical Grid Infra",
                sponsor: "Ministry of Power & ITBC",
                amount: "₹35,00,000",
                status: "Proposal Under Review",
              },
            ].map((g, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/[0.04] border border-white/10">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-emerald-400">{g.amount}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-slate-300">
                    {g.status}
                  </span>
                </div>
                <h4 className="text-sm font-semibold text-white">{g.title}</h4>
                <p className="text-xs text-slate-400 mt-1">{g.sponsor}</p>
              </div>
            ))}
          </div>

          {/* Academic Advisory Card */}
          <div className="p-4 rounded-xl bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-purple-500/30 text-xs">
            <div className="flex items-center gap-2 text-purple-300 font-bold mb-1">
              <GraduationCap className="size-4" /> 2026 Curriculum Advisory
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              Contribute to the ITBC standardized AI & Quantum computing undergraduate syllabus recommended to 850+ colleges.
            </p>
            <button
              type="button"
              className="mt-3 px-3 py-1.5 rounded bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs"
            >
              Open Advisory Board
            </button>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}

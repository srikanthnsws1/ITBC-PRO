"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  User,
  UserCog,
  Building,
  Handshake,
  ArrowRight,
  CheckCircle2,
  Lock,
  Mail,
  ShieldCheck,
  Sparkles,
  Eye,
  EyeOff,
  Building2,
  GraduationCap,
} from "lucide-react";
import { ROLE_CONFIGS, Role, saveSession } from "@/lib/auth";
import Logo from "@/components/Logo";

interface AuthCardProps {
  initialRole: Role;
  mode: "login" | "register";
}

const ROLE_ICONS = {
  student: User,
  faculty: UserCog,
  corporate: Building,
  partner: Handshake,
};

export default function AuthCard({ initialRole, mode }: AuthCardProps) {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<Role>(initialRole);
  const [currentMode, setCurrentMode] = useState<"login" | "register">(mode);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    organization: "",
    designation: "",
    agreed: false,
  });

  const config = ROLE_CONFIGS[selectedRole];
  const CurrentIcon = ROLE_ICONS[selectedRole];

  const handleRoleChange = (newRole: Role) => {
    setSelectedRole(newRole);
    setError(null);
  };

  const handleQuickDemo = () => {
    setLoading(true);
    saveSession(config.demoUser);
    setTimeout(() => {
      router.push(config.dashboardPath);
    }, 400);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (currentMode === "login") {
      if (!formData.email || !formData.password) {
        setError("Please enter both your email address and password.");
        return;
      }
    } else {
      if (!formData.name || !formData.email || !formData.password) {
        setError("Please fill out all required fields.");
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match.");
        return;
      }
      if (!formData.agreed) {
        setError("Please accept the ITBC member terms of service.");
        return;
      }
    }

    setLoading(true);

    const userSession = {
      role: selectedRole,
      name: formData.name || config.demoUser.name,
      email: formData.email,
      organization: formData.organization || config.demoUser.organization,
      id: `ITBC-${selectedRole.toUpperCase().slice(0, 3)}-${Math.floor(1000 + Math.random() * 9000)}`,
      badge: config.badge,
    };

    saveSession(userSession);

    setTimeout(() => {
      router.push(config.dashboardPath);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-[#070d1e] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-[#070d1e] to-[#040711] py-8 px-4 sm:px-6 lg:px-8 text-white flex flex-col justify-center">
      <div className="max-w-5xl mx-auto w-full">
        {/* Top Header / Brand */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
          <Link href="/" className="inline-flex items-center gap-3 group">
            <div className="bg-white p-1 rounded-md shadow">
              <Logo />
            </div>
            <span className="text-xs text-slate-300 font-medium tracking-wide">
              ← Return to Main Portal
            </span>
          </Link>
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <ShieldCheck className="size-4 text-emerald-400" />
            <span>Official ITBC Digital Gateway • 256-Bit SSL Secured</span>
          </div>
        </div>

        {/* Role Tabs */}
        <div className="mb-6">
          <div className="text-center sm:text-left mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
              Select Your Access Portal
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
            {(Object.keys(ROLE_CONFIGS) as Role[]).map((rKey) => {
              const rCfg = ROLE_CONFIGS[rKey];
              const Icon = ROLE_ICONS[rKey];
              const isActive = selectedRole === rKey;
              return (
                <button
                  key={rKey}
                  type="button"
                  onClick={() => handleRoleChange(rKey)}
                  className={`flex items-center gap-3 p-3.5 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-white/10 border-blue-400 shadow-lg shadow-blue-500/20 ring-1 ring-blue-400"
                      : "bg-white/5 border-white/10 hover:bg-white/[0.08] hover:border-white/20 text-slate-300"
                  }`}
                >
                  <div
                    className={`size-10 rounded-lg grid place-items-center shrink-0 ${
                      isActive ? "bg-blue-600 text-white" : "bg-white/10 text-slate-400"
                    }`}
                  >
                    <Icon className="size-5" />
                  </div>
                  <div className="min-w-0">
                    <p className={`text-sm font-bold truncate ${isActive ? "text-white" : "text-slate-300"}`}>
                      {rCfg.shortLabel}
                    </p>
                    <p className="text-[11px] text-slate-400 truncate">{rCfg.badge}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Card Container */}
        <div className="rounded-2xl border border-white/15 bg-white/[0.04] backdrop-blur-xl shadow-2xl overflow-hidden grid lg:grid-cols-[1.25fr_0.9fr]">
          {/* Form Side */}
          <div className="p-6 sm:p-10 flex flex-col justify-between">
            <div>
              {/* Login vs Register Toggle */}
              <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
                <div>
                  <h1 className="text-2xl font-display font-extrabold text-white flex items-center gap-2.5">
                    <CurrentIcon className="size-6 text-blue-400" />
                    <span>
                      {selectedRole === "student" && "Student"}
                      {selectedRole === "faculty" && "Faculty & Academic"}
                      {selectedRole === "corporate" && "Corporate Enterprise"}
                      {selectedRole === "partner" && "Institutional Partner"}{" "}
                      {currentMode === "login" ? "Sign In" : "Registration"}
                    </span>
                  </h1>
                  <p className="text-xs text-slate-400 mt-1">{config.description}</p>
                </div>
                <div className="inline-flex rounded-lg bg-black/40 p-1 border border-white/10 shrink-0">
                  <button
                    type="button"
                    onClick={() => {
                      setCurrentMode("login");
                      setError(null);
                    }}
                    className={`px-3 py-1.5 rounded-md text-xs font-semibold transition ${
                      currentMode === "login"
                        ? "bg-blue-600 text-white shadow-md"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Sign In
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setCurrentMode("register");
                      setError(null);
                    }}
                    className={`px-3 py-1.5 rounded-md text-xs font-semibold transition ${
                      currentMode === "register"
                        ? "bg-blue-600 text-white shadow-md"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Register
                  </button>
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="mb-5 rounded-lg bg-rose-500/10 border border-rose-500/30 p-3 text-xs text-rose-300 flex items-center gap-2">
                  <span className="font-bold">Error:</span> {error}
                </div>
              )}

              {/* Demo 1-Click Access Pill */}
              <div className="mb-6 p-3.5 rounded-xl bg-gradient-to-r from-blue-900/40 via-indigo-900/40 to-blue-900/20 border border-blue-400/30 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 text-xs text-blue-200">
                  <Sparkles className="size-4 text-amber-400 shrink-0" />
                  <div>
                    <span className="font-semibold text-white">Instant Demo Testing: </span>
                    <span>Load {config.shortLabel} credentials & explore dashboard immediately.</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleQuickDemo}
                  disabled={loading}
                  className="px-3.5 py-1.5 rounded-md bg-blue-600 hover:bg-blue-500 text-xs font-bold text-white shrink-0 shadow transition flex items-center gap-1.5 cursor-pointer"
                >
                  Quick Demo <ArrowRight className="size-3" />
                </button>
              </div>

              {/* Interactive Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {currentMode === "register" && (
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Full Legal Name / Authorized Representative *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={config.demoUser.name}
                        className="w-full rounded-lg bg-black/40 border border-white/15 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    {selectedRole === "student" && "Official Campus / Student Email *"}
                    {selectedRole === "faculty" && "Institutional (.edu / .ac.in / Official) Email *"}
                    {selectedRole === "corporate" && "Corporate Work Email *"}
                    {selectedRole === "partner" && "Official Representative Email *"}
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-3 size-4 text-slate-400" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={config.demoUser.email}
                      className="w-full rounded-lg bg-black/40 border border-white/15 pl-10 pr-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
                    />
                  </div>
                </div>

                {currentMode === "register" && (
                  <div className="grid sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        {selectedRole === "student" && "College / University Name"}
                        {selectedRole === "faculty" && "University / Institution Name"}
                        {selectedRole === "corporate" && "Company Name"}
                        {selectedRole === "partner" && "Organization / Council"}
                      </label>
                      <div className="relative">
                        <Building2 className="absolute left-3.5 top-3 size-4 text-slate-400" />
                        <input
                          type="text"
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          placeholder={config.demoUser.organization}
                          className="w-full rounded-lg bg-black/40 border border-white/15 pl-10 pr-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        {selectedRole === "student" && "Degree / Year of Graduation"}
                        {selectedRole === "faculty" && "Department / Designation"}
                        {selectedRole === "corporate" && "Industry Sector / Domain"}
                        {selectedRole === "partner" && "Partnership Category"}
                      </label>
                      <div className="relative">
                        <GraduationCap className="absolute left-3.5 top-3 size-4 text-slate-400" />
                        <input
                          type="text"
                          value={formData.designation}
                          onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                          placeholder={
                            selectedRole === "student"
                              ? "B.Tech CSE (2026)"
                              : selectedRole === "faculty"
                              ? "Dept of Computer Science"
                              : selectedRole === "corporate"
                              ? "IT Services & Cloud"
                              : "Regional Incubation Center"
                          }
                          className="w-full rounded-lg bg-black/40 border border-white/15 pl-10 pr-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-xs font-medium text-slate-300">
                      {currentMode === "register" ? "Create Secure Password *" : "Password *"}
                    </label>
                    {currentMode === "login" && (
                      <a href="#" className="text-xs text-blue-400 hover:text-blue-300">
                        Forgot Password?
                      </a>
                    )}
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-3 size-4 text-slate-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      placeholder="••••••••••••"
                      className="w-full rounded-lg bg-black/40 border border-white/15 pl-10 pr-10 py-2.5 text-sm text-white placeholder-slate-500 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      className="absolute right-3.5 top-3 text-slate-400 hover:text-slate-200"
                    >
                      {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                    </button>
                  </div>
                </div>

                {currentMode === "register" && (
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Confirm Password *
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3.5 top-3 size-4 text-slate-400" />
                      <input
                        type={showPassword ? "text" : "password"}
                        required
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                        placeholder="••••••••••••"
                        className="w-full rounded-lg bg-black/40 border border-white/15 pl-10 pr-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
                      />
                    </div>
                  </div>
                )}

                {currentMode === "register" ? (
                  <div className="flex items-start gap-2.5 pt-1">
                    <input
                      type="checkbox"
                      id="terms"
                      checked={formData.agreed}
                      onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                      className="mt-1 size-4 rounded border-slate-700 bg-black/40 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor="terms" className="text-xs text-slate-300 leading-relaxed">
                      I agree to the{" "}
                      <span className="text-blue-400 underline cursor-pointer">
                        ITBC Code of Ethics
                      </span>{" "}
                      and acknowledge verification of academic/corporate credentials for the {config.shortLabel} wing.
                    </label>
                  </div>
                ) : (
                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="size-4 rounded border-slate-700 bg-black/40 text-blue-600 focus:ring-blue-500"
                      />
                      <span>Keep me authenticated on this device</span>
                    </label>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-4 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-600/30 transition duration-150 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {loading ? (
                    <div className="flex items-center gap-2">
                      <div className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Authenticating...</span>
                    </div>
                  ) : (
                    <>
                      <span>
                        {currentMode === "login"
                          ? `Sign In as ${config.shortLabel}`
                          : `Complete ${config.shortLabel} Registration`}
                      </span>
                      <ArrowRight className="size-4" />
                    </>
                  )}
                </button>
              </form>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 text-center text-xs text-slate-400">
              {currentMode === "login" ? (
                <p>
                  Need a new {config.shortLabel} account?{" "}
                  <button
                    type="button"
                    onClick={() => {
                      setCurrentMode("register");
                      setError(null);
                    }}
                    className="text-blue-400 font-semibold hover:underline cursor-pointer"
                  >
                    Register here
                  </button>
                </p>
              ) : (
                <p>
                  Already have an existing membership?{" "}
                  <button
                    type="button"
                    onClick={() => {
                      setCurrentMode("login");
                      setError(null);
                    }}
                    className="text-blue-400 font-semibold hover:underline cursor-pointer"
                  >
                    Sign in to your dashboard
                  </button>
                </p>
              )}
            </div>
          </div>

          {/* Right Hero / Benefits Side */}
          <div className="bg-gradient-to-br from-[#0c183a] via-[#09122c] to-[#040817] p-8 lg:p-10 border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-xs font-semibold text-blue-300 mb-6">
                <span>ITBC Verified Network</span>
                <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              <h2 className="text-xl font-display font-bold text-white mb-3">
                Why Join as a {config.label}?
              </h2>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Experience India&#39;s premier digital knowledge ecosystem uniting 125K+ professionals, 850+ colleges, and 1,200+ companies.
              </p>

              <div className="space-y-4 mb-8">
                {config.keyPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-200 leading-snug">{point}</p>
                  </div>
                ))}
              </div>

              {/* Verified Badge / Mock Profile info */}
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-xs">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-bold grid place-items-center text-sm shadow">
                    {config.demoUser.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-white">{config.demoUser.name}</p>
                    <p className="text-[11px] text-slate-400">{config.demoUser.organization}</p>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Role: {config.badge}</span>
                  <span className="text-emerald-400 font-medium">● Status: Active</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 text-[11px] text-slate-400 leading-relaxed">
              Information Technology Business Council (ITBC) operates under established e-Governance & digital standards. Inquiries: <a href="mailto:info@itbc.world" className="text-blue-400 hover:underline">info@itbc.world</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
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
  Eye,
  EyeOff,
  Building2,
  GraduationCap,
  KeyRound,
  Copy,
  Check,
} from "lucide-react";
import { ROLE_CONFIGS, Role, saveSession } from "@/lib/auth";
import { LogoLockup } from "@/components/Logo";

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

const ROLE_IMAGES: Record<Role, string> = {
  student: "/images/sections/membership-students.webp",
  faculty: "/images/sections/membership-institutions.webp",
  corporate: "/images/sections/membership-corporate.webp",
  partner: "/images/sections/membership-stakeholders.webp",
};

export default function AuthCard({ initialRole, mode }: AuthCardProps) {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<Role>(initialRole);
  const [currentMode, setCurrentMode] = useState<"login" | "register">(mode);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const config = ROLE_CONFIGS[selectedRole];
  const CurrentIcon = ROLE_ICONS[selectedRole];

  // Form states with default empty values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    organization: "",
    designation: "",
    agreed: false,
  });

  const handleRoleChange = (newRole: Role) => {
    setSelectedRole(newRole);
    setError(null);
  };

  const handleAutoFill = () => {
    setFormData((prev) => ({
      ...prev,
      email: config.testCredentials.email,
      password: config.testCredentials.password,
      confirmPassword: config.testCredentials.password,
      name: config.demoUser.name,
      organization: config.demoUser.organization,
      agreed: true,
    }));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
      // Redirect to role dashboard upon successful login/registration
      router.push(config.dashboardPath);
    }, 450);
  };

  return (
    <div className="dot-paper min-h-screen bg-slate-50 text-slate-900 py-6 sm:py-10 fit:py-3! px-4 sm:px-6 lg:px-8 flex flex-col justify-center font-sans">
      <div className="max-w-5xl mx-auto w-full fit:grid fit:max-w-6xl fit:grid-cols-[auto_minmax(0,1fr)] fit:items-center fit:gap-x-4 fit:gap-y-2.5">
        {/* Top Header / Brand */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6 sm:mb-8 pb-4 border-b border-slate-200 fit:mb-0! fit:border-0 fit:pb-0">
          <Link href="/" aria-label="Return to ITBC main portal" className="inline-flex items-center gap-3 group">
            <div className="bg-white p-1 rounded-md border border-slate-200 shrink-0">
              <span className="block fit:hidden">
                <LogoLockup />
              </span>
              <span className="hidden fit:block">
                <LogoLockup compact />
              </span>
            </div>
            <span className="text-xs text-slate-600 font-semibold tracking-wide group-hover:text-blue-700 transition">
              ← Return to Main Portal
            </span>
          </Link>
          <div className="flex items-center gap-2 text-[11px] sm:text-xs text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200 text-center fit:hidden">
            <ShieldCheck className="size-4 shrink-0 text-emerald-600" />
            <span>Official ITBC Digital Gateway • 256-Bit SSL Secured</span>
          </div>
        </div>

        {/* Role Tabs */}
        <div className="mb-6 fit:mb-0">
          <div className="text-center sm:text-left mb-2.5 fit:hidden">
            <span className="text-xs font-medium text-slate-500">
              Select Member Wing
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
            {(Object.keys(ROLE_CONFIGS) as Role[]).map((rKey) => {
              const rCfg = ROLE_CONFIGS[rKey];
              const Icon = ROLE_ICONS[rKey];
              const isActive = selectedRole === rKey;
              return (
                <button
                  key={rKey}
                  type="button"
                  onClick={() => handleRoleChange(rKey)}
                  className={`flex min-w-0 items-center gap-2 p-2 sm:gap-3 sm:p-2.5 fit:p-2! rounded-xl border text-left transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#0b1437] border-[#0b1437] shadow-lg shadow-blue-900/20"
                      : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700"
                  }`}
                >
                  <div className="relative size-10 sm:size-11 fit:size-8! rounded-lg overflow-hidden shrink-0 ring-1 ring-slate-200">
                    <Image
                      src={ROLE_IMAGES[rKey]}
                      alt={rCfg.shortLabel}
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                    <div className={`absolute inset-0 transition-opacity ${isActive ? "bg-blue-950/40" : "bg-black/10"}`} />
                    <div
                      className={`absolute bottom-0.5 right-0.5 size-4 rounded-full grid place-items-center ${
                        isActive ? "bg-amber-400 text-[#0b1437]" : "bg-white text-slate-700 shadow-xs"
                      }`}
                    >
                      <Icon className="size-2.5" />
                    </div>
                  </div>
                  <div className="min-w-0">
                    <p className={`text-sm font-bold truncate ${isActive ? "text-white" : "text-slate-800"}`}>
                      {rCfg.shortLabel}
                    </p>
                    <p className={`text-[11px] truncate ${isActive ? "text-slate-300" : "text-slate-500"}`}>{rCfg.badge}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Card Container (Pure White UI) */}
        <div className="fit:col-span-2 rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10 overflow-hidden grid grid-cols-1 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.85fr)]">
          {/* Form Side */}
          <div className="p-5 sm:p-10 fit:p-5! flex flex-col justify-between">
            <div>
              {/* Login vs Register Toggle */}
              <div className="flex flex-col-reverse items-start gap-4 sm:flex-row sm:items-center sm:justify-between mb-6 pb-4 fit:mb-3 fit:pb-2.5 border-b border-slate-200">
                <div className="min-w-0">
                  <h1 className="text-xl sm:text-2xl fit:text-xl! font-display font-bold text-slate-900 flex items-center gap-3">
                    <div className="relative size-10 sm:size-11 overflow-hidden rounded-xl ring-2 ring-blue-600/30 shrink-0 shadow-sm">
                      <Image
                        src={ROLE_IMAGES[selectedRole]}
                        alt={config.shortLabel}
                        fill
                        sizes="44px"
                        className="object-cover"
                      />
                    </div>
                    <span>
                      {selectedRole === "student" && "Student"}
                      {selectedRole === "faculty" && "Faculty & Academic"}
                      {selectedRole === "corporate" && "Corporate Enterprise"}
                      {selectedRole === "partner" && "Institutional Partner"}{" "}
                      {currentMode === "login" ? "Sign In" : "Registration"}
                    </span>
                  </h1>
                  <p className="text-xs text-slate-500 mt-1.5 fit:hidden">{config.description}</p>
                </div>
                <div className="inline-flex rounded-lg bg-slate-100 p-1 border border-slate-200 shrink-0">
                  <button
                    type="button"
                    onClick={() => {
                      setCurrentMode("login");
                      setError(null);
                    }}
                    className={`px-3 py-1.5 rounded-md text-xs font-semibold transition cursor-pointer ${
                      currentMode === "login"
                        ? "bg-white text-blue-700 shadow-sm font-bold"
                        : "text-slate-600 hover:text-slate-900"
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
                    className={`px-3 py-1.5 rounded-md text-xs font-semibold transition cursor-pointer ${
                      currentMode === "register"
                        ? "bg-white text-blue-700 shadow-sm font-bold"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Register
                  </button>
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="mb-5 rounded-lg bg-rose-50 border border-rose-200 p-3 text-xs text-rose-700 flex items-center gap-2">
                  <span className="font-bold">Error:</span> {error}
                </div>
              )}

              {/* TEST CREDENTIALS BOX (White/Light Theme with Auto-fill) */}
              <div className="mb-6 p-4 rounded-xl bg-slate-50 border border-dashed border-slate-300 text-slate-800 fit:mb-3 fit:flex fit:flex-wrap fit:items-center fit:gap-x-2 fit:gap-y-1 fit:px-2.5 fit:py-2">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2 fit:contents">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                    <KeyRound className="size-4 shrink-0 text-slate-500" />
                    <span>Test Credentials ({config.shortLabel}):</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleAutoFill}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-900 text-white font-semibold text-[11px] transition cursor-pointer fit:order-last fit:ml-auto"
                  >
                    {copied ? (
                      <>
                        <Check className="size-3 text-white" /> Filled!
                      </>
                    ) : (
                      <>
                        <Copy className="size-3" /> Auto-Fill Form
                      </>
                    )}
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono bg-white p-2.5 rounded-lg border border-slate-200 break-all fit:flex fit:gap-2 fit:border-0 fit:bg-transparent fit:p-0">
                  <div>
                    <span className="text-slate-500 font-sans font-medium text-[11px]">Email: </span>
                    <strong className="text-slate-900 select-all">{config.testCredentials.email}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 font-sans font-medium text-[11px]">Password: </span>
                    <strong className="text-slate-900 select-all">{config.testCredentials.password}</strong>
                  </div>
                </div>
                <p className="text-[11px] text-slate-500 mt-2 font-sans fit:hidden">
                  Click <strong>&quot;Auto-Fill Form&quot;</strong> above, then hit <strong>&quot;Sign In&quot;</strong> below to test the dashboard.
                </p>
              </div>

              {/* Interactive Form */}
              <form onSubmit={handleSubmit} className="space-y-4 fit:grid fit:grid-cols-2 fit:items-end fit:gap-x-3 fit:gap-y-2 fit:space-y-0">
                {currentMode === "register" && (
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Legal Name / Authorized Representative *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={config.demoUser.name}
                      className="w-full rounded-lg bg-white border border-slate-300 px-3.5 py-2.5 fit:py-2 text-base sm:text-sm text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {selectedRole === "student" && "Campus / Student Email *"}
                    {selectedRole === "faculty" && "Institutional (.edu / .ac.in / Official) Email *"}
                    {selectedRole === "corporate" && "Corporate Work Email *"}
                    {selectedRole === "partner" && "Official Representative Email *"}
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-3 fit:top-2.5 size-4 text-slate-400" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={config.testCredentials.email}
                      className="w-full rounded-lg bg-white border border-slate-300 pl-10 pr-3.5 py-2.5 fit:py-2 text-base sm:text-sm text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                </div>

                {currentMode === "register" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 fit:col-span-2 fit:items-end fit:gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        {selectedRole === "student" && "College / University Name"}
                        {selectedRole === "faculty" && "University / Institution Name"}
                        {selectedRole === "corporate" && "Company Name"}
                        {selectedRole === "partner" && "Organization / Council"}
                      </label>
                      <div className="relative">
                        <Building2 className="absolute left-3.5 top-3 fit:top-2.5 size-4 text-slate-400" />
                        <input
                          type="text"
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          placeholder={config.demoUser.organization}
                          className="w-full rounded-lg bg-white border border-slate-300 pl-10 pr-3.5 py-2.5 fit:py-2 text-base sm:text-sm text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        {selectedRole === "student" && "Degree / Year"}
                        {selectedRole === "faculty" && "Department / Designation"}
                        {selectedRole === "corporate" && "Industry Sector"}
                        {selectedRole === "partner" && "Partnership Category"}
                      </label>
                      <div className="relative">
                        <GraduationCap className="absolute left-3.5 top-3 fit:top-2.5 size-4 text-slate-400" />
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
                              ? "Enterprise Cloud"
                              : "Regional Incubation"
                          }
                          className="w-full rounded-lg bg-white border border-slate-300 pl-10 pr-3.5 py-2.5 fit:py-2 text-base sm:text-sm text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-xs font-semibold text-slate-700">
                      {currentMode === "register" ? "Create Password *" : "Password *"}
                    </label>
                    {currentMode === "login" && (
                      <a href="#" className="text-xs text-blue-600 hover:text-blue-800 font-medium">
                        Forgot Password?
                      </a>
                    )}
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-3 fit:top-2.5 size-4 text-slate-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      placeholder="••••••••••••"
                      className="w-full rounded-lg bg-white border border-slate-300 pl-10 pr-10 py-2.5 fit:py-2 text-base sm:text-sm text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      className="absolute right-3.5 top-3 fit:top-2.5 text-slate-400 hover:text-slate-600"
                    >
                      {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                    </button>
                  </div>
                </div>

                {currentMode === "register" && (
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Confirm Password *
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3.5 top-3 fit:top-2.5 size-4 text-slate-400" />
                      <input
                        type={showPassword ? "text" : "password"}
                        required
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                        placeholder="••••••••••••"
                        className="w-full rounded-lg bg-white border border-slate-300 pl-10 pr-3.5 py-2.5 fit:py-2 text-base sm:text-sm text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
                      />
                    </div>
                  </div>
                )}

                {currentMode === "register" ? (
                  <div className="flex items-start gap-2.5 pt-1 fit:col-span-2 fit:pt-0">
                    <input
                      type="checkbox"
                      id="terms"
                      checked={formData.agreed}
                      onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                      className="mt-1 size-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor="terms" className="text-xs text-slate-600 leading-relaxed">
                      I agree to the{" "}
                      <span className="text-blue-700 underline font-medium cursor-pointer">
                        ITBC Code of Ethics
                      </span>{" "}
                      and acknowledge verification of academic/corporate credentials for the {config.shortLabel} wing.
                    </label>
                  </div>
                ) : (
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600 fit:col-span-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="size-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span>Keep me authenticated on this device</span>
                    </label>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-4 fit:col-span-2 fit:mt-0.5 fit:py-2! rounded-lg bg-[#0b1437] hover:bg-blue-700 px-3 py-3 shadow-md shadow-blue-900/20 text-sm font-semibold text-white transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {loading ? (
                    <div className="flex items-center gap-2 text-left">
                      <div className="size-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      <span>Authenticating & Entering Dashboard...</span>
                    </div>
                  ) : (
                    <>
                      <span>
                        {currentMode === "login"
                          ? `Sign In to ${config.shortLabel} Dashboard`
                          : `Complete ${config.shortLabel} Registration`}
                      </span>
                      <ArrowRight className="size-4" />
                    </>
                  )}
                </button>
              </form>
            </div>

            <div className="mt-8 pt-4 fit:mt-2.5 fit:pt-2 border-t border-slate-200 text-center text-xs text-slate-600">
              {currentMode === "login" ? (
                <p>
                  Need a new {config.shortLabel} membership?{" "}
                  <button
                    type="button"
                    onClick={() => {
                      setCurrentMode("register");
                      setError(null);
                    }}
                    className="text-blue-700 font-bold hover:underline cursor-pointer"
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
                    className="text-blue-700 font-bold hover:underline cursor-pointer"
                  >
                    Sign in to your dashboard
                  </button>
                </p>
              )}
            </div>
          </div>

          {/* Right Hero / Benefits Side (Light Slate / Soft Blue theme) */}
          <div className="ink-panel p-5 sm:p-8 lg:p-10 fit:p-6! text-white flex flex-col justify-between">
            <div>
              {/* Role Picture Banner */}
              <div className="relative mb-5 h-44 sm:h-52 w-full overflow-hidden rounded-xl shadow-xl ring-1 ring-white/20">
                <Image
                  src={ROLE_IMAGES[selectedRole]}
                  alt={`${config.label} Community`}
                  fill
                  sizes="(min-width: 1024px) 35vw, 100vw"
                  className="object-cover transition-all duration-300"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1437] via-[#0b1437]/35 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-300 drop-shadow">
                    {config.shortLabel} Community
                  </span>
                  <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] font-semibold text-white backdrop-blur-md border border-white/20 shadow-xs">
                    {config.badge}
                  </span>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-white mb-4 fit:mb-2">
                <span>ITBC Verified Network</span>
                <span className="size-2 rounded-full bg-emerald-400 motion-safe:animate-pulse" />
              </div>

              <h2 className="text-xl font-display font-extrabold text-white mb-2 fit:mb-1.5 fit:text-lg">
                Why Join as a {config.label}?
              </h2>
              <p className="text-xs text-slate-300 leading-relaxed mb-5 fit:mb-2.5">
                Experience India&#39;s premier digital knowledge ecosystem uniting 125K+ professionals, 850+ colleges, and 1,200+ companies.
              </p>

              <div className="space-y-3 mb-6 fit:mb-3 fit:space-y-2">
                {config.keyPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="size-4 text-amber-400 shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-100 leading-snug font-medium">{point}</p>
                  </div>
                ))}
              </div>

              {/* Verified Badge / Mock Profile info */}
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 fit:p-3 text-xs backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="relative size-11 rounded-full overflow-hidden shrink-0 ring-2 ring-amber-400 shadow-sm">
                    <Image
                      src={ROLE_IMAGES[selectedRole]}
                      alt={config.demoUser.name}
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-white">{config.demoUser.name}</p>
                    <p className="text-[11px] text-slate-400">{config.demoUser.organization}</p>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-[11px] text-slate-400">
                  <span>Role: <strong className="text-white">{config.badge}</strong></span>
                  <span className="text-emerald-400 font-semibold">● Status: Active</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 fit:mt-4 fit:pt-3 border-t border-white/10 text-[11px] text-slate-400 leading-relaxed">
              Information Technology Business Council (ITBC) operates under established e-Governance & digital standards. Inquiries: <a href="mailto:info@itbc.world" className="text-amber-300 font-medium hover:underline">info@itbc.world</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

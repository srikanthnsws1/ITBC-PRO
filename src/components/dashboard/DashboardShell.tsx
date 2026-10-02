"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Bell,
  ChevronDown,
  LogOut,
  Menu,
  X,
  Search,
  User,
  UserCog,
  Building,
  Handshake,
  ShieldCheck,
  ExternalLink,
  Lock,
} from "lucide-react";
import Logo from "@/components/Logo";
import { ROLE_CONFIGS, Role, UserSession, clearSession, getStoredSession, saveSession } from "@/lib/auth";

interface NavMenuItem {
  label: string;
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
}

interface DashboardShellProps {
  role: Role;
  activeTab: string;
  setActiveTab: (tabId: string) => void;
  menuItems: NavMenuItem[];
  children: React.ReactNode;
}

const ROLE_ICONS = {
  student: User,
  faculty: UserCog,
  corporate: Building,
  partner: Handshake,
};

export default function DashboardShell({
  role,
  activeTab,
  setActiveTab,
  menuItems,
  children,
}: DashboardShellProps) {
  const router = useRouter();
  const [session, setSession] = useState<UserSession | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [roleSwitcherOpen, setRoleSwitcherOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const config = ROLE_CONFIGS[role];
  const CurrentIcon = ROLE_ICONS[role];

  useEffect(() => {
    const stored = getStoredSession();
    if (stored && stored.role === role) {
      setSession(stored);
    } else {
      // If user came directly, set the demo session for convenience
      saveSession(config.demoUser);
      setSession(config.demoUser);
    }
    setIsReady(true);
  }, [role, config.demoUser]);

  const handleLogout = () => {
    clearSession();
    router.push(config.loginPath);
  };

  const currentUserName = session?.name || config.demoUser.name;
  const currentUserOrg = session?.organization || config.demoUser.organization;
  const currentUserId = session?.id || config.demoUser.id;

  if (!isReady) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="flex items-center gap-3 text-slate-600 text-sm font-semibold">
          <div className="size-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
          <span>Verifying Member Session...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col font-sans">
      {/* Top Navbar (Pure White Header) */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-xs">
        <div className="px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Left: Brand & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 lg:hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>

            <Link href="/" className="flex items-center gap-3 group">
              <div className="bg-white p-1 rounded-md border border-slate-200 shadow-xs shrink-0">
                <Logo />
              </div>
              <div className="hidden sm:block leading-tight">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                    {config.label} Dashboard
                  </span>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full border border-emerald-200">
                    Logged In
                  </span>
                </div>
                <p className="text-[11px] text-slate-500">Information Technology Business Council</p>
              </div>
            </Link>
          </div>

          {/* Center Search (Hidden on Mobile) */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <Search className="absolute left-3.5 top-2.5 size-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search live projects, applications, academic grants..."
                className="w-full rounded-full bg-slate-100 border border-slate-200 pl-10 pr-4 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100 transition"
              />
            </div>
          </div>

          {/* Right: Role Switcher, Notifications & Profile */}
          <div className="flex items-center gap-3">
            {/* Quick Switcher between authorized roles */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setRoleSwitcherOpen((v) => !v)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-xs font-semibold text-slate-700 transition cursor-pointer"
              >
                <CurrentIcon className="size-3.5 text-blue-600" />
                <span className="hidden sm:inline">{config.shortLabel} View</span>
                <ChevronDown className={`size-3 text-slate-500 transition ${roleSwitcherOpen ? "rotate-180" : ""}`} />
              </button>

              {roleSwitcherOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-xl border border-slate-200 bg-white p-2 shadow-xl z-50">
                  <p className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Switch Role Dashboard
                  </p>
                  {(Object.keys(ROLE_CONFIGS) as Role[]).map((rKey) => {
                    const rCfg = ROLE_CONFIGS[rKey];
                    const RIcon = ROLE_ICONS[rKey];
                    const isSelected = rKey === role;
                    return (
                      <Link
                        key={rKey}
                        href={rCfg.dashboardPath}
                        onClick={() => setRoleSwitcherOpen(false)}
                        className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition ${
                          isSelected
                            ? "bg-blue-600 text-white font-bold"
                            : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                        }`}
                      >
                        <RIcon className="size-4 shrink-0" />
                        <div className="min-w-0">
                          <p className="truncate">{rCfg.label}</p>
                          <p className={`text-[10px] truncate ${isSelected ? "text-blue-100" : "text-slate-500"}`}>
                            {rCfg.badge}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Notification Bell */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setNotificationsOpen((v) => !v)}
                className="relative p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition cursor-pointer"
                aria-label="Notifications"
              >
                <Bell className="size-4" />
                <span className="absolute top-1.5 right-1.5 size-2 rounded-full bg-emerald-500 ring-2 ring-white" />
              </button>

              {notificationsOpen && (
                <div className="absolute right-0 mt-2 w-80 rounded-xl border border-slate-200 bg-white p-3 shadow-xl z-50">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <span className="text-xs font-bold text-slate-900">Notifications</span>
                    <span className="text-[10px] text-blue-600 cursor-pointer hover:underline font-semibold">
                      Mark all read
                    </span>
                  </div>
                  <div className="space-y-2 mt-2">
                    <div className="p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-xs transition cursor-pointer border border-slate-100">
                      <p className="font-semibold text-slate-900">New Project Milestone Available</p>
                      <p className="text-[11px] text-slate-600 mt-0.5">
                        Cybersecurity Hub posted an enterprise challenge open to your role.
                      </p>
                      <span className="text-[10px] text-slate-400 mt-1 block">10m ago</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-xs transition cursor-pointer border border-slate-100">
                      <p className="font-semibold text-slate-900">ITBC Accreditation Confirmed</p>
                      <p className="text-[11px] text-slate-600 mt-0.5">
                        Your credentials have been successfully accredited on the national gateway.
                      </p>
                      <span className="text-[10px] text-slate-400 mt-1 block">2h ago</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* User Profile & Sign Out */}
            <div className="flex items-center gap-3 pl-3 border-l border-slate-200">
              <div className="size-9 rounded-full bg-blue-700 text-white font-bold grid place-items-center text-xs shadow-sm">
                {currentUserName.charAt(0)}
              </div>
              <div className="hidden lg:block text-left text-xs leading-tight">
                <p className="font-bold text-slate-900 truncate max-w-[140px]">{currentUserName}</p>
                <p className="text-[10px] text-blue-700 font-semibold truncate max-w-[140px]">{currentUserId}</p>
              </div>
              <button
                type="button"
                onClick={handleLogout}
                title="Sign Out of Dashboard"
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-slate-600 hover:text-rose-700 hover:bg-rose-50 text-xs font-semibold transition cursor-pointer"
              >
                <LogOut className="size-4" />
                <span className="hidden sm:inline">Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Layout Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar (Desktop - Light Slate/White Theme) */}
        <aside className="hidden lg:flex w-64 flex-col justify-between border-r border-slate-200 bg-white p-4 shrink-0 shadow-xs">
          <div className="space-y-6">
            {/* User Badge Card (Clean Light Styling) */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-3 mb-2">
                <div className="size-10 rounded-lg bg-blue-100 border border-blue-200 text-blue-700 grid place-items-center">
                  <CurrentIcon className="size-5" />
                </div>
                <div className="min-w-0">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800 border border-blue-200">
                    <ShieldCheck className="size-3 text-emerald-600" />
                    Verified Member
                  </span>
                  <p className="text-xs font-bold text-slate-900 truncate mt-1">{currentUserName}</p>
                </div>
              </div>
              <p className="text-[11px] text-slate-600 truncate">{currentUserOrg}</p>
              <div className="mt-2.5 pt-2 border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-500">
                <span>ID: <strong className="text-slate-700">{currentUserId}</strong></span>
                <span className="text-emerald-700 font-bold">● Active Session</span>
              </div>
            </div>

            {/* Navigation Menu */}
            <div>
              <p className="px-3 mb-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Workspace Menu
              </p>
              <nav className="space-y-1">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition cursor-pointer ${
                        isActive
                          ? "bg-blue-600 text-white shadow-sm font-bold"
                          : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className={`size-4 ${isActive ? "text-white" : "text-slate-500"}`} />
                        <span>{item.label}</span>
                      </div>
                      {item.badge && (
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            isActive
                              ? "bg-white/20 text-white"
                              : "bg-blue-100 text-blue-800 border border-blue-200"
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Bottom Help / Main Site Link */}
          <div className="pt-4 border-t border-slate-200">
            <Link
              href="/"
              className="flex items-center justify-between text-xs text-slate-600 hover:text-blue-700 py-1 font-medium transition"
            >
              <span>Back to Public Website</span>
              <ExternalLink className="size-3.5" />
            </Link>
            <p className="text-[10px] text-slate-400 mt-2">
              ITBC National Gateway • Support: info@itbc.world
            </p>
          </div>
        </aside>

        {/* Mobile Sidebar Drawer */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden flex">
            <div
              className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs"
              onClick={() => setMobileMenuOpen(false)}
            />
            <div className="relative w-72 max-w-full bg-white border-r border-slate-200 p-5 flex flex-col justify-between z-10 shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <CurrentIcon className="size-5 text-blue-600" />
                    <span className="font-bold text-sm text-slate-900">{config.label}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900"
                  >
                    <X className="size-5" />
                  </button>
                </div>

                <nav className="space-y-1">
                  {menuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => {
                          setActiveTab(item.id);
                          setMobileMenuOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition ${
                          isActive
                            ? "bg-blue-600 text-white font-bold"
                            : "text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className="size-4" />
                          <span>{item.label}</span>
                        </div>
                        {item.badge && (
                          <span className="px-1.5 py-0.5 rounded text-[10px] bg-blue-100 text-blue-800">
                            {item.badge}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </nav>
              </div>

              <div className="pt-4 border-t border-slate-200 space-y-2">
                <button
                  type="button"
                  onClick={handleLogout}
                  className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-bold text-rose-700 hover:bg-rose-50 transition"
                >
                  <LogOut className="size-4" />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Content Area (Clean White / Soft Slate Background) */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto space-y-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
